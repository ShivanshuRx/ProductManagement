import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.css']
})
export class AddCartComponent implements OnInit {
  addCartFormGroup:FormGroup;
  id:any;
  result:any;
  productId: any;
  productPrice: any;
  constructor(private formbuilder:FormBuilder,private http:HttpClient,private activateRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {    
    this.id=sessionStorage.getItem("customerKey");
    this.productId=this.activateRoute.snapshot.paramMap.get("productId");
    this.productPrice=this.activateRoute.snapshot.paramMap.get("productPrice");
    this.addCartFormGroup=this.formbuilder.group(
      {
        quantity:['',Validators.required]
      }
    )
  }
  addcart()
  {
    if(this.addCartFormGroup.controls.quantity.value>=1)
    {    
      var totalPrice=(this.addCartFormGroup.controls.quantity.value*parseInt(this.productPrice));
    this.http.post('https://localhost:44325/api/carts',{
      CustomerId:parseInt(this.id),
      ProductId:parseInt(this.productId),
      Quantity:this.addCartFormGroup.controls.quantity.value,
      TotalPrice:totalPrice
    }).subscribe(res=>{
      this.result=res;
       this.router.navigate(['/listCart']);
    });
  }
}
}
