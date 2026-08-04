import styles from "@styles/main-content.module.css";
import MainBody from "@components/sections/MainBody";
import { portfolioData } from "@lib/data/portfolio.data.ts";
import IconTwitter from "@components/icons/twitter.tsx";
import IconLinkedin from "@components/icons/linkedin.tsx";
import IconInstagram from "@components/icons/instagram.tsx";
import IconGitHub from "@components/icons/github.tsx";

function MainContent() {
    const onLinkClick = (link: string) => {
        window.open(link, "_blank");
    };
    return (
        <div className={styles.container}>
            <div id="socials" className={styles.socials}>
                <div className={styles.socialIconsWrapper}>
                    <IconGitHub onClick={() => onLinkClick(portfolioData.contact.socials.github)} className={styles.socialBtn} />
                    <IconInstagram onClick={() => onLinkClick(portfolioData.contact.socials.instagram)} className={styles.socialBtn} />
                    <IconLinkedin onClick={() => onLinkClick(portfolioData.contact.socials.linkedIn)} className={styles.socialBtn} />
                    <IconTwitter onClick={() => onLinkClick(portfolioData.contact.socials.twitter)} className={styles.socialBtn} />
                </div>
                <div className={styles.dividerWrapper}>
                    <hr className={styles.divider} />
                </div>
            </div>
            <div id="mainContentContainer" className={styles.mainContentContainer}>
                <MainBody />
            </div>
            <div id="email" className={styles.email}>
                <div className={styles.emailBtn}>
                    <h1>
                        <a className={styles.emailLink} href={portfolioData.introduction.button_link}>
                            {portfolioData.email.address}
                        </a>
                    </h1>
                </div>
                <div className={styles.dividerWrapper}>
                    <hr className={styles.divider} />
                </div>
            </div>
        </div>
    );
}

export default MainContent;