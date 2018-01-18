import { TestBed, inject } from '@angular/core/testing';

import { CompositeTestConnectionService } from './composite-test-connection.service';

describe('CompositeTestConnectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompositeTestConnectionService]
    });
  });

  it('should be created', inject([CompositeTestConnectionService], (service: CompositeTestConnectionService) => {
    expect(service).toBeTruthy();
  }));
});
