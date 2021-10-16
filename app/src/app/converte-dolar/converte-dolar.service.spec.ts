import { TestBed } from '@angular/core/testing';

import { ConverteDolarService } from './converte-dolar.service';

describe('ConverteDolarService', () => {
  let service: ConverteDolarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConverteDolarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
