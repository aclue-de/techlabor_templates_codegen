using Lombok.NET;
using System.ComponentModel.DataAnnotations;

namespace hopStore.Model.User
{
    [AllArgsConstructor(MemberType = MemberType.Property, AccessTypes = AccessTypes.Public)]
    public record User
    {
        [Required] public int Id { get; set; }
        [Required] public string UserName { get; set; }
        [Required] public string FirstName { get; set; }
        [Required] public string LastName { get; set; }
        [Required] public string Email { get; set; }
        [Required] public string Password { get; set; }
        [Required] public string Phone { get; set; }
    }
}