import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import{Router} from '@angular/router';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  result: Object;

  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
      this.http.get("https://localhost:44325/api/customers").subscribe(res=>{
      this.result=res;      
    })
   
  }
  delete(id:number){
    this.http.delete("https://localhost:44325/api/customers/"+id).subscribe(res=>{
      this.result=res;
      window.location.reload();
    })

  }

}
