import { TestBed, inject } from '@angular/core/testing';

import { MaleService } from './male.service';

describe('MaleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaleService]
    });
  });

  it('should be created', inject([MaleService], (service: MaleService) => {
    expect(service).toBeTruthy();
  }));
});
