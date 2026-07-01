import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href="#home">MyPortfolio.</a>
      </div>

      <div 
        className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`} 
        onClick={toggleMenu}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>


      <ul className={`${styles.navMenu} ${isMenuOpen ? styles.active : ''}`}>
        <li className={styles.navItem}>
          <a href="#home" className={styles.navLink} onClick={closeMenu}>Home</a>
        </li>
        <li className={styles.navItem}>
          <a href="#skills" className={styles.navLink} onClick={closeMenu}>Skills</a>
        </li>
        <li className={styles.navItem}>
          <a href="#projects" className={styles.navLink} onClick={closeMenu}>Projects</a>
        </li>
        <li className={styles.navItem}>
          <a href="#contact" className={styles.navLink} onClick={closeMenu}>Contact</a>
        </li>
      </ul>
    </nav>
  );
}