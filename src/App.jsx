import React from 'react';
import { Routes, Route } from 'react-router-dom';

//Context
import ProductsContextProvider from './context/ProductsContextProvider';
import CartContextProvider from './context/CartContextProvider';

//Component
import HomePage from './components/home/HomePage';
import Layout from './components/layout/index';
import SideBar from './components/sidebar/SideBar';
import ProductDetails from './components/details/ProductDetails';

const App = () => {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/cart' element={<HomePage />} />
            <Route path='/list' element={<HomePage />} />
            <Route path='/details/:id' element={<ProductDetails />} />
          </Routes>
        </Layout>
        <SideBar />
      </CartContextProvider>
    </ProductsContextProvider>
  );
};

export default App;