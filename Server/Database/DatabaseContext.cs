using Microsoft.EntityFrameworkCore;
using Server.Database.Configurations;
using Server.Database.Entites;

namespace Server.Database;

public class DatabaseContext : DbContext
{
    public DbSet<UserEntity> Users { get; set; }
    public DbSet<AppEntity> Apps { get; set; }
    public DbSet<SiteEntity> Sites { get; set; }

    public DatabaseContext(DbContextOptions options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(UserEntityTypeConfiguration).Assembly);
    }
}