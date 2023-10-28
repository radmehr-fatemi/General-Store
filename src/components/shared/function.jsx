export const discountCount = ( price ,discount ) => {
    const priceCount = price * discount;
    const discounted = priceCount / 100;
    const finalPrice = price - discounted;
    return finalPrice
}

export const findQuantity = ( id ,data ) => {
    if ( data.some( item => item.id == id ) ) {
        const item = data.find( item => item.id == id );
        return item.quantity
    } else {
        return 0
    }
}