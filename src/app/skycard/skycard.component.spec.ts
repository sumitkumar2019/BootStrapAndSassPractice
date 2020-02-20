import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkycardComponent } from './skycard.component';

describe('SkycardComponent', () => {
  let component: SkycardComponent;
  let fixture: ComponentFixture<SkycardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkycardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
