import React, {useState, useEffect} from 'react';
import '../scss/main.scss'
import {Link} from "react-router-dom";

function NewAccount() {
    const initialValues = {
        email: "",
        password: ""
    }
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormValues({...formValues, [name]: value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validete(formValues))
        setIsSubmit(true)
    }
    useEffect(() => {
        console.log(formErrors)
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues)
        }
    }, [formErrors])
    const validete = (values) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
            errors.email = 'email jest obowiązkowy'
        } else if (!regex.test(values.email)){
            errors.email = 'email jest nie prawidłowy'
        }
        if (!values.password) {
            errors.password = 'hasło jest obowiązkowe'
        }else if (values.password.length < 4){
            errors.password = 'hasło musi byc dłuższe niz 4 znaki'
        }else if (values.password.length > 10){
            errors.password = 'hasło nie może być dłuższe niz 10 znaków'
        }
        return errors;
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
            <form onSubmit={handleSubmit}>
                <section className="form_login">
                    <div className="text_login">
                        Zarejstruj się
                    </div>
                    <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
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
                            <p
                                className="error">
                                {formErrors.email}
                            </p>
                            <p className="password">
                                Hasło
                            </p>
                            <input className="form form_password"
                                   type="password"
                                   name="password"
                                   value={formValues.password}
                                   onChange={handleChange}
                            />
                            <p
                                className="error">
                                {formErrors.password}
                            </p>
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
                                      onClick={handleSubmit}
                                      to="/login"
                                >
                                    Załóż konto
                                </Link>
                            </li>
                        </ul>

                    </div>
                </section>
            </form>
        </div>
    );
}

export default NewAccount;