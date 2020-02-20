import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkymediaobjectComponent } from './skymediaobject.component';

describe('SkymediaobjectComponent', () => {
  let component: SkymediaobjectComponent;
  let fixture: ComponentFixture<SkymediaobjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkymediaobjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkymediaobjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
