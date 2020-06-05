using System;
using System.Collections.Generic;

namespace ProductManagment.Models
{
    public partial class Carts
    {
        public Carts()
        {
            Orders = new HashSet<Orders>();
        }

        public int CartId { get; set; }
        public int ProductId { get; set; }
        public int CustomerId { get; set; }
        public int Quantity { get; set; }
        public decimal TotalPrice { get; set; }

        public virtual Customers Customer { get; set; }
        public virtual Products Product { get; set; }
        public virtual ICollection<Orders> Orders { get; set; }
    }
}
