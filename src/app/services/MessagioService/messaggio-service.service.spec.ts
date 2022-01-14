import { TestBed } from '@angular/core/testing';

import { MessaggioServiceService } from './messaggio-service.service';

describe('MessaggioServiceService', () => {
  let service: MessaggioServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessaggioServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
