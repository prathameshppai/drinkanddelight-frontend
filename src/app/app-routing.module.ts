import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RawmaterialsModule } from './rawmaterials/rawmaterials.module';
 import { ProductsModule } from './products/products.module';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), 
    // RawmaterialsModule.forChild(routes),
    RawmaterialsModule, 
    ProductsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
