import type { Metadata } from 'next';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'About',
  description: 'Why we started Luxe Living Corners and how we pick our recommendations.',
};

export default function About() {
  return (
    <>
      <SiteHeader />
      <main className={styles.main}>
        <div className="container">
          <h1 className={styles.title}>Why We Curate</h1>
          <div className={styles.body}>
            <p>
              The internet is full of product recommendations that exist to earn a commission,
              not to actually help you. We started Luxe Living Corners because we were tired of
              wading through that noise.
            </p>
            <p>
              Every product we feature is something we've genuinely researched, used, or
              vetted carefully before recommending. We only write about things we'd actually
              tell a friend about.
            </p>
            <h2>Our Affiliate Disclosure</h2>
            <p>
              We participate in various affiliate programs. When you click our links and
              make a purchase, we earn a small commission — at no extra cost to you. This is
              how we keep the site running and the reviews independent.
            </p>
            <p>
              We never accept payment for positive reviews. Our opinions are our own.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
