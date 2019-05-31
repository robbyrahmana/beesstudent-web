import { TestBed } from '@angular/core/testing';

import { CommonTableDataSourceService } from './common-table-data-source.service';

describe('CommonTableDataSourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonTableDataSourceService<any> = TestBed.get(CommonTableDataSourceService);
    expect(service).toBeTruthy();
  });
});
