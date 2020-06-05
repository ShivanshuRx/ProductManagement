import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-list-cart',
  templateUrl: './list-cart.component.html',
  styleUrls: ['./list-cart.component.css']
})
export class ListCartComponent implements OnInit {
  result: any;
id:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.id=sessionStorage.getItem("customerKey");
    this.http.get("https://localhost:44325/api/carts/"+this.id).subscribe(res=>{
      this.result=res;
    })
  }
  onRemove(id:number){
    alert("Item will also remove from Placed Order");
    this.http.delete("https://localhost:44325/api/carts/"+id).subscribe(res=>{
      this.result=res;

      window.location.reload();
    })
  }

}
