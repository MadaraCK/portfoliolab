import React from 'react';
import Header from "./header";
import HowMuch from "./howMuch";
import '../scss/main.scss'
import AboutUs from "./aboutUs";

function Core(props) {
    return (
        <>
            <Header/>
            <HowMuch/>
            <AboutUs/>
        </>
    );
}

export default Core;