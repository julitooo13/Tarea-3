namespace BE_Api.Models
{
    public class Hotel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Stars { get; set; }
        public string Price { get; set; }
        public string Address { get; set; }
        public string? Img { get; set; }

        internal List<Hotel> SearchHotel(int id, string name, string stars, string price, string address)
        {
            throw new NotImplementedException();
        }
    }
}
