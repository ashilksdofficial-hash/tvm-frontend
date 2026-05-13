import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — TheVapesInBangalore.in | Trusted Vape Delivery in Bangalore",
  description: "Learn about TheVapesInBangalore.in — Bangalore's trusted vape delivery service. 30-45 min delivery, 100% original products, serving 20+ areas across Bangalore.",
  alternates: { canonical: "https://thevapesinbangalore.in/about" },
};

const WA = "https://wa.me/916282878843?text=Hi%2C%20I%20want%20to%20order%20a%20vape";

const STATS = [
  { number: "1,000+", label: "Happy Customers" },
  { number: "20+", label: "Areas Covered" },
  { number: "30-45", label: "Min Delivery" },
  { number: "100%", label: "Original Products" },
];

const VALUES = [
  { icon: "✅", title: "100% Original Products", desc: "Every product we sell is sourced directly from official distributors. We verify authenticity before every delivery. No fakes, ever." },
  { icon: "⚡", title: "Speed is Everything", desc: "We built our entire operation around speed. 30-45 minutes from order to door. We dispatch the moment you confirm." },
  { icon: "🔒", title: "Completely Discreet", desc: "Plain packaging, no labels, no branding on the outside. Your order is your business. We respect your privacy completely." },
  { icon: "💬", title: "Real Human Support", desc: "Every order is handled by a real person on WhatsApp. No bots, no automated replies. We're here every day from 10am to 10pm." },
  { icon: "📍", title: "Bangalore First", desc: "We are a Bangalore-first service. We know every neighbourhood, every lane. Built for Bangaloreans, by Bangaloreans." },
  { icon: "🏆", title: "Trust Above All", desc: "In a market full of fake sites and scam sellers, we built our reputation on trust. Every customer who orders once, comes back." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--black)", padding: "80px 0 60px" }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <p className="section-label">About Us</p>
          <h1 style={{ color: "#fff", marginBottom: 20 }}>
            Bangalore's Most Trusted<br />
            <span style={{ color: "var(--red)" }}>Vape Delivery</span> Service
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 600 }}>
            We started TheVapesInBangalore.in with one mission — make it easy for Bangaloreans to get genuine vapes delivered fast, safely, and discreetly. No hassle, no fake products, no waiting.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "var(--red)", padding: "40px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {STATS.map(s => (
              <div key={s.label} style={{ textAlign: "center", color: "#fff" }}>
                <div style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, lineHeight: 1 }}>{s.number}</div>
                <div style={{ fontSize: "0.85rem", marginTop: 6, opacity: 0.85 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <p className="section-label">Our Story</p>
          <h2 style={{ marginBottom: 24 }}>Why We Built This</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20, color: "var(--gray)", fontSize: "1rem", lineHeight: 1.8 }}>
            <p>
              Finding a reliable vape in Bangalore used to be a nightmare. Physical shops had limited stock, inconsistent quality, and required you to travel across the city. Online options were full of fake websites, overpriced products, and unreliable delivery.
            </p>
            <p>
              We saw the problem and built the solution. TheVapesInBangalore.in was created to be the most trusted, fastest, and most reliable vape delivery service in Bangalore. We stock only 100% original products from official distributors, and we deliver them to your door in 30-45 minutes.
            </p>
            <p>
              We serve over 1,000 happy customers across 20+ neighbourhoods in Bangalore. From BTM Layout to Whitefield, from Koramangala to Yelahanka — we know Bangalore, and we deliver everywhere.
            </p>
            <p>
              Our WhatsApp-first approach means you always talk to a real person. No bots, no complicated checkout flows. Just message us, confirm your order, and we dispatch immediately.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: "var(--off-white)" }}>
        <div className="container">
          <p className="section-label">Our Values</p>
          <h2 style={{ marginBottom: 40 }}>What We Stand For</h2>
          <div className="grid-3">
            {VALUES.map(v => (
              <div key={v.title} style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 12, padding: 24 }}>
                <div style={{ fontSize: "2rem", marginBottom: 12 }}>{v.icon}</div>
                <h3 style={{ marginBottom: 8 }}>{v.title}</h3>
                <p style={{ color: "var(--gray)", fontSize: "0.9rem", lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we operate */}
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <p className="section-label">How It Works</p>
          <h2 style={{ marginBottom: 40 }}>Simple, Fast, Trusted</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {[
              { step: "01", title: "You Message Us", desc: "WhatsApp us your order — product name, quantity, and delivery address. That's it." },
              { step: "02", title: "We Confirm Instantly", desc: "Our team confirms your order within minutes, verifies availability and gives you the total." },
              { step: "03", title: "We Dispatch Immediately", desc: "The moment you confirm, we pack and dispatch via Porter or Rapido." },
              { step: "04", title: "Delivered in 30-45 Mins", desc: "Your order arrives in plain, discreet packaging. Pay on delivery or UPI." },
            ].map((s, i) => (
              <div key={s.step} style={{ display: "flex", gap: 24, paddingBottom: 32, position: "relative" }}>
                {i < 3 && <div style={{ position: "absolute", left: 20, top: 48, width: 2, height: "calc(100% - 16px)", background: "var(--border)" }} />}
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--red)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "0.85rem", flexShrink: 0, zIndex: 1 }}>{s.step}</div>
                <div>
                  <h3 style={{ marginBottom: 6 }}>{s.title}</h3>
                  <p style={{ color: "var(--gray)", fontSize: "0.9rem", lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust section */}
      <section className="section" style={{ background: "var(--off-white)" }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <p className="section-label">Why Trust Us</p>
          <h2 style={{ marginBottom: 32 }}>In a Market Full of Fakes, We're the Real Deal</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              "All products come with original manufacturer packaging and QR verification codes",
              "We have served 1,000+ customers across Bangalore with zero complaints about product authenticity",
              "We are transparent about our pricing — no hidden delivery charges, no surprise fees",
              "Every order is tracked and you receive updates via WhatsApp throughout the delivery",
              "We have a clear replacement policy for any product quality issues",
              "Our WhatsApp number is always active — you can reach us anytime between 10am and 10pm",
            ].map((t, i) => (
              <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", background: "#fff", border: "1px solid var(--border)", borderRadius: 10, padding: 18 }}>
                <span style={{ color: "var(--red)", fontWeight: 700, fontSize: "1.1rem", flexShrink: 0 }}>✓</span>
                <span style={{ color: "var(--gray)", fontSize: "0.9rem", lineHeight: 1.6 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--black)", padding: "80px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ color: "#fff", marginBottom: 16 }}>Ready to Experience the Difference?</h2>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 32, maxWidth: 480, margin: "0 auto 32px" }}>
            Join 1,000+ happy customers across Bangalore. Order now and get your vape in 30-45 minutes.
          </p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ fontSize: "1.1rem", padding: "16px 36px" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.554 4.122 1.523 5.855L0 24l6.29-1.49A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.374l-.36-.214-3.733.884.937-3.638-.234-.374A9.818 9.818 0 0112 2.182c5.424 0 9.818 4.394 9.818 9.818 0 5.425-4.394 9.818-9.818 9.818z"/></svg>
            Order Now on WhatsApp
          </a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "TheVapesInBangalore.in",
        "description": "Trusted vape delivery service in Bangalore. 30-45 minute delivery across 20+ areas.",
        "url": "https://thevapesinbangalore.in",
        "telephone": "+916282878843",
        "address": { "@type": "PostalAddress", "addressLocality": "Bangalore", "addressRegion": "Karnataka", "addressCountry": "IN" },
        "geo": { "@type": "GeoCoordinates", "latitude": 12.9716, "longitude": 77.5946 },
        "openingHours": "Mo-Su 10:00-22:00",
        "priceRange": "₹₹",
        "servesCuisine": "Vape Products",
      })}} />
    </>
  );
}
