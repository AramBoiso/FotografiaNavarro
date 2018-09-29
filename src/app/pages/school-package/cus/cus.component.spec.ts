import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CusComponent } from './cus.component';

describe('CusComponent', () => {
  let component: CusComponent;
  let fixture: ComponentFixture<CusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
