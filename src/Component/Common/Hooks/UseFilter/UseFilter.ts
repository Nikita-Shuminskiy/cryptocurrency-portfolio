import { useMemo } from 'react'
import { CryptocurrencyListType } from "../../../../Dal/Types";

type UseFilterType = {
  totalAssetData: CryptocurrencyListType[]
  sort: string
}
type ReturnsUseFilter = {
  searchedAndFilterResult: CryptocurrencyListType[]
}

export const useFilter = ({
                            totalAssetData,
                            sort,
                          }: UseFilterType): ReturnsUseFilter => {
  const sortedRestaurants = useMemo(() => {
    if (!!sort) {
      return totalAssetData.sort((a, b) =>
        a.name.localeCompare(b.name),
      )
    }
    return totalAssetData
  }, [sort, totalAssetData])

  const searchedAndFilterResult = useMemo(() => {
    if (!!sortedRestaurants) {
      return sortedRestaurants.filter((restaurant: CryptocurrencyListType) =>
        restaurant.name.toLowerCase().includes(sort.toLowerCase()),
      )
    }
    return totalAssetData
  }, [sort, sortedRestaurants])

  return {
    searchedAndFilterResult,
  }
}
