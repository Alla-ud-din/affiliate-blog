import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getPostBySlug, getAllPosts } from '@/lib/posts';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import AffiliateCTAButton from '@/components/AffiliateCTAButton';
import styles from './review.module.css';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
    },
  };
}

export default async function ReviewPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <SiteHeader />
      <main className={styles.main}>
        {/* Top CTA bar */}
        <div className={styles.topBar}>
          <div className="container">
            <p>Reading about <strong>{post.title}</strong></p>
            <AffiliateCTAButton href={post.affiliateUrl} size="sm" label={post.ctaLabel} />
          </div>
        </div>

        <article className={styles.article}>
          <div className="container">

            {/* Header */}
            <header className={styles.header}>
              <span className={styles.category}>{post.category}</span>
              <h1 className={styles.title}>{post.title}</h1>
              <p className={styles.excerpt}>{post.excerpt}</p>
            </header>

            {/* Hero image */}
            <div className={styles.heroImg}>
              <img
                src={post.image || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&q=80'}
                alt={post.title}
              />
            </div>

            {/* Above-the-fold Buy Now — first thing Pinterest visitors see */}
            <div className={styles.heroCta}>
              <a
                href={post.affiliateUrl}
                className={styles.heroCtaBtn}
                target="_blank"
                rel="nofollow noopener sponsored"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
                {post.ctaLabel || 'Buy Now'}
              </a>
              <span className={styles.imgCaption}>📌 Save this to your Pinterest board</span>
            </div>

            {/* Intro */}
            <div className={styles.intro}>
              <p>{post.intro}</p>
            </div>

            {/* Benefits */}
            <section className={styles.benefits}>
              <h2>Why You'll Actually Love This</h2>
              <ul>
                {post.benefits.map((b, i) => (
                  <li key={i}>
                    <span className={styles.benefitIcon}>✦</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a
                href={post.affiliateUrl}
                className={styles.benefitsBtn}
                target="_blank"
                rel="nofollow noopener sponsored"
              >
                {post.ctaLabel || 'Buy Now'} →
              </a>
            </section>

            {/* Why This Product */}
            {post.whyThis && (
              <section className={styles.whyThis}>
                <h2>Why <em>This</em> One?</h2>
                <p>{post.whyThis}</p>
              </section>
            )}

            {/* Secondary image */}
            {post.image2 && (
              <div className={styles.secondaryImg}>
                <img src={post.image2} alt={`${post.title} in use`} loading="lazy" />
              </div>
            )}

            {/* Main CTA */}
            <div className={styles.ctaBlock}>
              <p className={styles.ctaLabel}>Ready to try it?</p>
              <h3 className={styles.ctaHeadline}>{post.ctaHeadline || 'Check the current price'}</h3>
              <p className={styles.ctaNote}>Prices change frequently — tap below to see today's price.</p>
              <AffiliateCTAButton href={post.affiliateUrl} size="lg" label={post.ctaLabel} />
              <p className={styles.disclosure}>
                *This is an affiliate link. We may earn a commission if you purchase through it,
                at no extra cost to you.
              </p>
            </div>

            {/* Body content from markdown */}
            {post.contentHtml && (
              <div
                className={styles.body}
                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
              />
            )}

          </div>
        </article>
      </main>

      {/* Floating Buy Now bar — always visible on mobile */}
      <div className={styles.floatingBar}>
        <div className={styles.floatingInner}>
          <span className={styles.floatingLabel}>{post.title}</span>
          <a
            href={post.affiliateUrl}
            className={styles.floatingBtn}
            target="_blank"
            rel="nofollow noopener sponsored"
          >
            {post.ctaLabel || 'Buy Now'}
          </a>
        </div>
      </div>

      <SiteFooter />
    </>
  );
}
