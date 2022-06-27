import React from 'react';
import Header from "./header";
import HowMuch from "./howMuch";
import AboutUs from "./aboutUs";
import WhoWeHelp from "./WhoWeHelp";
import Contact from "./contact";
import '../scss/main.scss'
import '../scss/mobile.scss'

function Core() {
    return (
        <div className="container">
            <p className="alert">Na ten moment nie ma wersji mobilnej :(</p>
            <div className="container_page">
                <Header/>
                <HowMuch/>
                <AboutUs/>
                <WhoWeHelp/>
                <Contact/>
            </div>
        </div>
    );
}

export default Core;