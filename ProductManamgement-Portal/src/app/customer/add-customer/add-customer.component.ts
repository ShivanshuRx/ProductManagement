import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  public addCustomerFormGroup: FormGroup;

  result: any;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.addCustomerFormGroup = this.formBuilder.group({
      customerName: ['', Validators.required],
      customerEmail: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      customerAddress: ['', Validators.required],
      customerPassword: ['', Validators.required]
    })
  }

  onRegister() {
    this.http.post('https://localhost:44325/api/customers', {
      customerName: this.addCustomerFormGroup.controls.customerName.value,
      customerEmail: this.addCustomerFormGroup.controls.customerEmail.value,
      mobileNumber: this.addCustomerFormGroup.controls.mobileNumber.value,
      customerAddress: this.addCustomerFormGroup.controls.customerAddress.value,
      customerPassword: this.addCustomerFormGroup.controls.customerPassword.value
    }).subscribe(res => {
      this.result = res;
      this.router.navigate(['/customerLogin']);
    });

  }

}
