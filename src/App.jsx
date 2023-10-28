import React from 'react';

//Context
import ProductsContextProvider from './context/ProductsContextProvider';

//Component
import HomePage from './components/home/HomePage';
import Layout from './components/layout/index';
import SideBar from './components/sidebar/SideBar';

const App = () => {
  return (
    <ProductsContextProvider>
      <Layout>
        <HomePage />
      </Layout>
      <SideBar />
    </ProductsContextProvider>
  );
};

export default App;