import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbtisComponent } from './cbtis.component';

describe('CbtisComponent', () => {
  let component: CbtisComponent;
  let fixture: ComponentFixture<CbtisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbtisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbtisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
