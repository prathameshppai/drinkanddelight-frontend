import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayProductOrdersComponent } from './display-product-orders/display-product-orders.component';
import { PlaceProductOrderComponent } from './place-product-order/place-product-order.component';
import { TrackProductOrderComponent } from './track-product-order/track-product-order.component';
import { UpdateProductOrderComponent } from './update-product-order/update-product-order.component';
import { UpdateProductStockComponent } from './update-product-stock/update-product-stock.component';
import { SetExitDateComponent } from './set-exit-date/set-exit-date.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [DisplayProductOrdersComponent, PlaceProductOrderComponent, TrackProductOrderComponent, UpdateProductOrderComponent, UpdateProductStockComponent, SetExitDateComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [DisplayProductOrdersComponent, PlaceProductOrderComponent, TrackProductOrderComponent, UpdateProductOrderComponent, UpdateProductStockComponent, SetExitDateComponent]
})
export class ProductsModule { }
