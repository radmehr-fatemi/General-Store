
import React, { useEffect, useState } from 'react';
import { useParams ,useNavigate } from 'react-router-dom';
import axios from 'axios';

//API
import { BASE_URL } from '../../server/api';

//Component
import SpinnerHome from '../shared/spinner/SpinnerHome';
import CardCart from '../shared/card cart/CardCart';

//Style
import styled from "./Category.module.css";

//SVG
import arrowBackSVG from "../../assets/svg/arrow-back.svg";

const Category = () => {

    const [ products ,setProducts ] = useState([]);
    const {category} = useParams()
    const navigate = useNavigate();
    
    useEffect( () => {
        const fetchAPI = async () => {
            const response = await axios.get(`${BASE_URL}/products/category/${category}`)
            setProducts( await response.data.products )
        }
        fetchAPI()
    } ,[])
    
    if ( !products.length ) return <SpinnerHome />
    if ( products.length ) return <div className={ styled.category } >
        <h3 onClick={ () => navigate(-1) }> <img src={arrowBackSVG} alt="arrow back photo" /> Back </h3>
        {
            products.map( product => <CardCart key={product.id} product={product} /> )
        }
    </div>
};

export default Category;