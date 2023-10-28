import React, { useContext } from 'react';

//Style
import styled from "./HomePage.module.css";

//Context
import { ProductsContext } from '../../context/ProductsContextProvider';

//Component
import CardHome from '../shared/card home/CardHome';

const HomePage = () => {

    const { data, loading, error } = useContext(ProductsContext).state;

    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>Error...</h1>

    if (data.products.length) {
        const products = data.products;
        console.log(products)

        return <div className={styled.homePage} >
            {
                products.map(product => <CardHome key={product.id} product={product} />)
            }
        </div>
    }
}

export default HomePage;