import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyiconsComponent } from './skyicons.component';

describe('SkyiconsComponent', () => {
  let component: SkyiconsComponent;
  let fixture: ComponentFixture<SkyiconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkyiconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyiconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
