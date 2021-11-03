import React from 'react';
import './Paginator.scss'
import { usePagination } from '../Hooks';


export const Paginator = () => {
    const pageSize = 10
    const { onPageChange, totalCount, pageCurrent} = usePagination({pageSize})
    let pageCount = Math.ceil(totalCount / pageSize)
    const pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return <div className="paginator">
        {
            pages
                .map(page => {
                    return <span
                        className={pageCurrent === page ? 'paginator__span paginator__span_active' : 'paginator__span'}
                        key={page}
                        onClick={() => onPageChange(page)}>
                       {page}
                   </span>
                })
        }
    </div>
};

