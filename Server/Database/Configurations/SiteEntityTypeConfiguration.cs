using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Server.Database.Entites;

namespace Server.Database.Configurations;

public class SiteEntityTypeConfiguration: IEntityTypeConfiguration<SiteEntity>
{
    public void Configure(EntityTypeBuilder<SiteEntity> builder)
    {
        builder
            .HasKey(e => e.Id);

        builder
            .Property(e => e.Id)
            .ValueGeneratedNever();

        builder
            .Property(x => x.Name)
            .IsRequired();

        builder.Property(x => x.Styles);

        builder.Property(x => x.Url);
        
        builder.Property(x => x.Categories);
    }
}