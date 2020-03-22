import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioSermonsComponent } from './audio-sermons.component';

describe('AudioSermonsComponent', () => {
  let component: AudioSermonsComponent;
  let fixture: ComponentFixture<AudioSermonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioSermonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioSermonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
