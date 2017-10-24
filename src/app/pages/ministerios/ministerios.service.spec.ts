import { TestBed, inject } from '@angular/core/testing';

import { MinisteriosService } from './ministerios.service';

describe('MinisteriosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MinisteriosService]
    });
  });

  it('should be created', inject([MinisteriosService], (service: MinisteriosService) => {
    expect(service).toBeTruthy();
  }));
});
