import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRawmaterialStockComponent } from './update-rawmaterial-stock.component';

describe('UpdateRawmaterialStockComponent', () => {
  let component: UpdateRawmaterialStockComponent;
  let fixture: ComponentFixture<UpdateRawmaterialStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateRawmaterialStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRawmaterialStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
