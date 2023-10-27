import React from 'react';

//Context
import ProductsContextProvider from './context/ProductsContextProvider';

//Component
import HomePage from './components/home/HomePage';
import Layout from './components/layout';

const App = () => {
  return (
    <ProductsContextProvider>
      <Layout>
        <HomePage />
      </Layout>
    </ProductsContextProvider>
  );
};

export default App;