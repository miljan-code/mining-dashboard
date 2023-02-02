import styles from './MiningStatus.module.css';
import MiningItem from './MiningItem';

const MiningStatus = () => {
  return (
    <div>
      <h3 className={styles.miningHead}>Mining Status</h3>
      <div className={styles.mining}>
        <MiningItem icon="/cpu-btc.svg" hardware="gpu" isActive={true} />
        <MiningItem
          icon="/cpu-electricity.svg"
          hardware="cpu"
          isActive={true}
        />
      </div>
    </div>
  );
};

export default MiningStatus;
