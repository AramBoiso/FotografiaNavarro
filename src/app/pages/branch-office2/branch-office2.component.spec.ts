import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchOffice2Component } from './branch-office2.component';

describe('BranchOffice2Component', () => {
  let component: BranchOffice2Component;
  let fixture: ComponentFixture<BranchOffice2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchOffice2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchOffice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
