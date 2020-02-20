import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyforminputComponent } from './skyforminput.component';

describe('SkyforminputComponent', () => {
  let component: SkyforminputComponent;
  let fixture: ComponentFixture<SkyforminputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkyforminputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyforminputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
