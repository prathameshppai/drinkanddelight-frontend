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
import { AuthenticationService } from '../authentication.service';

const secondaryRoutes: Routes = [
  { path: 'place-product-order', component: PlaceProductOrderComponent, canActivate: [AuthenticationService]},
  { path: 'display-product-orders', component: DisplayProductOrdersComponent, canActivate: [AuthenticationService]},
  { path: 'set-exit-date', component: SetExitDateComponent, canActivate: [AuthenticationService]},
  { path: 'track-product-order', component: TrackProductOrderComponent, canActivate: [AuthenticationService]},
  { path: 'update-product-order', component: UpdateProductOrderComponent, canActivate: [AuthenticationService]},
  { path: 'update-product-stock', component: UpdateProductStockComponent, canActivate: [AuthenticationService]},
  { path: 'add-distributor-address', component: AddDistributorAddressComponent, canActivate: [AuthenticationService]},
  { path: 'display-distributor', component: DisplayDistributorDetailsComponent, canActivate: [AuthenticationService]}

  
];

@NgModule({

  declarations: [
    DisplayProductOrdersComponent, 
    PlaceProductOrderComponent, 
    TrackProductOrderComponent, 
    UpdateProductOrderComponent, 
    UpdateProductStockComponent, 
    SetExitDateComponent, 
    AddDistributorAddressComponent, 
    DisplayDistributorDetailsComponent],


  imports: [
    RouterModule.forChild(secondaryRoutes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],

  exports: [DisplayProductOrdersComponent, 
    PlaceProductOrderComponent, 
    TrackProductOrderComponent, 
    UpdateProductOrderComponent, 
    UpdateProductStockComponent, 
    SetExitDateComponent, 
    AddDistributorAddressComponent]
})
export class ProductsModule { }
