import { Injectable } from '@angular/core';
import { CommonService } from '../common/service/common-service';
import { CurriculumRepositoryService } from '../repository/curriculum-repository.service';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService implements CommonService {

  constructor(private curriculumRepositoryService: CurriculumRepositoryService) { }

  pageableData(pagination: import("../common/model/pagination").Pagination) {
    return this.curriculumRepositoryService.pageableApi(pagination);
  }
}
