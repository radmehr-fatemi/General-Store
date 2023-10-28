import React from 'react';
import Footer from '../footer/Footer';
import NavbarMobile from '../navbar/NavbarMobile';
import NavbarWindows from '../navbar/NavbarWindows';

const Layout = ({ children }) => {
    return (
        <>
        <NavbarMobile />
        <NavbarWindows />
            {children}
            <Footer />
        </>
    );
};

export default Layout