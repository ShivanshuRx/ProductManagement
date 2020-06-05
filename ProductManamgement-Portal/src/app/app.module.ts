import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {CustomerLoginComponent} from './customer/customer-login.component'

import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { ListProductComponent } from './product/list-product/list-product.component';

import { ListUserProductComponent } from './product/list-product/list-user-product.component';

import { AddOrderComponent } from './order/add-order/add-order.component';
import { EditOrderComponent } from './order/edit-order/edit-order.component';
import { ListOrderComponent } from './order/list-order/list-order.component';
import { AddCartComponent } from './cart/add-cart/add-cart.component';
import { EditCartComponent } from './cart/edit-cart/edit-cart.component';
import { ListCartComponent } from './cart/list-cart/list-cart.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomerLoginComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    ListCustomerComponent,
    AdminLoginComponent,
    AddProductComponent,
    EditProductComponent,
    ListProductComponent,
    ListUserProductComponent,
    AddOrderComponent,
    EditOrderComponent,
    ListOrderComponent,
    AddCartComponent,
    EditCartComponent,
    ListCartComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
