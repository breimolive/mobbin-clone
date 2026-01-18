using Server.Models;

namespace Server.Database.Entites;

public class AppEntity
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public Platform Platform { get; set; }
    public double Rating { get; set; }
    public Category[] Categories { get; set; }
    public byte[] Icon { get; set; }
}