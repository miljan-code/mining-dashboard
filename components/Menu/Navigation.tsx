import styles from './Navigation.module.css';
import NavLink from './NavLink';
import { navItems } from '@constants/index';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      {navItems.map((item, index) => (
        <NavLink
          key={item.title}
          icon={item.icon}
          title={item.title}
          link={item.link}
          index={index}
        />
      ))}
    </nav>
  );
};

export default Navigation;
