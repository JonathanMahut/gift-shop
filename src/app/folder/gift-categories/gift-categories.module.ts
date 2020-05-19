import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GiftCategoriesPageRoutingModule } from './gift-categories-routing.module';

import { GiftCategoriesPage } from './gift-categories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GiftCategoriesPageRoutingModule
  ],
  declarations: [GiftCategoriesPage]
})
export class GiftCategoriesPageModule {}
