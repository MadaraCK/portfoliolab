import React from 'react';
import '../scss/main.scss'

import {

    Link,

} from 'react-router-dom'
import HowMuch from "./howMuch";

function Header() {
    return (
        <>
            <header className="header_layout clearfix">
                <section className="img_header"/>
                <section className="main_section clearfix">

                    <ul className="ul_main_login clearfix">
                        <li className="li_nav clearfix">
                            <Link className="link" to="/login">Zaloguj</Link>
                        </li>
                        <li>
                            <Link className="link link_account" to="/newAccount">Załóż konto</Link>
                        </li>
                    </ul>
                    <ul className="ul_main_nav">
                        <li className="start li_main_nav">Start</li>
                        <li className="li_main_nav">O co chodzi?</li>
                        <li className="li_main_nav">O nas</li>
                        <li className="li_main_nav"> Fundacja i organizacje</li>
                        <li className="li_main_nav">Kontakt</li>
                    </ul>
                    <section className="start_helping">
                        <div className="text_helping">
                            <p>Zacznij pomagać!</p>
                            <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                            <div className="decoration"/>
                            <div className="collection">
                                <ul className="collection_ul">
                                    <li>
                                        <Link className="link_collection" to="/login">oddaj rzeczy</Link>
                                    </li>
                                    <li>
                                        zorganizuj zbiórke
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>
            </header>
            <HowMuch/>
        </>
    );
}

export default Header;