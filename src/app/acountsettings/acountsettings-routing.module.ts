import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcountsettingsPage } from './acountsettings.page';

const routes: Routes = [
  {
    path: '',
    component: AcountsettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcountsettingsPageRoutingModule {}
