import styles from "./HeroSection.module.css";
import DecryptedText from "../Animations/DecryptedText";

export default function HeroSection() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi I'm&nbsp; 
          <DecryptedText
            text="Abdur Rahman"
            animateOn="view"
            revealDirection="start"
            speed={90}
            maxIterations={15}
            className={styles.highlight}
          />
        </h1>
        <h2 className={styles.subtitle}>
          Full-Stack Developer & Aspiring Tech Manager
        </h2>
        <p className={styles.description}>
          Combining technical expertise in React.js and modern web architectures
          with a strategic approach to problem-solving. Passionate about
          emerging technologies, Gen AI, and building robust, user-centric
          digital applications.
        </p>

        <div className={styles.buttonGroup}>
          <a href="#project" className={styles.primaryBtn}>
            View My Work
          </a>
          <a href="#contact" className={styles.secondaryBtn}>
            Get In Touch
          </a>
          <a
            href="/Rahman.resume.pdf"
            download="Rahman_Resume.pdf"
            className={styles.resumeBtn}
          >
            📄 Download Resume
          </a>
        </div>
      </div>

      <div className={styles.imageContainer}>
        <img
          src="/ProfilePic.jpeg"
          alt="profileImage"
          className={styles.profileImage}
        />
      </div>
    </section>
  );
}