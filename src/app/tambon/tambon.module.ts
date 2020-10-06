import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TambonPageRoutingModule } from './tambon-routing.module';

import { TambonPage } from './tambon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TambonPageRoutingModule
  ],
  declarations: [TambonPage]
})
export class TambonPageModule {}
