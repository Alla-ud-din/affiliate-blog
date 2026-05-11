import type { Metadata } from 'next';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import styles from '../about/about.module.css';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure',
  description: 'How we earn from affiliate links on Luxe Living Corners.',
};

export default function Disclosure() {
  return (
    <>
      <SiteHeader />
      <main className={styles.main}>
        <div className="container">
          <h1 className={styles.title}>Affiliate Disclosure</h1>
          <div className={styles.body}>
            <p>
              Some links on this site are affiliate links. This means that if you click a link
              and make a purchase, we may earn a small commission from the retailer — at{' '}
              <strong>no additional cost to you</strong>.
            </p>
            <p>
              We participate in affiliate programs run by various retailers and networks.
              The commission we earn helps fund the research and writing that goes into
              every review on this site.
            </p>
            <p>
              Our editorial opinions are never influenced by affiliate relationships. We only
              recommend products we genuinely believe are worth buying. If a product doesn't
              meet our standards, we don't feature it — regardless of commission potential.
            </p>
            <p>
              Prices change frequently. We do not display prices directly on this site.
              Always check the retailer's page for the current price before purchasing.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
