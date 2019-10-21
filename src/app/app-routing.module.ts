import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RawmaterialsModule } from './rawmaterials/rawmaterials.module';
import { ProductsModule } from './products/products.module';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { AuthenticationService } from './authentication.service'

const routes: Routes = [
  { path: 'home-page', component: HomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), 
    RawmaterialsModule, 
    ProductsModule,
    AuthenticationModule],
  exports: [RouterModule],
  providers: [AuthenticationService]
})
export class AppRoutingModule { }
