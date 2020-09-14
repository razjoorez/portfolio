import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'personal-details',
    loadChildren: () => import('./details/details.module').then(m => m.DetailsModule)
  },
  { path: 'personal', loadChildren: () => import('./address/address.module').then(m => m.AddressModule) },
  { path: '', loadChildren: () => import('./main/main.module').then(m => m.MainModule) },
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  { path: 'Summary', loadChildren: () => import('./summary/summary.module').then(m => m.SummaryModule) },
  { path: 'grid', loadChildren: () => import('./shared/custom-grid/custom-grid.module').then(m => m.CustomGridModule) },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
