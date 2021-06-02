import { Component } from '@angular/core';
import { DataService } from "../sevice/data.service"
import { TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, Platform } from '@ionic/angular';
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
  @ViewChild('content', { static: false }) content: IonContent;

  ngOnInit(): void {
    this.pullUsers();
    this.pullReqs();
  }

  gotToTop() {
    this.content.scrollToTop(1000);
  }

  //postForm: any;

  //reset() {
  //  this.postForm.reset();
  //}

  //scrollToTop() {
  //  this.content.scrollToTop(400);
  //}
  //ionViewDidEnter() {
  //  this.scrollToTop();
  //}

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
    confirmButtonText: 'Proceed',
    imageHeight: 20,
    background: '#fff',
    backdrop: '#fff'

  }).then((result) => {
    if (result.isConfirmed) {

      localStorage.clear();
      window.localStorage.removeItem('id');
      this.route.navigate(['/login']);

      Swal.fire({
        icon: 'success',
        text: 'Logging-out',
        imageHeight: 20,
        background: '#fff',
        backdrop: '#fff',
        showConfirmButton: false,
        timer: 1500
      })
    }
  })
}

  reqInfo: any = {};
  reqs: any;
  req_type: any;
  req_desc: any;
  req_title: any;
  req_bid: any;
  req_tags: any;
  req_bump: any;

  CValue: String;
  select: any;

  onChange(CValue) {
    this.select = CValue;
    console.log(this.select);
  }  

  pullReqs() {
    this.reqInfo.user_id = localStorage.getItem("id");
    this.ds.sendApiRequest("reqs", localStorage.getItem("id")).subscribe(data => {
      this.reqs = data.payload;
    });
  }

  async delReq(e) {
    this.reqInfo.req_id = e;
    this.ds.sendApiRequest("delReq", JSON.parse(JSON.stringify(this.reqInfo))).subscribe(data => {
      
    });      
  }  

  addReq() {
    this.reqInfo.req_type = this.req_type = this.select;
    this.reqInfo.req_title = this.req_title;
    this.reqInfo.req_desc = this.req_desc;
    this.reqInfo.req_bid = this.req_bid;
    this.reqInfo.user_id = localStorage.getItem("id");
    this.reqInfo.user_name = localStorage.getItem("user_name");
    this.reqInfo.req_tags = this.req_tags;
    this.reqInfo.req_bump = this.req_bump;

    this.ds.sendApiRequest("addReq", JSON.parse(JSON.stringify(this.reqInfo))).subscribe(data => {
      this.pullReqs();
      Swal.fire({
        icon: 'success',
        text: 'Successfully Posted!',
        imageHeight: 20,
        background: '#fff',
        backdrop: '#fff',
        showConfirmButton: false,
        timer: 1500
      });
      //this.reset();      
    });
    console.log(this.reqInfo);
    this.route.navigate(['/main']);
  }

}
