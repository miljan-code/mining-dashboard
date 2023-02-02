import Wallet from './Wallet';
import styles from './Balance.module.css';

interface BalanceProps {
  coin: 'bitcoin' | 'ethereum';
}

const Balance: React.FC<BalanceProps> = ({ coin }) => {
  return (
    <div className={styles.balance}>
      <div className={styles.decor}>
        <img src="/balance-decor.svg" alt="Decoration" />
      </div>
      <div className={styles.fullBalance}>
        <div className={styles.details}>
          <p className={styles.available}>Available balance in USD</p>
          <p className={styles.balanceUSD}>134,510.15</p>
          <div className={styles.moreInfo}>
            <div className={styles.transactions}>
              <p>Transactions</p>
              <p>34,405</p>
            </div>
            <div className={styles.transactions}>
              <p>Wallets</p>
              <p>23</p>
            </div>
          </div>
          <p className={styles.activity}>Last activity at 21 May, 2021</p>
        </div>
        <div className={styles.logo}>
          <img src="/btc-logo.png" />
        </div>
      </div>
      <div className={styles.wallets}>
        <Wallet wallet="Nio Wallet" ticker="NIO" logo="/nio.svg" />
        <Wallet wallet="Ethereum Wallet" ticker="ETH" logo="/ethWallet.svg" />
      </div>
    </div>
  );
};

export default Balance;
