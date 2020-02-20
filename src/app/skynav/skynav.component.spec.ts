import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkynavComponent } from './skynav.component';

describe('SkynavComponent', () => {
  let component: SkynavComponent;
  let fixture: ComponentFixture<SkynavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkynavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkynavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
