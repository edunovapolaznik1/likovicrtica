namespace API.DTOs
{
    public class LikCrticaDto
    {
        public int Id { get; set; }
        public required string Ime { get; set; }
        public required string NazivCrtica { get; set; }
        public required string Opis { get; set; }
    }
}
