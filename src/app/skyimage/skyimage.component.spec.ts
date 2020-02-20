import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyimageComponent } from './skyimage.component';

describe('SkyimageComponent', () => {
  let component: SkyimageComponent;
  let fixture: ComponentFixture<SkyimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkyimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
