import styles from './DashboardNavItem.module.css';

interface DashboardNavItemProps {
  icon: string;
  title: string;
  index: number;
}

const DashboardNavItem: React.FC<DashboardNavItemProps> = ({
  icon,
  title,
  index,
}) => {
  return (
    <div
      className={`${index === 0 ? styles.dashNavActive : ''} ${
        styles.dashNavItem
      }`}
    >
      <div>
        <img src={icon} alt={title} />
      </div>
    </div>
  );
};

export default DashboardNavItem;
