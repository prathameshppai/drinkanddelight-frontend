import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetProcessDateComponent } from './set-process-date.component';

describe('SetProcessDateComponent', () => {
  let component: SetProcessDateComponent;
  let fixture: ComponentFixture<SetProcessDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetProcessDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetProcessDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
