using System.Net.Mime;
using API.Entity.user;
using API.Exceptions;
using API.Service;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

namespace API.Controller;

[ApiController]
[Produces(MediaTypeNames.Application.Json)]
[Consumes(MediaTypeNames.Application.Json)]
[SwaggerResponse(StatusCodes.Status200OK)]
[SwaggerResponse(StatusCodes.Status400BadRequest)]
[SwaggerResponse(StatusCodes.Status500InternalServerError)]
public class UserController : ControllerBase
{

    private readonly UserService service;
    public UserController(UserService userService)
    {
        service = userService;
    }
        
    private const string BASE_PATH = "api";
    private const string USER_PATH = BASE_PATH + "/user";
        
    [Route(USER_PATH)]
    [HttpGet]
    [ProducesResponseType(typeof(IEnumerable<UserResponseDto>), StatusCodes.Status200OK)]
    public ActionResult<IEnumerable<UserResponseDto>> GetAll()
    {
        var userResponseDtos = service.GetAll();
        return Ok(userResponseDtos);
    }
        
    [Route(USER_PATH + "/{userId:Guid}")]
    [HttpGet]
    [SwaggerResponse(StatusCodes.Status404NotFound)]
    [ProducesResponseType(typeof(UserResponseDto), StatusCodes.Status200OK)]
    public ActionResult<UserResponseDto> GetById([FromRoute] Guid userId)
    {
        try
        {
            var userResponseDto = service.GetById(userId);
            return Ok(userResponseDto);
        }
        catch (UserNotFoundException ex)
        {
            return NotFound(ex.Message);
        }
    }

    [Route(USER_PATH)]
    [HttpPost]
    [ProducesResponseType(typeof(UserRequestDto), StatusCodes.Status201Created)]
    public ActionResult<UserRequestDto> Create(UserRequestDto userRequestDto)
    {
        var userResponseDto = service.Create(userRequestDto);
        return Created(USER_PATH + "/" + userResponseDto.Id, userResponseDto);
    }
    
    [Route(USER_PATH)]
    [HttpDelete]
    [ProducesResponseType(typeof(void), StatusCodes.Status200OK)]
    public ActionResult<UserRequestDto> DeleteAll()
    {
        service.DeleteAll();
        return Ok();
    }
}