import { TestBed, inject } from '@angular/core/testing';

import { RouterInfoService } from './router-info.service';

describe('RouterInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouterInfoService]
    });
  });

  it('should be created', inject([RouterInfoService], (service: RouterInfoService) => {
    expect(service).toBeTruthy();
  }));
});
