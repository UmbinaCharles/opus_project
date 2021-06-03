import { Component } from '@angular/core';
import { DataService } from "../sevice/data.service"
import { TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  //All Variables here

  //User Infos

  userInfo: any = {};
  users: any;
  user_id: any;
  user_name: any;
  user_contact: any;
  user_interests: any;
  user_email: any;
  user_password: any;
  user_trust: any;

  //Request Infos

  reqInfo: any = {};
  reqs: any;
  req_id: any;
  req_type: any;
  req_title: any;
  req_desc: any;
  req_bid: any;
  req_tags: any;
  req_bump: any;

  //Comment Infos

  comInfo: any = {};
  com: any;
  com_id: any;
  com_con: any;


  //IDK WHY ETO GINAMIT NYO

  CValue: String;
  select: any;

  constructor(private ds: DataService, public route: Router) { }

  @ViewChild('content') callAPIDialog: TemplateRef<any>;

  ngOnInit(): void {

    //Init Methods Here

    this.pullUser();
    this.pullUserReqs();
    this.pullComs();

  }

  //Methods Here

  //Reload Method

  reload() {
    this.pullUser();
    this.pullUserReqs();
    this.pullComs();
  }

  //Pull User

  pullUser() {
    this.userInfo.user_Id = localStorage.getItem("id");
    console.log(this.userInfo);
    this.ds.sendApiRequest("pullSpecUser", localStorage.getItem("id")).subscribe(data => {
      this.users = data.payload;
      console.log(this.users);
    })
  }

  //Pull Requests

  pullUserReqs() {
    this.ds.sendApiRequest("pullSpecReq2", "Selling").subscribe(data => {
      this.reqs = data.payload;
      console.log(this.reqs);
    });
  }

  //Pull Comments

  pullComs() {
    this.ds.sendApiRequest("pullCom", null).subscribe(data => {
      this.com = data.payload;
      console.log(this.com);
    })
  }

  // Dropdown Option

  onChange(CValue) {
    this.select = CValue;
    console.log(this.select);
  }

  //Del Requests

  async delReq(e) {
    this.reqInfo.req_id = e;
    this.ds.sendApiRequest("delReq", JSON.parse(JSON.stringify(this.reqInfo))).subscribe(data => {
    });
    console.log(this.reqInfo);
    this.reload();
  }

  //Add Requests

  async addReq() {
    this.reqInfo.req_type = this.req_type = this.select;
    this.reqInfo.req_title = this.req_title;
    this.reqInfo.req_desc = this.req_desc;
    this.reqInfo.req_bid = this.req_bid;
    this.reqInfo.user_id = localStorage.getItem("id");
    this.reqInfo.user_name = localStorage.getItem("user_name");
    this.reqInfo.req_tags = this.req_tags;
    this.reqInfo.req_bump = this.req_bump;

    this.ds.sendApiRequest("addReq", JSON.parse(JSON.stringify(this.reqInfo))).subscribe(data => {
      this.pullUserReqs();
      Swal.fire({
        icon: 'success',
        text: 'Successfully Posted!',
        imageHeight: 20,
        background: '#fff',
        backdrop: '#fff',
        showConfirmButton: false,
        timer: 1500
      });
    });
    console.log(this.reqInfo);
    this.reload();
  }

  //Add Comments

  async addCom(req_id) {
    this.comInfo.req_id = req_id;
    this.comInfo.user_id = localStorage.getItem("id");
    this.comInfo.user_name = localStorage.getItem("user_name");
    this.comInfo.com_con = this.com_con;

    console.log(this.comInfo);

    this.ds.sendApiRequest("addCom", JSON.parse(JSON.stringify(this.comInfo))).subscribe(data => {
      this.pullComs();
      Swal.fire({
        icon: 'success',
        text: 'Successfully Commented!',
        imageHeight: 20,
        background: '#fff',
        backdrop: '#fff',
        showConfirmButton: false,
        timer: 1500
      });
    });
    console.log(this.comInfo);
    this.reload();
  }

  //Log Out

  logout() {
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
        });
        localStorage.clear();
      }
    })
  }
  //End of Methods

}
