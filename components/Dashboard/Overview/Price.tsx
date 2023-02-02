import styles from './Price.module.css';

interface PriceProps {
  pair: string;
  price: string;
  index: number;
}

const Price: React.FC<PriceProps> = ({ pair, price, index }) => {
  return (
    <div
      className={`${styles.priceContent} ${index === 0 && styles.priceBg1} ${
        index === 1 && styles.priceBg2
      } ${index === 2 && styles.priceBg3} ${index === 3 && styles.priceBg4}`}
    >
      <p className={styles.pair}>{pair}</p>
      <div className={styles.priceLink}>
        <p className={styles.price}>${price}</p>
        <img
          src={index === 3 ? '/down-arr.svg' : '/up-arr.svg'}
          className={styles.priceMov}
        />
      </div>
    </div>
  );
};

export default Price;
