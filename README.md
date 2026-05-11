# The Curated Find — Affiliate Blog Template

A clean, fast, conversion-focused Next.js 14 affiliate blog template.
No database required — all content lives in `data/posts.json`.

---

## Quick Start

```bash
npm install
cp .env.local.example .env.local
# Edit .env.local with your site URL
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## File Structure

```
affiliate-blog/
├── app/
│   ├── layout.tsx          # Root layout + global SEO metadata
│   ├── page.tsx            # Homepage (review grid)
│   ├── page.module.css
│   ├── globals.css         # Global styles + CSS variables
│   ├── sitemap.ts          # Auto-generated sitemap
│   ├── robots.ts           # robots.txt
│   ├── not-found.tsx       # 404 page
│   ├── about/              # About page
│   ├── disclosure/         # Affiliate disclosure (required by FTC)
│   ├── privacy/            # Privacy policy
│   └── review/[slug]/      # Dynamic review pages
│       ├── page.tsx
│       └── review.module.css
├── components/
│   ├── SiteHeader.tsx
│   ├── SiteFooter.tsx
│   └── AffiliateCTAButton.tsx  # CTA button (nofollow + sponsored)
├── data/
│   └── posts.json          # ← ADD YOUR PRODUCTS HERE
├── lib/
│   └── posts.ts            # Data fetching helpers
└── next.config.js
```

---

## Adding a Product

Edit `data/posts.json`. Each entry follows this schema:

```json
{
  "slug": "url-friendly-product-name",
  "title": "Product Name — Short Value Prop",
  "excerpt": "One sentence hook for the review card.",
  "category": "Kitchen / Home / Tech / Beauty / etc.",
  "image": "https://your-image-url.com/product.jpg",
  "image2": "https://your-image-url.com/product-lifestyle.jpg",
  "affiliateUrl": "https://www.example.com/product?ref=YOUR-TAG",  // any program
  "ctaLabel": "Check Price",          // e.g. "Shop on Etsy", "View on ASOS", "Buy on iHerb"
  "intro": "2–3 sentences framing the problem this product solves.",
  "benefits": [
    "Outcome-focused benefit, not a feature",
    "How it saves time, money, or effort",
    "Emotional or lifestyle benefit",
    "Something unexpected or delightful"
  ],
  "whyThis": "2–3 sentences on why THIS product vs alternatives.",
  "ctaHeadline": "See today's price",
  "contentHtml": "<h2>Section Title</h2><p>Additional review content as HTML.</p>"
}
```

---

## Customization

### Brand name
Search and replace `The Curated Find` across:
- `app/layout.tsx`
- `components/SiteHeader.tsx`
- `components/SiteFooter.tsx`

### Colors
All colors are CSS variables in `app/globals.css`:

```css
--cream: #faf7f2;    /* page background */
--espresso: #2d1f0e; /* headings / dark backgrounds */
--gold: #c8952a;     /* accent / CTA */
--rust: #b5451b;     /* category labels */
--warm-gray: #8a7d6e;/* body copy */
```

### Fonts
Loaded from Google Fonts in `app/globals.css`.
Change the `@import` URL and the `font-family` declarations.

### Affiliate links
Replace `affiliateUrl` values in `data/posts.json` with your real affiliate links from any program — Amazon Associates, ShareASale, Etsy Affiliates, ASOS, iHerb, etc. Set `ctaLabel` per post to match the retailer (e.g. `"Shop on Etsy"`, `"Check Price"`).

---

## Affiliate Compliance Checklist

- [x] No prices displayed (prices change; only link to retailer)
- [x] Neutral CTA text — customizable per post via `ctaLabel`
- [x] Affiliate disclosure on every page (footer + review page)
- [x] Dedicated `/disclosure` page
- [x] `rel="nofollow noopener sponsored"` on all affiliate links
- [x] No fake urgency or countdown timers
- [x] No guarantee of savings or specific discounts
- [x] Works with any affiliate program (Amazon, Etsy, ShareASale, ASOS, iHerb, etc.)

---

## Deployment

### Vercel (recommended — free tier)
```bash
npm i -g vercel
vercel
```

### Static export
```bash
# Add to next.config.js: output: 'export'
npm run build
# Deploy the /out folder to any static host
```

---

## Pinterest SEO Tips

- Use tall images (2:3 ratio) for `image` and `image2` fields
- Write titles as curiosity-gap phrases: "The X That Finally Solved Y"
- Excerpts should tease a transformation, not describe a product
- Add "📌 Save this" captions near images (already included in template)
- Create a Pinterest board per category and pin each review

---

## License

MIT — use freely for your own affiliate sites.
