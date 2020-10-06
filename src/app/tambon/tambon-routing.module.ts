import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TambonPage } from './tambon.page';

const routes: Routes = [
  {
    path: '',
    component: TambonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TambonPageRoutingModule {}
