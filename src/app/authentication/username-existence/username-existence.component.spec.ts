import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameExistenceComponent } from './username-existence.component';

describe('UsernameExistenceComponent', () => {
  let component: UsernameExistenceComponent;
  let fixture: ComponentFixture<UsernameExistenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernameExistenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernameExistenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
