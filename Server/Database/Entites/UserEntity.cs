using System.Security.Cryptography;
using System.Text;

namespace Server.Database.Entites;

public class UserEntity
{
    public const int MinFullNameLength = 1;
    public const int MaxFullNameLength = 60;

    public const int MaxEmailLength = 100;

    public const int MinPasswordLength = 8;
    public const int MaxPasswordLength = 200;

    public Guid Id { get; protected set; }
    public string Email { get; protected set; }
    public string FullName { get; protected set; }
    public string Hash { get; protected set; }
    public string Salt { get; protected set; }

#pragma warning disable CS8618
    protected UserEntity()
    {
    }
#pragma warning restore CS8618

    public UserEntity(string email, string password, string pepper)
    {
        Id = Guid.NewGuid();
        Email = email;
        FullName = email.Contains('@') ? email.Split('@')[0] : email;
        Salt = GenerateSalt();
        Hash = Convert.ToBase64String(HashPassword(password, Salt, pepper));
    }

    public bool ComparePassword(string password, string pepper)
    {
        var hashBytes = Convert.FromBase64String(Hash);
        var tempHash = HashPassword(password, Salt, pepper);
        return CryptographicOperations.FixedTimeEquals(hashBytes.AsSpan(), tempHash.AsSpan());
    }

    private static string GenerateSalt()
    { 
        const int byteSize = 16;
        
        var bytes = new byte[byteSize];
        RandomNumberGenerator.Fill(bytes.AsSpan());
        return Convert.ToBase64String(bytes);
    }

    private static byte[] HashPassword(string password, string salt, string pepper)
    {
        using var digest = SHA256.Create();

        var pepperBytes = Encoding.UTF8.GetBytes(pepper);
        digest.TransformBlock(pepperBytes, 0, pepperBytes.Length, null, 0);

        var saltBytes = Encoding.UTF8.GetBytes(salt);
        digest.TransformBlock(saltBytes, 0, saltBytes.Length, null, 0);

        var passwordBytes = Encoding.UTF8.GetBytes(password);
        digest.TransformFinalBlock(passwordBytes, 0, passwordBytes.Length);

        return digest.Hash!;
    }
}