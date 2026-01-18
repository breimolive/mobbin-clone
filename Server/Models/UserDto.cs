namespace Server.Models;

public class UserDto
{
    public required Guid Id { get; set; }
    public required string Name { get; set; }
    public required string Email { get; set; }
    public string Hash { get; set;  }
    public string Salt { get; set;  }
}