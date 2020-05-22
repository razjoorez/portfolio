import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { RouterModule } from '@angular/router';
import { DetailsModule } from './details/details.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    DetailsModule,
   RouterModule.forRoot([{
     path: '22', component: AppComponent
   }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
