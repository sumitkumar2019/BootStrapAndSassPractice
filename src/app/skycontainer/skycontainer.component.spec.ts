import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkycontainerComponent } from './skycontainer.component';

describe('SkycontainerComponent', () => {
  let component: SkycontainerComponent;
  let fixture: ComponentFixture<SkycontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkycontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkycontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
