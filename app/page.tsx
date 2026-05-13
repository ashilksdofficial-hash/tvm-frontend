import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HeroCarousel from "../components/HeroCarousel";
import DeliverySection from "../components/DeliverySection";

export const metadata: Metadata = {
  title: "Vapes in Mumbai — 45-60 Min Delivery | TheVapesInMumbai.in",
  description: "Buy vapes in Mumbai with 45-60 minute delivery. Disposables, pod systems, nic salts, nicotine pouches & tobacco. 100% original products delivered to BTM, HSR, Juhu, Worli & 20+ areas.",
  alternates: { canonical: "https://thevapesinmumbai.com" },
};

const CATEGORIES = [
  {
    slug: "disposables",
    emoji: "💨",
    image: "/disposables-banner.jpg",
    name: "Disposable Vapes",
    desc: "Elfbar, Lost Mary, Nasty, IGET & more",
    count: "15+ products",
    color: "#E23744",
    bg: "#FEF2F2",
    border: "#FECACA",
    popular: ["Elfbar Raya D1", "Lost Mary MT35000", "Nasty Bolt 50K"],
  },
  {
    slug: "pod-systems",
    emoji: "🔋",
    image: "/pod-systems-banner.jpg",
    name: "Reusable Pod Systems",
    desc: "Caliburn G3 Pro, G4, G5 & more",
    count: "12+ products",
    color: "#2563EB",
    bg: "#EFF6FF",
    border: "#BFDBFE",
    popular: ["Caliburn G3 Pro", "Caliburn G4", "Caliburn A2"],
  },
  {
    slug: "eliquids",
    emoji: "🧪",
    image: "/eliquids-banner.jpg",
    name: "E-Liquids & Nic Salts",
    desc: "Elfliq, Pod Salt, Nasty liquids",
    count: "8+ products",
    color: "#7C3AED",
    bg: "#F5F3FF",
    border: "#DDD6FE",
    popular: ["Elfliq Nic Salts", "Pod Salt Core", "Pod Salt Hit The Spot"],
  },
  {
    slug: "nicotine-pouches",
    emoji: "🌿",
    image: "/nicotine-pouches-banner.jpg",
    name: "Nicotine Pouches",
    desc: "ZYN, Velo — smoke-free nicotine",
    count: "4+ products",
    color: "#059669",
    bg: "#ECFDF5",
    border: "#A7F3D0",
    popular: ["ZYN Cool Mint", "ZYN Icy Blackcurrant", "Velo Freezing Peppermint"],
  },
  {
    slug: "tobacco",
    emoji: "🍃",
    name: "Rolling Tobacco",
    desc: "Amber Leaf, Drum, Golden Virginia & more",
    count: "5+ products",
    color: "#D97706",
    bg: "#FFFBEB",
    border: "#FDE68A",
    popular: ["Amber Leaf", "Drum Bright Blue", "Natural American Spirit"],
    image: "/tobacco-banner.jpg",
  },
];

const BLOGS = [
  { slug: "best-vape-shops-mumbai", tag: "GUIDE", title: "Best Vape Shops in Mumbai 2026", excerpt: "A complete guide to finding trusted vape shops and delivery services in Mumbai." },
  { slug: "trusted-vape-delivery-mumbai", tag: "TRUST", title: "Trusted Vape Delivery — Beware of Fake Sites", excerpt: "How to identify genuine vape delivery services and avoid scams in Mumbai." },
  { slug: "nicotine-content-guide-mumbai", tag: "HEALTH", title: "Nicotine Content Guide — How Much is in Each Vape?", excerpt: "A complete breakdown of nicotine levels across all major vape products in India." },
];

const WA = "https://wa.me/916282878843?text=Hi%2C%20I%20want%20to%20be%20notified%20when%20TheVapesInMumbai.com%20launches%21%20Please%20add%20me%20to%20the%20list.";

export default function HomePage() {
  return (
    <>
      {/* Coming Soon Banner */}
      <div style={{ background: "#E23744", padding: "12px 20px", textAlign: "center" }}>
        <p style={{ color: "#fff", fontWeight: 700, fontSize: "0.88rem", margin: 0 }}>
          🚀 TheVapesInMumbai.com is launching soon — <a href="https://wa.me/916282878843?text=Hi%2C%20notify%20me%20when%20TheVapesInMumbai.com%20launches%21" target="_blank" style={{ color: "#fff", textDecoration: "underline" }}>Join the waitlist</a>
        </p>
      </div>
      {/* HERO CAROUSEL */}
      <HeroCarousel />



      {/* CATEGORIES */}
      <section className="section" id="categories">
        <div className="container">
          <p className="section-label">Shop by Category</p>
          <h2 style={{ marginBottom: 8 }}>What Are You Looking For?</h2>
          <p style={{ color: "var(--gray)", marginBottom: 40 }}>Choose a category to see all available products with prices.</p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {CATEGORIES.map(cat => {
              const hasImage = !!(cat as {image?: string}).image;
              return (
                <Link key={cat.slug} href={`/products/${cat.slug}`} style={{ display: "block", textDecoration: "none" }}>
                  {hasImage ? (
                    /* Full image card for tobacco */
                    <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", border: `1px solid ${cat.border}`, minHeight: 220 }}>
                      <Image src={(cat as {image?: string}).image!} alt={cat.name} fill style={{ objectFit: "contain", objectPosition: "center", background: "#FFFBEB" }} sizes="100vw" />
                      {/* Bottom gradient only */}
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,13,13,0.88) 0%, rgba(13,13,13,0.4) 50%, rgba(13,13,13,0) 100%)" }} />
                      {/* Text at bottom */}
                      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 1, padding: "16px 18px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                          <h3 style={{ fontSize: "1.05rem", color: "#fff", fontWeight: 800, textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>{cat.name}</h3>
                          <span style={{ fontSize: "0.68rem", fontWeight: 700, color: "#fff", background: cat.color, padding: "2px 8px", borderRadius: 100 }}>{cat.count}</span>
                        </div>
                        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.78rem", marginBottom: 8 }}>{cat.desc}</p>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                            {cat.popular.slice(0,2).map(p => (
                              <span key={p} style={{ fontSize: "0.68rem", color: "#fff", background: "rgba(255,255,255,0.18)", padding: "2px 8px", borderRadius: 100, border: "1px solid rgba(255,255,255,0.35)" }}>{p}</span>
                            ))}
                          </div>
                          <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#fff", background: cat.color, padding: "6px 14px", borderRadius: 8 }}>Shop →</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Normal emoji card */
                    <div style={{ background: "#fff", border: `1px solid ${cat.border}`, borderRadius: 16, padding: "20px 24px", display: "flex", alignItems: "center", gap: 20, cursor: "pointer" }}>
                      <div style={{ width: 64, height: 64, borderRadius: 16, background: cat.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem", flexShrink: 0 }}>
                        {cat.emoji}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4, flexWrap: "wrap" }}>
                          <h3 style={{ fontSize: "1.05rem", color: "var(--black)" }}>{cat.name}</h3>
                          <span style={{ fontSize: "0.72rem", fontWeight: 700, color: cat.color, background: cat.bg, padding: "2px 8px", borderRadius: 100 }}>{cat.count}</span>
                        </div>
                        <p style={{ color: "var(--gray)", fontSize: "0.85rem", marginBottom: 8 }}>{cat.desc}</p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                          {cat.popular.map(p => (
                            <span key={p} style={{ fontSize: "0.72rem", color: "var(--gray)", background: "var(--off-white)", padding: "3px 8px", borderRadius: 100, border: "1px solid var(--border)" }}>{p}</span>
                          ))}
                        </div>
                      </div>
                      <div style={{ color: cat.color, fontWeight: 700, fontSize: "1.3rem", flexShrink: 0 }}>→</div>
                    </div>
                  )}
                </Link>
              );
            })}
          </div>

          <div style={{ marginTop: 32, background: "var(--black)", borderRadius: 16, padding: "24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <div>
              <h3 style={{ color: "#fff", marginBottom: 4 }}>Not sure what to order?</h3>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.88rem" }}>Message us and we'll recommend the perfect product for you.</p>
            </div>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">Ask on WhatsApp →</a>
          </div>
        </div>
      </section>

      {/* DELIVERY AREAS */}
      <section className="section" style={{ background: "var(--off-white)" }}>
        <div className="container">
          <p className="section-label">Delivery Areas</p>
          <h2 style={{ marginBottom: 8 }}>We Deliver Across All of Mumbai</h2>
          <p style={{ color: "var(--gray)", marginBottom: 24 }}>45-60 minute delivery to 20+ neighbourhoods including Bandra West, Andheri West, Juhu, Powai, Worli, Lower Parel, Thane West, Borivali West, Malad West, Goregaon West, Kandivali West, Andheri East, BKC, Navi Mumbai, Kharghar, Dadar, Vile Parle, Colaba, Ghatkopar and Mulund.</p>
          <DeliverySection />
        </div>
      </section>

      {/* BLOG */}
      <section className="section">
        <div className="container">
          <p className="section-label">Blog & Guides</p>
          <h2 style={{ marginBottom: 8 }}>Everything About Vapes in Mumbai</h2>
          <p style={{ color: "var(--gray)", marginBottom: 40 }}>Honest guides and trusted information for vapers in Mumbai.</p>
          <div className="grid-3">
            {BLOGS.map(b => (
              <Link key={b.slug} href={`/blog/${b.slug}`} style={{ display: "block", textDecoration: "none" }}>
                <div className="blog-card">
                  <div style={{ height: 120, background: "#E23744", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: "2.5rem" }}>📖</span>
                  </div>
                  <div className="blog-card-body">
                    <div className="blog-tag">{b.tag}</div>
                    <div className="blog-title">{b.title}</div>
                    <div className="blog-excerpt">{b.excerpt}</div>
                    <div style={{ marginTop: 10, fontSize: "0.82rem", fontWeight: 600, color: "var(--red)" }}>Read more →</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--black)", padding: "56px 0" }}>
        <div className="container">
          <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "40px 24px", textAlign: "center", maxWidth: 500, margin: "0 auto" }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.554 4.122 1.523 5.855L0 24l6.29-1.49A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.374l-.36-.214-3.733.884.937-3.638-.234-.374A9.818 9.818 0 0112 2.182c5.424 0 9.818 4.394 9.818 9.818 0 5.425-4.394 9.818-9.818 9.818z"/></svg>
            </div>
            <h2 style={{ color: "#fff", fontSize: "1.6rem", marginBottom: 10 }}>Ready to Order?</h2>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: 8 }}>
              Message us on WhatsApp — we confirm and dispatch in minutes.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 8, marginBottom: 28 }}>
              {["⚡ 45-60 Min Delivery", "✅ 100% Original", "📦 Discreet Packaging", "💬 Instant Reply"].map(b => (
                <span key={b} style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.6)", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", padding: "4px 10px", borderRadius: 100 }}>{b}</span>
              ))}
            </div>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#25D366", color: "#fff", padding: "14px 32px", borderRadius: 12, fontWeight: 700, fontSize: "0.95rem", textDecoration: "none", width: "100%", justifyContent: "center" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.554 4.122 1.523 5.855L0 24l6.29-1.49A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.374l-.36-.214-3.733.884.937-3.638-.234-.374A9.818 9.818 0 0112 2.182c5.424 0 9.818 4.394 9.818 9.818 0 5.425-4.394 9.818-9.818 9.818z"/></svg>
              🔔 Notify Me at Launch
            </a>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Where can I buy vapes in Mumbai?", "acceptedAnswer": { "@type": "Answer", "text": "You can buy vapes in Mumbai through TheVapesInMumbai.in. We offer 45-60 minute delivery across 20+ areas including Bandra West, Andheri West, Juhu, Powai, Worli and more." } },
          { "@type": "Question", "name": "How fast is vape delivery in Mumbai?", "acceptedAnswer": { "@type": "Answer", "text": "We deliver vapes across Mumbai in 45-60 minutes. 🔔 Notify Me at Launch and we dispatch immediately." } },
          { "@type": "Question", "name": "What types of vapes are available in Mumbai?", "acceptedAnswer": { "@type": "Answer", "text": "We stock disposable vapes (Elfbar, Lost Mary, Nasty, IGET), reusable pod systems (Caliburn series), e-liquids, nicotine pouches (ZYN, Velo) and rolling tobacco. All available for fast delivery across Mumbai." } },
          { "@type": "Question", "name": "Is Elfbar available in Mumbai?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Elfbar is available in Mumbai with 45-60 minute delivery. We stock Elfbar Raya D1, Raya D3, D3 Pro, Ice King, BC10000, MoonNight 40K and more. All 100% original with sealed packaging." } },
          { "@type": "Question", "name": "What is the price of Elfbar in Mumbai?", "acceptedAnswer": { "@type": "Answer", "text": "Elfbar prices in Mumbai start from ₹999 for the Elfbar 600 and go up to ₹3,199 for the Raya SOBO. All prices include delivery with no hidden charges." } },
          { "@type": "Question", "name": "Do you deliver vapes to Worli Mumbai?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we deliver vapes to Worli in 50-60 minutes. Just message us on WhatsApp with your order and address." } },
          { "@type": "Question", "name": "Are the vapes sold 100% original?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every product we sell is 100% original, sourced directly from authorised distributors. We are an authorised seller of Elfbar, Uwell Caliburn and Yuoto products." } },
          { "@type": "Question", "name": "How do I order vapes in Mumbai?", "acceptedAnswer": { "@type": "Answer", "text": "Simply message us on WhatsApp at +91 6282878843 with the product name and your delivery address. We confirm within minutes and deliver in 45-60 minutes." } },
          { "@type": "Question", "name": "Is ZYN available in Mumbai?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, ZYN nicotine pouches are available in Mumbai with fast delivery. We stock ZYN Cool Mint, ZYN Icy Blackcurrant and more flavours." } },
          { "@type": "Question", "name": "What areas do you deliver vapes to in Mumbai?", "acceptedAnswer": { "@type": "Answer", "text": "We deliver vapes to Bandra West, Andheri West, Juhu, Powai, Worli, Lower Parel, Thane West, Borivali West, Malad West, Goregaon West, Kandivali West, Andheri East, BKC, Navi Mumbai, Kharghar, Dadar, Vile Parle, Colaba, Ghatkopar and Mulund." } },
        ]
      })}} />
    </>
  );
}
