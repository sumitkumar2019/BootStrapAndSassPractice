import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkylistgroupComponent } from './skylistgroup.component';

describe('SkylistgroupComponent', () => {
  let component: SkylistgroupComponent;
  let fixture: ComponentFixture<SkylistgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkylistgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkylistgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
