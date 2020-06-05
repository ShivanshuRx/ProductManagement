import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { AdminLoginComponent } from "./admin/admin-login/admin-login.component";

import {CustomerLoginComponent} from './customer/customer-login.component'
import { AddCustomerComponent } from "./customer/add-customer/add-customer.component";
import { EditCustomerComponent } from "./customer/edit-customer/edit-customer.component";
import { ListCustomerComponent } from "./customer/list-customer/list-customer.component";

import { AddProductComponent } from "./product/add-product/add-product.component";
import { EditProductComponent } from "./product/edit-product/edit-product.component";
import { ListProductComponent } from "./product/list-product/list-product.component";

import { ListUserProductComponent } from "./product/list-product/list-user-product.component";

import { AddOrderComponent } from "./order/add-order/add-order.component";
import { EditOrderComponent } from "./order/edit-order/edit-order.component";
import { ListOrderComponent } from "./order/list-order/list-order.component";

import { AddCartComponent } from "./cart/add-cart/add-cart.component";
import { EditCartComponent } from "./cart/edit-cart/edit-cart.component";
import { ListCartComponent } from "./cart/list-cart/list-cart.component";

const routes: Routes = [
    // {
    //     path: '', component: AppComponent
    // },
    {
        path: 'adminLogin', component: AdminLoginComponent
    },
    {
        path: 'customerLogin', component: CustomerLoginComponent
    },
    {
        path: 'addCustomer', component: AddCustomerComponent
    },
    {
        path: 'editCustomer/:customerId/:customerName/:customerEmail/:mobileNumber/:customerAddress/:customerPassword', component: EditCustomerComponent
    },
    {
        path: 'listCustomer', component: ListCustomerComponent
    },

    {
        path: 'addProduct', component: AddProductComponent
    },
    {
        path: 'editProduct/:productId/:productName/:productBrand/:productPrice', component: EditProductComponent
    },
    {
        path: 'listProduct', component: ListProductComponent
    },

    {
        path: 'listUserProduct', component: ListUserProductComponent
    },

    {
        path: 'addOrder/:cartId', component: AddOrderComponent
    },
    {
        path: 'editOrder', component: EditOrderComponent
    },
    {
        path: 'listOrder', component: ListOrderComponent
    },
    {
        path: 'addCart/:productId/:productPrice', component: AddCartComponent
    },
    {
        path: 'editCart', component: EditCartComponent
    },
    {
        path: 'listCart', component: ListCartComponent
    },
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }