import { Fragment, useState, useEffect } from 'react';
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi';

import styles from './Nav.module.scss';
import animate from '../../styles/animate.module.css';

const Nav = () => {
    const [showing, toggleMenu] = useState(false);
    const [notAtTop, toggleNotAtTop] = useState(false);
    const handleOnScroll = () => {
        if (window.pageYOffset > 0) {
            toggleNotAtTop(true);
        } else if (notAtTop) {
            toggleNotAtTop(false);
        }
    }
    useEffect(() => {
        window.onscroll = handleOnScroll;
    }, [notAtTop]);
    const handleToggleMenu = () => {
        if (window.innerWidth <= 980) {
            toggleMenu(!showing);
        }
    }
    // const slideInClass = () => `${animate['animate__animated']} ${showing ? `${styles['slide-in']} ${animate['animate__fadeInLeft']}` : `${styles['slide-out']} ${animate['animate__fadeOutLeft']}`}`.trim();
    const slideInClass = () => '';

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
                <ul className={`${styles['nav-list-wrapper']} ${showing ? styles.showing : ''} ${notAtTop ? styles['nav-show-shadow'] : ''}`.trim()}>
                    <li onClick={handleToggleMenu} className={slideInClass()}>
                        <Link href="/">
                            <a>HOME</a>
                        </Link>
                    </li>
                    <li onClick={handleToggleMenu} className={`${styles['nav-services']} ${slideInClass()}`}>
                        <Link href="/">
                            <a>SERVICES</a>
                        </Link>
                        <ul className={styles['sub-nav']}>
                        	<li onClick={handleToggleMenu} className={slideInClass()}>
                                <Link href="/#leads">
                                    <a>Leads</a>
                                </Link>
                            </li>
                            <li onClick={handleToggleMenu} className={slideInClass()}>
                                <Link href="/#seo">
                                    <a>SEO</a>
                                </Link>
                            </li>
                            <li onClick={handleToggleMenu} className={slideInClass()}>
                                <Link href="/#webDesign">
                                    <a>Web Design</a>
                                </Link>
                            </li>
                            <li onClick={handleToggleMenu} className={slideInClass()}>
                                <Link href="/#textMarketingSoftware">
                                    <a>Text Marketing Software</a>
                                </Link>
                            </li>
                       </ul>
                    </li>
                    <li onClick={handleToggleMenu} className={slideInClass()}>
                        <Link href="/pricing">
                            <a>PRICING</a>
                        </Link>
                    </li>
                    <li onClick={handleToggleMenu} className={slideInClass()}>
                        <Link href="/blog">
                            <a>BLOG</a>
                        </Link>
                    </li>
                    <li onClick={handleToggleMenu} className={slideInClass()}>
                        <Link href="/contact">
                            <a>CONTACT US</a>
                        </Link>
                    </li>
                    <li onClick={handleToggleMenu} className={slideInClass()}>
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
