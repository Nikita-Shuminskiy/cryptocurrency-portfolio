import React, { useState } from 'react';
import  './Paginator.scss'

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
    const portionCount = Math.ceil(pageCount / props.pageSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * 10 + 1
    const rightPortionPageNumber = portionNumber * props.pageSize
    return <div className={"paginator other"}>
        {
            pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <span className={props.currentPage === p ? 'paginator__selectedPage' : 'paginator__pageNumber'}
                                 key={p}
                                 onClick={() => props.onPageChange(p)}>
                       {p}
                   </span>
                })}
    </div>
};

