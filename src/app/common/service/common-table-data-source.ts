import { Pagination } from '../model/pagination';

export interface CommonTableDataSource {
    pageableData(pagination: Pagination): any;
}
