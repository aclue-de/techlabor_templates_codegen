using System.ComponentModel.DataAnnotations;
using API.Entity.address;

namespace API.Entity.user;

public class UserResponseDto
{
    [Required] public required Guid Id { get; set; }
    [Required] public required string Name { get; set; }
    [Required] public required DateTime Birthday { get; set; }
    [Required] public required IEnumerable<AddressResponseDto> Addresses { get; set; }
}