import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolPackageComponent } from './school-package.component';

describe('SchoolPackageComponent', () => {
  let component: SchoolPackageComponent;
  let fixture: ComponentFixture<SchoolPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
