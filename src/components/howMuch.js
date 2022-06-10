import React from 'react';
import {Link} from "react-router-dom";

function HowMuch() {
    return (
        <>
            <section className="how_much" id="how">
                <div className="statistics" >
                    <h2>
                        10
                    </h2>
                    <p
                        className="space_stat"
                    >
                        oddanych worków
                    </p>
                    <p
                        className="lorem_stat"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a
                        elit
                        viverra elementuma.
                        Aliquam erat volutpat.
                    </p>
                </div>
                <div className="statistics">
                    <h2>
                    5
                    </h2>
                    <p
                        className="space_stat"
                    >
                        wspartych organizacji
                    </p>
                    <p
                        className="lorem_stat">
                        Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a
                        elit
                        viverra elementuma.
                        Aliquam erat volutpat.

                    </p>
                </div>
                <div className="statistics">
                    <h2>
                        7
                    </h2>
                    <p
                        className="space_stat"
                    >
                        zorganizowanych zbiórek
                    </p>
                    <p
                        className="lorem_stat"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a
                        elit
                        viverra elementuma.
                        Aliquam erat volutpat.
                    </p>
                </div>
            </section>
            <section className="four_steps">
                <h1>
                    Wystarczą 4 proste kroki
                </h1>
                <div className="decoration_steps"/>
            </section>
            <section className="steps">
                <div className="instruction">
                    <p className="inst_text1 inst_text">
                        Wybierz rzeczy
                    </p>
                    <p className="instruction_text">
                        ubrania, zabawki, sprzęt i inne
                    </p>
                </div>
                <div className="instruction">
                    <p className="inst_text2 inst_text">
                        Spakuj je
                    </p>
                    <p className="instruction_text">
                        skorzystaj z worków na śmieci
                    </p>
                </div>
                <div className="instruction">
                    <p className="inst_text3 inst_text">
                        Zdecyduj komu chcesz pomóc
                    </p>
                    <p className="instruction_text">
                        wybierz zaufane miejsce
                    </p>
                </div>
                <div className="instruction">
                    <p className="inst_text4 inst_text">
                        Zamów kuriera
                    </p>
                    <p className="instruction_text">
                        kurier przyjedzie w dogodnym terminie
                    </p>
                </div>
            </section>
            <section className="button_inst">
                <Link className="link_give" to="/login">
                    oddaj rzeczy
                </Link>
            </section>
        </>
    );
}

export default HowMuch;