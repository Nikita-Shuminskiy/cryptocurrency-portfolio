export const formatPricer = (price: any, countAfterDot: number) => {
    return Number(price).toFixed(countAfterDot)
}
