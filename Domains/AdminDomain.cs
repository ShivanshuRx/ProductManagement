using ProductManagment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductManagment.Domains
{
    public class AdminDomain : ProductManagementDbContext
    {
        ProductManagementDbContext dbContext = new ProductManagementDbContext();

        public int isLogin(Admin admin)
        {
            var result = dbContext.Admin.Where(x => x.AdminEmail == admin.AdminEmail && x.AdminPassword==admin.AdminPassword).FirstOrDefault();
            if(result!=null)
            {
                return result.AdminId;
            }
            else
            {
                return 0;
            }
            
        }
    }
}
