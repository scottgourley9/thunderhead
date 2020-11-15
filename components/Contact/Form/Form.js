import { Fragment, useState } from 'react';

import styles from './Form.module.scss';

const Form = () => {
    const [formData, updateFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: ''
    });
    const [errorMessage, updateShowError] = useState('');
    const [successMessage, updateShowSuccess] = useState('');
    const [submitting, updateSubmitting] = useState(false);
    const REQUIRED = 'Please fill out the required fields.';
    const handleOnChange = e => {
        updateShowError('');
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = e => {
        e.preventDefault();
        if (!formData.name || !formData.email) {
            updateShowError(REQUIRED);
        } else {
            updateShowError('');
            updateSubmitting(true);
            fetch('/api/send', {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            .then(response => {
                updateSubmitting(false);
                if (response.ok) {
                    updateShowSuccess('Thank you! We will contact you shortly!');
                } else {
                    updateShowError('Oops, something went wrong. Please try again, call us, or send us an email. Thank you!');
                }
            })
            .catch(error => {
                updateSubmitting(false);
                updateShowError('Oops, something went wrong. Please try again, call us, or send us an email. Thank you!');
            });
        }
    }
    const errorHighlight = errorMessage === REQUIRED;

    return (
        <form className={styles['form-wrapper']} action="mailto:scottgourley9@gmail.com" method="post" enctype="text/plain">
            {successMessage ?
                <h1 className={styles['success-message']}>{successMessage}</h1>
                :
                <Fragment>
                    <input className={errorHighlight ? styles['highlight-error'] : ''} placeholder="Name*" type="text" name="name" required value={formData.name} onChange={handleOnChange} /><br />
                    <input className={errorHighlight ? styles['highlight-error'] : ''} placeholder="Email*" type="email" name="email" required value={formData.email} onChange={handleOnChange} /><br />
                    <input placeholder="Phone" type="phone" name="phone" size="11" value={formData.phone} onChange={handleOnChange} /><br />
                    <input placeholder="Company Name" type="text" name="company" size="11" value={formData.company} onChange={handleOnChange} /><br /><br />
                    {errorMessage && <p className={styles['error-message']}>{errorMessage}</p>}
                    <button className={styles['submit-button']} type="submit" onClick={handleSubmit}>
                    {submitting ?
                        <div className={styles.loader} />
                        :
                        <span>Submit</span>
                    }
                    </button>
                </Fragment>
            }
        </form>
    )
}

export default Form;
