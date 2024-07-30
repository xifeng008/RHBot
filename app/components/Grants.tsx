// components/Grants.tsx
import styles from '../../styles/Grants.module.css';

export default function Grants() {
    return (
      <section id="grants" className={styles.grantsSection}>
        <h2 className={styles.sectionTitle}>Boost On-Chain Grants</h2>
        <div className={styles.grantsList}>
          <div className={styles.grantCard}>
            <h3 className={styles.grantTitle}>DeFi Innovation Grant</h3>
            <p className={styles.grantDescription}>
              Supporting projects that push the boundaries of decentralized finance.
            </p>
            <div className={styles.grantDetails}>
              <span className={styles.grantAmount}>$50,000</span>
              <span className={`${styles.grantStatus} ${styles.statusOpen}`}>Open</span>
            </div>
            <a href="#" className={styles.applyButton}>Apply Now</a>
          </div>
          <div className={styles.grantCard}>
            <h3 className={styles.grantTitle}>Blockchain for Social Good</h3>
            <p className={styles.grantDescription}>
              Funding initiatives that leverage blockchain technology to address social challenges.
            </p>
            <div className={styles.grantDetails}>
              <span className={styles.grantAmount}>$75,000</span>
              <span className={`${styles.grantStatus} ${styles.statusOpen}`}>Open</span>
            </div>
            <a href="#" className={styles.applyButton}>Apply Now</a>
          </div>
          <div className={styles.grantCard}>
            <h3 className={styles.grantTitle}>Interoperability Research Grant</h3>
            <p className={styles.grantDescription}>
              Exploring solutions for seamless communication between different blockchain networks.
            </p>
            <div className={styles.grantDetails}>
              <span className={styles.grantAmount}>$100,000</span>
              <span className={`${styles.grantStatus} ${styles.statusClosed}`}>Closed</span>
            </div>
            <a href="#" className={styles.applyButton} style={{pointerEvents: 'none', opacity: 0.5}}>Closed</a>
          </div>
        </div>
      </section>
    );
  }