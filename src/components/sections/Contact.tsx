import styles from '@styles/contact.module.css';
import { portfolioData } from "@lib/data/portfolio.data.ts";
import { Button } from '@components/ui/Button.tsx';
import { ButtonVariant, ButtonShape } from '@lib/enums/button.enum';

function Contact() {
    const handleButtonClick = () => {
        if (portfolioData.contact.button.link) {
            window.open(portfolioData.contact.button.link, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div className={styles.contact}>
            <div className={styles.sectionHeading}>
                <h3 className={styles.sectionTitle}>
                    <span className={styles.sectionNumber}>04.</span> {portfolioData.contact.title}
                </h3>
            </div>
            <h1 className={styles.subTitle}>{portfolioData.contact.subTitle}</h1>
            <p className={styles.content}>
                {portfolioData.contact.content}
            </p>
            <div className={styles.buttonWrapper}>
                <Button
                    variant={ButtonVariant.OUTLINE}
                    shape={ButtonShape.RECTANGLE}
                    onClick={handleButtonClick}
                    padding={"0.7rem 3rem"}
                >
                    {portfolioData.contact.button.name}
                </Button>
            </div>
        </div>
    );
}

export default Contact;