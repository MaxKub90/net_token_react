import styles from './SecondSection.module.css';

const SecondSection = () => {
  return (
    <div  id="features" className={ styles.mainContainer}>
      <div className={styles.headerblock1Main}>
        <div className={styles.headerBlock1}>
          <h3 className={`${styles.headerblock1Text} ${styles.first}`}>NET TOKEN</h3>
          <h3 className={`${styles.headerblock1Text} ${styles.second}`}>NET TOKEN</h3>
        </div>
        <h1 className={`${styles.headerblock1Text} ${styles.third}`}>WEAVE YOUR THREADS</h1>
      </div>
      <div className={styles.backdiv}>
      <div className={styles.block1Element}>
        <div className={styles.block1LeftSection}>
          <span className={styles.elementIcon}>
            <svg width="24" height="33" viewBox="0 0 24 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="17.5" y="1.5" width="30" height="16" transform="rotate(90 17.5 1.5)" stroke="black" strokeWidth="3"/>
              <rect x="22.5" y="1.5" width="30" height="13" transform="rotate(90 22.5 1.5)" stroke="black" strokeWidth="3"/>
            </svg>
          </span>
          <h2>Internet ▸ NET token ▸ Features</h2>
        </div>
        <div className={styles.block1RightSection}>
          <span className={styles.circleIcon}>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1.5" y="1.5" width="33" height="33" rx="13.5" stroke="black" strokeWidth="3"/>
              <line x1="6" y1="18.5" x2="29" y2="18.5" stroke="black" strokeWidth="3"/>
            </svg>
          </span>
          <span className={styles.circleIcon}>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1.5" y="1.5" width="33" height="33" rx="13.5" stroke="black" strokeWidth="3"/>
              <rect x="7.5" y="16.5" width="21" height="9" stroke="black" strokeWidth="3"/>
              <rect x="7.5" y="11.5" width="21" height="5" stroke="black" strokeWidth="3"/>
            </svg>
          </span>
          <span className={styles.circleIcon}>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1.5" y="1.5" width="33" height="33" rx="13.5" stroke="black" strokeWidth="3"/>
              <line x1="10.0607" y1="9.93934" x2="26.3241" y2="26.2028" stroke="black" strokeWidth="3"/>
              <line x1="9.55693" y1="26.5673" x2="25.599" y2="10.0855" stroke="black" strokeWidth="3"/>
            </svg>
          </span>
        </div>
      </div>
      <div className={styles.yellowRectangle}>
        {/* Контент или просто прямоугольник */}
      </div>
  </div>
  <div className={styles.tablesmain}>
      <div className={styles.tableFeatures}>
        <div className={styles.tableHeader}>
          <div className={styles.tableLeftIcons}>
            <span className={styles.plusIcon}><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.746 9.4043V-0.000976562H9.74597V9.4043H0V12.4043H9.74597V22.999H12.746V12.4043H23V9.4043H12.746Z" fill="black"/>
</svg></span>
          </div>
          <div className={styles.tableTitle}>FEATURES</div>
          <div className={styles.tableRightIcons}>
            <span className={styles.dotsIcon}><svg width="22" height="6" viewBox="0 0 22 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 3C6 4.65685 4.65685 6 3 6C1.34315 6 0 4.65685 0 3C0 1.34315 1.34315 0 3 0C4.65685 0 6 1.34315 6 3Z" fill="black"/>
<path d="M14 3C14 4.65685 12.6569 6 11 6C9.34315 6 8 4.65685 8 3C8 1.34315 9.34315 0 11 0C12.6569 0 14 1.34315 14 3Z" fill="black"/>
<path d="M22 3C22 4.65685 20.6569 6 19 6C17.3431 6 16 4.65685 16 3C16 1.34315 17.3431 0 19 0C20.6569 0 22 1.34315 22 3Z" fill="black"/>
</svg></span>
            <span className={styles.tableIcon}>
              <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5.5" y="12.5" width="17" height="15" stroke="black" strokeWidth="3"/>
                <rect x="1.5" y="7.5" width="25" height="5" stroke="black" strokeWidth="3"/>
                <rect x="9.5" y="1.5" width="9" height="6" stroke="black" strokeWidth="3"/>
              </svg>
            </span>
          </div>
        </div>
        <div className={styles.tableContentFeatures}>
          <div className={styles.titleIn}>FEATURES</div>
          <p>NET is a meme coin as big as the "network" or "Internet." We bring people together from all over the world because with NET, you become a spider in our vast web with the ability to weave your own strong networks.</p>
        </div>
      </div>

      <div className={styles.memstakingMain}>
        <div className={styles.tableMemecoins}>
          <div className={styles.tableHeader}>
            <div className={styles.leftIcons}>
              <span className={styles.plusIcon}><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.746 9.4043V-0.000976562H9.74597V9.4043H0V12.4043H9.74597V22.999H12.746V12.4043H23V9.4043H12.746Z" fill="black"/>
</svg></span>
            </div>
            <div className={styles.tableTitle}>MEMECOINS</div>
            <div className={styles.rightIcons}>
              <span className={styles.dotsIcon}><svg width="22" height="6" viewBox="0 0 22 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 3C6 4.65685 4.65685 6 3 6C1.34315 6 0 4.65685 0 3C0 1.34315 1.34315 0 3 0C4.65685 0 6 1.34315 6 3Z" fill="black"/>
<path d="M14 3C14 4.65685 12.6569 6 11 6C9.34315 6 8 4.65685 8 3C8 1.34315 9.34315 0 11 0C12.6569 0 14 1.34315 14 3Z" fill="black"/>
<path d="M22 3C22 4.65685 20.6569 6 19 6C17.3431 6 16 4.65685 16 3C16 1.34315 17.3431 0 19 0C20.6569 0 22 1.34315 22 3Z" fill="black"/>
</svg></span>
              <span className={styles.tableIcon}>
                <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5.5" y="12.5" width="17" height="15" stroke="black" strokeWidth="3"/>
                  <rect x="1.5" y="7.5" width="25" height="5" stroke="black" strokeWidth="3"/>
                  <rect x="9.5" y="1.5" width="9" height="6" stroke="black" strokeWidth="3"/>
                </svg>
              </span>
            </div>
          </div>
          <div className={styles.tableContent}>
            <p>Initially just a joke, Memecoins has now become an established part of the cryptocurrency economy. As the most powerful means to convert people's attention into money, 'memes' are no longer just a prank. With top VCs launching meme coin funds, and memes becoming the most powerful means of community activation among celebrities.</p>
          </div>
        </div>

        <div className={styles.tableStaking}>
          <div className={styles.tableHeader}>
            <div className={styles.leftIcons}>
              <span className={styles.plusIcon}><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.746 9.4043V-0.000976562H9.74597V9.4043H0V12.4043H9.74597V22.999H12.746V12.4043H23V9.4043H12.746Z" fill="black"/>
</svg></span>
            </div>
            <div className={styles.tableTitle}>Staking Rewards</div>
            <div className={styles.rightIcons}>
              <span className={styles.dotsIcon}><svg width="22" height="6" viewBox="0 0 22 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 3C6 4.65685 4.65685 6 3 6C1.34315 6 0 4.65685 0 3C0 1.34315 1.34315 0 3 0C4.65685 0 6 1.34315 6 3Z" fill="black"/>
<path d="M14 3C14 4.65685 12.6569 6 11 6C9.34315 6 8 4.65685 8 3C8 1.34315 9.34315 0 11 0C12.6569 0 14 1.34315 14 3Z" fill="black"/>
<path d="M22 3C22 4.65685 20.6569 6 19 6C17.3431 6 16 4.65685 16 3C16 1.34315 17.3431 0 19 0C20.6569 0 22 1.34315 22 3Z" fill="black"/>
</svg></span>
              <span className={styles.tableIcon}>
                <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5.5" y="12.5" width="17" height="15" stroke="black" strokeWidth="3"/>
                  <rect x="1.5" y="7.5" width="25" height="5" stroke="black" strokeWidth="3"/>
                  <rect x="9.5" y="1.5" width="9" height="6" stroke="black" strokeWidth="3"/>
                </svg>
              </span>
            </div>
          </div>
          <div className={styles.tableContent}> <p>Stake your $NET tokens to earn passive rewards when our token will be listed.</p>
          </div>
        </div>
      </div>

      <div className={styles.tableIntegration}>
        <div className={styles.tableHeader}>
          <div className={styles.leftIcons}>
            <span className={styles.plusIcon}><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.746 9.4043V-0.000976562H9.74597V9.4043H0V12.4043H9.74597V22.999H12.746V12.4043H23V9.4043H12.746Z" fill="black"/>
</svg></span>
          </div>
          <div className={styles.tableTitle}>Easy Integration</div>
          <div className={styles.rightIcons}>
            <span className={styles.dotsIcon}><svg width="22" height="6" viewBox="0 0 22 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 3C6 4.65685 4.65685 6 3 6C1.34315 6 0 4.65685 0 3C0 1.34315 1.34315 0 3 0C4.65685 0 6 1.34315 6 3Z" fill="black"/>
<path d="M14 3C14 4.65685 12.6569 6 11 6C9.34315 6 8 4.65685 8 3C8 1.34315 9.34315 0 11 0C12.6569 0 14 1.34315 14 3Z" fill="black"/>
<path d="M22 3C22 4.65685 20.6569 6 19 6C17.3431 6 16 4.65685 16 3C16 1.34315 17.3431 0 19 0C20.6569 0 22 1.34315 22 3Z" fill="black"/>
</svg></span>
            <span className={styles.tableIcon}>
              <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5.5" y="12.5" width="17" height="15" stroke="black" strokeWidth="3"/>
                <rect x="1.5" y="7.5" width="25" height="5" stroke="black" strokeWidth="3"/>
                <rect x="9.5" y="1.5" width="9" height="6" stroke="black" strokeWidth="3"/>
              </svg>
            </span>
          </div>
        </div>
        <div className={styles.tableContent}>Add $NET to your wallet such as Trust Wallet or MetaMask and start staking to have a big profit </div>
      </div>
    </div>
    </div>
  );
};

export default SecondSection;
