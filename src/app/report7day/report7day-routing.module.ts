import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Report7dayPage } from './report7day.page';

const routes: Routes = [
  {
    path: '',
    component: Report7dayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Report7dayPageRoutingModule {}
