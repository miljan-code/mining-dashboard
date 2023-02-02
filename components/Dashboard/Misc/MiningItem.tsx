import styles from './MiningItem.module.css';
import Switch from './Switch';

interface MiningItemProps {
  icon: string;
  hardware: 'cpu' | 'gpu';
  isActive: boolean;
}

const MiningItem: React.FC<MiningItemProps> = ({
  icon,
  hardware,
  isActive,
}) => {
  return (
    <div className={styles.miningItem}>
      <div className={styles.leftSide}>
        <div
          className={`${styles.bgLeft} ${
            hardware === 'cpu' ? styles.bgLeftCpu : styles.bgLeftGpu
          }`}
        >
          <img src={icon} alt="Cpu icon" />
        </div>
        <div className={styles.details}>
          <p>{hardware === 'cpu' ? 'CPU' : 'GPU'}s mining</p>
          <p
            className={`${styles.isRunning} ${isActive ? styles.running : ''}`}
          >
            {isActive ? 'Running...' : 'Offline'}
          </p>
        </div>
        <Switch />
      </div>
      <div className={styles.rightSide}>
        <div className={`${styles.bgRight} ${styles.bgRightCal}`}>
          <img src="/calendar.svg" alt="calendar icon" />
        </div>
        <div className={styles.details}>
          <p>Est. daily USD</p>
          <p className={styles.earnings}>$25.03</p>
        </div>
      </div>
    </div>
  );
};

export default MiningItem;
