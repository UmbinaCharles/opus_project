import { Component } from '@angular/core';
import { DataService } from "../sevice/data.service"
import { TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buying',
  templateUrl: 'buying.page.html',
  styleUrls: ['buying.page.scss'],
})
export class BuyingPage {

  //Variables Here

  users: any;
  userInfo: any = {};
  user_id: any;

  constructor(private ds: DataService, public route: Router ) {}

  @ViewChild('content') callAPIDialog: TemplateRef<any>;

  ngOnInit(): void {
    //Init Methods Here
  }

}
