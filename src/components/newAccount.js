import React, {useState} from 'react';
import '../scss/main.scss'
import {Link} from "react-router-dom";

function NewAccount(props) {
    const initialValues = {
        email: "",
        password: ""
    }
    const [formValues, setFormValues] = useState(initialValues)

    const handleChange = (e) =>{
        console.log(e.target)
    }
    return (
        <div className="Login">
            <section className="menu clearfix">
                <div className="reg_login">
                    <p>Zaloguj</p>
                    <Link className="link_login both_link_form " to="/newAccount">
                        Załóż konto
                    </Link>
                </div>
                <div className="menu_login">
                    <ul className="ul_login_nav">
                        <li className="login li_login_nav">
                            <Link className="roll_login both_link_form"
                                  to="/"
                                  smooth={true}
                                  offset={50}
                                  duration={500}>
                                Start
                            </Link>
                        </li>
                        <li className="li_login_nav">
                            <Link className="roll_login both_link_form"
                                  to="/"
                                  smooth={true}
                                  offset={50}
                                  duration={500}>
                                O co chodzi?
                            </Link>
                        </li>
                        <li className="li_login_nav">
                            <Link className="roll_login both_link_form"
                                  to="/"
                                  smooth={true}
                                  offset={50}
                                  duration={500}>
                                O nas
                            </Link>
                        </li>
                        <li className="li_login_nav">
                            <Link className="roll_login both_link_form"
                                  to="/"
                                  smooth={true}
                                  offset={50}
                                  duration={500}>
                                Fundacja i organizacje
                            </Link>
                        </li>
                        <li className="li_login_nav">
                            <Link className="roll_login both_link_form"
                                  to="/"
                                  smooth={true}
                                  offset={50}
                                  duration={500}>
                                Kontakt
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="form_login">
                <div className="text_login">
                    Zarejstruj się
                </div>
                <div className="form">
                    <div className="input_form">
                        <p className="email">
                            Email
                        </p>
                        <input
                            className="form form_email"
                            type="email" name="email"
                            value={formValues.email}
                            onChange={handleChange}
                        />
                        <p className="password">
                            Hasło
                        </p>
                        <input className="form form_password"
                               type="password"
                               name="password"
                               value={formValues.password}
                               onChange={handleChange}
                        />
                        <p className="password">
                            Powtórz hasło
                        </p>
                        <input className="form form_password"
                               type="password"
                               name="password"
                               value={formValues.password}
                               onChange={handleChange}

                        />
                    </div>
                </div>
                <div className="form_reg">
                    <ul className="ul_form">
                        <li>
                            <Link className="create_acc both_link_form"
                                  to="/login">
                                Zaloguj się
                            </Link>
                        </li>
                        <li>
                            <Link className="login_form both_link_form"
                                  to="/login">
                                Załóż konto
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default NewAccount;