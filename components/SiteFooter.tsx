import Link from 'next/link';
import styles from './SiteFooter.module.css';

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className="container--wide">
        <div className={styles.inner}>
          <div className={styles.brand}>
            <span className={styles.logoMark}>✦</span>
            <span>Luxe Living Corners</span>
          </div>
          <nav className={styles.links}>
            <Link href="/about">About</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/disclosure">Affiliate Disclosure</Link>
          </nav>
          <p className={styles.copy}>
            © {new Date().getFullYear()} Luxe Living Corners.
            Some links are affiliate links. We may earn a commission on purchases made through them.
          </p>
        </div>
      </div>
    </footer>
  );
}
