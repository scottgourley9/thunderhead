import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
			<h2>Got Questions?</h2>
            <ul>
                <li>
                    <p className={styles['contact-us']}>Call Us</p>
                    <a href="tel:8012100263">801-867-5309</a>
                </li>
                <li>
                    <p className={styles['contact-us']}>Email Us</p>
                    <a href="mailto:info@thunderhead.com">info@thunderhead.com</a>
                </li>
            </ul>
            <ul className={styles.icons}>
                <li><a href="#" target="_blank" rel="noopener noreferrer"><FaFacebookSquare className={styles.icon} /></a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram className={styles.icon} /></a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin className={styles.icon} /></a></li>
            </ul>
            <p className={styles.copyright}>© Copyright <span id="year">2020</span>, Thunderhead. All Rights Reserved.</p>
            <h5>Images By:</h5>
            <a className={styles['image-by']} href='https://www.freepik.com/vectors/technology'>Technology vector created by pch.vector - www.freepik.com</a>
            <a className={styles['image-by']} href='https://www.freepik.com/vectors/abstract'>Abstract vector created by pch.vector - www.freepik.com</a>
            <a className={styles['image-by']} href='https://www.freepik.com/vectors/people'>People vector created by pch.vector - www.freepik.com</a>
            <a className={styles['image-by']} href='https://www.freepik.com/vectors/infographic'>Infographic vector created by pch.vector - www.freepik.com</a>
            <a className={styles['image-by']} href='https://www.freepik.com/vectors/people'>People vector created by pch.vector - www.freepik.com</a>
            <a className={styles['image-by']} href='https://www.freepik.com/vectors/business'>Business vector created by pch.vector - www.freepik.com</a>
    	</footer>
    )
}

export default Footer;
