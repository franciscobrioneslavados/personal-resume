import { TestBed } from '@angular/core/testing';

import { DeviconService } from './devicon.service';

describe('DeviconService', () => {
  let service: DeviconService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeviconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
