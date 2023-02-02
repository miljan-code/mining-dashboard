import styles from './Security.module.css';
import SecurityItem from './SecurityItem';

const Security = () => {
  return (
    <div>
      <h3 className={styles.securityHead}>Security</h3>
      <div className={styles.security}>
        <SecurityItem name="Identity" isEnabled={true} />
        <SecurityItem name="Identity" isEnabled={false} />
        <SecurityItem name="Phone" isEnabled={false} />
        <SecurityItem name="Phone" isEnabled={true} />
      </div>
    </div>
  );
};

export default Security;
