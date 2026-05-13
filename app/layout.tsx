import type { Metadata } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StickyWhatsApp from "../components/StickyWhatsApp";

export const metadata: Metadata = {
  title: "The Vapes in Bangalore — Fast Vape Delivery Across Bangalore",
  description: "Buy vapes in Bangalore with 30-45 minute delivery. Elfbar, Caliburn, ZYN, Lost Mary & more. Trusted vape delivery across BTM, HSR, Koramangala, Whitefield and 20+ areas.",
  keywords: "vapes in bangalore, vape delivery bangalore, buy vape bangalore, elfbar bangalore, caliburn bangalore, zyn bangalore",
  alternates: { canonical: "https://thevapesinbangalore.in" },
  openGraph: {
    title: "The Vapes in Bangalore — Fast Vape Delivery",
    description: "30-45 min vape delivery across Bangalore. 100% original products.",
    url: "https://thevapesinbangalore.in",
    siteName: "The Vapes in Bangalore",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#E23744" />
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bangalore" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-PZF349XHXB"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-PZF349XHXB');
        ` }} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Vapes in Bangalore — Fast Vape Delivery" />
        <meta name="twitter:description" content="30-45 min vape delivery across Bangalore. Elfbar, Caliburn, ZYN & more. 100% original products." />
        <meta name="twitter:site" content="@thevapesinbangalore" />
      </head>
      <body>
        {/* Nav */}
        <nav className="nav">
          <div className="nav-inner">
            <a href="/" className="nav-logo">
              The<span>Vapes</span>InBangalore
            </a>
            <ul className="nav-links">
              <li><a href="/#categories">Products</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="https://wa.me/916282878843?text=Hi%2C%20I%20want%20to%20order%20a%20vape" target="_blank" className="nav-cta">Order Now</a></li>
            </ul>
          </div>
        </nav>

        {children}
        <StickyWhatsApp />
        <SpeedInsights />
{/* Footer */}
        <footer className="footer">
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40 }}>
              <div>
                <div className="footer-logo">The<span>Vapes</span>InBangalore</div>
                <p style={{ fontSize: "0.85rem", marginTop: 8, lineHeight: 1.6, maxWidth: 260 }}>
                  Bangalore&apos;s most trusted vape delivery service. 30-45 min delivery, 100% original products.
                </p>
              </div>
              <div>
                <div style={{ fontWeight: 700, color: "#fff", marginBottom: 12, fontSize: "0.9rem" }}>Quick Links</div>
                <ul className="footer-links">
                  <li><a href="/products">All Products</a></li>
                  <li><a href="/blog">Blog</a></li>
                  <li><a href="/about">About Us</a></li>
                  <li><a href="https://wa.me/916282878843" target="_blank">Order on WhatsApp</a></li>
                </ul>
              </div>
              <div>
                <div style={{ fontWeight: 700, color: "#fff", marginBottom: 12, fontSize: "0.9rem" }}>Delivery Areas</div>
                <ul className="footer-links">
                  <li><a href="/products">BTM Layout</a></li>
                  <li><a href="/products">HSR Layout</a></li>
                  <li><a href="/products">Koramangala</a></li>
                  <li><a href="/products">Indiranagar</a></li>
                  <li><a href="/products">Whitefield</a></li>
                  <li><a href="/products">+ 20 more areas</a></li>
                </ul>
              </div>
              <div>
                <div style={{ fontWeight: 700, color: "#fff", marginBottom: 12, fontSize: "0.9rem" }}>Contact</div>
                <ul className="footer-links">
                  <li><a href="https://wa.me/916282878843" target="_blank">WhatsApp Us</a></li>
                  <li><a href="mailto:hello@thevapesinbangalore.in">hello@thevapesinbangalore.in</a></li>
                </ul>
                <div style={{ marginTop: 16, fontSize: "0.78rem", color: "rgba(255,255,255,0.3)" }}>
                  ⚠️ 18+ only. Nicotine is addictive.
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <span>© 2026 TheVapesInBangalore.in — All rights reserved</span>
              <span>Bangalore, Karnataka, India</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
