import { TestBed } from '@angular/core/testing';

import { QuizListingService } from './quiz-listing.service';

describe('QuizListingService', () => {
  let service: QuizListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
