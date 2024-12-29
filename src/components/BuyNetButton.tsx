import React from 'react';
import styles from './BuyNetButton.module.css';

interface BuyNetButtonProps {
  onClick: () => void;
}

const BuyNetButton: React.FC<BuyNetButtonProps> = ({ onClick }) => {
  return (
    <button className={styles.buyButton} onClick={onClick}>
      Buy NET
    </button>
  );
};

export default BuyNetButton;
