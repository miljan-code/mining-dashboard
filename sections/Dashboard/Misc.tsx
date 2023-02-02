import styles from './Misc.module.css';
import { Security, MiningStatus } from '@components/index';

const Misc = () => {
  return (
    <div className={styles.misc}>
      <Security />
      <MiningStatus />
    </div>
  );
};

export default Misc;
