import React from 'react';

function Contact() {
    return (
        <section className="contact_section" id="contact">
            <div className="contact">
                <h1 className="contact_main">
                    Skontaktuj się z nami
                </h1>
                <div
                    className="contact_box">
                    <div
                        className="contact_input">
                        <div
                            className="name_input">
                            <p
                                className="text_input">
                                Wpisz swoje imię
                            </p>
                            <input
                                type="text"
                                placeholder="Krzysztof"
                                className="input_text"
                            />
                        </div>
                        <div
                            className="email_input">
                            <p
                                className="text_input">
                                Wpisz swój email
                            </p>
                            <input
                                type="email"
                                placeholder="abc@xyz.pl"
                                className="input_text"
                            />
                        </div>
                    </div>
                    <div className="textarea_box">
                        <p>wpisz swoja wiadomosc</p>
                        <textarea
                            name="x"
                            id=""
                            cols="70"
                            rows="7"
                            placeholder=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.">
                        </textarea>
                        <div className="button_box">
                            <button className="send_message">Wyślij</button>
                        </div>
                    </div>
                </div>
                <footer className="footer">
                    <p
                        className="copyright"
                    >
                        Copyright by Coders Lab
                    </p>
                    <div className="box_social">
                        <div className="facebook"/>
                        <div className="instagram"/>
                    </div>
                </footer>
            </div>
        </section>
    )
        ;
}

export default Contact;