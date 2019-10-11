import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayRawmaterialOrdersComponent } from './display-rawmaterial-orders/display-rawmaterial-orders.component';
import { PlaceRawmaterialOrdersComponent } from './place-rawmaterial-orders/place-rawmaterial-orders.component';
import { TrackRawmaterialOrderComponent } from './track-rawmaterial-order/track-rawmaterial-order.component';
import { UpdateRawmaterialOrderComponent } from './update-rawmaterial-order/update-rawmaterial-order.component';
import { UpdateRawmaterialStockComponent } from './update-rawmaterial-stock/update-rawmaterial-stock.component';
import { SetProcessDateComponent } from './set-process-date/set-process-date.component';



@NgModule({
  declarations: [DisplayRawmaterialOrdersComponent, PlaceRawmaterialOrdersComponent, TrackRawmaterialOrderComponent, UpdateRawmaterialOrderComponent, UpdateRawmaterialStockComponent, SetProcessDateComponent],
  imports: [
    CommonModule
  ]
})
export class RawmaterialsModule { }
