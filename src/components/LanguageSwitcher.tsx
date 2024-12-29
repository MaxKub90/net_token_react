import React, { useState } from 'react';
import styles from './LanguageSwitcher.module.css';

const LanguageSwitcher: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const languages = ['English', 'Russian', 'Spanish', 'German', 'French'];

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const selectLanguage = (language: string) => {
    setSelectedLanguage(language);
    setMenuOpen(false); // Закрываем меню после выбора
  };

  return (
    <div className={styles.languageSwitcher}>
      <button className={styles.selectedLanguage} onClick={toggleMenu}>
        {selectedLanguage}
      </button>
      {isMenuOpen && (
        <div className={styles.languageMenu}>
          {languages.map((language) => (
            <div
              key={language}
              className={styles.languageOption}
              onClick={() => selectLanguage(language)}
            >
              {language}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
