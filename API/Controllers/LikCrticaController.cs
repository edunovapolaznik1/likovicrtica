using API.Data;
using API.DTOs;
using API.Entities;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LikCrticaController(DataContext context, IMapper mapper) : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<IEnumerable<LikCrticaDto>>> GetLikoveCrtica()
        {
            try
            {
                var likovi = await context.LikoviCrtica.ToListAsync();
                if (likovi == null) return NotFound();

                var likoviToReturn = mapper.Map<IEnumerable<LikCrticaDto>>(likovi);

                return Ok(likoviToReturn);
            }catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable,
                             ex.Message);
            }
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<LikCrticaDto>> GetLikCrtica(int id)
        {
            try
            {
                var lik = await context.LikoviCrtica.FindAsync(id);
                if(lik == null) return NotFound();

                return mapper.Map<LikCrticaDto>(lik);
            }catch (Exception ex)
            {

                return StatusCode(StatusCodes.Status503ServiceUnavailable,
                               ex.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult<LikCrtica>> Insert(LikCrticaInsertDto likCrticaInsertDto)
        {
            try
            {
                var lik = mapper.Map<LikCrtica>(likCrticaInsertDto);
                context.LikoviCrtica.Add(lik);
                await context.SaveChangesAsync();

                return Ok(lik);

            }catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable,
                  ex.Message);
            }
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> DeleteLik(int id)
        {
            try
            {
                var lik = await context.LikoviCrtica.FindAsync(id);
                if(lik == null) return NotFound();

                context.LikoviCrtica.Remove(lik);
                context.SaveChanges();

                return Ok();
            }catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable, ex.Message);
            }
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> UpdateLikCrtica(int id, LikCrticaUpdateDto likCrticaUpdateDto)
        {
            try
            {
                var lik = await context.LikoviCrtica.FirstOrDefaultAsync(l => l.Id == id);
                if (lik == null) return NotFound();

                mapper.Map(likCrticaUpdateDto, lik);
                context.LikoviCrtica.Update(lik);

                await context.SaveChangesAsync();
                return StatusCode(StatusCodes.Status200OK);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable, ex.Message);
            }
        }
    }
}
