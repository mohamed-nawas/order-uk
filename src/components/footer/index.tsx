export default function Footer() {
    return (
        <footer className="olk-footer">
            <div className="olk-footer__contact-section">
                <div className="olk-footer__contact-section__banner-section">
                    {
                        process.env.NODE_ENV === 'production' ? (
                            <img src={`${import.meta.env.BASE_URL}/icons/logo-main-2.png`} alt="OrderUK Logo" className="olk-footer__contact-section__banner-section__img" />
                        ) : (
                            <img src="icons/logo-main-2.png" alt="OrderUK Logo" className="olk-footer__contact-section__banner-section__img" />
                        )
                    }
                    <div className="olk-footer__contact-section__banner-section__buttons-container">
                        {
                            process.env.NODE_ENV === 'production' ? (
                                [`${import.meta.env.BASE_URL}/icons/apple-play-ico.png`, `${import.meta.env.BASE_URL}/icons/google-play-ico.png`].map((icon, index) => (
                                    <div className="olk-footer__contact-section__banner-section__buttons-container__item" key={index}>
                                        <img src={icon} alt="Icons" />
                                    </div>
                                ))
                            ) : (
                                ['icons/apple-play-ico.png', 'icons/google-play-ico.png'].map((icon, index) => (
                                    <div className="olk-footer__contact-section__banner-section__buttons-container__item" key={index}>
                                        <img src={icon} alt="Icons" />
                                    </div>
                                ))
                            )
                        }
                    </div>
                    <p className="olk-footer__contact-section__banner-section__description font-15">Company # 490039-445, Registered with House of companies</p>
                </div>
                <div className="olk-footer__contact-section__social-section">
                    <p className="olk-footer__contact-section__social-section__title font-18">Get Exclusive Deals in your Inbox</p>
                    <div className="olk-footer__contact-section__social-section__input-container">
                        <input type="email" className="olk-footer__contact-section__social-section__input-container__input" placeholder="yourmail@mail.com" />
                        <input type="button" value="Subsribe" className="olk-footer__contact-section__social-section__input-container__btn font-18" />
                    </div>
                    <p className="olk-footer__contact-section__social-section__link font-13">we wont spam, read our <span>email policy</span></p>
                    <div className="olk-footer__contact-section__social-section__icons-container">
                        {
                            process.env.NODE_ENV === 'production' ? (
                                [`${import.meta.env.BASE_URL}/icons/facebook-ico.png`, `${import.meta.env.BASE_URL}/icons/instagram-ico.png`, 'icons/tiktok-ico.png', 'icons/snapchat-ico.png'].map((icon, index) => (
                                    <div className="olk-footer__contact-section__social-section__icons-container__item" key={index}>
                                        <img src={icon} alt="Icons" />
                                    </div>
                                ))
                            ) : (
                                ['icons/facebook-ico.png', 'icons/instagram-ico.png', 'icons/tiktok-ico.png', 'icons/snapchat-ico.png'].map((icon, index) => (
                                    <div className="olk-footer__contact-section__social-section__icons-container__item" key={index}>
                                        <img src={icon} alt="Icons" />
                                    </div>
                                ))
                            )
                        }
                    </div>
                </div>
                <div className="olk-footer__contact-section__links-section">
                    <div className="olk-footer__contact-section__links-section__pages-container">
                        <h6 className="olk-footer__contact-section__links-section__pages-container__title font-18">Legal Pages</h6>
                        <ul className="olk-footer__contact-section__links-section__pages-container__list">
                            {['Terms & Conditions', 'Privacy Policy', 'Cookie Policy', 'Modern Slavery Statement'].map((item, index) => (
                                <li className="olk-footer__contact-section__links-section__pages-container__list__item font-15" key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="olk-footer__contact-section__links-section__links-container">
                        <h6 className="olk-footer__contact-section__links-section__links-container__title font-18">Quick Links</h6>
                        <ul className="olk-footer__contact-section__links-section__links-container__list">
                            {['Get Help', 'Ride with us', 'Partner with us', 'Create a business account'].map((item, index) => (
                                <li className="olk-footer__contact-section__links-section__links-container__list__item font-15" key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="olk-footer__copyright-section font-15">
                <p className="olk-footer__copyright-section__copyright">Order.uk Copyright 2024, All Rights Reserved.</p>
                <div className="olk-footer__copyright-section__policy-container">
                    <p className="olk-footer__copyright-section__policy-container__policy">Privacy Policy</p>
                    <p className="olk-footer__copyright-section__policy-container__terms">Terms</p>
                    <p className="olk-footer__copyright-section__policy-container__pricing">Pricing</p>
                    <p className="olk-footer__copyright-section__policy-container__consent">Do not sell or share my personal information</p>
                </div>
            </div>
        </footer>
    );
}