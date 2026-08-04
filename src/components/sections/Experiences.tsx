import { useState, useEffect } from "react";
import styles from "@styles/experiences.module.css";
import { portfolioData } from "@lib/data/portfolio.data.ts";

function Experiences() {
  const [content, setContent] = useState({
    tab: "",
    content: {
      title: "",
      subTitle: "",
      paragraphs: [""],
    },
  });

  useEffect(() => {
    if (portfolioData.experience.experience_list.length > 0) {
      const nContent = portfolioData.experience.experience_list[0];
      setContent({
        tab: nContent.tab,
        content: {
          title: nContent.content.title,
          subTitle: nContent.content.subTitle,
          paragraphs: nContent.content.paragraphs,
        },
      });
    }
  }, []);

  const onTabClick = (index: number) => {
    const nContent = portfolioData.experience.experience_list[index];
    setContent({
      tab: nContent.tab,
      content: {
        title: nContent.content.title,
        subTitle: nContent.content.subTitle,
        paragraphs: nContent.content.paragraphs,
      },
    });
  };

  return (
      <div className={styles.experiences}>
        <div className={styles.sectionHeading}>
          <h3 className={styles.sectionTitle}>
            <span className={styles.sectionNumber}>02.</span> {portfolioData.experience.title}
          </h3>
          <hr className={styles.sectionHeadingHr} />
        </div>

        <div className={styles.experienceBodyContainer}>
          <div className={styles.experienceTabsContainer}>
            {portfolioData.experience.experience_list.map((experience, index) => (
                <div
                    className={`${styles.experienceTab} ${experience.tab === content.tab ? styles.experienceTabActive : ""}`}
                    key={index}
                    onClick={() => onTabClick(index)}
                >
                  <span className={styles.spanL}></span>
                  <h5
                      className={styles.experienceTabH5}
                      style={experience.tab === content.tab ? { color: "var(--accent-primary)" } : {}}
                  >
                    {experience.tab}
                  </h5>
                  <span className={styles.spanB}></span>
                </div>
            ))}
          </div>

          <div className={styles.experienceTabsContentContainer}>
            <div className={styles.experienceSection}>
              <h4 className={styles.experienceTitle}>{content.content.title}</h4>
              <strong className={styles.experienceSubTitle}>{content.content.subTitle}</strong>
              <ul className={styles.experienceDescription}>
                {content.content.paragraphs.map((paragraph, index) =>
                    index === 0 ? (
                        <p className={styles.experienceParagraphLead} key={index}>
                          {paragraph}
                        </p>
                    ) : (
                        <li className={styles.experienceListItem} key={index}>
                          {paragraph}
                        </li>
                    )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Experiences;