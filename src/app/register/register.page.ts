import { Component, OnInit } from '@angular/core';
import { DataService } from "src/app/sevice/data.service"
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor( private ds: DataService, public route: Router ) { }

  ngOnInit() {
  }

  CValue:String;
  select:any;
  onChange(CValue) {
   this.select = CValue;
    console.log(this.select);
  }

  userInfo: any = {};
  user_name :any;
  user_contact: any;
  user_interests: any;
  /*user_roles: any;*/
  user_address :any;
  user_email :any;
  user_password :any;


  regUser(){
    this.userInfo.user_name = this.user_name;
    this.userInfo.user_contact = this.user_contact;
    /*this.userInfo.user_roles = this.user_roles = this.select;*/
    this.userInfo.user_interests = this.user_interests;
    this.userInfo.user_email = this.user_email;
    this.userInfo.user_password = this.user_password;

    this.ds.sendApiRequest("regUser", JSON.parse(JSON.stringify(this.userInfo))).subscribe(data => {
    });

    Swal.fire({
      icon: 'success',
      title: 'Successfully Registered',
      imageHeight: 20,
      background: '#fff',
      backdrop: '#fff',
      showConfirmButton: false,
      timer: 1500,
    })

    this.route.navigate(['/login']);

    console.log(this.userInfo);
  }
  

}
