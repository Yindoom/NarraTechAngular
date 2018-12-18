import { TestBed } from '@angular/core/testing';

import { BooltostringService } from './booltostring.service';

describe('BooltostringService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BooltostringService = TestBed.get(BooltostringService);
    expect(service).toBeTruthy();
  });
});
