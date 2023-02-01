import styles from './ActiveDevices.module.css';
import Device from './Device';

const ActiveDevices = () => {
  return (
    <div className={styles.activeDevices}>
      <h3>Active device</h3>
      <div className={styles['activeDevices__list']}>
        <Device device="iPhone 6s Plus" active={true} icon="/iphone6s.svg" />
        <Device device="MacBook 2017" active={true} icon="/macbook2017.svg" />
      </div>
    </div>
  );
};

export default ActiveDevices;
