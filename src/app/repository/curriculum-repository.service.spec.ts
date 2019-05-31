import { TestBed } from '@angular/core/testing';

import { CurriculumRepositoryService } from './curriculum-repository.service';

describe('CurriculumRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurriculumRepositoryService = TestBed.get(CurriculumRepositoryService);
    expect(service).toBeTruthy();
  });
});
