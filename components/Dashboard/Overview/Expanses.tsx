import styles from './Expanses.module.css';
import Expanse from './Expanse';
import { expenseItems } from '@constants/index';

const Expanses = () => {
  return (
    <div className={styles.expanses}>
      {expenseItems.map(item => (
        <Expanse
          key={item.name}
          logo={item.logo}
          name={item.name}
          type={item.type}
          change={item.change}
          isPositive={item.isPositive}
          time={item.time}
        />
      ))}
    </div>
  );
};

export default Expanses;
