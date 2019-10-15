import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDistributorAddressComponent } from './add-distributor-address.component';

describe('AddDistributorAddressComponent', () => {
  let component: AddDistributorAddressComponent;
  let fixture: ComponentFixture<AddDistributorAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDistributorAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDistributorAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
