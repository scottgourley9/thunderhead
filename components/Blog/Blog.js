import styles from './Blog.module.scss';

const Blog = () => {
    return (
        <section className={styles['blog-wrapper']}>
            <h1>A Few Tips to Help Your Business Grow</h1>
            <p>This content will be periodically updated, so check back often.</p>
            <a href="https://moz.com/beginners-guide-to-seo/why-search-engine-marketing-is-necessary" rel="noreferrer noopener" target="_blank">
                <h2>What is SEO and Why is it so important?</h2>
            </a>
            <br />
            <a href="https://ads.google.com/home/how-it-works/" rel="noreferrer noopener" target="_blank">
                <h2>Get Started With Google Ads</h2>
            </a>
            <br />
            <a href="https://support.google.com/google-ads/answer/7549288?hl=en" rel="noreferrer noopener" target="_blank">
                <h2>Become a Google Guaranteed Business</h2>
            </a>
            <br />
        </section>
    )
}

export default Blog;
