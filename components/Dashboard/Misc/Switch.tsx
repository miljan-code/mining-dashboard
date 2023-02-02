'use client';

import { useState } from 'react';
import styles from './Switch.module.css';

const Switch = () => {
  const [active, setActive] = useState(true);

  return (
    <div
      onClick={() => setActive(prev => !prev)}
      className={`${styles.switchBg} ${active ? styles.switchBgActive : ''}`}
    >
      <div
        className={`${styles.switchBtn} ${
          active ? styles.switchBtnActive : ''
        }`}
      ></div>
    </div>
  );
};

export default Switch;
