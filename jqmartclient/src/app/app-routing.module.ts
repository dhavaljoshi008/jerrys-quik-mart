import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomPreloader } from './utils/custom-preloader';

const ROUTES: Routes = [
  {
    path: 'shop',
    loadChildren: 'app/inventory/inventory.module#InventoryModule',
    data: { preload: true }
  },
  {
    path: 'home',
    loadChildren: 'app/home/home.module#HomeModule',
    data: { preload: true }
  },
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'home'
  },
  { 
    path: '**', 
    redirectTo: 'home'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, { preloadingStrategy: CustomPreloader })],
  exports: [RouterModule],
  providers: [CustomPreloader]
})
export class AppRoutingModule { }
