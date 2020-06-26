import { TestBed } from '@angular/core/testing';

import { SyllabusDetailsService } from './syllabus-details.service';

describe('SyllabusDetailsService', () => {
  let service: SyllabusDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SyllabusDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
