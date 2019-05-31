import { DataSource } from '@angular/cdk/table';
import { Pagination, Sort } from '../model/pagination';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { MatPaginator, MatSort } from '@angular/material';
import { CommonTableDataSource } from './common-table-data-source';

export class CommonTableDataSourceService<T> extends DataSource<T> {

    private data: T[];
    private pagination: Pagination;

    constructor(
        private paginator: MatPaginator,
        private sort: MatSort,
        private commonTableDataSource: CommonTableDataSource
    ) {
        super();
    }

    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    connect(): Observable<T[]> {
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        const dataMutations = [
            observableOf(this.data),
            this.paginator.page,
            this.sort.sortChange
        ];

        // Set the paginator's length
        // this.paginator.length = this.data.length;

        return merge(...dataMutations).pipe(map(() => {
            return this.commonTableDataSource.pageableData(this.tablePagination);
        }));
    }

    disconnect() { }

    get startIndex() {
        return this.paginator.pageIndex * this.paginator.pageSize;
    }

    get tablePagination() {
        this.pagination = new Pagination(
            this.startIndex, this.paginator.pageSize,
            new Sort(this.sort.active, this.sort.direction)
        );

        return this.pagination;
    }
}
