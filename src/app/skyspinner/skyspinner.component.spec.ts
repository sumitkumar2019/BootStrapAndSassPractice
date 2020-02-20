import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyspinnerComponent } from './skyspinner.component';

describe('SkyspinnerComponent', () => {
  let component: SkyspinnerComponent;
  let fixture: ComponentFixture<SkyspinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkyspinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyspinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
