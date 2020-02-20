import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkytooltipComponent } from './skytooltip.component';

describe('SkytooltipComponent', () => {
  let component: SkytooltipComponent;
  let fixture: ComponentFixture<SkytooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkytooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkytooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
