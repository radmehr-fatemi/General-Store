import React, { useContext } from 'react';

//Style
import styled from "./HomePage.module.css";

//Context
import { ProductsContext } from '../../context/ProductsContextProvider';

//Component
import CardHome from '../shared/card home/CardHome';
import SpinnerHome from '../shared/spinner/SpinnerHome';
import SpinnerError from '../shared/spinner/SpinnerHomeError';
import ScrollToTop from '../shared/ScrollToTop';

const HomePage = () => {

    const { data, loading, error } = useContext(ProductsContext).state;

    if (loading) return <SpinnerHome />
    if (error) return <SpinnerError />

    if (data.products?.length) {
        const products = data.products;

        return <div className={styled.homePage} >
            {
                products.map(product => <CardHome key={product.id} product={product} />)
            }
            <ScrollToTop />
        </div>
    }
}

export default HomePage;