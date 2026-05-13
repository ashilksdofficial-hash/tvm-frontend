"use client";
import { useState } from "react";
import Link from "next/link";

const POSTS = [
  { slug: "best-vape-shops-mumbai", tag: "GUIDE", title: "Best Vape Shops in Mumbai 2026", excerpt: "A complete guide to finding trusted vape shops and delivery services in Mumbai.", date: "May 2026" },
  { slug: "vape-delivery-mumbai-guide", tag: "DELIVERY", title: "Vape Delivery in Mumbai — The Complete Guide", excerpt: "Everything you need to know about ordering vapes for delivery in Mumbai.", date: "May 2026" },
  { slug: "where-to-buy-vapes-mumbai", tag: "GUIDE", title: "Where to Buy Vapes in Mumbai — 2026 Guide", excerpt: "The definitive guide to buying vapes in Mumbai — online vs offline and trusted sources.", date: "May 2026" },
  { slug: "elfbar-mumbai", tag: "PRODUCTS", title: "Elfbar in Mumbai — Price, Flavours & Delivery", excerpt: "Complete guide to Elfbar products available in Mumbai. Prices, flavours and puff counts.", date: "May 2026" },
  { slug: "caliburn-pod-system-mumbai", tag: "PRODUCTS", title: "Caliburn Pod System in Mumbai — Which One to Buy?", excerpt: "A full breakdown of all Caliburn pod systems available in Mumbai.", date: "May 2026" },
  { slug: "zyn-nicotine-pouches-mumbai", tag: "PRODUCTS", title: "ZYN Nicotine Pouches in Mumbai — Price & Delivery", excerpt: "Everything about ZYN nicotine pouches in Mumbai. Flavours, strengths and prices.", date: "May 2026" },
  { slug: "trusted-vape-delivery-mumbai", tag: "TRUST", title: "Trusted Vape Delivery — Beware of Fake Sites", excerpt: "How to identify genuine vape delivery services and avoid scams in Mumbai.", date: "May 2026" },
  { slug: "nicotine-content-guide-mumbai", tag: "HEALTH", title: "Nicotine Content Guide — How Much is in Each Vape?", excerpt: "A complete breakdown of nicotine levels across all major vape products.", date: "May 2026" },
];

const TAG_COLORS: Record<string, string> = {
  GUIDE: "#2563EB", DELIVERY: "#059669", PRODUCTS: "#E23744",
  TRUST: "#D97706", HEALTH: "#7C3AED",
};

const TAG_EMOJI: Record<string, string> = {
  GUIDE: "📖", DELIVERY: "🚀", PRODUCTS: "🛒", TRUST: "🔒", HEALTH: "💊",
};

export default function BlogGrid() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? POSTS : POSTS.slice(0, 4);
  return (
    <>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:16 }}>
        {visible.map(p => (
          <Link key={p.slug} href={`/blog/${p.slug}`} style={{ display:"block", textDecoration:"none", background:"#fff", border:"1px solid #E5E7EB", borderRadius:16, overflow:"hidden", boxShadow:"0 2px 12px rgba(0,0,0,0.06)" }}>
            <div style={{ height:110, background:TAG_COLORS[p.tag]||"#E23744", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <span style={{ fontSize:"2rem" }}>{TAG_EMOJI[p.tag]||"📖"}</span>
            </div>
            <div style={{ padding:14 }}>
              <div style={{ fontSize:"0.65rem", fontWeight:800, letterSpacing:"0.08em", color:TAG_COLORS[p.tag], marginBottom:4 }}>{p.tag}</div>
              <div style={{ fontSize:"0.82rem", fontWeight:700, color:"#0D0D0D", lineHeight:1.35, marginBottom:6 }}>{p.title}</div>
              <div style={{ fontSize:"0.72rem", color:"#6B7280", lineHeight:1.5, marginBottom:10 }}>{p.excerpt}</div>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                <span style={{ fontSize:"0.68rem", color:"#9CA3AF" }}>{p.date}</span>
                <span style={{ fontSize:"0.75rem", fontWeight:700, color:"#E23744" }}>Read →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {!expanded && (
        <div style={{ textAlign:"center", marginTop:28 }}>
          <button onClick={() => setExpanded(true)} style={{ background:"#fff", border:"2px solid #E23744", color:"#E23744", fontWeight:700, fontSize:"0.85rem", padding:"12px 32px", borderRadius:100, cursor:"pointer" }}>
            Show More Posts ↓
          </button>
        </div>
      )}
    </>
  );
}
