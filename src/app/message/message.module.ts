import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessagePage } from './message.page';

import { MessagePageRoutingModule } from './message-routing.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: MessagePage }]),
    MessagePageRoutingModule,
    FontAwesomeModule,
  ],
  declarations: [MessagePage]
})
export class MessagePageModule {}
