export const discountCount = ( price ,discount ) => {
    const priceCount = price * discount;
    const discounted = priceCount / 100;
    const finalPrice = price - discounted;
    return finalPrice
}