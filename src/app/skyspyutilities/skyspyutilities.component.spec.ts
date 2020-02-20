import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyspyutilitiesComponent } from './skyspyutilities.component';

describe('SkyspyutilitiesComponent', () => {
  let component: SkyspyutilitiesComponent;
  let fixture: ComponentFixture<SkyspyutilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkyspyutilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyspyutilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
