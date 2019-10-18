import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaceProductOrderComponent } from './place-product-order.component';

describe('PlaceProductOrderComponent', () => {
  let component: PlaceProductOrderComponent;
  let fixture: ComponentFixture<PlaceProductOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceProductOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceProductOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
