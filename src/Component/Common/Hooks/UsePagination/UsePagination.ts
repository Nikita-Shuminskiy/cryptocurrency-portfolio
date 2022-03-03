import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataAssetsPortionTC, getDataAssetsTotalTC } from '../../../../Bll/Crypt-coin-list-reducer';
import { changeUsersCurrentPage } from '../../../../Bll/Portfolio-reducer';
import { AppStateType } from '../../../../Bll/Store/Store';

type UsePaginationType = {
  pageSize: number;
}
type ReturnsUsePagination = {
  onPageChange: (page: number) => void;
  totalCount: number;
  pageCurrent: number;
}

export const usePagination = ({pageSize}: UsePaginationType): ReturnsUsePagination => {
  const dispatch = useDispatch()
  const dataAssetsLength = useSelector<AppStateType, number>((state) => state.cryptocurrencyList.totalAssetData.length)
  const pageCurrent = useSelector<AppStateType, number>(state => state.portfolio.currentUserPage)
  useEffect(() => {
    dispatch(getDataAssetsTotalTC())
  }, [dispatch])
  useEffect(() => {
    dispatch(getDataAssetsPortionTC(pageSize, (pageCurrent - 1) * pageSize))
  }, [dispatch, pageCurrent, pageSize])

  const onPageChange = (page: number) => dispatch(changeUsersCurrentPage(page))

  return {
    onPageChange,
    totalCount: dataAssetsLength,
    pageCurrent,
  }
}
