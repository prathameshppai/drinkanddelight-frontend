import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { ProductsModule } from './products/products.module';
import { RawmaterialsModule } from './rawmaterials/rawmaterials.module';
// import { PlaceRawmaterialOrdersService} from './rawmaterials/place-rawmaterial-orders/place-rawmaterial-orders.service'




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ProductsModule,
    RawmaterialsModule,
    AuthenticationModule,
    HttpClientModule
    
  ],

  exports: [
    FormsModule,
    HttpClientModule
  ],
  providers: [
    // PlaceRawmaterialOrdersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
