import Form from '../Contact/Form/Form';

import styles from './Pricing.module.scss';

const Pricing = () => {
    return (
        <section className={styles['pricing-wrapper']}>
            <h1>REQUEST A CUSTOM PRICE QUOTE</h1>
            <Form />
        </section>
    )
}

export default Pricing;
