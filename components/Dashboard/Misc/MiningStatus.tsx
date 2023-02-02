import styles from './MiningStatus.module.css';
import MiningItem from './MiningItem';

const MiningStatus = () => {
  return (
    <div>
      <h3 className={styles.miningHead}>Mining Status</h3>
      <div className={styles.mining}>
        <MiningItem />
        <MiningItem />
        <MiningItem />
        <MiningItem />
      </div>
    </div>
  );
};

export default MiningStatus;
