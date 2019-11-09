import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayRawmaterialOrdersComponent } from './display-rawmaterial-orders/display-rawmaterial-orders.component';
import { PlaceRawmaterialOrdersComponent } from './place-rawmaterial-orders/place-rawmaterial-orders.component';
import { TrackRawmaterialOrderComponent } from './track-rawmaterial-order/track-rawmaterial-order.component';
import { UpdateRawmaterialOrderComponent } from './update-rawmaterial-order/update-rawmaterial-order.component';
import { UpdateRawmaterialStockComponent } from './update-rawmaterial-stock/update-rawmaterial-stock.component';
import { SetProcessDateComponent } from './set-process-date/set-process-date.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { PlaceRawmaterialOrdersService} from './place-rawmaterial-orders/place-rawmaterial-orders.service'
import { HttpClientModule} from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { DisplaySupplierDetailsComponent } from './display-supplier-details/display-supplier-details.component';
import { AuthenticationService } from '../authentication.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; 
import {NgxPaginationModule} from 'ngx-pagination';







const secondaryRoutes: Routes = [
  { path: 'place-rawmaterial-order', component: PlaceRawmaterialOrdersComponent, canActivate: [AuthenticationService]},
  { path: 'display-rawmaterial-orders', component: DisplayRawmaterialOrdersComponent, canActivate: [AuthenticationService]},
  { path: 'set-process-date', component: SetProcessDateComponent, canActivate: [AuthenticationService]},
  { path: 'track-rawmaterial-order', component: TrackRawmaterialOrderComponent, canActivate: [AuthenticationService]},
  { path: 'update-rawmaterial-order', component: UpdateRawmaterialOrderComponent, canActivate: [AuthenticationService]},
  { path: 'update-rawmaterial-stock', component: UpdateRawmaterialStockComponent, canActivate: [AuthenticationService]},
  { path: 'display-supplier', component: DisplaySupplierDetailsComponent, canActivate: [AuthenticationService]}

];

@NgModule({

  declarations: [
    DisplayRawmaterialOrdersComponent, 
    PlaceRawmaterialOrdersComponent, 
    TrackRawmaterialOrderComponent, 
    UpdateRawmaterialOrderComponent, 
    UpdateRawmaterialStockComponent, 
    SetProcessDateComponent, DisplaySupplierDetailsComponent],


  imports: [
    RouterModule.forChild(secondaryRoutes),
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
    
  ],

  exports: [
    DisplayRawmaterialOrdersComponent, 
    PlaceRawmaterialOrdersComponent, 
    TrackRawmaterialOrderComponent, 
    UpdateRawmaterialOrderComponent, 
    UpdateRawmaterialStockComponent, 
    SetProcessDateComponent,
    Ng2SearchPipeModule],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  
  providers: [ 
   ],

})
export class RawmaterialsModule { } 
