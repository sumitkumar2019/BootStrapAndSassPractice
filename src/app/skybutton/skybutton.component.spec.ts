import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkybuttonComponent } from './skybutton.component';

describe('SkybuttonComponent', () => {
  let component: SkybuttonComponent;
  let fixture: ComponentFixture<SkybuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkybuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkybuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
