import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmphoePageRoutingModule } from './amphoe-routing.module';

import { AmphoePage } from './amphoe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmphoePageRoutingModule
  ],
  declarations: [AmphoePage]
})
export class AmphoePageModule {}
