import styles from './Footer.module.css';
import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa'; 

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* The Back to Top Button */}
        <button onClick={scrollToTop} className={styles.topBtn} aria-label="Back to top">
          <FaArrowUp />
        </button>

        <div className={styles.socialLinks}>
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>

        <div className={styles.footerText}>
          <p>&copy; {currentYear} MyPortfolio. All rights reserved.</p>
          {/* The Technical Flex */}
          <p className={styles.techStack}>
            Designed & Built with <span>React.js</span>
          </p>
        </div>

      </div>
    </footer>
  );
}