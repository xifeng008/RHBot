// components/Contributors.tsx
import React from 'react';
import styles from '../../styles/Contributors.module.css';
import MemberCard from './MemberCard';

interface Member {
  name: string;
  twitter: string;
  profileUrl: string;
}

interface ContributorsProps {
  members: Member[];
}

export default function Contributors({ members }: ContributorsProps) {
    return (
    <section id="contributors" className={styles.contributorsSection}>
            <div>
      <h2 className={styles.sectionTitle}>Contributors</h2>
      <div className={styles.grid}>
        {members.map((member, index) => (
          <MemberCard key={index} name={member.name} twitter={member.twitter} profileUrl={member.profileUrl} />
        ))}
      </div>
            </div>
    </section>        
  );
}