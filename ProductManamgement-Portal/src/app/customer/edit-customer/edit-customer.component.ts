import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  editCustomerFormGroup: FormGroup;
  
  customerId: any;
  customerName: string;
  customerEmail: string;
  mobileNumber: string;
  customerAddress: string;
  customerPassword: string;
  id:any;
  result:any;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.customerId = this.activatedRoute.snapshot.paramMap.get("customerId"),
      this.customerName = this.activatedRoute.snapshot.paramMap.get("customerName"),
      this.customerEmail = this.activatedRoute.snapshot.paramMap.get("customerEmail"),
      this.mobileNumber = this.activatedRoute.snapshot.paramMap.get("mobileNumber"),
      this.customerAddress = this.activatedRoute.snapshot.paramMap.get("customerAddress"),
      this.customerPassword = this.activatedRoute.snapshot.paramMap.get("customerPassword")

    this.editCustomerFormGroup = this.formBuilder.group({
      customerId: [this.customerId, Validators.required],
      customerName: [this.customerName, Validators.required],
      customerEmail:[this.customerEmail,Validators.required],
      mobileNumber: [this.mobileNumber, Validators.required],
      customerAddress: [this.customerAddress, Validators.required],
      customerPassword: [this.customerPassword, Validators.required]
    })
  }
  editCustomer() {
     this.id = parseInt(this.editCustomerFormGroup.controls.customerId.value);
    this.http.put("https://localhost:44325/api/customers/" + this.id, {
      //ProductId: this.editProductFormGroup.controls.productId.value,
      CustomerId: this.id,
      CustomerName: this.editCustomerFormGroup.controls.customerName.value,
      CustomerEmail: this.editCustomerFormGroup.controls.customerEmail.value,
      MobileNumber: this.editCustomerFormGroup.controls.mobileNumber.value,
      CustomerAddress: this.editCustomerFormGroup.controls.customerAddress.value,
      CustomerPassword: this.editCustomerFormGroup.controls.customerPassword.value
    }).subscribe(res => {
      this.result = res;
      this.router.navigate(["/listCustomer"]);
    });

  }

}
