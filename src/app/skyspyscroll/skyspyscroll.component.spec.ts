import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyspyscrollComponent } from './skyspyscroll.component';

describe('SkyspyscrollComponent', () => {
  let component: SkyspyscrollComponent;
  let fixture: ComponentFixture<SkyspyscrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkyspyscrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyspyscrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
