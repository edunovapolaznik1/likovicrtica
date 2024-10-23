import { TestBed } from '@angular/core/testing';

import { LikoviService } from './likovi.service';

describe('LikoviService', () => {
  let service: LikoviService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LikoviService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
