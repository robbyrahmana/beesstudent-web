import { Pagination } from '../model/pagination';

export interface CommonTableDataSourceRepository {
    pageableApi(pagination: Pagination): any;
}
