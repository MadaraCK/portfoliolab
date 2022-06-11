import React from 'react';
import '../scss/main.scss'
import Header from "./header";
import HowMuch from "./howMuch";
import AboutUs from "./aboutUs";
import WhoWeHelp from "./WhoWeHelp";

function Core() {
    return (
        <>
            <Header/>
            <HowMuch/>
            <AboutUs/>
            <WhoWeHelp/>
        </>
    );
}

export default Core;