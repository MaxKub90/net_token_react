import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import LanguageSwitcher from './LanguageSwitcher';
import BuyNetButton from './BuyNetButton';
import { Link } from 'react-router-dom';
import MenuToggle from './MenuToggle';

const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const animateText = (text: string) => {
    return text.split('').map((char, index) => (
      <span key={index} style={{ animationDelay: `${0.1 * index}s` }}>
        {char}
      </span>
    ));
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(`.${styles.header}`)) {
        handleClickOutside();
      }
    };

    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.mainMenu}>
        <div className={styles.navLogo}>
          <Link to="/" className={styles.logoLink}>
            NET TOKEN
          </Link>
        </div>
        <div className={styles.navLinks}>
          <div className={styles.navWrap}>
            <li onClick={() => scrollToSection('features')}>Features</li>
            <li onClick={() => scrollToSection('tokenomics')}>Tokenomics</li>
            <li onClick={() => scrollToSection('howtobuysec')}>How to buy</li>
            <li onClick={() => scrollToSection('roadmap')}>Roadmap</li>
            <li onClick={() => scrollToSection('faq')}>FAQ</li>
          </div>
          <div className={styles.navWrap2}>
            <li>
              <Link to="/staking">{animateText('Staking')}</Link>
            </li>
            <li>
            <a 
                href="/whitepaper.pdf"  // Путь к вашему PDF
                target="_blank"         // Открыть в новой вкладке
                rel="noopener noreferrer"
                className={styles.link}
              >
                {animateText('White Paper')}
              </a>
            </li>
          </div>
        </div>
        <div className={styles.menuButtons}>
          <BuyNetButton onClick={() => scrollToSection('walletSection')} />
          <LanguageSwitcher />
        </div>
      </div>

      <nav className={styles.mobileMenu}>
        <div className={styles.menuHeader}>
        <Link to="/" className={styles.mobileLogo}>
            NET TOKEN
          </Link>         <MenuToggle onClick={toggleMenu} />
        </div>
        <div className={`${styles.menu} ${isMenuOpen ? styles.show : ''}`}>
        <Link to="/" className={styles.menuTitle}>
            NET TOKEN
          </Link>          <ul className={styles.menuLinks}>
            <li onClick={() => scrollToSection('features')}>{animateText('Features')} </li>
            <li onClick={() => scrollToSection('tokenomics')}>{animateText('Tokenomics')}</li>
            <li onClick={() => scrollToSection('howtobuy')}>{animateText('How to Buy')}</li>
            <li onClick={() => scrollToSection('faq')}>{animateText('FAQ')}</li>
            <li onClick={() => scrollToSection('roadmap')}>{animateText('Roadmap')}</li>
            <li>
              <Link to="/staking">{animateText('Staking')}</Link>
            </li>
            <li>
            <a 
                href="/whitepaper.pdf"  // Путь к вашему PDF
                target="_blank"         // Открыть в новой вкладке
                rel="noopener noreferrer"
                className={styles.link}
              >
                {animateText('White Paper')}
              </a>
            </li>
          </ul>
          <LanguageSwitcher />
       </div>
      </nav>
    </header>
  );
};

export default Header;
