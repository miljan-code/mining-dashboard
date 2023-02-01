import Link from 'next/link';
import styles from './NavLink.module.css';

interface NavLinkProps {
  icon: string;
  title: string;
  link: string;
  index: number;
}

const NavLink: React.FC<NavLinkProps> = ({ icon, title, link, index }) => {
  return (
    <div className={styles.navlink}>
      <img src={icon} alt={title} />
      <Link
        href={link}
        className={`${index === 0 ? styles['navlink__active'] : ''}`}
      >
        {title}
      </Link>
    </div>
  );
};

export default NavLink;
