using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Server.Database.Entites;

namespace Server.Database.Configurations;

public class AppEntityTypeConfiguration: IEntityTypeConfiguration<AppEntity>
{
    public void Configure(EntityTypeBuilder<AppEntity> builder)
    {
        builder
            .HasKey(e => e.Id);

        builder
            .Property(e => e.Id)
            .ValueGeneratedNever();

        builder
            .Property(x => x.Name)
            .IsRequired();

        builder
            .Property(x => x.Platform)
            .IsRequired();
        
        builder
            .Property(x => x.Rating);
        
        builder
            .Property(x => x.Icon);

        builder
            .Property(x => x.Categories);
    }
}