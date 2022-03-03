import React from 'react';
import { useSelector } from "react-redux";
import { RequestStatusType } from '../../../Bll/App-reducer';
import { AppStateType } from '../../../Bll/Store/Store';
import { usePagination } from '../Hooks/UsePagination';
import './Paginator.scss'

export const Paginator = () => {
  const pageSize = 10
  const {onPageChange, totalCount, pageCurrent} = usePagination({pageSize})
  const status = useSelector<AppStateType, RequestStatusType>(state => state.app.status)
  let pageCount = Math.ceil(totalCount / pageSize)
  const pages = []
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i)
  }
  return <div className="paginator">
    {
      status === 'loading' ? '' :
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

