using System.ComponentModel.DataAnnotations;

namespace API.Entity.address;

public class AddressResponseDto
{
    [Required] public required Guid Id { get; set; }
    [Required] public required string FullAddress { get; set; }
}