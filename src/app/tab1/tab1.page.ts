import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from "src/app/sevice/data.service"

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor( private ds: DataService, public route: Router) {}

  ngOnInit() {
  }

   CValue:String;
   select:any;
    onChange(CValue) {
    this.select = CValue;
     console.log(this.select);
  }

  reqInfo: any = {};
  req_type: any;
  req_desc: any;
  user_id: any;

  addReq() {
    this.reqInfo.req_type = this.req_type = this.select;
    this.reqInfo.req_desc = this.req_desc;

    this.reqInfo.user_id = localStorage.getItem("id");
    this.reqInfo.user_name = localStorage.getItem("user_name");
    this.reqInfo.user_roles = localStorage.getItem("user_roles");

    this.ds.sendApiRequest("addReq", JSON.parse(JSON.stringify(this.reqInfo))).subscribe(data => {
      
    });

    console.log(this.reqInfo)
  }
}
