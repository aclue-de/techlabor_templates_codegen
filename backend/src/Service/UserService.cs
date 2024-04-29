using API.Entity.address;
using API.Entity.user;
using API.Exceptions;

namespace API.Service;

public class UserService
{
    private List<UserResponseDto> Users { get; } = new();

    // todo should throw error on not found
    public UserResponseDto GetById(Guid userId)
    {
        var userResponseDto = Users.Find(user => user.Id == userId);
        if (userResponseDto == null)
        {
            throw new UserNotFoundException($"User with ID {userId} not found");
        }
        
        return userResponseDto;
    }

    public IEnumerable<UserResponseDto> GetAll()
    {
        return Users;
    }

    public UserResponseDto Create(UserRequestDto userRequestDto)
    {
        UserResponseDto userResponseDto = new UserResponseDto
        {
            Id = Guid.NewGuid(),
            Name = userRequestDto.Name,
            Birthday = userRequestDto.Birthday,
            Addresses = userRequestDto.Addresses.Select(address => new AddressResponseDto
            {
                Id = Guid.NewGuid(),
                FullAddress = address.FullAddress,
            }).ToList()
        };
        Users.Add(userResponseDto);

        return userResponseDto;
    }
    
    public void DeleteAll()
    {
        Users.Clear();
    }
}