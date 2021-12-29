import { TestBed } from '@angular/core/testing';

import { RastoService } from './rasto.service';

describe('RastoService', () => {
  let service: RastoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RastoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
