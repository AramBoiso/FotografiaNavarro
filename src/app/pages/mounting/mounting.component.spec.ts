import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MountingComponent } from './mounting.component';

describe('MountingComponent', () => {
  let component: MountingComponent;
  let fixture: ComponentFixture<MountingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MountingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
