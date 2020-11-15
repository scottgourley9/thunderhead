import { BiPhone } from 'react-icons/bi';
import { BiMap } from 'react-icons/bi';
import { BiMailSend } from 'react-icons/bi';

import styles from './ContactDetails.module.scss';

const ContactDetails = () => {
    return (
        <section className={styles['details-wrapper']}>
            <div className={styles['details-section']}>
            <BiPhone className={styles.icon} />
            <div className={styles.details}>
                <h5>CALL US</h5>
                <a href="tel:8012100263">801-867-5309</a>
            </div>
            </div>
            <div className={styles['details-section']}>
            <BiMap className={styles.icon} />
            <div className={styles.details}>
                <h5>ADDRESS</h5>
                <p>12884 Frontrunner Blvd<br />
                Draper, UT 84020</p>
            </div>
            </div>
            <div className={styles['details-section']}>
            <BiMailSend className={styles.icon} />
            <div className={styles.details}>
                <h5>EMAIL</h5>
                <a href="mailto:info@thunderhead.com">info@thunderhead.com</a>
            </div>
            </div>
        </section>
    )
}

export default ContactDetails;
