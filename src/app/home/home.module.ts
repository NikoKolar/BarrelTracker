import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { BarrelDropdownComponent } from '../barrel-dropdown/barrel-dropdown.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    BarrelDropdownComponent,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
