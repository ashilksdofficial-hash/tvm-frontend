import type { Metadata } from "next";
import Link from "next/link";
import BlogProducts from "../../../components/BlogProducts";

export const metadata: Metadata = {
  title: "Elfbar in Mumbai — Price, Flavours & Fast Delivery | TheVapesInMumbai.com",
  description: "Complete guide to Elfbar products in Mumbai. Prices, flavours, puff counts and where to get Elfbar delivered in 45-60 minutes across Mumbai.",
  alternates: { canonical: "https://thevapesinmumbai.com/blog/elfbar-mumbai" },
};

const WA = "https://wa.me/916282878843?text=Hi%2C%20I%20want%20to%20order%20an%20Elfbar";

const PRODUCTS = [
  { name: "Elfbar 600", puffs: "600", price: "₹999", nicotine: "20mg", best: "Budget option, great for trying vaping" },
  { name: "Elfbar Raya D1", puffs: "13,000", price: "₹2,199", nicotine: "20mg", best: "Best seller. Perfect everyday vape." },
  { name: "Elfbar Raya D3", puffs: "25,000", price: "₹2,799", nicotine: "20mg", best: "Smart display, 3 power modes" },
  { name: "Elfbar D3 Pro", puffs: "25,000", price: "₹2,799", nicotine: "20mg", best: "Advanced version of D3" },
  { name: "Elfbar Ice King", puffs: "30,000", price: "₹2,499", nicotine: "20mg", best: "Best value high puff count" },
  { name: "Elfbar BC 10000", puffs: "10,000", price: "₹2,199", nicotine: "20mg", best: "Compact, reliable everyday option" },
  { name: "Elfbar MoonNight 40K", puffs: "40,000", price: "₹2,899", nicotine: "20mg", best: "Longest lasting Elfbar available" },
  { name: "Elfbar Raya SOBO", puffs: "20,000", price: "₹2,849", nicotine: "20mg", best: "Premium design and performance" },
];

export default function ElfbarMumbaiPage() {
  return (
    <>
    <article>
      <section style={{ background: "var(--black)", padding: "60px 0 40px" }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <p className="section-label">Products</p>
          <h1 style={{ color: "#fff" }}>Elfbar in Mumbai — Price, Flavours & Delivery</h1>
          <p style={{ color: "rgba(255,255,255,0.6)", marginTop: 16 }}>Complete guide to all Elfbar products available in Mumbai with prices and flavours.</p>
          <div style={{ marginTop: 20, fontSize: "0.8rem", color: "rgba(255,255,255,0.4)" }}>Updated May 2026 · 6 min read</div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <BlogProducts />
          <p style={{ fontSize: "1.05rem", color: "var(--gray)", marginBottom: 32 }}>
            Elfbar is the most popular disposable vape brand in Mumbai. Known for exceptional flavour, long battery life, and reliable performance, Elfbar products are the go-to choice for vapers across Mumbai.
          </p>

          <h2 style={{ marginBottom: 24 }}>All Elfbar Products Available in Mumbai</h2>
          <div style={{ overflowX: "auto", marginBottom: 40 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
              <thead>
                <tr style={{ background: "var(--black)", color: "#fff" }}>
                  <th style={{ padding: "12px 16px", textAlign: "left" }}>Product</th>
                  <th style={{ padding: "12px 16px", textAlign: "left" }}>Puffs</th>
                  <th style={{ padding: "12px 16px", textAlign: "left" }}>Price</th>
                  <th style={{ padding: "12px 16px", textAlign: "left" }}>Nicotine</th>
                  <th style={{ padding: "12px 16px", textAlign: "left" }}>Best For</th>
                </tr>
              </thead>
              <tbody>
                {PRODUCTS.map((p, i) => (
                  <tr key={p.name} style={{ background: i % 2 === 0 ? "#fff" : "var(--off-white)", borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "12px 16px", fontWeight: 600 }}>{p.name}</td>
                    <td style={{ padding: "12px 16px" }}>{p.puffs}</td>
                    <td style={{ padding: "12px 16px", fontWeight: 700, color: "var(--red)" }}>{p.price}</td>
                    <td style={{ padding: "12px 16px" }}>{p.nicotine}</td>
                    <td style={{ padding: "12px 16px", color: "var(--gray)", fontSize: "0.85rem" }}>{p.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={{ marginBottom: 16 }}>Popular Elfbar Flavours in Mumbai</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 40 }}>
            {["Watermelon Ice", "Blueberry Ice", "Strawberry Kiwi", "Mango Peach", "Passion Fruit", "Lychee Ice", "Mixed Berries", "Grape Ice", "Peach Mango", "Cool Mint", "Pineapple Ice", "Coconut Melon"].map(f => (
              <span key={f} style={{ background: "#FEE2E2", color: "#E23744", padding: "6px 14px", borderRadius: 100, fontSize: "0.82rem", fontWeight: 600 }}>{f}</span>
            ))}
          </div>

          <h2 style={{ marginBottom: 16 }}>Which Elfbar Should You Buy?</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 40 }}>
            {[
              { who: "First time vaper", rec: "Elfbar Raya D1 (₹2,199) — affordable, reliable, great flavour. The perfect starting point." },
              { who: "Daily vaper", rec: "Elfbar Raya D3 (₹2,799) — 25,000 puffs with smart display and 3 power modes. Excellent value." },
              { who: "Want the longest lasting", rec: "Elfbar MoonNight 40K (₹2,899) — 40,000 puffs. Lasts weeks for most users." },
              { who: "Budget conscious", rec: "Elfbar 600 (₹999) — cheapest option to try Elfbar quality." },
            ].map(r => (
              <div key={r.who} style={{ background: "var(--off-white)", borderRadius: 10, padding: 20 }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>👤 {r.who}</div>
                <div style={{ color: "var(--gray)", fontSize: "0.9rem" }}>{r.rec}</div>
              </div>
            ))}
          </div>

          <div style={{ background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: 12, padding: 20, marginBottom: 32 }}>
            <div style={{ fontWeight: 700, marginBottom: 10, color: "#065F46", fontSize: "0.9rem" }}>📦 Browse our products — delivered in 45-60 min:</div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <Link href="/products/disposables" style={{ background: "#059669", color: "#fff", padding: "7px 14px", borderRadius: 8, fontWeight: 700, fontSize: "0.8rem", textDecoration: "none" }}>View Disposables →</Link>
              <Link href="/products/disposables" style={{ background: "#E23744", color: "#fff", padding: "7px 14px", borderRadius: 8, fontWeight: 700, fontSize: "0.8rem", textDecoration: "none" }}>All Disposables →</Link>
              <Link href="/" style={{ background: "#0D0D0D", color: "#fff", padding: "7px 14px", borderRadius: 8, fontWeight: 700, fontSize: "0.8rem", textDecoration: "none" }}>All Products →</Link>
            </div>
          </div>
          <div style={{ background: "var(--black)", borderRadius: 12, padding: 32, textAlign: "center" }}>
            <h3 style={{ color: "#fff", marginBottom: 8 }}>Order Elfbar in Mumbai</h3>
            <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 24, fontSize: "0.9rem" }}>45-60 min delivery. All flavours available. 100% original Elfbar products.</p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">Order Elfbar Now →</a>
          </div>
        </div>
      </section>
    </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "Elfbar in Mumbai — Price, Flavours & Fast Delivery | TheVapesInMumbai.com", "author": {"@type": "Organization", "name": "TheVapesInMumbai.com"}, "publisher": {"@type": "Organization", "name": "TheVapesInMumbai.com", "url": "https://thevapesinmumbai.com"}, "url": "https://thevapesinmumbai.com/blog/elfbar-mumbai" }) }} />
    </>
  );
}
