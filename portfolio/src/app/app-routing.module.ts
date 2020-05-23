import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'personal-details',
    loadChildren: () => import('./details/details.module').then(m => m.DetailsModule)
  },
  { path: 'personal', loadChildren: () => import('./address/address.module').then(m => m.AddressModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
