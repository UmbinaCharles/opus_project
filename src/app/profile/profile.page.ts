import { Component } from '@angular/core';
import { DataService } from "../sevice/data.service"
import { TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage {

  users: any;
  userInfo: any = {};
  user_id: any;
  user_Id: any

  constructor( private ds: DataService, public route: Router ) {}

  @ViewChild('content') callAPIDialog: TemplateRef<any>;

  ngOnInit(): void {
    this.pullUsers();
    this.pullReqs();
  }

  pullUsers() {
    this.userInfo.user_Id = localStorage.getItem("id");
      console.log(this.userInfo);
      this.ds.sendApiRequest("users",localStorage.getItem("id")).subscribe(data => {
       
        this.users = data.payload;

    console.log(this.users);
  })
}

logout(){

  Swal.fire({
    title: 'Are you sure?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Proceed'
  }).then((result) => {
    if (result.isConfirmed) {

      localStorage.clear();
      window.localStorage.removeItem('id');
      this.route.navigate(['/login']);


      Swal.fire({
        icon: 'success',
        text: 'Logout',
        showConfirmButton: false,
        timer: 1500
      })
    }
  })
}

  reqInfo: any = {};
  reqs: any;

  pullReqs() {
    this.reqInfo.user_id = localStorage.getItem("id");
    this.ds.sendApiRequest("reqs", localStorage.getItem("id")).subscribe(data => {
    this.reqs = data.payload;
    
  })
}

async delReq(e) {
  this.reqInfo.req_id = e;
      this.ds.sendApiRequest("delReq", JSON.parse(JSON.stringify(this.reqInfo))).subscribe(data => {
        this.pullReqs();
      });
      
}

}
