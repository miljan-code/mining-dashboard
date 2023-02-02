import styles from './Expanse.module.css';

interface ExpanseProps {
  logo: string;
  name: string;
  type: string;
  change: string;
  isPositive: boolean;
  time: string;
}

const Expanse: React.FC<ExpanseProps> = ({
  logo,
  name,
  type,
  change,
  isPositive,
  time,
}) => {
  return (
    <div className={styles.expanse}>
      <div className={styles.details}>
        <img src={logo} alt={name} />
        <div className={styles.expName}>
          <p>{name}</p>
          <p>{type}</p>
        </div>
      </div>
      <div className={styles.priceChange}>
        <p
          className={`${styles.change} ${
            isPositive ? styles.positive : styles.negative
          }`}
        >
          {isPositive ? '+' : '-'} ${change}
        </p>
        <p>{time}</p>
      </div>
    </div>
  );
};

export default Expanse;
