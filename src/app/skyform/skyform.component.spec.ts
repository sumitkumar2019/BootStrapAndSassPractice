import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyformComponent } from './skyform.component';

describe('SkyformComponent', () => {
  let component: SkyformComponent;
  let fixture: ComponentFixture<SkyformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkyformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
