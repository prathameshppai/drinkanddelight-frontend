import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProductOrderComponent } from './update-product-order.component';

describe('UpdateProductOrderComponent', () => {
  let component: UpdateProductOrderComponent;
  let fixture: ComponentFixture<UpdateProductOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProductOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProductOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
