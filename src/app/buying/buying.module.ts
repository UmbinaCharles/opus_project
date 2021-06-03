import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyingPageRoutingModule } from './buying-routing.module';

import { BuyingPage } from './buying.page';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyingPageRoutingModule,
    Ng2SearchPipeModule,
    FontAwesomeModule
  ],
  declarations: [BuyingPage]
})
export class BuyingPageModule {

  filterTerm: string;
}
