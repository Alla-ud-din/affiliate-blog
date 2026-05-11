import styles from './AffiliateCTAButton.module.css';

interface Props {
  href: string;
  size?: 'sm' | 'lg';
  label?: string;
}

export default function AffiliateCTAButton({ href, size = 'lg', label }: Props) {
  return (
    <a
      href={href}
      className={`${styles.btn} ${styles[size]}`}
      target="_blank"
      rel="nofollow noopener sponsored"
    >
      <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
      </svg>
      {label || 'Check Price'}
    </a>
  );
}
