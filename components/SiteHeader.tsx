import Link from 'next/link';
import styles from './SiteHeader.module.css';

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className="container--wide">
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoMark}>✦</span>
            Luxe Living Corners
          </Link>
          <nav className={styles.nav}>
            <Link href="/">Reviews</Link>
            <Link href="/about">About</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
