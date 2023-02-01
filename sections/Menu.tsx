import styles from './Menu.module.css';

import { Navigation, Logo, ActiveDevices, Profile } from '@components/index';

const Menu = () => {
  return (
    <div className={styles.menu}>
      <Logo />
      <Navigation />
      <ActiveDevices />
      <Profile />
    </div>
  );
};

export default Menu;
