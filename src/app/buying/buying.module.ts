import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyingPageRoutingModule } from './buying-routing.module';

import { BuyingPage } from './buying.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyingPageRoutingModule
  ],
  declarations: [BuyingPage]
})
export class BuyingPageModule {}
