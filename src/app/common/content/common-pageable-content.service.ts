import { ViewChild, OnInit, AfterViewInit } from "@angular/core";
import { MatPaginator, MatSort, MatTable } from "@angular/material";
import { merge, of as observableOf } from "rxjs";
import { catchError, map, startWith, switchMap } from "rxjs/operators";
import { CommonPageableDataSourceRepository } from "../repository/common-table-data-source-repository";

export abstract class CommonPageableContentService<T> implements AfterViewInit {
  data: T[] = [];
  resultsLength = 0;

  abstract displayedColumns: string[];

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  abstract get commonTableDataSource(): CommonPageableDataSourceRepository<T>;

  ngAfterViewInit() {
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          return this.commonTableDataSource!.pageableApi(
            this.sort.active,
            this.sort.direction,
            this.paginator.pageIndex,
            this.paginator.pageSize
          );
        }),
        map(data => {
          this.resultsLength = data.numberOfElements;
          return data.content;
        }),
        catchError(() => {
          return observableOf([]);
        })
      )
      .subscribe(data => {
        this.data = data;
      });
  }
}
