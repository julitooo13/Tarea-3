using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BE_Api.Models;
using Newtonsoft.Json;

namespace BE_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HotelController : ControllerBase
    {
        private readonly Facade _cars;

        public HotelController()
        {
            _cars = new Facade();
        }

        [HttpPost]
        [Route("Create")]

        public async Task<string> create(Hotel hotel)
        {
            List<Hotel> entity = new List<Hotel>();
            if (System.IO.File.Exists("hotel.json"))
            {

                try
                {
                    var json = await System.IO.File.ReadAllTextAsync("hotel.json");

                    entity = Newtonsoft.Json.JsonConvert.DeserializeObject<List<Hotel>>(json);

                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            Hotel room = new Hotel()
            {
                Id = entity.OrderBy(e => e.Id).Last().Id + 1,
                Name = hotel.Name,
                Stars = hotel.Stars,
                Price = hotel.Price,
                Address = hotel.Address,
                Img = hotel.Img
            };

            entity.Add(room);
            var bed = JsonConvert.SerializeObject(entity);
            await System.IO.File.WriteAllTextAsync("hotel.json", bed);


            return bed;
        }


        [HttpGet]
        [Route("GetList")]
        public async Task<string> Get()
        {
            if (System.IO.File.Exists("hotel.json"))
            {
                return await System.IO.File.ReadAllTextAsync("hotel.json");
            }
            else
            {
                return "No hay info";
            }
        }
        [HttpPut]
        [Route("Update/{Id:int}")]
        public async Task<string> Update(Hotel hotel, int Id)
        {
            List<Hotel>? cabaña = new List<Hotel>();
            var json = await System.IO.File.ReadAllTextAsync("hotel.json");

            cabaña = Newtonsoft.Json.JsonConvert.DeserializeObject<List<Hotel>>(json);

            Hotel? risort = cabaña.Find(id => id.Id == Id);
            if (risort == null)
                return "No Tenemos Hoteles Disponibles En Este Momento!";


            risort.Name = hotel.Name;  
            risort.Address = hotel.Address;
            risort.Price = hotel.Price;
            risort.Stars = hotel.Stars;
            risort.Img = hotel.Img;

            var trivago = JsonConvert.SerializeObject(cabaña);
            await System.IO.File.WriteAllTextAsync("hotel.json", trivago);

            return "Se Actualizo Correctamente";
        }

        [HttpDelete]
        [Route("Delete/{Id:int}")]

        public async Task<string> Delete(int Id)
        {
            List<Hotel>? casa = new List<Hotel>();
            var json = await System.IO.File.ReadAllTextAsync("hotel.json");

            casa = Newtonsoft.Json.JsonConvert.DeserializeObject<List<Hotel>>(json);

            Hotel? mansion = casa.Find(id => id.Id == Id);

            if (mansion == null)
                return "No hay nadie";


            casa.Remove(mansion);

            var apart = JsonConvert.SerializeObject(casa);
            await System.IO.File.WriteAllTextAsync("hotel.json", apart);

            return "Hotel" + mansion.Name + " Es Eliminado ";
        }
    }
}
