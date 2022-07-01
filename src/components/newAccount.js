import React, {useState,} from 'react';
import {createUserWithEmailAndPassword,} from 'firebase/auth'
import {auth} from '../firebase-config'
import {Link} from "react-router-dom";
import '../scss/main.scss'

function NewAccount() {
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [correct, setCorrect] = useState("")

    const register = async (e) => {
        e.preventDefault()

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
        if (registerPassword !== confirmPassword) {
            return setErrorPassword('Hasło musi być takie same');
        } else if (registerPassword < 6) {
            return setErrorPassword('Hasło musi mieć conajmniej 6 znaków');
        }else {
            setErrorPassword('');
        }

        if (registerEmail === ""){
            return setErrorEmail("email jest wymagany");
        }else if (!regex.test(registerEmail)){
            return setErrorEmail("nie prawidłowy email");
        }else {
            setErrorEmail('');
        }

        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            setCorrect('Pomyślnie zarejstrowano');
        } catch {
            console.log('cos poszło nie tak');
        }
    }
    return (
        <div className="Login" onSubmit={register}>
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
            <form>
                <section className="form_login">
                    <div className="text_login">
                        Zarejstruj się
                    </div>
                    <div className="form">
                        <p className="failed">{errorEmail}</p>
                        <p className="failed">{errorPassword}</p>
                        <p className="correct">{correct}</p>
                        <div className="input_form">
                            <p className="email">
                                Email
                            </p>
                            <input
                                className="form form_email"
                                type="email" name="email"
                                onChange={(event => {
                                    setRegisterEmail(event.target.value)
                                })}
                            />
                            <p className="password">
                                Hasło
                            </p>
                            <input
                                className="form form_password"
                                type="password"
                                name="password"
                                onChange={(event => {
                                    setRegisterPassword(event.target.value)
                                })}
                            />
                            <p className="password">
                                Powtórz hasło
                            </p>
                            <input
                                className="form form_password"
                                type="password"
                                name="password"
                                onChange={(event => {
                                    setConfirmPassword(event.target.value)
                                })}
                            />
                        </div>
                    </div>
                    <div className="form_reg">
                        <ul className="ul_form">
                            <li>
                                <Link
                                    className="create_acc both_link_form"
                                    to="/login">
                                    Zaloguj się
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="login_form both_link_form"
                                    onClick={register}
                                    to="/"
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