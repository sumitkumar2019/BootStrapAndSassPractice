import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyflexComponent } from './skyflex.component';

describe('SkyflexComponent', () => {
  let component: SkyflexComponent;
  let fixture: ComponentFixture<SkyflexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkyflexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyflexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
