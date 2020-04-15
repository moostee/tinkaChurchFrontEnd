import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurchLeadersComponent } from './church-leaders.component';

describe('ChurchLeadersComponent', () => {
  let component: ChurchLeadersComponent;
  let fixture: ComponentFixture<ChurchLeadersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChurchLeadersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChurchLeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
