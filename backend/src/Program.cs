using System.Reflection;
using API.Service;

var configurationValues = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build();
var apiVersion = configurationValues.GetValue<string>("OpenApi:ApiVersion");
var apiName = configurationValues.GetValue<string>("OpenApi:ApiName");
var apiDescription = configurationValues.GetValue<string>("OpenApi:ApiDescription");

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddSingleton<UserService>();

// Swagger
builder.Services.AddSwaggerGen(c =>
{
    // Controller Annotations like "summary" are desired in openapi.json but have to be made available this way
    var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
    var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
    c.IncludeXmlComments(xmlPath);
    c.SwaggerDoc(apiVersion,
        new()
        {
            Title = apiName,
            Description = apiDescription,
            Version = apiVersion,
        });
});
builder.Services.AddSwaggerGenNewtonsoftSupport();


var app = builder.Build();

app.UseCors(builder => 
    builder.AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader()
);

app.UseSwagger();
app.UseSwaggerUI(c => c.SwaggerEndpoint(
    $"../swagger/{apiVersion}/swagger.json",
    apiVersion
));

app.UseRouting();
app.MapControllers();
app.Run();