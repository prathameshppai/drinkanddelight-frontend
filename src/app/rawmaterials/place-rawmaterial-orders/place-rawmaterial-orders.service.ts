import { Injectable } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaceRawmaterialOrdersService {

  url = 'http://localhost:8080';
}