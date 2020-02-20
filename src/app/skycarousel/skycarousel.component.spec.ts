import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkycarouselComponent } from './skycarousel.component';

describe('SkycarouselComponent', () => {
  let component: SkycarouselComponent;
  let fixture: ComponentFixture<SkycarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkycarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkycarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
