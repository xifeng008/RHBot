// components/Actions.tsx
import styles from '../../styles/Actions.module.css';

export default function Actions() {
  return (
    <section id="actions">
      <h2 className={styles.sectionTitle}>BoostGuild Actions</h2>
      <div className={styles.card}>
        <ul className={styles.actionList}>
          <li className={styles.actionItem}>
            <div className={styles.actionContent}>
              <h3>Blockchain Technology Summit</h3>
              <p>Date: August 15, 2024 | Location: Online</p>
              <p>An annual event bringing together blockchain experts and enthusiasts.</p>
            </div>
            <div className={styles.actionStatus}>Executed</div>
          </li>
          <li className={styles.actionItem}>
            <div className={styles.actionContent}>
              <h3>DeFi Innovation Workshop</h3>
              <p>Date: September 20, 2024 | Location: Shanghai</p>
              <p>A hands-on workshop exploring the latest trends in decentralized finance.</p>
            </div>
            <div className={styles.actionStatus}>Planned</div>
          </li>
        </ul>
      </div>
    </section>
  );
}