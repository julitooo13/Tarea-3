using BE_Api.Interface.AirPlane;

namespace BE_Api.Models
{
    public class Facade
    {
        private readonly Airplane _airplane;
        private readonly Cars _cars;
        private readonly Hotel _hotel;
        private readonly User _user;


        public Facade()
        {
            _airplane = new Airplane();
            _cars = new Cars();
            _hotel = new Hotel();
            _user = new User();
        }

        public List<Airplane> SearchFlights(int Id, string AirLine, string Destination, string Horadesalida, string Horadellegada)
        {
            return _airplane.SearchFlights(Id, AirLine, Destination, Horadesalida, Horadellegada);
        }

        public bool BookFlights(Airplane airplane)
        {
            return true;
        }

        public bool RentCar(Cars cars, int Id, string Brand, string Color, string Price) 
        {
            return true;        
        }

        public List<Hotel> SearchHotel(int Id, string Name, string Stars, string Price, string Address)
        {
            return _hotel.SearchHotel(Id, Name, Stars, Price, Address);
        }

        public bool BookHotel(Hotel hotel)
        {
            return true;
        }
    }

}
