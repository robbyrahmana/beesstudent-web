export class Pagination {
    size: number;
    page: number;
    sort: Sort;
    constructor(
        size: number,
        page: number,
        sort: Sort
    ) { 
        size = size;
        page = page;
        sort = sort;
    }
}

export class Sort {
    constructor(
        sortBy: String,
        direction: string
    ) { }
}
