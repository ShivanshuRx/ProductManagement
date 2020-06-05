import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminLoginFormGroup: FormGroup;
  result: any;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.adminLoginFormGroup = this.formBuilder.group({
      adminEmail: ['', Validators.required],
      adminPassword: ['', Validators.required]
    })
  }

  isLogin() {
    this.http.post('https://localhost:44325/api/admins', {
      adminEmail: this.adminLoginFormGroup.controls.adminEmail.value,      
      adminPassword: this.adminLoginFormGroup.controls.adminPassword.value      
    }).subscribe(res => {
      this.result = res;
      if (this.result != 0) {
        sessionStorage.setItem("adminKey",this.result);
        this.router.navigate(['/listCustomer']);
      }
      else {
        alert("Email or Password Wrong");
      }
    })

  }

}

