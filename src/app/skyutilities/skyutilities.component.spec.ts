import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyutilitiesComponent } from './skyutilities.component';

describe('SkyutilitiesComponent', () => {
  let component: SkyutilitiesComponent;
  let fixture: ComponentFixture<SkyutilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkyutilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyutilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
