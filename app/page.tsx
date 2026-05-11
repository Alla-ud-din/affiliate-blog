import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import styles from './page.module.css';

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className="container">
            <span className={styles.eyebrow}>Tested. Vetted. Trusted.</span>
            <h1 className={styles.heroTitle}>
              Products worth every<br />
              <em>penny you spend.</em>
            </h1>
            <p className={styles.heroSub}>
              No fluff. No filler. Just the things that genuinely make life easier,
              better, or more beautiful — curated with obsessive care.
            </p>
          </div>
        </section>

        {/* Post grid */}
        <section className={styles.grid}>
          <div className="container--wide">
            <div className={styles.gridInner}>
              {posts.map((post) => (
                <div key={post.slug} className={styles.card}>
                  <Link href={`/review/${post.slug}`} className={styles.cardImgLink}>
                    <div className={styles.cardImg}>
                      <img
                        src={post.image || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80'}
                        alt={post.title}
                        loading="lazy"
                      />
                    </div>
                  </Link>
                  <div className={styles.cardBody}>
                    <span className={styles.cardCategory}>{post.category}</span>
                    <Link href={`/review/${post.slug}`} className={styles.cardTitleLink}>
                      <h2 className={styles.cardTitle}>{post.title}</h2>
                    </Link>
                    <p className={styles.cardExcerpt}>{post.excerpt}</p>
                    <a
                      href={post.affiliateUrl}
                      className={styles.buyBtn}
                      target="_blank"
                      rel="nofollow noopener sponsored"
                    >
                      {post.ctaLabel || 'Buy Now'}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Disclosure */}
        <div className={styles.disclosure}>
          <div className="container">
            <p>
              <strong>Affiliate Disclosure:</strong> Some links on this site are affiliate links.
              If you click through and make a purchase, we may earn a small commission — at no
              extra cost to you. This helps keep the site running.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
