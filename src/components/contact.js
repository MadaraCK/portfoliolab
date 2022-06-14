import React from 'react';

function Contact() {
    return (
        <section className="contact_section">
            <div className="contact">
                <h1 className="contact_main">
                    Skontaktuj się z nami
                </h1>
                <div className="contact_box">
                    <div className="contact_input">
                        <div className="name_input">
                            <p>
                                Wpisz swoje imię
                            </p>
                            <input type="text" placeholder="Krzysztof"/>
                        </div>
                        <div className="email_input">
                            <p>
                                Wpisz swój email
                            </p>
                            <input type="email" placeholder="abc@xyz.pl"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;