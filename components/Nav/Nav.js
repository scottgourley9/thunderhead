import { Fragment, useState, useEffect } from 'react';
import Link from 'next/link'
import LazyLoad from 'react-lazyload';
import { GiHamburgerMenu } from 'react-icons/gi';

import styles from './Nav.module.scss';
import animate from '../../styles/animate.module.css';

const Nav = () => {
    const [showing, toggleMenu] = useState(false);
    const [notAtTop, toggleNotAtTop] = useState(false);
    const [mounted, updateMounted] = useState(false);
    const handleOnScroll = () => {
        if (window.pageYOffset > 0) {
            toggleNotAtTop(true);
        } else if (notAtTop) {
            toggleNotAtTop(false);
        }
    }
    useEffect(() => {
        updateMounted(true);
    }, []);
    useEffect(() => {
        window.onscroll = handleOnScroll;
    }, [notAtTop]);
    const handleToggleMenu = () => {
        if (window.innerWidth <= 980) {
            toggleMenu(!showing);
        }
    }

    return (
        <Fragment>
            <div onClick={handleToggleMenu} className={`${styles['nav-overlay']} ${showing ? styles['nav-overlay-showing'] : ''}`.trim()}/>
            <nav className={styles['nav-wrapper']}>
                <div className={`${styles['logo-and-ham']} ${notAtTop ? styles['show-shadow'] : ''}`.trim()}>
                    <Link href="/">
                        <img src="/thundercloud.png" alt="thunder head Logo" className={styles['thunder-cloud']} />
                    </Link>
                    <span className={styles['logo-title']}>THUNDERHEAD</span>
                    <GiHamburgerMenu className={styles['ham-menu']} onClick={handleToggleMenu} />
                </div>
                <ul className={`${styles['nav-list-wrapper']} ${showing ? styles.showing : ''} ${mounted ? styles['display-it'] : ''} ${notAtTop ? styles['nav-show-shadow'] : ''}`.trim()}>
                    <li className={styles['thunder-head-logo']}>
                        <LazyLoad offset={100} once>
                            <img src="/thundercloud.png" alt="leads" className={styles['inline-image']} />
                        </LazyLoad>
                        <span className={styles['thunder-head-title']}>THUNDERHEAD</span>
                    </li>
                    <li onClick={handleToggleMenu}>
                        <Link href="/">
                            <a>HOME</a>
                        </Link>
                    </li>
                    <li onClick={handleToggleMenu} className={styles['nav-services']}>
                        <Link href="/">
                            <a>SERVICES</a>
                        </Link>
                        <ul className={styles['sub-nav']}>
                        	<li onClick={handleToggleMenu}>
                                <Link href="/#leads">
                                    <a>Leads</a>
                                </Link>
                            </li>
                            <li onClick={handleToggleMenu}>
                                <Link href="/#seo">
                                    <a>SEO</a>
                                </Link>
                            </li>
                            <li onClick={handleToggleMenu}>
                                <Link href="/#webDesign">
                                    <a>Web Design</a>
                                </Link>
                            </li>
                            <li onClick={handleToggleMenu}>
                                <Link href="/#textMarketingSoftware">
                                    <a>Text Marketing Software</a>
                                </Link>
                            </li>
                       </ul>
                    </li>
                    <li onClick={handleToggleMenu}>
                        <Link href="/pricing">
                            <a>PRICING</a>
                        </Link>
                    </li>
                    <li onClick={handleToggleMenu}>
                        <Link href="/blog">
                            <a>BLOG</a>
                        </Link>
                    </li>
                    <li onClick={handleToggleMenu}>
                        <Link href="/contact">
                            <a>CONTACT US</a>
                        </Link>
                    </li>
                    <li onClick={handleToggleMenu}>
                        <Link href="/contact">
                            <a>SCHEDULE A DEMO</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </Fragment>
    )
}

export default Nav;
