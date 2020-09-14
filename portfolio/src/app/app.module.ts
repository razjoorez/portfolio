import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { HttpClientModule} from '@angular/common/http';
import { ProductsModule } from './products/products.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [HttpClientModule,
  FormsModule,
  ReactiveFormsModule]
})
export class AppModule { }
