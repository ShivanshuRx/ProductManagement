import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'customer-login',
    templateUrl: 'customer-login.component.html'
})

export class CustomerLoginComponent implements OnInit {
    customerLoginFormGroup: FormGroup;
    result: any;
  
    constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }
  
    ngOnInit(): void {
      this.customerLoginFormGroup = this.formBuilder.group({
        customerEmail: ['', Validators.required],
        customerPassword: ['', Validators.required]
      })
    }
  
    isLogin() {
      this.http.post('https://localhost:44325/api/logincustomers', {
        customerEmail: this.customerLoginFormGroup.controls.customerEmail.value,      
        customerPassword: this.customerLoginFormGroup.controls.customerPassword.value      
      }).subscribe(res => {
        this.result = res;
        if(this.result!=0)
        { sessionStorage.setItem("customerKey",this.result);
          this.router.navigate(['/listUserProduct']);
        }
        else
        {
          alert("Email or Password Wrong");
        
        }
      })
  
    }
}