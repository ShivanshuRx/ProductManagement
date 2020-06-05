using System;
using System.Collections.Generic;

namespace ProductManagment.Models
{
    public partial class VCart
    {
        public int CartId { get; set; }
        public int ProductId { get; set; }
        public int Quantity { get; set; }
        public decimal TotalPrice { get; set; }
        public decimal ProductPrice { get; set; }
        public string ProductName { get; set; }
        public int CustomerId { get; set; }
    }
}
