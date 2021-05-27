import { Component, OnInit } from '@angular/core';
import { DataService } from "src/app/sevice/data.service"
import { Router } from '@angular/router';
import { TemplateRef, ViewChild } from '@angular/core';
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

  userInfo: any = {};
  user_name :any;
  user_contact :any;
  user_address :any;
  user_email :any;
  user_password :any;


  regUser(){
    this.userInfo.user_name = this.user_name;
    this.userInfo.user_contact = this.user_contact;
    this.userInfo.user_email = this.user_email;
    this.userInfo.user_password = this.user_password;

    this.ds.sendApiRequest("regUser", JSON.parse(JSON.stringify(this.userInfo))).subscribe(data => {
    });

    Swal.fire({
      icon: 'success',
      title: 'Successfuly Register',
      showConfirmButton: false,
      timer: 1500
    })

    this.route.navigate(['/login']);

    console.log(this.userInfo);
  }
  

}