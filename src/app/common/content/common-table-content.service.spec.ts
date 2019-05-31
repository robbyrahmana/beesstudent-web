import { TestBed } from '@angular/core/testing';

import { CommonTableContentService } from './common-table-content.service';

describe('CommonTableContentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonTableContentService = TestBed.get(CommonTableContentService);
    expect(service).toBeTruthy();
  });
});
