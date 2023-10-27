import React, { createContext, useEffect, useReducer, useState } from 'react';

//API
import { BASE_URL } from '../server/api';
import axios from 'axios';

export const ProductsContext = createContext();

const initialState = {
    loading: true,
    data: [],
    error: '',
};

const reducer = ( state ,action ) => {
    switch( action.type ) {
        case "SUCCESS":
            return {
                loading: false,
                data: action.payload,
                error: '',
            }

        case "FAILURE":
            return {
                loading: false,
                data: [],
                error: 'An error'
            }

        default: return state
    }
}

const ProductsContextProvider = ({ children }) => {

    const [ state ,dispatch ] = useReducer( reducer ,initialState );

    useEffect( () => {
        axios
        .get( `${BASE_URL}/products` )
        .then( response => dispatch({ type: "SUCCESS" ,payload: response.data }) )
        .catch( error => dispatch({ type: "FAILURE" }) )
    } ,[])
    
    return (
        <ProductsContext.Provider value={ {state} } >
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsContextProvider;