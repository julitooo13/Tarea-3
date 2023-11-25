using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BE_Api.Models;
using Newtonsoft.Json;

namespace BE_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarsController : ControllerBase
    {
        private readonly Facade _cars;

        public CarsController()
        {
            _cars = new Facade();
        }

        [HttpPost]
        [Route("Create")]

        public async Task<string> create(Cars cars)
        {
            List<Cars> entity = new List<Cars>();
            if (System.IO.File.Exists("cars.json"))
            {

                try
                {
                    var json = await System.IO.File.ReadAllTextAsync("cars.json");

                    entity = Newtonsoft.Json.JsonConvert.DeserializeObject<List<Cars>>(json);

                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            Cars carro = new Cars()
            {
                Id = entity.OrderBy(e => e.Id).Last().Id + 1,
                Brand = cars.Brand,
                Color = cars.Color,
                Price = cars.Price,
                Img = cars.Img
            };

            entity.Add(carro);
            var motor = JsonConvert.SerializeObject(entity);
            await System.IO.File.WriteAllTextAsync("cars.json", motor);


            return motor;
        }


        [HttpGet]
        [Route("GetList")]
        public async Task<string> Get()
        {
            if (System.IO.File.Exists("cars.json"))
            {
                return await System.IO.File.ReadAllTextAsync("cars.json");
            }
            else
            {
                return "No hay info";
            }
        }
        [HttpPut]
        [Route("Update/{Id:int}")]
        public async Task<string> Update(Cars cars, int Id)
        {
            List<Cars>? nitro = new List<Cars>();
            var json = await System.IO.File.ReadAllTextAsync("cars.json");

            nitro = Newtonsoft.Json.JsonConvert.DeserializeObject<List<Cars>>(json);

            Cars? aleron = nitro.Find(id => id.Id == Id);
            if (aleron == null)
                return "No Tenemos Vehiculos Disponibles";


            aleron.Brand = cars.Brand;
            aleron.Color = cars.Color;
            aleron.Price = cars.Price;
            aleron.Img = cars.Img;

            var flaly = JsonConvert.SerializeObject(nitro);
            await System.IO.File.WriteAllTextAsync("cars.json", flaly);

            return "Se Actualizo Correctamente";
        }

        [HttpDelete]
        [Route("Delete/{Id:int}")]

        public async Task<string> Delete(int Id)
        {
            List<Cars>? turbo = new List<Cars>();
            var json = await System.IO.File.ReadAllTextAsync("cars.json");

            turbo = Newtonsoft.Json.JsonConvert.DeserializeObject<List<Cars>>(json);

            Cars? goma = turbo.Find(id => id.Id == Id);

            if (goma == null)
                return "No hay nadie";


            turbo.Remove(goma);

            var bujia = JsonConvert.SerializeObject(turbo);
            await System.IO.File.WriteAllTextAsync("cars.json", bujia);

            return "Cars" + goma.Brand + " Es Eliminado ";
        }
    }
}
