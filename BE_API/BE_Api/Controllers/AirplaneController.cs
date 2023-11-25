using BE_Api.Interface.AirPlane;
using BE_Api.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace BE_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AirplaneController : ControllerBase, IAirPlaneServices
    {
        private readonly Facade _airplane;

        public AirplaneController()
        {
            _airplane = new Facade();
        }


        [HttpGet]
        [Route("GetList")]
        public async Task<string> Get()
        {
            if (System.IO.File.Exists("air.json"))
            {
                return await System.IO.File.ReadAllTextAsync("air.json");
            }
            else
            {
                return "No hay info";
            }
        }

        [HttpGet]
        [Route("GetById/{Id:int}")]
        public async Task<Airplane> GetById(int Id)
        {
            List<Airplane>? fly = new List<Airplane>();
            var json = await System.IO.File.ReadAllTextAsync("air.json");

            fly = Newtonsoft.Json.JsonConvert.DeserializeObject<List<Airplane>>(json);

            return fly.Find(id => id.Id == Id);
        }

        [HttpPost]
        [Route("Create")]
        public async Task<string> create(Airplane airplane)
        {
            List<Airplane> entity = new List<Airplane>();
            if (System.IO.File.Exists("air.json"))
            {

                try
                {
                    var json = await System.IO.File.ReadAllTextAsync("air.json");

                    entity = Newtonsoft.Json.JsonConvert.DeserializeObject<List<Airplane>>(json);

                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            Airplane air = new Airplane()
            {
                Id = entity.OrderBy(e => e.Id).Last().Id + 1,
                Airline = airplane.Airline,
                Destination = airplane.Destination,
                Horadellegada = airplane.Horadellegada,
                Horadesalida = airplane.Horadesalida,
                Precio = airplane.Precio,
                Img = airplane.Img
            };

            entity.Add(air);
            var fly = JsonConvert.SerializeObject(entity);
            await System.IO.File.WriteAllTextAsync("air.json", fly);


            return fly;
        }

        [HttpPut]
        [Route("Update/{Id:int}")]
        public async Task<string> Update(Airplane airplane, int Id)
        {
            List<Airplane>? fly = new List<Airplane>();
            var json = await System.IO.File.ReadAllTextAsync("air.json");

            fly = Newtonsoft.Json.JsonConvert.DeserializeObject<List<Airplane>>(json);

            Airplane? air = fly.Find(id => id.Id == Id);
            //return fly.Find(id => id.Id == Id);
            if (air == null)
               return "No hay Airplane";

            air.Airline = airplane.Airline;
            air.Destination = airplane.Destination;
            air.Horadesalida = airplane.Horadesalida;
            air.Horadellegada = airplane.Horadellegada;
            air.Precio = airplane.Precio;
            air.Img = airplane.Img;

            var avion = JsonConvert.SerializeObject(fly);
            await System.IO.File.WriteAllTextAsync("air.json", avion);

            return "Airplane " + air.Airline + "Actualizada";
        }



        [HttpDelete]
        [Route("Delete/{Id:int}")]

        public async Task<string> Delete(int Id)
        {
            List<Airplane>? nube = new List<Airplane>();
            var json = await System.IO.File.ReadAllTextAsync("air.json");

            nube = Newtonsoft.Json.JsonConvert.DeserializeObject<List<Airplane>>(json);

            Airplane? air = nube.Find(id => id.Id == Id);

            if(air == null)
                return "Juan Rosario Mi Papa, Pero no hay nadaaaa"; 
            

            nube.Remove(air);

            var avion = JsonConvert.SerializeObject(nube);
            await System.IO.File.WriteAllTextAsync("air.json", avion);

            return "Airplane " + air.Airline + " Es Eliminado ";
        }
    }
}
