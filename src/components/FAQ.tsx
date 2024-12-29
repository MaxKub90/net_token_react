import React, { useState } from 'react';
import styles from './FAQ.module.css'; // Подключаем стили

type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="faq" className={styles.faqItem}>
      <div className={styles.faqQuestion} onClick={toggleAnswer}>
        <span>{question}</span>
        <span className={styles.faqToggle}>{isOpen ? '-' : '+'}</span>
      </div>
      <div className={`${styles.faqAnswer} ${isOpen ? styles.open : ''}`}>
        {answer}
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <div className={styles.faqSection}>
      <h1 className={styles.faqTitle}>FAQ</h1>
      <div className={styles.faqContainer}>
        <FAQItem question="What is $NET" answer="$NET is a token used in our ecosystem." />
        <FAQItem question="How can I participate in the $NET token presale?" answer="You can buy our token on our website." />
        <FAQItem question="When can I claim my tokens?" answer="Tokens will be claimable after the presale ends." />
        <FAQItem question="When will the $NET token be launched on exchanges?" answer="Our token will be launched after presale ends." />
        <FAQItem question="What wallet should I use to join the presale?" answer="You can use any wallet that supports Ethereum-based tokens." />
      </div>
    </div>
  );
};

export default FAQ;
