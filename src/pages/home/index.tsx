// import * as React from 'react';

import Header from "../../components/header";

export default function Home() {
    return (
        <div className="olk-home">
            <Header />
            <div className="container-fluid">
                <div className="olk-home__banner">
                    <div className="olk-home__banner__content-container">
                        <p className="olk-home__banner__content-container__slug">Order Restaurant food, takeaway and groceries</p>
                        <h1 className="olk-home__banner__content-container__title">Feast Your Senses,</h1>
                        <h1 className="olk-home__banner__content-container__title olk-home__banner__content-container__title-styled">Fast and Fresh</h1>
                        <p className="olk-home__banner__content-container__slug">Enter a postcode to see what we deliver</p>
                        <div className="olk-home__banner__content-container__input-container">
                            <input type="text" className="olk-home__banner__content-container__input-container__input" placeholder="e.g. EC4R 3TE" />
                            <div className="olk-home__banner__content-container__input-container__btn-small">
                                {
                                    process.env.NODE_ENV === 'production' ? (
                                        <img src={`${import.meta.env.BASE_URL}/icons/right-arrow-ico.png`} alt="Right Arrow" />
                                    ) : (
                                        <img src="icons/right-arrow-ico.png" alt="Right Arrow" />
                                    )
                                }
                            </div>
                            <input type="button" value="Search" className="olk-home__banner__content-container__input-container__btn font-16" />
                        </div>
                    </div>
                    {
                        process.env.NODE_ENV === 'production' ? (
                            <img src={`${import.meta.env.BASE_URL}/images/banner-bg-image.png`} alt="Banner Bg Image" className="olk-home__banner__bg-image" />
                        ) : (
                            <img src="images/banner-bg-image.png" alt="Banner Bg Image" className="olk-home__banner__bg-image" />
                        )
                    }
                </div>
            </div>
        </div>
    );
}