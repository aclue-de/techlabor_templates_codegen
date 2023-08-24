using Lombok.NET;
using System.ComponentModel.DataAnnotations;

namespace hopStore.Model.User.Order
{
    [AllArgsConstructor(MemberType = MemberType.Property, AccessTypes = AccessTypes.Public)]
    public record Order
    {
        [Required] public int Id { get; set; }
        [Required] public int Quantity { get; set; }
        [Required] public DateOnly ShipDate { get; set; }
        [Required] public OrderStatus OrderStatus { get; set; }
    }
}