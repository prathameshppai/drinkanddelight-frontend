import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { ProductsModule } from './products/products.module';
import { RawmaterialsModule } from './rawmaterials/rawmaterials.module';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent
   
  ],
  imports: [
    
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ProductsModule,
    RawmaterialsModule,
    AuthenticationModule,
    HttpClientModule,
    BrowserModule,
   
 
  ],

  exports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
   
    
  ],
  providers: [
    // PlaceRawmaterialOrdersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
