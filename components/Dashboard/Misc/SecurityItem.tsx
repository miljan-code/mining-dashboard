import styles from './SecurityItem.module.css';

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
    </div>
  );
};

export default SecurityItem;
