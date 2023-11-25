namespace BE_Api.Models
{
    public class Airplane
    {
        public int Id { get; set; }
        public string Airline { get; set; }
        public string Destination { get; set; }
        public string Horadesalida { get; set; }
        public string Horadellegada { get; set; }
        public string Precio { get; set; }
        public string? Img { get; set; }

        internal List<Airplane> SearchFlights(int id, string airLine, string destination, string horadesalida, string horadellegada)
        {
            throw new NotImplementedException();
        }
    }
}
