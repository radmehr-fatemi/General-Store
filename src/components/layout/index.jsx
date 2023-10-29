import React from 'react';
import Footer from '../footer/Footer';
import NavbarMobile from '../navbar/NavbarMobile';
import NavbarWindows from '../navbar/NavbarWindows';

const Layout = ({ children }) => {
    return (
        <div className='min-h-screen flex flex-col justify-between' >
        <NavbarMobile />
        <NavbarWindows />
            {children}
            <Footer />
        </div>
    );
};

export default Layout