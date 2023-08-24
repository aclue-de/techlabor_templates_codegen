using hopStore.Model.User.Order;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;
using System.Net;

namespace hopStore.Controllers
{
    /// <summary>
    ///  "Manages Orders"
    /// </summary>
    [ApiController]
    [Route("[controller]")]
    [SwaggerResponse(StatusCodes.Status200OK)]
    [SwaggerResponse(StatusCodes.Status500InternalServerError)]
    public class OrderController : ControllerBase
    {

        /// <summary>
        ///  "Returns Order By Id",
        /// </summary>
        [HttpGet("{id}")]
        [SwaggerResponse(StatusCodes.Status400BadRequest)]
        public Order GetOrder(int id)
        {
            return null;
        }

        /// <summary>
        ///  "Returns all Orders",
        /// </summary>
        [HttpGet]
        public List<Order> GetOrders()
        {
            return new List<Order>();
        }

        /// <summary>
        ///  "Creates Order",
        /// </summary>
        [HttpPost]
        [SwaggerResponse(StatusCodes.Status400BadRequest)]
        [SwaggerResponse(StatusCodes.Status409Conflict)]
        public HttpStatusCode CreateOrder(Order order)
        {
            return HttpStatusCode.OK;
        }

        /// <summary>
        ///  "Deletes Order"
        /// </summary>
        [HttpDelete("{id}")]
        [SwaggerResponse(StatusCodes.Status400BadRequest)]
        [SwaggerResponse(StatusCodes.Status409Conflict)]
        public HttpStatusCode DeleteOrder(int id)
        {
            return HttpStatusCode.OK;
        }
    }
}