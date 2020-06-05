using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProductManagment.Domains;
using ProductManagment.Models;

namespace ProductManagment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginCustomersController : ControllerBase
    {
        private readonly ProductManagementDbContext _context;

        CustomerDomain customerDomain = new CustomerDomain();

        public LoginCustomersController(ProductManagementDbContext context)
        {
            _context = context;
        }

      
        [HttpPost]
        public async Task<ActionResult<Customers>> PostCustomers(Customers customers)
        {
            var result = this.customerDomain.isLogin(customers);
            //_context.Admin.Add(admin);
            await _context.SaveChangesAsync();

            //return CreatedAtAction("GetAdmin", new { id = admin.AdminId }, admin);

            return Ok(result);
        }

        private bool CustomersExists(int id)
        {
            return _context.Customers.Any(e => e.CustomerId == id);
        }
    }
}
