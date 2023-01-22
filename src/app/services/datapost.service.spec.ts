import { TestBed } from '@angular/core/testing';

import { DatapostService } from './datapost.service';

describe('DatapostService', () => {
  let service: DatapostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatapostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
