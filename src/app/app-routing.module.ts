import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path:'details:article',
    loadChildren: () => import('./folder/details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path : 'login',
    loadChildren:() => import('./folder/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path : 'register',
    loadChildren:() => import('./folder/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path : 'create-product',
    loadChildren:() => import('./folder/create-product/create-product.module').then(m => m.CreateProductPageModule)
  },
  {
    path : 'verify-email',
    loadChildren:() => import('./folder/verify-email/verify-email.module').then(m => m.VerifyEmailPageModule)
  },
  {
    path : 'contact',
    loadChildren:() => import('./folder/contact/contact.module').then(m => m.ContactPageModule)
  },
  {
    path : 'cart',
    loadChildren:() => import('./folder/cart/cart.module').then(m => m.CartPageModule)
  }
  ,
  {
    path : 'about',
    loadChildren:() => import('./folder/about/about.module').then(m => m.AboutPageModule)
  },
  {
    path : 'details',
    loadChildren:() => import('./folder/details/details.module').then(m => m.DetailsPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
