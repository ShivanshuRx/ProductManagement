import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  public addOrderFormGroup: FormGroup;
  cartId: any;
  orderDate: Date;
  shipDate: Date;
  result: any;
  dt:Date;
  dt1:Date;
  dt2:number;
  // newDate:string;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router:Router, private activatedRoute:ActivatedRoute) { 
    this.dt = new Date();
    this.dt1=new Date();
    this.dt2=this.dt1.setDate(this.dt1.getDate()+7);
    // this.newDate=this.dt2.toString();
    
  }

  ngOnInit(): void {
   

    this.cartId = this.activatedRoute.snapshot.paramMap.get("cartId");

    this.addOrderFormGroup = this.formBuilder.group({
      cartId: [this.cartId, Validators.required],
      orderDate: ['', Validators.required],
      shipDate: ['', Validators.required]
    })
  }
onEvent(){


}
onPlaceOrder() {
    this.http.post('https://localhost:44325/api/orders', {
      cartId: parseInt(this.addOrderFormGroup.controls.cartId.value),
      orderDate: this.addOrderFormGroup.controls.orderDate.value,
      shipdate: this.addOrderFormGroup.controls.shipDate.value
    }).subscribe(res => {
      this.result = res;
      alert("Order Placed");
      this.router.navigate(['/listOrder']);
    });

  }


}