import { Injectable } from "@angular/core";
import { CommonRepository } from "../common/repository/common-repository";
import { Curriculum } from "../model/curriculum";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CommonPageableDataSourceRepository } from "../common/repository/common-table-data-source-repository";

@Injectable({
  providedIn: "root"
})
export class CurriculumRepositoryService extends CommonRepository<Curriculum>
  implements CommonPageableDataSourceRepository<Curriculum> {
  _httpClient: HttpClient = this.httpClient;

  constructor(private httpClient: HttpClient) {
    super();
  }

  pageableApi(
    sort: string,
    order: string,
    page: number,
    size: number
  ): Observable<Curriculum> {
    return this.pageable("api/curriculum/pageable", sort, order, page, size);
  }
}
