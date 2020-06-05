using System;
using System.Collections.Generic;

namespace ProductManagment.Models
{
    public partial class Admin
    {
        public int AdminId { get; set; }
        public string AdminEmail { get; set; }
        public string AdminPassword { get; set; }
    }
}
