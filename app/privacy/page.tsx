import type { Metadata } from 'next';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import styles from '../about/about.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for The Curated Find.',
};

export default function Privacy() {
  return (
    <>
      <SiteHeader />
      <main className={styles.main}>
        <div className="container">
          <h1 className={styles.title}>Privacy Policy</h1>
          <div className={styles.body}>
            <p>Last updated: {new Date().getFullYear()}</p>

            <h2>Information We Collect</h2>
            <p>
              This site does not collect personal information directly. We use standard analytics
              tools (such as Google Analytics) to understand traffic patterns. These tools may
              collect anonymized data such as browser type, pages visited, and approximate location.
            </p>

            <h2>Cookies</h2>
            <p>
              Third-party services we use — including affiliate networks and analytics providers — may place
              cookies on your device. You can control cookie behavior through your browser settings.
            </p>

            <h2>Affiliate Links</h2>
            <p>
              This site contains affiliate links to various retailers. When you click these links,
              the retailer may set cookies to track referrals. Please refer to each retailer's
              privacy policy for details on their data practices.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about this policy? Reach us at{' '}
              <a href="mailto:hello@example.com">hello@example.com</a>.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
