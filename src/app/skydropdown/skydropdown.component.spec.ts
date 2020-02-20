import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkydropdownComponent } from './skydropdown.component';

describe('SkydropdownComponent', () => {
  let component: SkydropdownComponent;
  let fixture: ComponentFixture<SkydropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkydropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkydropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
