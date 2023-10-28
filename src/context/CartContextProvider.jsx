import React, { createContext, useReducer } from 'react';

export const CartContext = createContext();

const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    checkout: false,
};

const reducer = (state, action) => {
    console.log(state.selectedItems)
    switch (action.type) {
        case "ADD_ITEM":
            if (!state.selectedItems.some(item => item.id === action.payload.id)) {
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1,
                })
            }
            return {
                ...state,
                selectedItems: [...state.selectedItems],
                checkout: false,
            }

        case "INCREMENT":
            if (state.selectedItems?.some(item => item.id === action.payload.id)) {
                const itemI = state.selectedItems.find(item => item.id === action.payload.id);
                itemI.quantity <= action.payload.stock && itemI.quantity++
            }
            return {
                ...state,
                selectedItems: [...state.selectedItems],
                checkout: false,
            }

        case "DECREMENT":
            if (state.selectedItems.some(item => item.id === action.payload.id)) {
                const itemD = state.selectedItems.find(item => item.id === action.payload.id);
                itemD.quantity > 1 && itemD.quantity--
            }
            return {
                ...state,
                selectedItems: [...state.selectedItems],
                checkout: false,
            }

        case "REMOVE_ITEM":
            if (state.selectedItems.some(item => item.id === action.payload.id)) {
                const indexR = state.selectedItems.findIndex(item => item.id === action.payload.id);
                state.selectedItems.splice(indexR, 1)
            }
            return {
                ...state,
                selectedItems: [...state.selectedItems],
                checkout: false,
            }

        case "CLEAR":
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkout: false,
            }

        case "CHECKOUT":
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkout: true,
            }

        default: return state
    }
};

const CartContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }} >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;