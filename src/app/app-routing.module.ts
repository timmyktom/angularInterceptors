import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule) },
  { path: 'users',
    loadChildren: () => import('./users/users.module').then(mod => mod.UsersModule) },
  { path: 'products',
    loadChildren: () => import('./products/products.module').then(mod => mod.ProductsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
