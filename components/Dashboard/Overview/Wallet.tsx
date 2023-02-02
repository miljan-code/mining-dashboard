import styles from './Wallet.module.css';

interface WalletProps {
  wallet: string;
  ticker: string;
  logo: string;
}

const Wallet: React.FC<WalletProps> = ({ wallet, ticker, logo }) => {
  return (
    <div className={styles.wallet}>
      <p className={styles.walletName}>{wallet}</p>
      <p className={styles.balance}>
        4.434953 <span className={styles.ticker}>{ticker}</span>
      </p>
      <img src={logo} alt={wallet} className={styles.logo} />
    </div>
  );
};

export default Wallet;
