import type { Metadata } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import StickyWhatsApp from "../components/StickyWhatsApp";
import LiveOrderTicker from "../components/LiveOrderTicker";
import MiniCart from "../components/MiniCart";

export const metadata: Metadata = {
  title: "Vapes in Mumbai — 45-60 Min Delivery | TheVapesInMumbai.com",
  description: "Buy vapes in Mumbai with 45-60 minute delivery. Elfbar, Caliburn, ZYN, Lost Mary & more. Trusted vape delivery across Bandra, Andheri, Juhu, Worli and 20+ areas.",
  keywords: "vapes in mumbai, vape delivery mumbai, buy vape mumbai, elfbar mumbai, caliburn mumbai, zyn mumbai",
  alternates: { canonical: "https://thevapesinmumbai.com" },
  openGraph: {
    title: "Vapes in Mumbai — 45-60 Min Delivery",
    description: "45-60 min vape delivery across Mumbai. 100% original products.",
    url: "https://thevapesinmumbai.com",
    siteName: "The Vapes in Mumbai",
    locale: "en_IN",
    type: "website",
  },  icons: {
    icon: [
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon-48.png",
    apple: "/favicon-192.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#E23744" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512.png" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="192x192" href="/favicon-192.png" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mumbai" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-PZF349XHXB"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-PZF349XHXB');
        ` }} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Vapes in Mumbai — Fast Vape Delivery" />
        <meta name="twitter:description" content="45-60 min vape delivery across Mumbai. Elfbar, Caliburn, ZYN & more. 100% original products." />
        <meta name="twitter:site" content="@thevapesinmumbai" />
      </head>
      <body>
        {/* Nav */}
        <LiveOrderTicker />
        <nav className="nav">
          <div className="nav-inner">
            <a href="/" className="nav-logo">
              The<span>Vapes</span>InMumbai
            </a>
            <ul className="nav-links">
              <li><a href="/#categories">Products</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="https://wa.me/916282878843?text=Hi%20TheVapesInMumbai%2C%20I%20want%20to%20order%20a%20vape%20in%20Mumbai" target="_blank" className="nav-cta">Order Now</a></li>
            </ul>
          </div>
        </nav>

        {children}

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "TheVapesInMumbai.com",
        "url": "https://thevapesinmumbai.com",
        "telephone": "+916282878843",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 19.0760,
          "longitude": 72.8777
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "200",
          "bestRating": "5"
        },
        "review": [
          {
            "@type": "Review",
            "author": {"@type": "Person", "name": "Aryan S."},
            "reviewRating": {"@type": "Rating", "ratingValue": "5"},
            "reviewBody": "Ordered Elfbar Raya D1 and it arrived in under 50 minutes. 100% original product."
          },
          {
            "@type": "Review",
            "author": {"@type": "Person", "name": "Priya M."},
            "reviewRating": {"@type": "Rating", "ratingValue": "5"},
            "reviewBody": "Finally found a trusted vape source in Mumbai. Video call confirmation was a great touch."
          },
          {
            "@type": "Review",
            "author": {"@type": "Person", "name": "Rohan K."},
            "reviewRating": {"@type": "Rating", "ratingValue": "5"},
            "reviewBody": "Best vape delivery in Mumbai. Fast, discreet, original products every time."
          }
        ]
      }` }} />
        <StickyWhatsApp />
        <MiniCart />
        <SpeedInsights />
        <Analytics />
{/* Footer */}
        <footer className="footer">
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40 }}>
              <div>
                <div className="footer-logo">The<span>Vapes</span>InMumbai</div>
                <p style={{ fontSize: "0.85rem", marginTop: 8, lineHeight: 1.6, maxWidth: 260 }}>
                  Mumbai&apos;s most trusted vape delivery service. 45-60 min delivery, 100% original products.
                </p>
              </div>
              <div>
                <div style={{ fontWeight: 700, color: "#fff", marginBottom: 12, fontSize: "0.9rem" }}>Quick Links</div>
                <ul className="footer-links">
                  <li><a href="/products">All Products</a></li>
                  <li><a href="/blog">Blog</a></li>
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/return-policy">Return Policy</a></li>
                  <li><a href="https://wa.me/916282878843" target="_blank">Order on WhatsApp</a></li>
                </ul>
              </div>
              <div>
                <div style={{ fontWeight: 700, color: "#fff", marginBottom: 12, fontSize: "0.9rem" }}>Delivery Areas</div>
                <ul className="footer-links">
                  <li><a href="/locations/bandra-west">Bandra West</a></li>
                  <li><a href="/locations/andheri-west">Andheri West</a></li>
                  <li><a href="/locations/juhu">Juhu</a></li>
                  <li><a href="/locations/powai">Powai</a></li>
                  <li><a href="/locations/worli">Worli</a></li>
                  <li><a href="/locations/lower-parel">Lower Parel</a></li>
                </ul>
              </div>
              <div>
                <div style={{ fontWeight: 700, color: "#fff", marginBottom: 12, fontSize: "0.9rem" }}>🌍 Cities We Serve</div>
                <ul className="footer-links">
                  <li><a href="https://thevapesinbangalore.in" target="_blank" rel="noopener noreferrer" style={{ color: "#16a34a", fontWeight: 700 }}>✅ Bangalore — Active</a></li>
                  <li><a href="https://thevapesinmumbai.com" style={{ color: "#16a34a", fontWeight: 700 }}>✅ Mumbai — Active</a></li>
                </ul>
                <div style={{ marginTop: 12, fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>
                  Hyderabad · Pune · Delhi — Coming Soon
                </div>
              </div>
              <div>
                <div style={{ fontWeight: 700, color: "#fff", marginBottom: 12, fontSize: "0.9rem" }}>Contact</div>
                <ul className="footer-links">
                  <li><a href="https://wa.me/916282878843" target="_blank">WhatsApp Us</a></li>
                  <li><a href="mailto:hello@thevapesinmumbai.com">hello@thevapesinmumbai.com</a></li>
                </ul>
                <div style={{ marginTop: 16, fontSize: "0.78rem", color: "rgba(255,255,255,0.3)" }}>
                  ⚠️ 18+ only. Nicotine is addictive.
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <span>© 2026 TheVapesInMumbai.com — All rights reserved</span>
              <span>Mumbai, Maharashtra, India</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
