import { Injectable } from '@angular/core';
import { CommonRepository } from '../common/repository/common-repository';
import { Curriculum } from '../model/curriculum';
import { CommonTableDataSourceRepository } from '../common/repository/common-table-data-source-repository';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurriculumRepositoryService extends CommonRepository<Curriculum> implements CommonTableDataSourceRepository {
  
  _httpClient: HttpClient = this.httpClient;

  constructor(private httpClient: HttpClient) {
    super();
  }

  pageableApi(pagination: import("../common/model/pagination").Pagination) {
    return this.get('api/curriculum/pageable?page=' + pagination.page + '&size=' + pagination.size).subscribe(
      response => {
        console.log(response);
      }
    );
  }

}
