import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyfilterComponent } from './skyfilter.component';

describe('SkyfilterComponent', () => {
  let component: SkyfilterComponent;
  let fixture: ComponentFixture<SkyfilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkyfilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
