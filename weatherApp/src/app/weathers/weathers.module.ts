import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeathersPageRoutingModule } from './weathers-routing.module';

import { WeathersPage } from './weathers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeathersPageRoutingModule
  ],
  declarations: [WeathersPage]
})
export class WeathersPageModule {}
