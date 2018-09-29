import { TestBed, inject } from '@angular/core/testing';

import { RegistersService } from './registers.service';

describe('RegistersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistersService]
    });
  });

  it('should be created', inject([RegistersService], (service: RegistersService) => {
    expect(service).toBeTruthy();
  }));
});
