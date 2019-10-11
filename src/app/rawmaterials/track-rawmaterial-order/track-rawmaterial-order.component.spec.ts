import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackRawmaterialOrderComponent } from './track-rawmaterial-order.component';

describe('TrackRawmaterialOrderComponent', () => {
  let component: TrackRawmaterialOrderComponent;
  let fixture: ComponentFixture<TrackRawmaterialOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackRawmaterialOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackRawmaterialOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
