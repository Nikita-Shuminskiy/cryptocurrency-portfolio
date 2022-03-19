import React from 'react';
import { useSelector } from "react-redux";
import { RequestStatusType } from '../../../Bll/App-reducer';
import { AppStateType } from '../../../Bll/Store/Store';
import { CryptocurrencyListType } from '../../../Dal/Types';
import { usePagination } from '../Hooks/UsePagination';
import './Paginator.scss'

type PaginatorType = {
  searchedAndFilterResult: CryptocurrencyListType[]
}
export const Paginator = ({searchedAndFilterResult}: PaginatorType) => {
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
      status === 'loading' || !searchedAndFilterResult.length ? '' :
        pages
        .map(page => {
          return <span
            className={pageCurrent === page ? 'page-link paginator__span_active' : 'page-link'}
            key={page}
            onClick={() => onPageChange(page)}>
                       {page}
                   </span>
        })
    }
  </div>
};

