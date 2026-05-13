import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "E-Liquids and Nic Salts in Mumbai — Elfliq, Pod Salt | TheVapesInMumbai.com",
  description: "Buy e-liquids and nic salts in Mumbai. Elfliq, Pod Salt, Nasty Salts and more. 45-60 min delivery across Mumbai. 100% original products.",
  alternates: { canonical: "https://thevapesinmumbai.com/products/eliquids" },
};

const WA = "https://wa.me/916282878843?text=Hi%2C%20I%20want%20to%20be%20notified%20when%20TheVapesInMumbai.com%20launches";

const products = [
  { name: "Elfliq Nic Salt 10ml", specs: "10mg / 20mg", price: "₹1,399", mrp: "₹1,749", badge: "POPULAR", img: "elfliq-nic-salt.webp" },
  { name: "Pod Salt Core", specs: "11mg / 20mg", price: "₹1,099", mrp: "₹1,374", badge: "SMOOTH", img: "pod-salt-core.webp" },
  { name: "Pod Salt Disposable", specs: "20mg", price: "₹1,299", mrp: "₹1,624", badge: "NEW", img: "pod-salt-disposable.webp" },
];

export default function Page() {
  return (
    <>
      <section style={{background:"var(--black)",padding:"60px 0 40px"}}>
        <div className="container">
          <a href="/" style={{color:"rgba(255,255,255,0.4)",fontSize:"0.85rem",textDecoration:"none"}}>← Back to Home</a>
          <h1 style={{color:"#fff",marginTop:12}}>E-Liquids and Nic Salts in Mumbai</h1>
          <p style={{color:"rgba(255,255,255,0.6)",marginTop:12,maxWidth:560}}>Elfliq, Pod Salt, Nasty Salts — 45-60 min delivery across Mumbai via Porter.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div style={{background:"#F5F3FF",border:"1px solid #DDD6FE",borderRadius:12,padding:16,marginBottom:32,fontSize:"0.85rem",color:"#5B21B6"}}>
            All e-liquids are compatible with Caliburn and other refillable pod systems.
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:16}}>
            {products.map((p) => (
              <div key={p.name} style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:16,overflow:"hidden",boxShadow:"0 2px 12px rgba(0,0,0,0.06)"}}>
                <div style={{background:"#F9F9F9",position:"relative",aspectRatio:"1",overflow:"hidden"}}>
                  <span style={{position:"absolute",top:8,left:8,zIndex:1,background:"#7C3AED",color:"#fff",fontSize:"0.6rem",fontWeight:700,padding:"3px 7px",borderRadius:100}}>{p.badge}</span>
                  <Image src={"/products/" + p.img} alt={p.name + " Mumbai"} fill style={{objectFit:"contain",padding:"8px"}} sizes="50vw" />
                </div>
                <div style={{padding:12}}>
                  <div style={{fontSize:"0.82rem",fontWeight:700,color:"#0D0D0D",marginBottom:2,lineHeight:1.3}}>{p.name}</div>
                  <div style={{fontSize:"0.7rem",color:"#6B7280",marginBottom:6}}>{p.specs}</div>
                  <div style={{display:"flex",alignItems:"baseline",gap:4,marginBottom:10}}>
                    <span style={{fontSize:"1rem",fontWeight:800,color:"#7C3AED"}}>{p.price}</span>
                    <span style={{fontSize:"0.7rem",color:"#9CA3AF",textDecoration:"line-through"}}>{p.mrp}</span>
                  </div>
                  <a href={WA} target="_blank" rel="noopener noreferrer" style={{display:"block",background:"#0D0D0D",color:"#fff",textAlign:"center",padding:"9px",borderRadius:8,fontWeight:700,fontSize:"0.78rem",textDecoration:"none"}}>🔔 Notify Me</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "ItemList", "name": "Eliquids in Mumbai", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@type": "Product", "name": "Elfliq Nic Salt", "description": "Elfliq nicotine salt e-liquid in Mumbai.", "image": "https://thevapesinmumbai.com/products/elfliq-nic-salt.webp", "brand": {"@type": "Brand", "name": "Elfbar"}, "offers": {"@type": "Offer", "price": "1399", "priceCurrency": "INR", "availability": "https://schema.org/InStock", "url": "https://thevapesinmumbai.com/products/eliquids", "seller": {"@type": "Organization", "name": "TheVapesInMumbai.com"}}}}, {"@type": "ListItem", "position": 2, "item": {"@type": "Product", "name": "Pod Salt Core", "description": "Pod Salt Core nic salt in Mumbai.", "image": "https://thevapesinmumbai.com/products/pod-salt-core.webp", "brand": {"@type": "Brand", "name": "Pod Salt"}, "offers": {"@type": "Offer", "price": "1099", "priceCurrency": "INR", "availability": "https://schema.org/InStock", "url": "https://thevapesinmumbai.com/products/eliquids", "seller": {"@type": "Organization", "name": "TheVapesInMumbai.com"}}}}]}` }} />
    </>
  );
}
