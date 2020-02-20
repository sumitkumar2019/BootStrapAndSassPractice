import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkycollapseComponent } from './skycollapse.component';

describe('SkycollapseComponent', () => {
  let component: SkycollapseComponent;
  let fixture: ComponentFixture<SkycollapseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkycollapseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkycollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
