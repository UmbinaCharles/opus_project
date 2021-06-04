import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcountsettingsPageRoutingModule } from './acountsettings-routing.module';

import { AcountsettingsPage } from './acountsettings.page';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcountsettingsPageRoutingModule,
    FontAwesomeModule
  ],
  declarations: [AcountsettingsPage]
})
export class AcountsettingsPageModule {}
