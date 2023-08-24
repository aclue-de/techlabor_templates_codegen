using System.Reflection;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
// openapi.json now reads orders/{id} instead of Orders/{id}
builder.Services.AddRouting(options => options.LowercaseUrls = true);

// Generates openapi.json 
// Strings be moved into global config
string hotStoreApiVersion = "v1";
string hotStoreApiName = "HopStoreApi";
string hotStoreApiDescription = "This is a sample Hop Store Server based on the OpenAPI 3.0 specification";
string hotStoreApiContactEmail = "support@hopstore.com";
builder.Services.AddSwaggerGen(c =>
{
    // Controller Annotations like "summary" are desired in openapi.json but have to be made available this way
    var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
    var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
    c.IncludeXmlComments(xmlPath);

    // Boilerplate
    c.SwaggerDoc(hotStoreApiVersion,
        new()
        {
            Title = hotStoreApiName,
            Description = hotStoreApiDescription,
            Version = hotStoreApiVersion,
            Contact = new () {
                Email = hotStoreApiContactEmail,
            }
        });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    // Provides SwaggerUI & openapi.json via url endpoint
    app.UseSwagger();
    app.UseSwaggerUI(c => c.SwaggerEndpoint(
        $"../swagger/{hotStoreApiVersion}/swagger.json",
        hotStoreApiVersion
        ));
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
