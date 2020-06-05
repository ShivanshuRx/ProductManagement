using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProductManagment.Models;

namespace ProductManagment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartsController : ControllerBase
    {
        private readonly ProductManagementDbContext _context;
        VCart vCart = new VCart();
        public CartsController(ProductManagementDbContext context)
        {
            _context = context;
        }
        Orders orders = new Orders();

      

        // GET: api/Carts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Carts>>> GetCarts()
        {
            return await _context.Carts.ToListAsync();
        }

        // GET: api/Carts/5
        [HttpGet("{id}")]
        public async Task<List<VCart>> GetCarts(int id)
        {
            var carts = await _context.VCart.Where(x=>x.CustomerId==id).ToListAsync();
            return carts;
        }

        // PUT: api/Carts/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCarts(int id, Carts carts)
        {
            if (id != carts.CartId)
            {
                return BadRequest();
            }

            _context.Entry(carts).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CartsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Carts
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Carts>> PostCarts(Carts carts)
        {
            _context.Carts.Add(carts);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCarts", new { id = carts.CartId }, carts);
        }

        // DELETE: api/Carts/5
        [HttpDelete("{id}")]
        public void DeleteCarts(int id)
        {

            _context.Orders.Where(t => t.CartId == id).ToList().ForEach(y =>
            {
                _context.Orders.Remove(y);
            });


            var carts = new Carts() { CartId = id };

            
        
            //var carts = _context.Carts.FindAsync(id);
            //if (carts == null)
            //{
            //    return NotFound();
            //}


            _context.Carts.Remove(carts);
            _context.SaveChanges();

        }

        private bool CartsExists(int id)
        {
            return _context.Carts.Any(e => e.CartId == id);
        }
    }
}
