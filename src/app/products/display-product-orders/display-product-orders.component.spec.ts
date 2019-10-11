import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayProductOrdersComponent } from './display-product-orders.component';

describe('DisplayProductOrdersComponent', () => {
  let component: DisplayProductOrdersComponent;
  let fixture: ComponentFixture<DisplayProductOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayProductOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayProductOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
