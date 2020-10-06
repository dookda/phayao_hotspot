import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Report7dayPageRoutingModule } from './report7day-routing.module';

import { Report7dayPage } from './report7day.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Report7dayPageRoutingModule
  ],
  declarations: [Report7dayPage]
})
export class Report7dayPageModule {}
