import React from 'react';
import '../scss/main.scss'
import Header from "./header";
import HowMuch from "./howMuch";
import AboutUs from "./aboutUs";

function Core() {
    return (
        <>
            <Header/>
            <HowMuch/>
            <AboutUs/>
        </>
    );
}

export default Core;