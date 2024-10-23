using API.DTOs;
using API.Entities;
using AutoMapper;

namespace API.Helpers
{
    public class AutoMapperProfiles: Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<LikCrtica, LikCrticaDto>();
            CreateMap<LikCrticaDto, LikCrtica>();
            CreateMap<LikCrticaInsertDto, LikCrtica>();
            CreateMap<LikCrticaUpdateDto, LikCrtica>();
        }
    }
}
