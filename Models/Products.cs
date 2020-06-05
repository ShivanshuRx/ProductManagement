using System;
using System.Collections.Generic;

namespace ProductManagment.Models
{
    public partial class Products
    {
        public Products()
        {
            Carts = new HashSet<Carts>();
        }

        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string ProductBrand { get; set; }
        public decimal ProductPrice { get; set; }

        public virtual ICollection<Carts> Carts { get; set; }
    }
}
