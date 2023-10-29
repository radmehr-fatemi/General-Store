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

export const shortHandler = ( text ,digit ) => {
    const splitText = text.split("");
    const finalText = splitText.slice( 0 ,digit )
    return finalText
}


export const totalCounter = state => {
    const itemsCounter = state.selectedItems.reduce( (acc ,cur) => acc + cur.quantity ,0);
    const total = state.selectedItems.reduce( (acc ,cur) => acc + ( cur.price * cur.quantity ) ,0)
    const totalDiscounts = state.selectedItems.reduce( (acc ,cur) => acc +  ((cur.price * cur.discountPercentage / 100) * cur.quantity) ,0)
    const totalPrice = total - totalDiscounts
    return { itemsCounter ,totalDiscounts ,totalPrice ,total }
}