import React from 'react';

function WhoWeHelp() {
    return (
        <section className="who_we_help" id="help">
            <div className="box_help">
                <header className="box_header">
                    <div className="text_help">
                        <h1 className="main_text">
                            Komu Pomagamy?
                        </h1>
                    </div>
                    <div className="pagination_help">
                        <p className="pagi_border">
                            fundacjom
                        </p>
                        <p>
                            Organizacjom pozarządoym
                        </p>
                        <p>
                            Lokalnym Zbiórką
                        </p>
                    </div>
                    <div className="text_pagi">
                        <p>
                            W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz
                            sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                        </p>
                    </div>
                </header>
                <div className="box_who_help">
                    <div className="foundations1 foundations ">
                        <div className="left">
                            <h2 className="name_fund">
                                Fundacja “Dbam o Zdrowie”
                            </h2>
                            <p className="fundation_quest">
                                Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.
                            </p>
                        </div>
                        <div className="right">
                            <p>
                                ubrania, jedzenie, sprzęt AGD, meble, zabawki
                            </p>
                        </div>
                    </div>
                    <div className="foundations2 foundations">
                        <div className="left">
                            <h2 className="name_fund">
                                Fundacja “Dla dzieci”
                            </h2>
                            <p className="fundation_quest">
                                Cel i misja: Pomoc dzieciom z ubogich rodzin.
                            </p>
                        </div>
                        <div className="right">
                            <p>
                                ubrania, meble, zabawki
                            </p>
                        </div>
                    </div>
                    <div className="foundations3 foundations">
                        <div className="left">
                            <h2 className="name_fund">
                                Fundacja “Bez domu”
                            </h2>
                            <p className="fundation_quest">
                                Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.
                            </p>
                        </div>
                        <div className="right">
                            <p>
                                ubrania, jedzenie, ciepłe koce
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhoWeHelp;