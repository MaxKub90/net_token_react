import React, { useState } from "react";
import styles from "./MenuToggle.module.css";

interface MenuToggleProps {
  onClick?: () => void; // Проп для обработчика клика
}

const MenuToggle: React.FC<MenuToggleProps> = ({ onClick }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
    if (onClick) {
      onClick(); // Вызов переданного обработчика
    }
  };

  return (
    <div
      className={`${styles.toggle} ${isActive ? styles.active : ""}`}
      onClick={toggleMenu}
    >
      <span></span>
    </div>
  );
};

export default MenuToggle;
