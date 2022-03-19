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
  const {onPageChange, pageCurrent} = usePagination({pageSize})
  const status = useSelector<AppStateType, RequestStatusType>(state => state.app.status)
  return <div className="paginator">
    {
      status === 'loading' || !searchedAndFilterResult.length ? '' :
        searchedAndFilterResult
        .map((page, index) => {
          if (index === 0) return
          return <span
            className={pageCurrent === index ? 'page-link paginator__span_active' : 'page-link'}
            key={index}
            onClick={() => onPageChange(index)}>
                       {index}
                   </span>
        })
    }
  </div>
};

