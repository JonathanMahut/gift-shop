import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './products.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  },
  {
    path: 'create-product',
    loadChildren: () => import('./create-product/create-product.module').then( m => m.CreateProductPageModule)
  },
  {
    path: 'gift-categories',
    loadChildren: () => import('./gift-categories/gift-categories.module').then( m => m.GiftCategoriesPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'brands',
    loadChildren: () => import('./brands/brands.module').then( m => m.BrandsPageModule)
  },
  {
    path: 'product-by-category',
    loadChildren: () => import('./product-by-category/product-by-category.module').then( m => m.ProductByCategoryPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
