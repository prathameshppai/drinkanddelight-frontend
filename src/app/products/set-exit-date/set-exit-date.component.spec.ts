import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetExitDateComponent } from './set-exit-date.component';

describe('SetExitDateComponent', () => {
  let component: SetExitDateComponent;
  let fixture: ComponentFixture<SetExitDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetExitDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetExitDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
