import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceRawmaterialOrdersComponent } from './place-rawmaterial-orders.component';

describe('PlaceRawmaterialOrdersComponent', () => {
  let component: PlaceRawmaterialOrdersComponent;
  let fixture: ComponentFixture<PlaceRawmaterialOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceRawmaterialOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceRawmaterialOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
