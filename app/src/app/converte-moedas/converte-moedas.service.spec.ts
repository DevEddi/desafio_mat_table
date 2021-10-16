import { TestBed } from '@angular/core/testing';

import { ConverteMoedasService } from './converte-moedas.service';

describe('ConverteMoedasService', () => {
  let service: ConverteMoedasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConverteMoedasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
