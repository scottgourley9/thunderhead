import ContactDetails from './ContactDetails/ContactDetails';
import Form from './Form/Form';

import styles from './Contact.module.scss';

const Contact = () => {
    return (
        <section className={styles['contact-wrapper']}>
            <h1>Contact Us</h1>
            <div className={styles['form-section']}>
                <Form />
                <ContactDetails />
            </div>

        </section>
    )
}

export default Contact;
