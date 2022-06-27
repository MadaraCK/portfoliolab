import React, {useEffect, useState} from 'react';
import {
    Link,
} from 'react-router-dom'
import {Link as LinkRoll,} from 'react-scroll'
import {auth} from '../firebase-config'
import '../scss/main.scss'
import {onAuthStateChanged, signOut} from "firebase/auth";

function Header() {
    const [user, setUser] = useState({})
    const [login, setLogin] = useState('')


    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })


    const logout = async () => {
        await signOut(auth);
    }


    return (
        <>
            <header className="header_layout clearfix">
                <section className="img_header"/>
                <section className="main_section clearfix">

                    <ul className="ul_main_login clearfix">
                        {user?.email}
                        <li className="li_nav clearfix">
                            <Link
                                className="link"
                                to="/login"
                            >
                                Zaloguj
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="link link_account"
                                to="/newAccount"
                            >
                                Załóż konto
                            </Link>
                        </li>
                        <li
                            className="logout"
                            onClick={logout}
                        >
                            wyloguj
                        </li>
                    </ul>
                    <ul className="ul_main_nav">
                        <li className="start li_main_nav">
                            <LinkRoll
                                className="roll"
                                to="/"
                                smooth={true}
                                offset={50}
                                duration={500}
                            >
                                Start
                            </LinkRoll>
                        </li>
                        <li className="li_main_nav">
                            <LinkRoll
                                className="roll"
                                to="how"
                                smooth={true}
                                offset={50}
                                duration={500}
                            >
                                O co chodzi?
                            </LinkRoll>
                        </li>
                        <li className="li_main_nav">
                            <LinkRoll
                                className="roll"
                                to="us"
                                smooth={true}
                                offset={50}
                                duration={500}
                            >
                                O nas
                            </LinkRoll>
                        </li>
                        <li className="li_main_nav">
                            <LinkRoll
                                className="roll"
                                to="help"
                                smooth={true}
                                offset={50}
                                duration={500}
                            >
                                Fundacja i organizacje
                            </LinkRoll>
                        </li>
                        <li className="li_main_nav">
                            <LinkRoll
                                className="roll"
                                to="contact"
                                smooth={true}
                                offset={50}
                                duration={500}
                            >
                                Kontakt
                            </LinkRoll>
                        </li>
                    </ul>
                    <section className="start_helping">
                        <div className="text_helping">
                            <p>
                                Zacznij pomagać!
                            </p>
                            <p className="text_start_helping">
                                Oddaj niechciane rzeczy w zaufane ręce
                            </p>
                            <div className="decoration"/>
                            <div className="collection">
                                <ul className="collection_ul">
                                    <li>
                                        <Link
                                            className="link_collection"
                                            to="/login"
                                        >
                                            oddaj rzeczy
                                        </Link>
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

        </>
    );
}

export default Header;