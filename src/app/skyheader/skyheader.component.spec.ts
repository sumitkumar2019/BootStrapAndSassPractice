import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyheaderComponent } from './skyheader.component';

describe('SkyheaderComponent', () => {
  let component: SkyheaderComponent;
  let fixture: ComponentFixture<SkyheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkyheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
