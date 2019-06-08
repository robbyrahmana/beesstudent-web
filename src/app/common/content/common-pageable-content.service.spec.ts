import { TestBed } from "@angular/core/testing";

import { CommonPageableContentService } from "./common-pageable-content.service";

describe("CommonTableContentService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: CommonPageableContentService<any> = TestBed.get(
      CommonPageableContentService
    );
    expect(service).toBeTruthy();
  });
});
