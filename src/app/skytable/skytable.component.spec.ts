import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkytableComponent } from './skytable.component';

describe('SkytableComponent', () => {
  let component: SkytableComponent;
  let fixture: ComponentFixture<SkytableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkytableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkytableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
