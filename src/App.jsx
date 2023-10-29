import React from 'react';
import { Routes, Route } from 'react-router-dom';

//Context
import ProductsContextProvider from './context/ProductsContextProvider';
import CartContextProvider from './context/CartContextProvider';
import ListsContextProvider from './context/ListsContextProvider';

//Component
import HomePage from './components/home/HomePage';
import Layout from './components/layout/index';
import SideBar from './components/sidebar/SideBar';
import ProductDetails from './components/details/ProductDetails';
import Cart from './components/cart/Cart';
import List from './components/list/List';
import Category from './components/category/Category';

const App = () => {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <ListsContextProvider>
          <Layout>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/list/*' element={<List />} >
                <Route path=':category' element={<Category />} />
              </Route>
              <Route path='/details/:id' element={<ProductDetails />} />
            </Routes>
          </Layout>
          <SideBar />
        </ListsContextProvider>
      </CartContextProvider>
    </ProductsContextProvider>
  );
};

export default App;