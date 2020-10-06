import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmphoePage } from './amphoe.page';

const routes: Routes = [
  {
    path: '',
    component: AmphoePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmphoePageRoutingModule {}
