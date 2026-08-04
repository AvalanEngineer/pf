import { useState } from 'react';
import styles from '@styles/navbar.module.css';
import logo from '@images/my-pic.jpg';
import { portfolioData } from "@lib/data/portfolio.data.ts";
import { User, Briefcase, FolderGit2, Mail, FileText, Menu, X } from 'lucide-react';
import { Button } from '@components/ui/Button';
import { ButtonVariant, ButtonShape } from '@lib/enums/button.enum';

function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [show, setShow] = useState(false);

  const onClose = () => {
    setOpenMenu(false);
    setTimeout(() => setShow(false), 500);
  };

  const onMenuClick = () => {
    setShow(true);
    setOpenMenu(true);
  };

  const handleResumeClick = () => {
    if (portfolioData.navbar.resume.link) {
      window.open(portfolioData.navbar.resume.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
      <nav className={styles.navBar}>
        <div className={styles.navLogo}>
          <img src={logo} alt="Logo" />
          <span>Isaac Richu Karanja</span>
        </div>

        <div className={styles.desktopNavWrapper}>
          <div id="nav_desktop" className={styles.navDesktop}>
            <div className={styles.navTab}>
              <span className={styles.tabNumber}>01.</span>
              <a className={styles.tabLink} href="#about">
                <h3>
                  <User className={styles.navIcon} size={16} />
                  {portfolioData.navbar.about}
                </h3>
              </a>
            </div>
            <div className={styles.navTab}>
              <span className={styles.tabNumber}>02.</span>
              <a className={styles.tabLink} href="#experiences">
                <h3>
                  <Briefcase className={styles.navIcon} size={16} />
                  {portfolioData.navbar.experience}
                </h3>
              </a>
            </div>
            <div className={styles.navTab}>
              <span className={styles.tabNumber}>03.</span>
              <a className={styles.tabLink} href="#projects">
                <h3>
                  <FolderGit2 className={styles.navIcon} size={16} />
                  {portfolioData.navbar.projects}
                </h3>
              </a>
            </div>
            <div className={styles.navTab}>
              <span className={styles.tabNumber}>04.</span>
              <a className={styles.tabLink} href="#contact">
                <h3>
                  {portfolioData.navbar.contact}
                </h3>
              </a>
            </div>

            <Button
                variant={ButtonVariant.OUTLINE}
                shape={ButtonShape.RECTANGLE}
                onClick={handleResumeClick}
                icon={<FileText size={16} />}
            >
              {portfolioData.navbar.resume.name}
            </Button>
          </div>

          <div id="nav_mobile" className={styles.navMobileToggle}>
            <Menu onClick={onMenuClick} className={styles.menuBtn} size={32} />
          </div>
        </div>

        {show && (
            <div
                className={`${styles.mobileNavOverlay} ${openMenu ? styles.slideIn : styles.slideOut}`}
                onClick={onClose}
            >
              <div className={styles.closeWrapper} onClick={(e) => e.stopPropagation()}>
                <X onClick={onClose} className={styles.closeBtn} size={32} />
              </div>
              <div className={styles.mobileNavContent} onClick={(e) => e.stopPropagation()}>
                <div className={styles.navTabMobile}>
                  <span className={styles.tabNumber}>01.</span>
                  <a onClick={onClose} className={styles.tabLink} href="#about">
                    <h3>
                      <User className={styles.navIcon} size={18} />
                      {portfolioData.navbar.about}
                    </h3>
                  </a>
                </div>
                <div className={styles.navTabMobile}>
                  <span className={styles.tabNumber}>02.</span>
                  <a onClick={onClose} className={styles.tabLink} href="#experiences">
                    <h3>
                      <Briefcase className={styles.navIcon} size={18} />
                      {portfolioData.navbar.experience}
                    </h3>
                  </a>
                </div>
                <div className={styles.navTabMobile}>
                  <span className={styles.tabNumber}>03.</span>
                  <a onClick={onClose} className={styles.tabLink} href="#projects">
                    <h3>
                      <FolderGit2 className={styles.navIcon} size={18} />
                      {portfolioData.navbar.projects}
                    </h3>
                  </a>
                </div>
                <div className={styles.navTabMobile}>
                  <span className={styles.tabNumber}>04.</span>
                  <a onClick={onClose} className={styles.tabLink} href="#contact">
                    <h3>
                      <Mail className={styles.navIcon} size={18} />
                      {portfolioData.navbar.contact}
                    </h3>
                  </a>
                </div>

                <Button
                    variant={ButtonVariant.OUTLINE}
                    shape={ButtonShape.RECTANGLE}
                    onClick={() => {
                      onClose();
                      handleResumeClick();
                    }}
                    icon={<FileText size={16} />}
                >
                  {portfolioData.navbar.resume.name}
                </Button>
              </div>
            </div>
        )}
      </nav>
  );
}

export default NavBar;