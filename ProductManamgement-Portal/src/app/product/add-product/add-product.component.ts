import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import{HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addProductFormGroup:FormGroup;
  result: Object;
  constructor(private http:HttpClient,private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.addProductFormGroup=this.formBuilder.group({
      productName:['',Validators.required],
      productBrand:['',Validators.required],
      productPrice:['',Validators.required]
    })
  }

  addProduct(){
    this.http.post("https://localhost:44325/api/products",{
      productName:this.addProductFormGroup.controls.productName.value,
      productBrand:this.addProductFormGroup.controls.productBrand.value,
      productPrice:this.addProductFormGroup.controls.productPrice.value
    }).subscribe(res=>{
      this.result=res;
    });
  }

}
