import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
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
  ],
  exports: [DisplayRawmaterialOrdersComponent, PlaceRawmaterialOrdersComponent, TrackRawmaterialOrderComponent, UpdateRawmaterialOrderComponent, UpdateRawmaterialStockComponent, SetProcessDateComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class RawmaterialsModule { } 
