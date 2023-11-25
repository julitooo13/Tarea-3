using BE_Api.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Xml.Linq;

namespace BE_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly Facade _cars;

        public UserController()
        {
            _cars = new Facade();
        }

        [HttpPost]
        [Route("Create")]

        public async Task<string> create(User user)
        {
            List<User> entity = new List<User>();
            if (System.IO.File.Exists("User.json"))
            {

                try
                {
                    var json = await System.IO.File.ReadAllTextAsync("User.json");

                    entity = Newtonsoft.Json.JsonConvert.DeserializeObject<List<User>>(json);

                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            User user1 = new User()
            {
                Id = entity.OrderBy(e => e.Id).Last().Id + 1,
                Name = user.Name,
                Email = user.Email,
                Hotel = user.Hotel,
                Auto = user.Auto,
                Vuelo = user.Vuelo
            };

            entity.Add(user1);
            var usuario = JsonConvert.SerializeObject(entity);
            await System.IO.File.WriteAllTextAsync("User.json", usuario);


            return usuario;
        }


        [HttpGet]
        [Route("GetList")]
        public async Task<string> Get()
        {
            if (System.IO.File.Exists("User.json"))
            {
                return await System.IO.File.ReadAllTextAsync("User.json");
            }
            else
            {
                return "No hay info";
            }
        }
        [HttpPut]
        [Route("Update/{Id:int}")]
        public async Task<string> Update(User user, int Id)
        {
            List<User>? UserList = new List<User>();
            var json = await System.IO.File.ReadAllTextAsync("User.json");

            UserList = Newtonsoft.Json.JsonConvert.DeserializeObject<List<User>>(json);

            User? User = UserList.Find(id => id.Id == Id);
            if (User == null)
                return "No Tenemos Hoteles Disponibles En Este Momento!";


            User.Name = user.Name;
            User.Email= user.Email;
            User.Hotel = user.Hotel;
            User.Auto = user.Auto;
            User.Vuelo = user.Vuelo;

            var ObjetJson = JsonConvert.SerializeObject(UserList);
            await System.IO.File.WriteAllTextAsync("User.json", ObjetJson);

            return "Se Actualizo Correctamente";
        }

        [HttpDelete]
        [Route("Delete/{Id:int}")]

        public async Task<string> Delete(int Id)
        {
            List<User>? UserList = new List<User>();
            var json = await System.IO.File.ReadAllTextAsync("User.json");

            UserList = Newtonsoft.Json.JsonConvert.DeserializeObject<List<User>>(json);

            User? User = UserList.Find(id => id.Id == Id);

            if (User == null)
                return "No hay nadie";


            UserList.Remove(User);

            var ObjectJson = JsonConvert.SerializeObject(UserList);
            await System.IO.File.WriteAllTextAsync("User.json", ObjectJson);

            return "Usuario" + User.Name + " Es Eliminado ";
        }
    }
}
