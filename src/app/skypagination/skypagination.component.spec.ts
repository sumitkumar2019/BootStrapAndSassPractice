import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkypaginationComponent } from './skypagination.component';

describe('SkypaginationComponent', () => {
  let component: SkypaginationComponent;
  let fixture: ComponentFixture<SkypaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkypaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkypaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
