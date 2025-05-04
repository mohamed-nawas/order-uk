import * as React from 'react';

export default function Header() {
    React.useEffect(() => {
        const updatePadding = () => {
            const header = document.querySelector('.olk-header');
            if (header) {
                const headerHeight = header.getBoundingClientRect().height;
                document.body.style.paddingTop = `${headerHeight}px`;
            }
        };
        updatePadding();
        window.addEventListener('resize', updatePadding);
        return () => { window.removeEventListener('resize', updatePadding); };
    }, []);

    return (
        <header className="olk-header">
            <div className="container-fluid">
                <div className="olk-header__ads-container">
                    <div className="olk-header__ads-container__offer-container">
                        {
                            process.env.NODE_ENV === 'production' ? (
                                <img src={`${import.meta.env.BASE_URL}/icons/star-ico.png`} alt="Star Icon" className="olk-header__ads-container__offer-container__icon" />
                            ) : (
                                <img src="icons/star-ico.png" alt="Star Icon" className="olk-header__ads-container__offer-container__icon" />
                            )
                        }
                        <p className="olk-header__ads-container__offer-container__offer-title font-15">Get 5% Off your first order, <span className="olk-header__ads-container__offer-container__offer-title-styled">Promo: ORDER5</span></p>
                    </div>
                    <div className="olk-header__ads-container__profile-container">
                        {
                            process.env.NODE_ENV === 'production' ? ( <img src={`${import.meta.env.BASE_URL}/images/profile-image.png`} alt="Profile Image" /> ) : ( <img src="images/profile-image.png" alt="Profile Image" /> )
                        }
                        <p>Venessa Decker</p>
                    </div>
                    <div className="olk-header__ads-container__next-container">
                        <div className="olk-header__ads-container__next-container__address-container">
                            {
                                process.env.NODE_ENV === 'production' ? (
                                    <img src={`${import.meta.env.BASE_URL}/icons/marker-ico.png`} alt="Marker Icon" className="olk-header__ads-container__next-container__address-container__icon" />
                                ) : (
                                    <img src="icons/marker-ico.png" alt="Marker Icon" className="olk-header__ads-container__next-container__address-container__icon" />
                                )
                            }
                            <p className="olk-header__ads-container__next-container__address-container__address font-15">Regent Street, A4, A4201, London</p>
                            <p className="olk-header__ads-container__next-container__address-container__option font-14">Change Location</p>
                        </div>
                        <div className="olk-header__ads-container__next-container__cart-container">
                            <img src="icons/basket-ico.png" alt="Basket Icon" className="olk-header__ads-container__next-container__cart-container__basket-icon" />
                            <p className="font-16">23 Items</p>
                            <p className="font-16">GBP 79.89</p>
                            <img src="icons/forward-ico.png" alt="Forward Icon" className="olk-header__ads-container__next-container__cart-container__forward-icon" />
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-inverse">
                    <div className="navbar-header">
                        <button className="navbar-toggle" type='button' data-toggle='collapse' data-target='#olk-navbar'>
                            {
                                process.env.NODE_ENV === 'production' ? (<img src={`${import.meta.env.BASE_URL}/icons/toggle-ico.png`} alt='menu-toggler' />) : (<img src='icons/toggle-ico.png' alt='menu-toggler' />)
                            }
                        </button>
                        {
                            process.env.NODE_ENV === 'production' ? (
                                <a href="/order-lk" className="navbar-brand"><img src={`${import.meta.env.BASE_URL}/icons/logo-main.png`} alt="Logo Image" className="olk-header__logo" /></a>
                            ) : (<a href="/order-lk" className="navbar-brand"><img src='icons/logo-main.png' alt="Logo Image" className="olk-header__logo" /></a>)
                        }
                    </div>
                    <div className="collapse navbar-collapse" id="olk-navbar">
                        {
                            process.env.NODE_ENV === 'production' ? (
                                <ul className="nav navbar-nav">
                                    <li><a href="/order-lk">Home</a></li>
                                    <li><a href="/order-lk/#/menu">Browser Menu</a></li>
                                    <li><a href="/order-lk/#/offers">Special Offers</a></li>
                                    <li><a href="/order-lk/#/restaurents">Restaurants</a></li>
                                    <li><a href="/order-lk/#/order-track">Track Order</a></li>
                                    <li className="olk-header__menu__login"><a href='/login'><span className="glyphicon glyphicon-user"><p>Login</p></span></a></li>
                                </ul>
                            ) : (
                                <ul className="nav navbar-nav">
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/menu">Browser Menu</a></li>
                                    <li><a href="/offers">Special Offers</a></li>
                                    <li><a href="/restaurents">Restaurants</a></li>
                                    <li><a href="/order-track">Track Order</a></li>
                                    <li className="olk-header__menu__login"><a href='/login'><span className="glyphicon glyphicon-user"><p>Login</p></span></a></li>
                                </ul>
                            )
                        }
                    </div>
                </nav>
            </div>
        </header>
    );
}