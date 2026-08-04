import styles from "@styles/footer.module.css";
import { portfolioData } from "@lib/data/portfolio.data.ts";
import IconGitHub from "@components/icons/github.tsx";
import IconInstagram from "@components/icons/instagram.tsx";
import IconLinkedin from "@components/icons/linkedin.tsx";
import IconTwitter from "@components/icons/twitter.tsx";

function Footer() {
  const onLinkClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
      <div className={styles.footer}>
        <div className={styles.footerSocials}>
          <IconGitHub
              onClick={() => onLinkClick(portfolioData.contact.socials.github)}
              className={styles.socialBtn}
          />
          <IconInstagram
              onClick={() => onLinkClick(portfolioData.contact.socials.instagram)}
              className={styles.socialBtn}
          />
          <IconLinkedin
              onClick={() => onLinkClick(portfolioData.contact.socials.linkedIn)}
              className={styles.socialBtn}
          />
          <IconTwitter
              onClick={() => onLinkClick(portfolioData.contact.socials.twitter)}
              className={styles.socialBtn}
          />
        </div>
        <h6 className={styles.footerContent}>{portfolioData.footer.content}</h6>
      </div>
  );
}

export default Footer;