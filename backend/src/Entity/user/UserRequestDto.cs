using System.ComponentModel.DataAnnotations;
using API.Entity.address;

namespace API.Entity.user;

public class UserRequestDto
{
    [Required] public required string Name { get; set; }
    [Required] public required DateTime Birthday { get; set; }
    [Required] public required IEnumerable<AddressRequestDto> Addresses { get; set; }
}