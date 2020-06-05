import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  result: any;

  constructor(private router:Router, private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://localhost:44325/api/products").subscribe(res=>
    {
      this.result=res;
    })
  }
  delete(id:number){
    this.http.delete("https://localhost:44325/api/products/"+id).subscribe(res=>{
      this.result=res;
      window.location.reload();
    });
   
  }

}
