import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-list-user-product',
  templateUrl: './list-user-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListUserProductComponent implements OnInit {
  result: any;
  isShow:boolean=false;
  // item_qty: number;

  constructor(private router:Router, private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://localhost:44325/api/products").subscribe(res=>{
      this.result=res;
      console.log(this.result);
    })
  }
  delete(id:number){
    this.http.delete("https://localhost:44325/api/products/"+id).subscribe(res=>{
      this.result=res;
      window.location.reload();
    });   
  }
 

  // incrementQty(){
  //   this.item_qty += 1;
  //   console.log(this.item_qty + 1);
  //   }
    
  //   //decrements item
    
  //   decrementQty(){
  //   if(this.item_qty-1 < 1){
  //     this.item_qty = 1;
  //     console.log('item_1->' + this.item_qty)
  //   }
  //   else{
  //     this.item_qty -= 1;
  //     console.log('item_2->' + this.item_qty);
  //   }
  //   }

}