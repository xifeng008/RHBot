// components/MemberCard.tsx
import styles from '../../styles/MemberCard.module.css';

interface MemberCardProps {
    name: string;
    twitter: string;
    profileUrl: string
  }
  
  export default function MemberCard({ name, twitter, profileUrl }: MemberCardProps) {
    return (
      <div className={styles.member}>
        <img src={profileUrl} alt={name} className={styles.profileImage} />
        <h4>{name}</h4>
        <a href={`https://twitter.com/${twitter}`} target="_blank" className={styles.button}>Twitter</a>
      </div>
    );
  }