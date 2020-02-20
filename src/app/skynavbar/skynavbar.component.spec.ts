import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkynavbarComponent } from './skynavbar.component';

describe('SkynavbarComponent', () => {
  let component: SkynavbarComponent;
  let fixture: ComponentFixture<SkynavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkynavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkynavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
