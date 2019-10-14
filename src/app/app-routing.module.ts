import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceRawmaterialOrdersComponent } from './rawmaterials/place-rawmaterial-orders/place-rawmaterial-orders.component';
import { RawmaterialsModule } from './rawmaterials/rawmaterials.module';

const routes: Routes = [
  { path: 'place-rawmaterial-order', component: PlaceRawmaterialOrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RawmaterialsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
