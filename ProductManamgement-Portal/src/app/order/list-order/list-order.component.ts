import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.css']
})
export class ListOrderComponent implements OnInit {

  result:any;
  id:any
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.id=sessionStorage.getItem("customerKey");
    this.http.get("https://localhost:44325/api/orders/"+this.id).subscribe(res=>{
      this.result=res;
    })
  }
  onDelete(id:number){
    this.http.delete("https://localhost:44325/api/orders/"+id).subscribe(res=>
    {
      this.result=res;
      window.location.reload();
    })
  }

}
