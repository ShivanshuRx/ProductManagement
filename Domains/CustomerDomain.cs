using ProductManagment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductManagment.Domains
{
    public class CustomerDomain : ProductManagementDbContext
    {
        ProductManagementDbContext dbContext = new ProductManagementDbContext();
        public int isLogin(Customers customers)
        {
            var result = dbContext.Customers.Where(x => x.CustomerEmail==customers.CustomerEmail && x.CustomerPassword==customers.CustomerPassword).FirstOrDefault();
            if (result != null)
            {
                return result.CustomerId;
            }
            else
            {
                return 0;
            }

        }

    }
}
