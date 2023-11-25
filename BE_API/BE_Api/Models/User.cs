using Microsoft.AspNetCore.OpenApi;
using Microsoft.AspNetCore.Http.HttpResults;
namespace BE_Api.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string? Hotel { get; set; } = null;
        public string? Auto { get; set; } = null;
        public string? Vuelo { get; set; } = null;
    }
}
