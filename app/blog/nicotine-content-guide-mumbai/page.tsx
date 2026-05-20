import type { Metadata } from "next";
import Link from "next/link";
import BlogProducts from "../../../components/BlogProducts";

export const metadata: Metadata = {
  title: "Nicotine Content Guide — How Much Nicotine is in Each Vape? | TheVapesInMumbai.com",
  description: "Complete guide to nicotine content in vapes. Disposables, pod systems, nic salts and pouches — how much nicotine is in each product and what's right for you.",
  alternates: { canonical: "https://thevapesinmumbai.com/blog/nicotine-content-guide-mumbai" },
};

const WA = "https://wa.me/916282878843?text=Hi%20TheVapesInMumbai%2C%20I%20want%20to%20order%20a%20vape%20in%20Mumbai";

const PRODUCTS = [
  { name: "Elfbar Raya D1", type: "Disposable", nicotine: "20mg", strength: "High", puffs: "13,000", note: "Best for heavy smokers switching to vape" },
  { name: "Elfbar Raya D3", type: "Disposable", nicotine: "20mg", strength: "High", puffs: "25,000", note: "Long lasting with adjustable power modes" },
  { name: "Elfbar MoonNight 40K", type: "Disposable", nicotine: "20mg", strength: "High", puffs: "40,000", note: "Longest lasting disposable in our range" },
  { name: "Nasty Bolt WTF 50K", type: "Disposable", nicotine: "20mg", strength: "High", puffs: "50,000", note: "Highest puff count available" },
  { name: "Lost Mary MT35000", type: "Disposable", nicotine: "20mg", strength: "High", puffs: "35,000", note: "Premium flavour delivery" },
  { name: "Caliburn G3 Pro", type: "Pod System", nicotine: "Depends on e-liquid", strength: "Variable", puffs: "Refillable", note: "Use with 20mg or 50mg nic salts" },
  { name: "Caliburn A2", type: "Pod System", nicotine: "Depends on e-liquid", strength: "Variable", puffs: "Refillable", note: "Great for beginners switching from cigarettes" },
  { name: "Elfliq Nic Salts", type: "E-Liquid", nicotine: "20mg", strength: "High", puffs: "N/A", note: "Use in pod systems like Caliburn" },
  { name: "ZYN Cool Mint", type: "Nicotine Pouch", nicotine: "6mg", strength: "Medium", puffs: "N/A", note: "Smoke-free, no vaping required" },
  { name: "Velo Freezing Peppermint", type: "Nicotine Pouch", nicotine: "10mg", strength: "Strong", puffs: "N/A", note: "Stronger alternative to ZYN" },
];

export default function NicotineGuidePage() {
  return (
    <>
    <article>
      {/* Header */}
      <section style={{ background: "var(--black)", padding: "60px 0 40px" }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <p className="section-label">Health Guide</p>
          <h1 style={{ color: "#fff" }}>Nicotine Content Guide — How Much Nicotine is in Each Vape?</h1>
          <p style={{ color: "rgba(255,255,255,0.6)", marginTop: 16, fontSize: "1.05rem" }}>
            A complete breakdown of nicotine levels across all major vape products available in Mumbai.
          </p>
          <div style={{ marginTop: 20, fontSize: "0.8rem", color: "rgba(255,255,255,0.4)" }}>
            Updated May 2026 · 8 min read · TheVapesInMumbai.com
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <BlogProducts />

          {/* Warning */}
          <div style={{ background: "#FEF3C7", border: "1px solid #F59E0B", borderRadius: 10, padding: 20, marginBottom: 40 }}>
            <strong>⚠️ Important:</strong> Nicotine is an addictive substance. This guide is for informational purposes only. All products are for adults 18+ only.
          </div>

          <h2 style={{ marginBottom: 16 }}>Understanding Nicotine Strength</h2>
          <p style={{ color: "var(--gray)", marginBottom: 24 }}>
            Nicotine in vapes is measured in mg/ml (milligrams per millilitre). The higher the number, the stronger the hit. Here's a simple breakdown:
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, marginBottom: 40 }}>
            {[
              { level: "3mg", label: "Very Low", color: "#10B981", desc: "Barely noticeable. For light occasional users." },
              { level: "6mg", label: "Low", color: "#3B82F6", desc: "Mild hit. Good for light smokers." },
              { level: "10mg", label: "Medium", color: "#F59E0B", desc: "Moderate hit. For average smokers." },
              { level: "20mg", label: "High", color: "#E23744", desc: "Strong hit. For heavy smokers switching to vape." },
              { level: "50mg", label: "Very High", color: "#7C3AED", desc: "Very strong. Only for experienced users." },
            ].map(s => (
              <div key={s.level} style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 10, padding: 16, borderTop: `4px solid ${s.color}` }}>
                <div style={{ fontSize: "1.5rem", fontWeight: 800, color: s.color }}>{s.level}</div>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>{s.label}</div>
                <div style={{ fontSize: "0.82rem", color: "var(--gray)" }}>{s.desc}</div>
              </div>
            ))}
          </div>

          <h2 style={{ marginBottom: 16 }}>Nicotine Content by Product</h2>
          <p style={{ color: "var(--gray)", marginBottom: 24 }}>
            Here's a complete breakdown of nicotine content for all major products available in Mumbai:
          </p>

          <div style={{ overflowX: "auto", marginBottom: 40 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
              <thead>
                <tr style={{ background: "var(--black)", color: "#fff" }}>
                  <th style={{ padding: "12px 16px", textAlign: "left" }}>Product</th>
                  <th style={{ padding: "12px 16px", textAlign: "left" }}>Type</th>
                  <th style={{ padding: "12px 16px", textAlign: "left" }}>Nicotine</th>
                  <th style={{ padding: "12px 16px", textAlign: "left" }}>Strength</th>
                  <th style={{ padding: "12px 16px", textAlign: "left" }}>Notes</th>
                </tr>
              </thead>
              <tbody>
                {PRODUCTS.map((p, i) => (
                  <tr key={p.name} style={{ background: i % 2 === 0 ? "#fff" : "var(--off-white)", borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "12px 16px", fontWeight: 600 }}>{p.name}</td>
                    <td style={{ padding: "12px 16px", color: "var(--gray)" }}>{p.type}</td>
                    <td style={{ padding: "12px 16px", fontWeight: 700, color: "var(--red)" }}>{p.nicotine}</td>
                    <td style={{ padding: "12px 16px" }}>
                      <span style={{ background: p.strength === "High" ? "#FEE2E2" : p.strength === "Medium" ? "#FEF3C7" : p.strength === "Variable" ? "#EDE9FE" : "#D1FAE5", color: p.strength === "High" ? "#E23744" : p.strength === "Medium" ? "#D97706" : p.strength === "Variable" ? "#7C3AED" : "#059669", padding: "2px 8px", borderRadius: 100, fontSize: "0.78rem", fontWeight: 700 }}>{p.strength}</span>
                    </td>
                    <td style={{ padding: "12px 16px", color: "var(--gray)", fontSize: "0.85rem" }}>{p.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={{ marginBottom: 16 }}>Which Nicotine Strength is Right for You?</h2>
          <div style={{ display: "grid", gap: 16, marginBottom: 40 }}>
            {[
              { who: "Heavy smokers (20+ cigarettes/day)", rec: "20mg disposables like Elfbar Raya D1 or D3. The high nicotine content closely matches what your body is used to." },
              { who: "Moderate smokers (10-20 cigarettes/day)", rec: "10-20mg products. Try Elfbar Raya D1 or Lost Mary. If too strong, move to 10mg nic salts in a Caliburn pod system." },
              { who: "Light smokers (under 10/day)", rec: "6mg nic salts in a pod system like Caliburn A2. Low enough not to increase your nicotine dependency." },
              { who: "Non-smokers wanting nicotine pouches", rec: "ZYN 3mg or 6mg. Start with the lowest strength. Never start at 20mg if you have no prior nicotine history." },
              { who: "People trying to quit nicotine", rec: "Gradually reduce strength over time. Start at your current level and step down every few weeks." },
            ].map(r => (
              <div key={r.who} style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 10, padding: 20 }}>
                <div style={{ fontWeight: 700, marginBottom: 6 }}>👤 {r.who}</div>
                <div style={{ color: "var(--gray)", fontSize: "0.9rem" }}>{r.rec}</div>
              </div>
            ))}
          </div>

          <h2 style={{ marginBottom: 16 }}>Nicotine Pouches vs Vapes — What's the Difference?</h2>
          <p style={{ color: "var(--gray)", marginBottom: 16 }}>
            Both deliver nicotine but in very different ways:
          </p>
          <div className="grid-2" style={{ marginBottom: 40 }}>
            <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 10, padding: 20 }}>
              <h3 style={{ marginBottom: 12 }}>🌬️ Vapes</h3>
              <ul style={{ color: "var(--gray)", fontSize: "0.9rem", paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                <li>Nicotine absorbed through lungs</li>
                <li>Faster nicotine delivery</li>
                <li>Produces vapour</li>
                <li>Available in many flavours</li>
                <li>20mg is the most common strength in India</li>
              </ul>
            </div>
            <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 10, padding: 20 }}>
              <h3 style={{ marginBottom: 12 }}>🫙 Nicotine Pouches</h3>
              <ul style={{ color: "var(--gray)", fontSize: "0.9rem", paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                <li>Nicotine absorbed through gum</li>
                <li>Slower, more sustained release</li>
                <li>No vapour, completely discreet</li>
                <li>Can be used anywhere</li>
                <li>ZYN and Velo are most popular in Mumbai</li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div style={{ background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: 12, padding: 20, marginBottom: 32 }}>
            <div style={{ fontWeight: 700, marginBottom: 10, color: "#065F46", fontSize: "0.9rem" }}>📦 Browse our products — delivered in 45-60 min:</div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <Link href="/products/nicotine-pouches" style={{ background: "#059669", color: "#fff", padding: "7px 14px", borderRadius: 8, fontWeight: 700, fontSize: "0.8rem", textDecoration: "none" }}>View Nicotine Pouches →</Link>
              <Link href="/products/disposables" style={{ background: "#E23744", color: "#fff", padding: "7px 14px", borderRadius: 8, fontWeight: 700, fontSize: "0.8rem", textDecoration: "none" }}>All Disposables →</Link>
              <Link href="/" style={{ background: "#0D0D0D", color: "#fff", padding: "7px 14px", borderRadius: 8, fontWeight: 700, fontSize: "0.8rem", textDecoration: "none" }}>All Products →</Link>
            </div>
          </div>
          <div style={{ background: "var(--black)", borderRadius: 12, padding: 32, textAlign: "center" }}>
            <h3 style={{ color: "#fff", marginBottom: 8 }}>Need Help Choosing?</h3>
            <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 24, fontSize: "0.9rem" }}>
              Message us on WhatsApp and we'll recommend the right product based on your nicotine needs.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              Ask Us on WhatsApp →
            </a>
          </div>

        </div>
      </section>
    </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "Nicotine Content Guide — How Much Nicotine is in Each Vape? | TheVapesInMumbai.com", "author": {"@type": "Organization", "name": "TheVapesInMumbai.com"}, "publisher": {"@type": "Organization", "name": "TheVapesInMumbai.com", "url": "https://thevapesinmumbai.com"}, "url": "https://thevapesinmumbai.com/blog/nicotine-content-guide-mumbai" }) }} />
    </>
  );
}
