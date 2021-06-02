import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from "src/app/sevice/data.service"

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private ds: DataService, public route: Router) {}

  ngOnInit() {
    this.pullReq();
  }

  reqInfo: any = {};
  /*user_id: any;*/
  reqs: any;

  pullReq() {    
    this.ds.sendApiRequest("reqt", "Selling").subscribe(data => {
    this.reqs = data.payload;    
  })
  }



}
