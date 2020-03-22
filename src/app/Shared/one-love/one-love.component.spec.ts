import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneLoveComponent } from './one-love.component';

describe('OneLoveComponent', () => {
  let component: OneLoveComponent;
  let fixture: ComponentFixture<OneLoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneLoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneLoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
