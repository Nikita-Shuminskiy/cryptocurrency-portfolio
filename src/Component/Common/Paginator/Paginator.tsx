import React from 'react';
import './Paginator.scss'

type PaginatorType = {
    currentPage: number
    pageSize: number
    totalCount: number
    onPageChange: (page: number) => void

}
export const Paginator = (props: PaginatorType) => {
    let pageCount = Math.ceil(props.totalCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return <div className="paginator">
        {
            pages
                .map(page => {
                    return <span className={props.currentPage === page ? "paginator__selected" : "paginator__unselected"}
                                 key={page}
                                 onClick={() => props.onPageChange(page)}>
                       {page}
                   </span>
                })}
    </div>
};

