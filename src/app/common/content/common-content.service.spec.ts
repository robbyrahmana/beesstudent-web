import { TestBed } from '@angular/core/testing';

import { CommonContentService } from './common-content.service';

describe('CommonContentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonContentService = TestBed.get(CommonContentService);
    expect(service).toBeTruthy();
  });
});
