import Link from 'next/link';
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.profile}>
      <Link href="/profile">
        <img src="/avatar.png" alt="Avatar" />
      </Link>
      <div className={styles.details}>
        <Link href="/profile">
          <p>Mike Taylor</p>
        </Link>
        <div className={styles.status}>
          <img src="/activeDot.svg" />
          <p>Online</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
