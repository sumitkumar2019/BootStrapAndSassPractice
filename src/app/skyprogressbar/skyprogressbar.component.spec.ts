import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyprogressbarComponent } from './skyprogressbar.component';

describe('SkyprogressbarComponent', () => {
  let component: SkyprogressbarComponent;
  let fixture: ComponentFixture<SkyprogressbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkyprogressbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyprogressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
