import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRawmaterialOrdersComponent } from './display-rawmaterial-orders.component';

describe('DisplayRawmaterialOrdersComponent', () => {
  let component: DisplayRawmaterialOrdersComponent;
  let fixture: ComponentFixture<DisplayRawmaterialOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayRawmaterialOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayRawmaterialOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
