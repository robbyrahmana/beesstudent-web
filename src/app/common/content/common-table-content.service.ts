import { ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { CommonTableDataSourceService } from '../service/common-table-data-source.service';
import { CommonTableDataSource } from '../service/common-table-data-source';
import { SelectionModel } from '@angular/cdk/collections';

export abstract class CommonTableContentService<T> implements OnInit {

    dataSource: CommonTableDataSourceService<T>;
    selection = new SelectionModel<T>(false, []);

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    abstract get commonTableDataSource(): CommonTableDataSource;
    abstract get displayedColumns(): any;
    abstract dataClick(row: T): any;

    ngOnInit(): void {
        this.dataSource = new CommonTableDataSourceService<T>(this.paginator, this.sort, this.commonTableDataSource);
    }

    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: T): string {
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'}`;
    }
}
