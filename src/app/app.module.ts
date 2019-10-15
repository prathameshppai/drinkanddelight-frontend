import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { ProductsModule } from './products/products.module';
import { RawmaterialsModule } from './rawmaterials/rawmaterials.module';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ProductsModule,
    RawmaterialsModule,
    AuthenticationModule
    
  ],

  exports: [
    FormsModule
  ],
  providers: [
    // PlaceRawmaterialOrdersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
