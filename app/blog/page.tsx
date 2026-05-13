import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vape Blog Mumbai — Guides, Reviews & Delivery Info | TheVapesInMumbai.in",
  description: "Read our complete guides on vapes in Mumbai. Delivery info, product reviews, nicotine guides, and how to find trusted vape shops in Mumbai.",
  alternates: { canonical: "https://thevapesinmumbai.com/blog" },
};

const POSTS = [
  { slug: "best-vape-shops-mumbai", tag: "GUIDE", title: "Best Vape Shops in Mumbai 2026", excerpt: "A complete guide to finding trusted vape shops and delivery services in Mumbai.", date: "May 2026", color: "#2563EB", emoji: "📖" },
  { slug: "trusted-vape-delivery-mumbai", tag: "TRUST", title: "Trusted Vape Delivery — Beware of Fake Sites", excerpt: "How to identify genuine vape delivery services and avoid scams in Mumbai.", date: "May 2026", color: "#D97706", emoji: "🔒" },
  { slug: "vape-delivery-mumbai-guide", tag: "DELIVERY", title: "Vape Delivery in Mumbai — Complete Guide", excerpt: "Everything you need to know about ordering vapes for delivery in Mumbai.", date: "May 2026", color: "#059669", emoji: "🚀" },
  { slug: "elfbar-mumbai", tag: "PRODUCTS", title: "Elfbar in Mumbai — Price, Flavours & Delivery", excerpt: "Complete guide to Elfbar products available in Mumbai. Prices, flavours and puff counts.", date: "May 2026", color: "#E23744", emoji: "🛒" },
  { slug: "where-to-buy-vapes-mumbai", tag: "GUIDE", title: "Where to Buy Vapes in Mumbai — 2026", excerpt: "The definitive guide to buying vapes in Mumbai — online vs offline.", date: "May 2026", color: "#2563EB", emoji: "📖" },
  { slug: "caliburn-pod-system-mumbai", tag: "PRODUCTS", title: "Caliburn Pod System — Which One to Buy?", excerpt: "A full breakdown of all Caliburn pod systems available in Mumbai.", date: "May 2026", color: "#E23744", emoji: "🛒" },
  { slug: "zyn-nicotine-pouches-mumbai", tag: "PRODUCTS", title: "ZYN Nicotine Pouches — Price & Delivery", excerpt: "Everything about ZYN nicotine pouches in Mumbai. Flavours, strengths and prices.", date: "May 2026", color: "#E23744", emoji: "🛒" },
  { slug: "nicotine-content-guide-mumbai", tag: "HEALTH", title: "Nicotine Content Guide — How Much in Each Vape?", excerpt: "A complete breakdown of nicotine levels across all major vape products.", date: "May 2026", color: "#7C3AED", emoji: "💊" },
];

export default function BlogPage() {
  return (
    <>
      <style>{`
        .blog-grid-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }
        .blog-item-card {
          display: block;
          text-decoration: none;
          background: #fff;
          border: 1px solid #E5E7EB;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0,0,0,0.06);
        }
        .blog-item-img {
          height: 90px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
        }
        .blog-item-body { padding: 11px; }
        .blog-item-tag { font-size: 0.62rem; font-weight: 800; letter-spacing: 0.08em; margin-bottom: 3px; }
        .blog-item-title { font-size: 0.76rem; font-weight: 700; color: #0D0D0D; line-height: 1.3; margin-bottom: 5px; }
        .blog-item-excerpt { font-size: 0.67rem; color: #6B7280; line-height: 1.45; margin-bottom: 8px; }
        .blog-item-footer { display: flex; justify-content: space-between; align-items: center; }
        .blog-item-date { font-size: 0.63rem; color: #9CA3AF; }
        .blog-item-read { font-size: 0.7rem; font-weight: 700; color: #E23744; }
      `}</style>

      <section style={{ background: "var(--black)", padding: "60px 0 40px" }}>
        <div className="container">
          <p className="section-label">Blog & Guides</p>
          <h1 style={{ color: "#fff", maxWidth: 600 }}>Everything About Vapes in Mumbai</h1>
          <p style={{ color: "rgba(255,255,255,0.6)", marginTop: 12, maxWidth: 500 }}>
            Honest guides, product reviews and delivery info for vapers in Mumbai.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="blog-grid-2">
            {POSTS.map(p => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="blog-item-card">
                <div className="blog-item-img" style={{ background: p.color }}>{p.emoji}</div>
                <div className="blog-item-body">
                  <div className="blog-item-tag" style={{ color: p.color }}>{p.tag}</div>
                  <div className="blog-item-title">{p.title}</div>
                  <div className="blog-item-excerpt">{p.excerpt}</div>
                  <div className="blog-item-footer">
                    <span className="blog-item-date">{p.date}</span>
                    <span className="blog-item-read">Read →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
