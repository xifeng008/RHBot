// components/Header.tsx
import styles from '../../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>+ BoostGuild</div>
        <div className={styles.assets}>Balance: $297.6K</div>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li><a href="#about">About</a></li>
          <li><a href="#marketing">Growth</a></li>
          <li><a href="#actions">Actions</a></li>
          <li><a href="#grants">Grants</a></li>
        </ul>
      </nav>
    </header>
  );
}