import React from 'react';

//Component
import NavbarMobile from './NavbarMobile';
import NavbarWindows from './NavbarWindows';

const Footer = () => {
    return (
        <div>
            <NavbarWindows />
            <NavbarMobile />
        </div>
    );
};

export default Footer;