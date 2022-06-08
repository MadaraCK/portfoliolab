import React from 'react';
import '../scss/main.scss'
import {Link} from "react-router-dom";

function Login() {
    return (
        <div className="Login">
            <section className="menu clearfix">
                <div className="reg_login">
                    <p>Zaloguj</p>
                    <Link className="link_login" to="/newAccount">Załóż konto</Link>
                </div>
                <div className="menu_login">
                    <ul className="ul_login_nav">
                        <li className="login li_login_nav">
                            <Link className="roll_login" to="/" spy={true} smooth={true} offset={50} duration={500} >Start</Link>
                        </li>
                        <li className="li_login_nav">
                            <Link className="roll_login" to="/" spy={true} smooth={true} offset={50} duration={500} >O co chodzi?</Link>
                        </li>
                        <li className="li_login_nav">
                            <Link  className="roll_login" to="/" spy={true} smooth={true} offset={50} duration={500} >O nas</Link>
                        </li>
                        <li className="li_login_nav">
                            <Link className="roll_login" to="/" spy={true} smooth={true} offset={50} duration={500} >Fundacja i organizacje</Link>
                        </li>
                        <li className="li_login_nav">
                            <Link className="roll_login" to="/" spy={true} smooth={true} offset={50} duration={500} >Kontakt</Link>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default Login;