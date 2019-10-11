import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRawmaterialOrderComponent } from './update-rawmaterial-order.component';

describe('UpdateRawmaterialOrderComponent', () => {
  let component: UpdateRawmaterialOrderComponent;
  let fixture: ComponentFixture<UpdateRawmaterialOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateRawmaterialOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRawmaterialOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
