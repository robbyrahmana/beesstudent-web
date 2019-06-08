import { Observable } from "rxjs";
import { Pageable } from "../model/Pageable";

export interface CommonPageableDataSourceRepository<T> {
  pageableApi(
    sort: string,
    order: string,
    page: number,
    size: number
  ): Observable<Pageable<T>>;
}
