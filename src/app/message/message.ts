import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessagePage } from './message.page';

import { MessagePageRoutingModule } from './message-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
     MessagePageRoutingModule
  ],
  declarations: [MessagePage]
})
export class Tab1PageModule {

}
