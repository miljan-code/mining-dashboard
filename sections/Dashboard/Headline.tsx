import styles from './Headline.module.css';
import { DashboardNav, Search } from '@components/index';

const Headline = () => {
  return (
    <div className={styles.headline}>
      <DashboardNav />
      <Search />
    </div>
  );
};

export default Headline;
