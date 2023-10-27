import React, { useContext } from 'react';

//Context
import { ProductsContext } from '../../context/ProductsContextProvider';

const HomePage = () => {

    const { data, loading, error } = useContext(ProductsContext).state;

    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>Error...</h1>

    if (data.products.length) {
        const products = data.products;
        console.log(products)

        return products.map(product => <div key={product.id} >
            <img src={product.images[2]} alt="" />
        </div>)
    }
}

export default HomePage;