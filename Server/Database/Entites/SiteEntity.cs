using Server.Models;

namespace Server.Database.Entites;

public class SiteEntity
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public Category[] Categories { get; set; }
    public Styles[] Styles { get; set; }
    public string Url { get; set; }
}