import { Balance, Prices, Expanses } from '@components/index';
import styles from './Overview.module.css';

const Overview = () => {
  return (
    <div className={styles.overview}>
      <h3>Overview</h3>
      <div className={styles.overviewContent}>
        <Balance coin="bitcoin" />
        <Prices />
        <Expanses />
      </div>
    </div>
  );
};

export default Overview;
