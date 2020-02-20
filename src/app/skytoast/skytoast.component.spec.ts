import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkytoastComponent } from './skytoast.component';

describe('SkytoastComponent', () => {
  let component: SkytoastComponent;
  let fixture: ComponentFixture<SkytoastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkytoastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkytoastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
