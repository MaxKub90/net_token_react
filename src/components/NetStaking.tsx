import React, { useState } from 'react';
import styles from './NetStaking.module.css';

const NetStaking: React.FC = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [popupType, setPopupType] = useState("");

  // Открыть попап
  const handleButtonClick = (type: string) => {
    setPopupType(type);
    setPopupVisible(true);
  };

  // Закрыть попап
  const closePopup = () => {
    setPopupVisible(false);
    setPopupType("");
  };

  // Динамическое содержимое для попапов
  const getPopupContent = () => {
    switch (popupType) {
      case "stake":
        return {
          title: "Stake Tokens",
          description: "Enter the amount of tokens you want to stake.",
          placeholder: "Enter amount to stake",
          actionButton: "Stake",
        };
      case "withdraw":
        return {
          title: "Withdraw Tokens",
          description: "Enter the amount of tokens you want to withdraw.",
          placeholder: "Enter amount to withdraw",
          actionButton: "Withdraw",
        };
      case "claim":
        return {
          title: "Claim Rewards",
          description: "Claim your accumulated rewards.",
          placeholder: null,
          actionButton: "Claim",
        };
      default:
        return {};
    }
  };

  const popupContent = getPopupContent();

  return (
    <>
      <div className={styles.mainCont}>
        <div className={styles.mainTitle}>
          <h1 className={styles.stakingTitle1}>STAKING</h1>
          <h1 className={styles.stakingTitle}>STAKING</h1>
        </div>
        <div className={styles.stakingContainer}>
          <div className={styles.stakingInfo}>
            <div className={styles.stakingBlock1}>
              <div className={styles.infoBlock}>
                <h2>STAKED BALANCE</h2>
                <p>0 $NET</p>
                <h2>YOUR STAKEABLE</h2>
                <p>0 $NET</p>
                <button onClick={() => handleButtonClick("stake")}>STAKE</button>
              </div>
            </div>
            <div className={styles.stakingBlock1}>
              <div className={styles.infoBlock}>
                <h2>% OF POOL</h2>
                <p>0 $NET</p>
                <h2>TOTAL STAKED</h2>
                <p>0 $NET</p>
                <button onClick={() => handleButtonClick("withdraw")}>
                  WITHDRAW TOKENS
                </button>
              </div>
            </div>
            <div className={styles.stakingBlock1}>
              <div className={styles.infoBlock}>
                <h2>ESTIMATED REWARDS</h2>
                <p>292% P/A</p>
                <ul>
                  <li>Rewards rate is dynamic</li>
                  <li>Monthly = Rewards % / 12</li>
                  <li>Daily = Rewards % / 365</li>
                </ul>
              </div>
            </div>
            <div className={styles.stakingBlock1}>
              <div className={styles.infoBlock}>
                <h2>CLAIMABLE REWARDS</h2>
                <p>0 $NET</p>
                <button onClick={() => handleButtonClick("claim")}>
                  CLAIM TOKENS
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mainPics}>
          <div className={styles.graph}>
            <img src="public/TotalSupply.png" alt="Staking Chart" />
          </div>
          <div className={styles.growpic}>
            <img src="public/StakingPagePic.png" alt="Growth Illustration" />
          </div>
        </div>
      </div>

      {/* Popup */}
      {isPopupVisible && (
        <div className={styles.popupOverlay} onClick={closePopup}>
          <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
            <h2>{popupContent.title}</h2>
            <p>{popupContent.description}</p>
            {popupContent.placeholder && (
              <input
                type="number"
                placeholder={popupContent.placeholder}
                className={styles.inputField}
              />
            )}
            <div className={styles.popupButtons}>
              <button onClick={closePopup} className={styles.cancelButton}>
                Cancel
              </button>
              <button className={styles.actionButton}>
                {popupContent.actionButton}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NetStaking;
