import React, { createContext, useEffect, useReducer } from 'react';

//API
import { BASE_URL } from '../server/api';
import axios from 'axios';

export const ListsContext = createContext();

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

const ListsContextProvider = ({ children }) => {

    const [ state ,dispatch ] = useReducer( reducer ,initialState );

    useEffect( () => {
        axios
        .get( `${BASE_URL}/products/categories` )
        .then( response => dispatch({ type: "SUCCESS" ,payload: response.data }) )
        .catch( error => dispatch({ type: "FAILURE" }) )
    } ,[])
    
    return (
        <ListsContext.Provider value={ {state} } >
            {children}
        </ListsContext.Provider>
    );
};

export default ListsContextProvider;