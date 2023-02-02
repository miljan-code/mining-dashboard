import Price from './Price';
import styles from './Prices.module.css';
import { cryptoPrices } from '@constants/index';

const Prices = () => {
  return (
    <div className={styles.prices}>
      {cryptoPrices.map((item, index) => (
        <Price
          key={item.pair}
          pair={item.pair}
          price={item.price}
          index={index}
        />
      ))}
    </div>
  );
};

export default Prices;
