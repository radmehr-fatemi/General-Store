import React, { useEffect, useState } from 'react';
import axios from 'axios';

//Style
import styled from "./Search.module.css";

//API
import { BASE_URL } from '../../server/api';

//Component
import SpinnerHome from '../shared/spinner/SpinnerHome';
import CardCart from '../shared/card cart/CardCart';

const Search = ({ value }) => {

    const [ products ,setProducts ] = useState([]);
    
    useEffect( () => {
        const fetchAPI = async () => {
            const response = await axios.get(`${BASE_URL}/products/search?q=${value}`)
            setProducts( await response.data.products )
            
        }
        fetchAPI()
    } ,[value])
    
    if (  !products.length && value.length ) return <div className='absolute top-12 w-full h-screen bg-blue-900 bg-opacity-40 ' ><SpinnerHome /></div>

    if ( value.length ) return <div className={ styled.search } >
        {
            products.map( product => <CardCart key={product.id} product={product} /> )
        }
        </div>
};

export default Search;