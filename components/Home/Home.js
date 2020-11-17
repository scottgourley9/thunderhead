import LazyLoad from 'react-lazyload';
import Link from 'next/link'
import { GiMegaphone } from 'react-icons/gi';
import { GiEyeTarget } from 'react-icons/gi';
import { GiMagnifyingGlass } from 'react-icons/gi';
import { GiStopwatch } from 'react-icons/gi';

import styles from './Home.module.scss';

const Home = () => {
    return (
        <section className={styles['home-wrapper']}>
            <div className={styles['main-title']}>
                <h1 className={styles['main-title-text']}>HOME SERVICE LEAD GENERATION &amp; MARKETING PROS</h1>
                <div className={styles['button-section']}>
                    <Link href="/contact">
                        <button className={styles['button']}>GET MORE LOCAL JOBS!</button>
                    </Link>
                    <div id="leads" />
                </div>
            </div>
            <article className={styles.articles}>
                <h2 className={`${styles['section-info-title']} ${styles.mobile}`}>DO YOU NEED LEADS?</h2>
                <div className={`${styles['img-and-info']} ${styles['img-and-info-right']}`}>
                    <LazyLoad offset={100} once>
                        <img src="/leads.jpg" alt="leads" className={styles['inline-image']} />
                    </LazyLoad>
                    <div className={`${styles['section-info']} ${styles['section-info-left']}`}>
                        <h2 className={`${styles['section-info-title']} ${styles.desktop}`}>DO YOU NEED LEADS?</h2>
                        <h3>Acquire and Interact Automatically</h3>
                        <h4>Text Message Leads</h4>
                        <p>Instantly receive texts from individuals interested in your business and services. Reply immediately with custom texts or have our systems auto-reply to engage and capture those leads.</p>
                        <div className={styles['button-section']}>
                            <Link href="/contact">
                                <button>Find Out How</button>
                            </Link>
                            <div id="seo" />
                        </div>
                    </div>
                </div>
            </article>
            <article className={styles.articles}>
                <h2 className={`${styles['section-info-title']} ${styles.mobile}`}>Search Engine Optimization</h2>
                <div className={`${styles['img-and-info']} ${styles['img-and-info-left']}`}>
                    <LazyLoad offset={100} once>
                        <img src="/seo.jpg" alt="seo" className={styles['inline-image']} />
                    </LazyLoad>
                    <div className={`${styles['section-info']} ${styles['section-info-right']}`}>
                        <h2 className={`${styles['section-info-title']} ${styles.desktop}`}>Search Engine Optimization</h2>
                        <h3>Be Seen, Be Heard, Be Found</h3>
                    </div>
                </div>
                <div className={styles['be-cards']}>
                    <div className={`${styles['be-card']} ${styles['be-card-short']}`}>
                        <div className={styles['be-icon-section']}>
                            <GiEyeTarget className={styles['be-icon']} />
                            <span>Be Seen</span>
                        </div>
                        <div>
                            Running a business can be hard. You pour your heart and soul into everything you do, and yet, it feels like no one can see you.
                            <br />
                            <br />
                            <strong>This is where our SEO team comes in:</strong>
                            <ul>
                                <li>Rank Higher in Google Searches</li>
                                <li>Optimize your pages for a more user friendly experience</li>
                                <li>Bring more traffic to your website</li>
                            </ul>
                            <p>Imagine what it would feel like to come up first in a Google Search.</p>
                            <p>What would that do for your business?
                            What would that do for your life?</p>
                        </div>
                    </div>
                    <div className={`${styles['be-card']} ${styles['be-card-short']}`}>
                        <div className={styles['be-icon-section']}>
                            <GiMegaphone className={styles['be-icon']} />
                            <span>Be Heard</span>
                        </div>
                        <div>Whether you’re selling the world’s best chocolate chip cookie, or the secret to dog training, your message can change the world! Get that message into the hands of people who are looking for what you have to offer.
                            <br />
                            <br />
                            <strong>We will:</strong>
                            <ul>
                                <li>Create content that gets your message out,and brings the customers in!</li>
                                <li>Use keywords that will boost your content to the top</li>
                                <li>Structure your website content to improve search traffic</li>
                            </ul>
                            <p>What you offer is valuable, important, and life-changing. Just think of all the people out there who need to hear about your business!</p>
                        </div>
                    </div>
                    <div className={`${styles['be-card']} ${styles['be-card-short']}`}>
                        <div className={styles['be-icon-section']}>
                            <GiMagnifyingGlass className={styles['be-icon']} />
                            <span>Be Found</span>
                        </div>
                        <br />
                        <div>How much time do you spend hunting down potential clients?Quit spending your days waving a sign on the side of the road, instead, get found on Google.
                            <br />
                            <br />
                            <strong>Our experts know how to:</strong>
                            <ul>
                                <li>Make your site more accessible</li>
                                <li>Help you get picked more often</li>
                                <li>Build connections with clients who are looking for you</li>
                            </ul>
                            <p>Your perfect customers are out there. Let’s make sure they choose you first.</p>
                        </div>
                    </div>
                </div>
                <div className={styles['button-section']}>
                    <Link href="/contact">
                        <button>Get Started</button>
                    </Link>
                    <div id="webDesign" />
                </div>
            </article>
            <article className={styles.articles}>
                <h2 className={`${styles['section-info-title']} ${styles.mobile}`}>Web Design</h2>
                <div className={`${styles['img-and-info']} ${styles['img-and-info-right']}`}>
                    <LazyLoad offset={100} once>
                        <img src="/webDesign.jpg" alt="web design" className={styles['inline-image']} />
                    </LazyLoad>
                    <div className={`${styles['section-info']} ${styles['section-info-left']}`}>
                        <h2 className={`${styles['section-info-title']} ${styles.desktop}`}>Web Design</h2>
                        <strong>If you’re serious about your business, you’re going to need a seriously good website.</strong>
                    </div>
                </div>
                <div className={styles['be-card']}>
                    <div className={styles['be-icon-section']}>
                        <GiStopwatch className={styles['be-icon']} />
                        <span>8 seconds</span>
                    </div>
                    <br />
                    <p>The attention span of the average person. This means you have 8 seconds to grab someone’s attention before they click away forever.
                    <br />
                    <br />
                    Our Web Design team is here to create a visual masterpiece that perfectly expresses you, your brand, and the important message you are sharing with the world- all in 8 seconds or less. And, with our stunning design, you’ll grab their attention and keep it.</p>
                    <h4>We will help you:</h4>
                    <ul>
                        <li>Set the tone for your brand</li>
                        <li>Encourage visitors to spend more time on your site</li>
                        <li>Convert customers faster with top-notch marketing</li>
                        <li>Create connections with high-quality clients</li>
                        <li>Build a stage for your out-of-this-world content</li>
                    </ul>
                    <p>Imagine you could get your viewers to spend more time on your site…
                    <br />
                    <br />
                    This means more exposure to your brand, your products, and your message. More exposure means more customers. More customers means a brighter future for your business. You deserve a bright future. We’re here to make it happen.</p>
                </div>
                <div className={styles['button-section']}>
                    <Link href="/contact">
                        <button>Get Started</button>
                    </Link>
                    <div id="textMarketingSoftware" />
                </div>
            </article>
            <article className={styles.articles} id="textMarketingSoftware">
                <h2 className={`${styles['section-info-title']} ${styles.mobile}`}>Automated Customer Interaction Software</h2>
                <div className={`${styles['img-and-info']} ${styles['img-and-info-left']}`}>
                    <LazyLoad offset={100} once>
                        <img src="/insight.jpg" alt="insight" className={styles['inline-image']} />
                    </LazyLoad>
                    <div className={`${styles['section-info']} ${styles['section-info-left']}`}>
                        <h2 className={`${styles['section-info-title']} ${styles.desktop}`}>Automated Customer Interaction Software</h2>
                        <h3>Automatically understand your client’s experience</h3>
                        <ul>
                            <li><strong>Manage Your Business With Ease and Simplicity:</strong> Immediately receive messages through our mobile app when a client has feedback.</li>
                            <li><strong>Get More Information By Incentivizing Visitors:</strong> Collect more data about your customers by providing a chance to earn something for completing the survey.</li>
                        </ul>
                        <div className={styles['button-section']}>
                            <Link href="/contact">
                                <button>Find Out How</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <h2 className={`${styles['section-info-title']} ${styles.mobile}`}>Automatically run text campaigns</h2>
                <div className={`${styles['img-and-info']} ${styles['img-and-info-right']}`}>
                    <LazyLoad offset={100} once>
                        <img src="/texting.jpg" alt="feedback" className={styles['inline-image']} />
                    </LazyLoad>
                    <div className={`${styles['section-info']} ${styles['section-info-left']}`}>
                        <h2 className={`${styles['section-info-title']} ${styles.desktop}`}>Automatically run text campaigns</h2>
                        <ul>
                            <li><strong>Make Your Marketing Automatic:</strong> Automatically provide information to client’s about promotions</li>
                            <li><strong>Stay Front of Mind:</strong> Stay at the forefront of the minds of the people that keep you in business with nurturing campaigns</li>
                            <li><strong>Smart Filters:</strong> SFilter Clients Based off of Behavioral Data (i.e. Left Review, Completed Survey, etc…)</li>
                        </ul>
                        <div className={styles['button-section']}>
                            <Link href="/contact">
                                <button>Get Started</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <h2 className={`${styles['section-info-title']} ${styles.mobile}`}>Acquire. Interact. Retain.
                <br />
                All on Autopilot.</h2>
                <div className={`${styles['img-and-info']} ${styles['img-and-info-left']}`}>
                    <LazyLoad offset={100} once>
                        <img src="/growth.jpg" alt="feedback" className={styles['inline-image']} />
                    </LazyLoad>
                    <div className={`${styles['section-info']} ${styles['section-info-left']}`}>
                        <h2 className={`${styles['section-info-title']} ${styles.desktop}`}>Acquire. Interact. Retain.
                        <br />
                        All on Autopilot.</h2>
                        <p><strong>What Can Thunderhead Do for you?</strong></p>
                        <p>Automatically collect feedback from your clients about their experience. Get a ton of positive reviews on multiple platforms. Create Loyal customers who come back again and again!</p>
                    </div>
                </div>
                <div className={styles['be-cards']}>
                    <div className={`${styles['be-card']} ${styles['be-card-short']}`}>
                        <h3>Your Customer’s Experience</h3>
                        <ul>
                            <li>Thunderhead’s System automatically asks clients for a review after they’ve had an experience with you.</li>
                            <li>Our system allows your customers to leave feedback in seconds, making each person feel valuable and important.</li>
                            <li>Your customers can receive promotional text messages, which keeps you in the forefront of their mind at all times.</li>
                        </ul>
                    </div>
                    <div className={`${styles['be-card']} ${styles['be-card-short']}`}>
                        <h3>Your Experience:</h3>
                        <ul>
                            <li>Exponentially grow your reviews on Google, Facebook, and Yelp, helping you maintain a positive reputation.</li>
                            <li>Immediately receive messages through the Thunderhead app when a client gives feedback.</li>
                            <li>Track your reviews and where they’re coming from with Thunderhead’s flexible, fast reporting.</li>
                            <li>Use smart filters to filter clients based off of behavioral data(i.e. Left Review, Completed Survey, etc…)</li>
                            <li>Unlimited users can be made aware when someone leaves a negativereview or needs attention, helping you fix problems faster and more efficiently.</li>
                            <li>Use Thunderhead’s Automated Text Campaign feature to stay in touch with your customers, send out promotions, and keep them coming back to you.</li>
                        </ul>
                    </div>
                    <div className={`${styles['be-card']} ${styles['be-card-short']}`}>
                        <h3>Our Loyalty Program Creates Better Customers:</h3>
                        <ul>
                            <li>Run a promotion, contest, or giveaway to collect more data from your customers.</li>
                            <li>Clients can earn awards points for visiting you multiple times.</li>
                            <li>When your client feels seen, heard, and appreciated, they will come back to you. This is what Thunderhead is all about.</li>
                        </ul>
                    </div>
                </div>
                <div className={styles['button-section']}>
                    <Link href="/contact">
                        <button>Get Started</button>
                    </Link>
                </div>
            </article>
        </section>
    )
}

export default Home;
