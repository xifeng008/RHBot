// components/About.tsx
import { profile } from 'console';
import styles from '../../styles/About.module.css';
import MemberCard from './MemberCard';

export default function About() {
  return (
    <section id="about">
      <h2 className={styles.sectionTitle}>About BoostGuild</h2>
      <div className={styles.card}>
      {/* <img src="/images/how-boostguild-work.webp" alt="Boost Guild" style={{ width: '100%', borderRadius: '8px', marginBottom: '20px' }} /> */}
          
      <p>
    <strong>Boost Guild</strong> is a decentralized organization of community stakeholders 
    increasing global economic opportunities through accessible, merit-based cryptocurrency. 
    It manages the Boost protocol, drives ecosystem growth, and distributes rewards. 
    Members include core team, moderators, contributors, and community members.
  </p>
  <p>
    The Guild operates on principles of open-source, on-chain operations, transparency, 
    and contribution-based rewards. Its community-driven governance model aims for 
                  sustainable growth and wider adoption of the cryptocurrency ecosystem.
                  
  </p>

  <a 
    href="https://rabbithole.mirror.xyz/kGknQ-qZaq3lfpi3hxi0Ka93EEgusm9x7zSkf3s-X6A" 
    target="_blank" 
    rel="noopener noreferrer" 
    className={styles.readMoreLink}
  >
    Learn More About BoostGuild
  </a>
   
    </div>
    </section>
  );
}