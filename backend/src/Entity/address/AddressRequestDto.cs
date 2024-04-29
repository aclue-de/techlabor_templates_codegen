using System.ComponentModel.DataAnnotations;

namespace API.Entity.address;

public class AddressRequestDto
{
    [Required] public required string FullAddress { get; set; }
}