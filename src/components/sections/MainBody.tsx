import About from "@components/sections/About";
import Contact from "@components/sections/Contact";
import Experiences from "@components/sections/Experiences";
import Introduction from "@components/sections/Introduction";
import Projects from "@components/sections/Projects";
import styles from "@styles/main-body.module.css";
import Footer from "@components/sections/Footer";
import AnimatedComponent from "@components/sections/AnimatedComponent";

function MainBody() {
  return (
      <div
          className={styles.mainBody}
      >
        <div className={styles.sectionWrapper}>
          <AnimatedComponent>
            <Introduction />
          </AnimatedComponent>
        </div>
        <div id="about" className={styles.sectionWrapper}>
          <AnimatedComponent>
            <About />
          </AnimatedComponent>
        </div>
        <div id="experiences" className={styles.sectionWrapper}>
          <AnimatedComponent>
            <Experiences />
          </AnimatedComponent>
        </div>
        <div id="projects" className={styles.sectionWrapper}>
          <Projects />
        </div>
        <div id="contact" className={styles.sectionWrapper}>
          <AnimatedComponent>
            <Contact />
          </AnimatedComponent>
        </div>
        <div id="footer" className={styles.sectionWrapper}>
          <AnimatedComponent>
            <Footer />
          </AnimatedComponent>
        </div>
      </div>
  );
}

export default MainBody;