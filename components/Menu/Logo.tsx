import Link from 'next/link';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src="/favicon.svg" alt="logo" />
      <Link href="/">
        <p>Mine&Shine</p>
      </Link>
    </div>
  );
};

export default Logo;
