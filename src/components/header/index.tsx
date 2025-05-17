import * as React from 'react';

export default function Header() {
    const isProd = process.env.NODE_ENV === 'production';
    const basePath = import.meta.env.BASE_URL;
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
                            <img className='olk-header__ads-container__offer-container__icon' alt='Start Icon' src={isProd ? `${basePath}/icons/star-ico.png` : 'icons/star-ico.png'} />
                        }
                        <p className="olk-header__ads-container__offer-container__offer-title font-15">Get 5% Off your first order, <span className="olk-header__ads-container__offer-container__offer-title-styled">Promo: ORDER5</span></p>
                    </div>
                    <div className="olk-header__ads-container__profile-container">
                        {
                            <img alt='Profile Image' src={isProd ? `${basePath}/images/profile-image.png` : 'images/profile-image.png'} />
                        }
                        <p>Venessa Decker</p>
                    </div>
                    <div className="olk-header__ads-container__next-container">
                        <div className="olk-header__ads-container__next-container__address-container">
                            {
                                <img className='olk-header__ads-container__next-container__address-container__icon' alt='Marker Icon' src={isProd ? `${basePath}/icons/marker-ico.png` : 'icons/marker-ico.png'} />
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
                                <img alt='menu-toggler' src={isProd ? `${basePath}/icons/toggle-ico.png` : 'icons/toggle-ico.png'} />
                            }
                        </button>
                        {
                            <a className='navbar-brand' href={isProd ? '/order-uk' : '/'}><img className='olk-header__logo' alt='Logo Image' src={isProd ? `${basePath}/icons/logo-main.png` : 'icons/logo-main.png'} /></a>
                        }
                    </div>
                    <div className="collapse navbar-collapse" id="olk-navbar">
                        <ul className="nav navbar-nav">
                            <li><a href={isProd ? '/order-uk' : '/'}>Home</a></li>
                            <li><a href={isProd ? '/order-uk/#/menu' : '/menu'}>Browse Menu</a></li>
                            <li><a href={isProd ? '/order-uk/#/offers' : '/offers'}>Special Offers</a></li>
                            <li><a href={isProd ? '/order-uk/#/restaurants' : '/restaurants'}>Restaurants</a></li>
                            <li><a href={isProd ? '/order-uk/#/order-track' : '/order-track'}>Track Order</a></li>
                            <li className='olk-header__menu__login'><a href={isProd ? '/order-uk/#/login' : '/login'}><span className='glyphicon glyphicon-user'><p>Login</p></span></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}