import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GiftCategoriesPage } from './gift-categories.page';

const routes: Routes = [
  {
    path: '',
    component: GiftCategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GiftCategoriesPageRoutingModule {}
