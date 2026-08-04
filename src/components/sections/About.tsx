import styles from "@styles/about.module.css";
import { portfolioData } from "@lib/data/portfolio.data.ts";

function About() {
    return (
        <div className={styles.about}>
            <div className={styles.sectionHeading}>
                <h3 className={styles.sectionTitle}>
                    <span className={styles.sectionNumber}>01.</span> {portfolioData.about.title}
                </h3>
                <hr className={styles.sectionHeadingHr} />
            </div>
            <div className={styles.aboutBody}>
                <div className={styles.aboutBodyContent}>
                    {portfolioData.about.content.map((paragraph) => (
                        <p key={paragraph} className={styles.paragraph}>{paragraph}</p>
                    ))}
                    <div className={styles.skillsWrapper}>
                        <ul className={styles.skillsList}>
                            {portfolioData.about.activities.map((name) => (
                                <li key={name} className={styles.skillItem}>{name}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className={styles.aboutImageContainer}>
                    <div className={styles.imageWrapper}>
                        <img src={portfolioData.about.image} alt="Profile" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;