export const formatPricer = (price: number | string, countAfterDot: number) => {
    return Number(price).toFixed(countAfterDot)
}
