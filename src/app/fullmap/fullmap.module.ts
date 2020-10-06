import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FullmapPageRoutingModule } from './fullmap-routing.module';

import { FullmapPage } from './fullmap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FullmapPageRoutingModule
  ],
  declarations: [FullmapPage]
})
export class FullmapPageModule {}
