using System;
using System.Collections.Generic;

namespace ProductManagment.Models
{
    public partial class Customers
    {
        public Customers()
        {
            Carts = new HashSet<Carts>();
        }

        public int CustomerId { get; set; }
        public string CustomerName { get; set; }
        public string CustomerEmail { get; set; }
        public string MobileNumber { get; set; }
        public string CustomerAddress { get; set; }
        public string CustomerPassword { get; set; }

        public virtual ICollection<Carts> Carts { get; set; }
    }
}
