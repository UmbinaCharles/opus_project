import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { DataService } from '../sevice/data.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userInfo: any = {}; 
  user_email: any;
  user_password: any;

  constructor(  public route: Router, private ds: DataService  ) { }

  ngOnInit() {
  }

  async loginUser(){
    this.userInfo.user_email = this.user_email;
    this.userInfo.user_password = this.user_password;
    await this.ds.sendApiRequest("loginUser", this.userInfo).subscribe(res => {
      if (res.payload == 0) {      
        alert("Incorrect Credentials");      
      }
      else {
        localStorage.setItem("user_name", res.payload.user_name);
        localStorage.setItem("id", res.payload.user_id);
        localStorage.setItem("user_roles", res.payload.user_roles);
        Swal.fire({
          icon: 'success',
          text: 'Welcome' + ' ' + res.payload.user_name + '!',
          imageHeight: 20,
          background: '#fff',
          backdrop:  '#fff',
          showConfirmButton: false,
          timer: 1500
        })
        this.route.navigate(['/main']);
      }
    });    
  }
}
