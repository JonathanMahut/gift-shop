import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsPageRoutingModule } from './details-routing.module';
import { StarRatingModule } from 'ionic5-star-rating';

import { DetailsPage } from './details.page';
import { CartPageModule } from '../cart/cart.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StarRatingModule,
    DetailsPageRoutingModule,
    CartPageModule
  ],
  declarations: [DetailsPage]
})
export class DetailsPageModule {}
