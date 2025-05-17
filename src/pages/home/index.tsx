import * as React from 'react';

import Header from "../../components/header";
import Footer from "../../components/footer";
import Select from 'react-select';
import categories from '../../data/categories';
import restaurents from '../../data/restaurents';
import discounts from '../../data/discounts';
import started from '../../data/started';

interface menuOptions { value: string; label: string; }

export default function Home() {
    const menuItems: menuOptions[] = [
        { value: 'pizza', label: 'Pizza & Fast Food' },
        { value: 'vegan', label: 'Vegan' },
        { value: 'sushi', label: 'Sushi' },
        { value: 'others', label: 'Others' },
    ]
    const menu2Items: menuOptions[] = [
        { value: 'How does Order.UK work?', label: 'How does Order.UK work?' },
        { value: 'What payment methods are accepted?', label: 'What payment methods are accepted?' },
        { value: 'Can I track my order in real-time?', label: 'Can I track my order in real-time?' },
        { value: 'Are there any special discounts or promotions available?', label: 'Are there any special discounts or promotions available?' },
        { value: 'Is Order.UK available in my area?', label: 'Is Order.UK available in my area?' },
    ]
    const [selectedMenuItem, setSelectedMenuItem] = React.useState<menuOptions | null>(menuItems[0]);
    const [selectedMenu2Item, setSelectedMenu2Item] = React.useState<menuOptions | null>(menu2Items[0]);
    const isProd = process.env.NODE_ENV === 'production';
    const basePath = import.meta.env.BASE_URL;

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
                                    <img alt='Right Arrow' src={isProd ? `${basePath}/icons/right-arrow-ico.png` : 'icons/right-arrow-ico.png'} />
                                }
                            </div>
                            <input type="button" value="Search" className="olk-home__banner__content-container__input-container__btn font-16" />
                        </div>
                    </div>
                    {
                        <img className='olk-home__banner__bg-image' alt='Banner Bg Image' src={isProd ? `${basePath}/images/banner-bg-image.png` : 'images/banner-bg-image.png'} />
                    }
                </div>
                <div className="olk-home__discount-restaurant-section">
                    <div className="olk-home__discount-restaurant-section__header">
                        <h4 className="olk-home__discount-restaurant-section__header__title font-32">Discount Offers</h4>
                        <div className="olk-home__discount-restaurent-section__header__menu-container mobile">
                            <Select options={menuItems} value={selectedMenuItem} onChange={(selected: menuOptions | null) => setSelectedMenuItem(selected)} className='olk-home__discount-restaurent-section__header__menu-container__item font-16' styles={{ menu: (provided) => ({ ...provided, fontSize: '2.33vw', zIndex: '1000' }), control: (provided) => ({ ...provided, borderRadius: '10px', backgroundColor: 'transparent', border: '1px solid var(--color-black-02)', fontSize: '2.33vw' }) }} />
                        </div>
                        <ul className="olk-home__discount-restaurant-section__header__menu-container desktop">
                            {menuItems.map((item) => (
                                <li key={item.value} onClick={() => setSelectedMenuItem(item)}
                                    className={`olk-home__discount-restaurant-section__header__menu-container__item font-16 ${selectedMenuItem?.value === item.value ? 'olk-home__discount-restaurant-section__header__menu-container__item-active' : ''}`}
                                >{item.label}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="olk-home__discount-restaurant-section__content-container">
                        {
                            discounts.map((discount) => (
                                <div className='olk-home__discount-restaurant-section__content-container__item' style={{ '--bg-desktop': `url('${isProd ? basePath + discount.desktopImgPath : discount.desktopImgPath}')`, '--bg-mobile': `url('${isProd ? basePath + discount.mobileImgPath : discount.mobileImgPath}')` } as React.CSSProperties} key={discount.id}>
                                    <div className="olk-home__discount-restaurant-section__content-container__item__discount-container"><p className="olk-home__discount-restaurant-section__content-container__item__discount-container__value font-18">{discount.discount}</p></div>
                                    <h4 className="olk-home__discount-restaurant-section__content-container__item__title font-18">{discount.title}</h4>
                                    <p className="olk-home__discount-restaurant-section__content-container__item__slug font-24">{discount.slug}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="olk-home__category-section">
                <div className="container-fluid">
                    <h4 className="olk-home__category-section__title font-32">OrderUK Popular Categories</h4>
                    <div className="olk-home__category-section__content-container">
                        {
                            categories.map((category) => (
                                <div className="olk-home__category-section__content-container__item-container" key={category.id}>
                                    {
                                        <img className='olk-home__category-section__content-container__item-container__img' alt={category.imgAlt} src={isProd ? `${basePath}/${category.imgPath}` : `${category.imgPath}`} />
                                    }
                                    <h5 className="olk-home__category-section__content-container__item-container__title font-18">{category.title}</h5>
                                    <p className="olk-home__category-section__content-container__item-container__slug font-13">{category.slug}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="olk-home__restaurent-section">
                    <h4 className="olk-home__restaurent-section__title font-32">Popular Restaurants</h4>
                    <div className="olk-home__restaurent-section__content-container">
                        {
                            restaurents.map((restaurent) => (
                                <div className="olk-home__restaurent-section__content-container__item-container" key={restaurent.id}>
                                    {
                                        <img className='olk-home__restaurent-section__content-container__item-container__img' alt={restaurent.imgAlt} src={isProd ? `${basePath}/${restaurent.imgPath}` : `${restaurent.imgPath}`} />
                                    }
                                    <h5 className="olk-home__restaurent-section__content-container__item-container__title font-18">{restaurent.title}</h5>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="olk-home__download-ad-section" style={{ '--bg-download-ad-desktop': `url('${isProd ? basePath + 'images/download-ad-bg.png' : 'images/download-ad-bg.png'}')`, '--bg-download-ad-mobile1': `url('${isProd ? basePath + 'images/download-ad-mobile1-bg.png' : 'images/download-ad-mobile1-bg.png'}')` } as React.CSSProperties}>
                    <div className="olk-home__download-ad-section__content-container">
                        <h2 className="olk-home__download-ad-section__content-container__title"><span><img src={isProd ? `${basePath}icons/favicon-ico.png` : 'icons/favicon-ico.png'} alt="Favicon Icon" /></span>ing is more</h2>
                        <h3 className="olk-home__download-ad-section__content-container__slug-1 font-54"><span>Personalised</span> & Instant</h3>
                        <p className="olk-home__download-ad-section__content-container__slug-2 font-24">Download the Order.lk app for faster ordering</p>
                        <div className="olk-home__download-ad-section__content-container__btn-container">
                            <div className="olk-home__download-ad-section__content-container__btn-container__button">
                                <img src={isProd ? `${basePath}icons/apple-play-ico.png` : 'icons/apple-play-ico.png'} alt="Apple Play Icon" />
                            </div>
                            <div className="olk-home__download-ad-section__content-container__btn-container__button">
                                <img src={isProd ? `${basePath}icons/google-play-ico.png` : 'icons/google-play-ico.png'} alt="Google Play Icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="olk-home__get-started-section">
                    {
                        started.map((item, index) => (
                            <div className='olk-home__get-started-section__item-container' key={index} style={{ '--bg-get-started-desktop': `url('${isProd ? basePath + item.desktopImgPath : item.desktopImgPath}')`, '--bg-get-started-mobile': `url('${isProd ? basePath + item.mobileImgPath : item.mobileImgPath}')` } as React.CSSProperties}>
                                <div className="olk-home__get-started-section__item-container__content-container">
                                    <h5 className="olk-home__get-started-section__item-container__content-container__heading font-18">{item.header}</h5>
                                    <div className="olk-home__get-started-section__item-container__content-container__text-container">
                                        <h6 className="olk-home__get-started-section__item-container__content-container__text-container__title font-18">{item.title}</h6>
                                        <p className="olk-home__get-started-section__item-container__content-container__text-container__slug font-44">{item.slug}</p>
                                        <div className="olk-home__get-started-section__item-container__content-container__text-container__btn-container font-18">{item.btnText}</div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="olk-home__know-more-section">
                    <div className="olk-home__know-more-section__header">
                        <h2 className="olk-home__know-more-section__header__title font-32">Know more about us!</h2>
                        <ul className="olk-home__know-more-section__header__menu-container">
                            {['Frequent Questions', 'Who we are?', 'Partner Program', 'Help & Support'].map((item, index) => (
                                <li className="olk-home__know-more-section__header__menu-container__menu-item font-16" key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="olk-home__know-more-section__content-container">
                        <Select options={menu2Items} value={selectedMenu2Item} onChange={(selected: menuOptions | null) => setSelectedMenu2Item(selected)} className='olk-home__know-more-section__content-container__faq-container mobile' styles={{ menu: (provided) => ({ ...provided, width: '100%', fontSize: '15px' }), control: (provided) => ({ ...provided, fontSize: '15px' }) }} />
                        <ul className="olk-home__know-more-section__content-container__faq-container desktop">
                            {['How does Order.UK work?', 'What payment methods are accepted?', 'Can I track my order in real-time?', 'Are there any special discounts or promotions available?', 'Is Order.UK available in my area?'].map((item, index) => (
                                <li className="olk-home__know-more-section__content-container__faq-container__item font-18" key={index}>{item}</li>
                            ))}
                        </ul>
                        <div className="olk-home__know-more-section__content-container__faq-answer-container">
                            <div className="olk-home__know-more-section__content-container__faq-answer-container__items-container">
                                {[{ title: 'Place an Order!', slug: 'Place order through our website or mobile app', imgAlt: 'place order', imgPath: 'icons/place-order.png' }, { title: 'Track Progress', slug: 'You can track your order status with delivery time', imgAlt: 'track progress', imgPath: 'icons/track-progress.png' }, { title: 'Get your Order!', slug: 'Receive your order at a lighting fast speed!', imgAlt: 'get order', imgPath: 'icons/get-order.png' }].map((item, index) => (
                                    <div className="olk-home__know-more-section__content-container__faq-answer-container__items-container__item" key={index}>
                                        <p className="olk-home__know-more-section__content-container__faq-answer-container__items-container__item__title font-18">{item.title}</p>
                                        <img src={item.imgPath} alt={item.imgAlt} className="olk-home__know-more-section__content-container__faq-answer-container__items-container__item__img" />
                                        <p className="olk-home__know-more-section__content-container__faq-answer-container__items-container__item__slug font-16">{item.slug}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="olk-home__know-more-section__content-container__faq-answer-container__disclaimer font-16">Order.UK simplifies the food ordering process. Browse through our diverse menu, select your favorite dishes, and proceed to checkout. Your delicious meal will be on its way to your doorstep in no time!</p>
                        </div>
                    </div>
                </div>
                <div className="olk-home__status-section">
                    {[{ value: '546+', name: 'Registered Riders' }, { value: '789,900+', name: 'Orders Delivered' }, { value: '690+', name: 'Restaurants Partnered' }, { value: '17,457+', name: 'Food Items' }].map((item, index) => (
                        <div className="olk-home__status-section__item" key={index}>
                            <p className="olk-home__status-section__item__value font-64">{item.value}</p>
                            <p className="olk-home__status-section__item__name font-24">{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}