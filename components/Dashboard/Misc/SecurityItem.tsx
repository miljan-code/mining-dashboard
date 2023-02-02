import styles from './SecurityItem.module.css';
import Switch from './Switch';

interface SecurityItemProps {
  name: string;
  isEnabled: boolean;
}

const SecurityItem: React.FC<SecurityItemProps> = ({ name, isEnabled }) => {
  return (
    <div className={styles.securityItem}>
      <div className={styles.details}>
        <p>{name}</p>
        <p>{isEnabled ? 'Disable' : 'Enable'}</p>
      </div>
      <Switch />
    </div>
  );
};

export default SecurityItem;
