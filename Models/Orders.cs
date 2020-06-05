using System;
using System.Collections.Generic;

namespace ProductManagment.Models
{
    public partial class Orders
    {
        public int OrderId { get; set; }
        public int CartId { get; set; }
        public DateTime OrderDate { get; set; }
        public DateTime ShipDate { get; set; }

        public virtual Carts Cart { get; set; }
    }
}
