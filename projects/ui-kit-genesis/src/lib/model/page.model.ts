
export interface Page<T> {
    content: Array<T>;
    totalElements: number;
    totalPages: number;
    size: number;
    pageable: Pageable;
}

export interface  Pageable {
    pageNumber: number;
    totalPages: number;
}