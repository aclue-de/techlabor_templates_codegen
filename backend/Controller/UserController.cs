using hopStore.Model.User;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;
using System.Net;

namespace hopStore.Controllers
{
    /// <summary>
    ///  "Manages Users"
    /// </summary>
    [ApiController]
    [Route("[controller]")]
    [SwaggerResponse(StatusCodes.Status200OK)]
    [SwaggerResponse(StatusCodes.Status500InternalServerError)]
    public class UserController : ControllerBase
    {

        /// <summary>
        ///  "Returns User By Id",
        /// </summary>
        [HttpGet("{id}")]
        [SwaggerResponse(StatusCodes.Status400BadRequest)]
        public User GetUser(int id)
        {
            return null;
        }

        /// <summary>
        ///  "Returns all Users",
        /// </summary>
        [HttpGet]
        public List<User> GetUsers()
        {
            return new List<User>();
        }

        /// <summary>
        ///  "Creates User",
        /// </summary>
        [HttpPost]
        [SwaggerResponse(StatusCodes.Status400BadRequest)]
        [SwaggerResponse(StatusCodes.Status409Conflict)]
        public HttpStatusCode CreateUser(User User)
        {
            return HttpStatusCode.OK;
        }

        /// <summary>
        ///  "Deletes User"
        /// </summary>
        [HttpDelete("{id}")]
        [SwaggerResponse(StatusCodes.Status400BadRequest)]
        [SwaggerResponse(StatusCodes.Status409Conflict)]
        public HttpStatusCode DeleteUser(int id)
        {
            return HttpStatusCode.OK;
        }
    }
}