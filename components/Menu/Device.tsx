import styles from './Device.module.css';

interface DeviceProps {
  device: string;
  active: boolean;
  icon: string;
}

const Device: React.FC<DeviceProps> = ({ device, active, icon }) => {
  return (
    <div className={styles.device}>
      <div className={styles.icon}>
        <img src={icon} alt={device} />
      </div>
      <div className={styles.details}>
        <p>{device}</p>
        <div className={styles.status}>
          <img src={active ? '/activeDot.svg' : 'offlineDot.svg'} />
          <p>{active ? 'Active' : 'Offline'}</p>
        </div>
      </div>
      <div className={styles.more}>
        <img src="/more.svg" />
      </div>
    </div>
  );
};

export default Device;
