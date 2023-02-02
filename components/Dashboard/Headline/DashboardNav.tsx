import styles from './DashboardNav.module.css';
import { dashNavItems } from '@constants/index';
import DashboardNavItem from './DashboardNavItem';

const DashboardNav = () => {
  return (
    <div className={styles.dashboardNav}>
      <h2>Welcome to Dashboard</h2>
      <div className={styles.dashboardNavItems}>
        {dashNavItems.map((item, index) => (
          <DashboardNavItem
            key={item.name}
            icon={item.icon}
            title={item.name}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardNav;
