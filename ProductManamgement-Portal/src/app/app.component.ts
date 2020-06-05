import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProductManamgement-Portal';
constructor(private router:Router){}
  isShow:boolean=true;
  isHidden:boolean=false;
  getAdminKey:any;
  getCustomerKey:any;
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.getAdminKey=sessionStorage.getItem("adminKey");
  this.getCustomerKey=sessionStorage.getItem("customerKey");

  if(this.getAdminKey!=null || this.getCustomerKey!=null)
  {
    this.isHidden=true;
    this.isShow=false;
  }
}
logout(){
  sessionStorage.removeItem("adminKey");
  sessionStorage.removeItem("customerKey");
  this.isHidden=false;
  this.isShow=true;
  this.router.navigate(['/']);
}
  
}
