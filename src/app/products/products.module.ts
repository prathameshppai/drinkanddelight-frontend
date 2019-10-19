import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayProductOrdersComponent } from './display-product-orders/display-product-orders.component';
import { PlaceProductOrderComponent } from './place-product-order/place-product-order.component';
import { TrackProductOrderComponent } from './track-product-order/track-product-order.component';
import { UpdateProductOrderComponent } from './update-product-order/update-product-order.component';
import { UpdateProductStockComponent } from './update-product-stock/update-product-stock.component';
import { AddDistributorAddressComponent } from './add-distributor-address/add-distributor-address.component';
import { SetExitDateComponent } from './set-exit-date/set-exit-date.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { DisplayDistributorDetailsComponent } from './display-distributor-details/display-distributor-details.component';

const secondaryRoutes: Routes = [
  { path: 'place-product-order', component: PlaceProductOrderComponent},
  { path: 'display-product-orders', component: DisplayProductOrdersComponent},
  { path: 'set-exit-date', component: SetExitDateComponent},
  { path: 'track-product-order', component: TrackProductOrderComponent},
  { path: 'update-product-order', component: UpdateProductOrderComponent},
  { path: 'update-product-stock', component: UpdateProductStockComponent},
 
  { path: 'add-distributor-address', component: AddDistributorAddressComponent},
  { path: 'display-distributor', component: DisplayDistributorDetailsComponent}
  
];

@NgModule({
  declarations: [DisplayProductOrdersComponent, PlaceProductOrderComponent, TrackProductOrderComponent, UpdateProductOrderComponent, UpdateProductStockComponent, SetExitDateComponent, AddDistributorAddressComponent, AddDistributorAddressComponent, DisplayDistributorDetailsComponent],
  imports: [
    RouterModule.forChild(secondaryRoutes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [DisplayProductOrdersComponent, PlaceProductOrderComponent, TrackProductOrderComponent, UpdateProductOrderComponent, UpdateProductStockComponent, SetExitDateComponent, AddDistributorAddressComponent]
})
export class ProductsModule { }
