import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkymodalComponent } from './skymodal.component';

describe('SkymodalComponent', () => {
  let component: SkymodalComponent;
  let fixture: ComponentFixture<SkymodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkymodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkymodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
