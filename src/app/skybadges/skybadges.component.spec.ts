import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkybadgesComponent } from './skybadges.component';

describe('SkybadgesComponent', () => {
  let component: SkybadgesComponent;
  let fixture: ComponentFixture<SkybadgesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkybadgesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkybadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
