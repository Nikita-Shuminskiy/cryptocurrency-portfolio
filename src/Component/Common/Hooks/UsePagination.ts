import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../../Store/Store';
import { changeUsersCurrentPage } from '../../../Bll/Portfolio-reducer';
import { getDataAssetsTotalTC, getDataAssetsPortionTC } from '../../../Bll/Crypt-coin-list-reducer';

type UsePaginationType = {
    pageSize: number;
}

type UsePagination = {
    onPageChange: (page: number) => void;
    totalCount: number;
    pageCurrent: number;
}

export const usePagination = ({ pageSize }: UsePaginationType): UsePagination  => {
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
        pageCurrent
    }
}