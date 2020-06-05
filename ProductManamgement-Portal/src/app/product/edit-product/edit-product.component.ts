import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  editProductFormGroup: FormGroup;

  productId: any;
  productName: string;
  productBrand: string;
  productPrice: any;
  result: any;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get("productId"),
      this.productName = this.activatedRoute.snapshot.paramMap.get("productName"),
      this.productBrand = this.activatedRoute.snapshot.paramMap.get("productBrand"),
      this.productPrice = this.activatedRoute.snapshot.paramMap.get("productPrice")

    this.editProductFormGroup = this.formBuilder.group({
      productId: [this.productId, Validators.required],
      productName: [this.productName, Validators.required],
      productBrand: [this.productBrand, Validators.required],
      productPrice: [this.productPrice, Validators.required]
    })
  }

  editProduct() {
    const productId = parseInt(this.editProductFormGroup.controls.productId.value);
    this.http.put("https://localhost:44325/api/products/" + productId, {
      //ProductId: this.editProductFormGroup.controls.productId.value,
      ProductId: productId,
      ProductName: this.editProductFormGroup.controls.productName.value,
      ProductBrand: this.editProductFormGroup.controls.productBrand.value,
      ProductPrice: this.editProductFormGroup.controls.productPrice.value
    }).subscribe(res => {
      this.result = res;
      this.router.navigate(["/listProduct"]);
    });

  }

}
