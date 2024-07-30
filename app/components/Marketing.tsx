// components/Marketing.tsx
import styles from '../../styles/Marketing.module.css';

export default function Marketing() {
    return (
      <section id="marketing">
        <h2 className={styles.sectionTitle}>Boost Growth Activities</h2>
        <div className={styles.card}>
          <ul className={styles.actionList}>
            <li className={styles.actionItem}>
              <div className={styles.actionContent}>
                <h3>Boost Daily Bonanza</h3>
                <p>Daily Prize: 100 USDC</p>
                <p>How to participate:</p>
                <ol className={styles.participationSteps}>
                  <li>Login to boost.xyz daily</li>
                  <li>Complete at least one boost task</li>
                  <li>Automatically enter the next day's draw</li>
                  <li>Check results at UTC 00:00 in Discord</li>
                </ol>
                <p>Results announced daily in the "Boost Daily Bonanza" Discord channel</p>
                <a href="https://boost.xyz/" target="_blank" rel="noopener noreferrer" className={styles.button}>Participate Now</a>
              </div>
              <div className={styles.actionStatus}>Active</div>
            </li>
          </ul>
        </div>
      </section>
    );
  }