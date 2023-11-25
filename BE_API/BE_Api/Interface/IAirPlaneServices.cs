using BE_Api.Models;

namespace BE_Api.Interface.AirPlane
{
    public interface IAirPlaneServices
    {
        Task<string> Get();
        Task<Airplane> GetById(int Id);
        Task<string> create(Airplane airplane);
        Task<string> Update(Airplane airplane, int Id);
        Task<string> Delete(int Id);
    }
}
