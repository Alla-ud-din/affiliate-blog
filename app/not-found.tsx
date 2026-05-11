import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className={styles.main}>
        <div className="container">
          <span className={styles.code}>404</span>
          <h1 className={styles.title}>Page not found</h1>
          <p className={styles.sub}>That review might have moved or never existed.</p>
          <Link href="/" className={styles.back}>← Back to all reviews</Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
