import React, { useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import logo from '../../assets/images/nav.png'

const mainNav = [
    {
        display: "Home",
        path: "/"
    },
    {
        display: "About Us",
        path: "/about"
    },
    {
        display: "Our Product",
        path: "/accessories"
    },
    {
        display: "Menu",
        path: "/contact"
    }
]

const Header = () => {

    const { pathname } = useLocation()
    const activeNav = mainNav.findIndex(e => e.path === pathname)

    const headerRef = useRef(null)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('shrink')
            } else {
                headerRef.current.classList.remove('shrink')
            }
        })
        return () => {
            window.removeEventListener("scroll")
        };
    }, []);

    const menuLeft = useRef(null)

    const menuToggle = () => menuLeft.current.classList.toggle('active')

    return (
        <div className="header" ref={headerRef}>
            <div className="container">
                <div className="header__logo">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="header__menu">
                    <div className="header__menu__mobile-toggle" onClick={menuToggle}>
                        <i className='bx bx-menu-alt-left'></i>
                    </div>
                    <div className="header__menu__left" ref={menuLeft}>
                        <div className="header__menu__left__close" onClick={menuToggle}>
                            <i className='bx bx-chevron-left'></i>
                        </div>
                        {
                            mainNav.map((item, index) => (
                                <div
                                    key={index}
                                    className={`header__menu__item header__menu__left__item ${index === activeNav ? 'active' : ''}`}
                                    onClick={menuToggle}
                                >
                                    <Link to={item.path}>
                                        <span>{item.display}</span>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                    <div className="header__menu__right">
                        <div className="header__menu__item header__menu__right__item">
                        <Link to="/blog">
                                Blog News
                            </Link>
                        </div>
                        <div className="header__menu__item header__menu__right__item">
                            <Link to="/contacts">
                                Contact Us
                            </Link>
                        </div>
                        <div className="header__menu__item header__menu__right__item">
                        <Link to="/cart">
                                Cart
                            </Link>
                        </div>
                        <div className="header__menu__item header__menu__right__item">
                        <Link to="/login">
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
