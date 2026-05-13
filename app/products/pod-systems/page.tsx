import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Reusable Pod Systems in Mumbai — Caliburn Series | TheVapesInMumbai.com",
  description: "Buy Caliburn pod systems in Mumbai. Caliburn G3 Pro, G4, G5 Lite and more. 45-60 min delivery across Mumbai. 100% original Uwell products.",
  alternates: { canonical: "https://thevapesinmumbai.com/products/pod-systems" },
};

const WA = "https://wa.me/916282878843?text=Hi%2C%20I%20want%20to%20be%20notified%20when%20TheVapesInMumbai.com%20launches";

const products = [
  { name: "Caliburn A2", specs: "520mAh · 15W", price: "₹4,299", mrp: "₹5,374", badge: "BEGINNER", img: "caliburn-a2.webp" },
  { name: "Caliburn G3 Lite", specs: "900mAh · 25W", price: "₹4,199", mrp: "₹5,249", badge: "BUDGET", img: "caliburn-g3-lite.webp" },
  { name: "Caliburn G3 Pro", specs: "900mAh · 25W", price: "₹6,499", mrp: "₹8,124", badge: "BEST SELLER", img: "caliburn-g3-pro.webp" },
  { name: "Caliburn G3 Pro KOKO", specs: "900mAh · 25W", price: "₹6,499", mrp: "₹8,124", badge: "POPULAR", img: "caliburn-g3-pro-koko.webp" },
  { name: "Caliburn G4", specs: "950mAh · 33W", price: "₹6,999", mrp: "₹8,749", badge: "NEW", img: "caliburn-g4.webp" },
  { name: "Caliburn G4 Pro", specs: "950mAh · 33W", price: "₹7,699", mrp: "₹9,624", badge: "PRO", img: "caliburn-g4-pro.webp" },
  { name: "Caliburn G5 Lite", specs: "750mAh · 30W", price: "₹5,299", mrp: "₹6,624", badge: "SLIM", img: "caliburn-g5-lite.webp" },
  { name: "Caliburn GK2", specs: "690mAh · 18W", price: "₹4,799", mrp: "₹5,999", badge: "COMPACT", img: "caliburn-gk2.webp" },
  { name: "Caliburn KOKO", specs: "520mAh · 15W", price: "₹3,999", mrp: "₹4,999", badge: "CLASSIC", img: "caliburn-koko.webp" },
];

export default function Page() {
  return (
    <>
      <section style={{background:"var(--black)",padding:"60px 0 40px"}}>
        <div className="container">
          <a href="/" style={{color:"rgba(255,255,255,0.4)",fontSize:"0.85rem",textDecoration:"none"}}>← Back to Home</a>
          <h1 style={{color:"#fff",marginTop:12}}>Reusable Pod Systems in Mumbai</h1>
          <p style={{color:"rgba(255,255,255,0.6)",marginTop:12,maxWidth:560}}>Caliburn, Xros and more — 45-60 min delivery across Mumbai via Porter. 100% original.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div style={{background:"#EFF6FF",border:"1px solid #BFDBFE",borderRadius:12,padding:16,marginBottom:32,fontSize:"0.85rem",color:"#1E40AF"}}>
            Note: Pod systems need e-liquid separately. Join waitlist and we will recommend the perfect combo for you.
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:16}}>
            {products.map((p) => (
              <div key={p.name} style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:16,overflow:"hidden",boxShadow:"0 2px 12px rgba(0,0,0,0.06)"}}>
                <div style={{background:"#F9F9F9",position:"relative",aspectRatio:"1",overflow:"hidden"}}>
                  <span style={{position:"absolute",top:8,left:8,zIndex:1,background:"#2563EB",color:"#fff",fontSize:"0.6rem",fontWeight:700,padding:"3px 7px",borderRadius:100}}>{p.badge}</span>
                  <Image src={"/products/" + p.img} alt={p.name + " Mumbai"} fill style={{objectFit:"contain",padding:"8px"}} sizes="50vw" />
                </div>
                <div style={{padding:12}}>
                  <div style={{fontSize:"0.82rem",fontWeight:700,color:"#0D0D0D",marginBottom:2,lineHeight:1.3}}>{p.name}</div>
                  <div style={{fontSize:"0.7rem",color:"#6B7280",marginBottom:6}}>{p.specs}</div>
                  <div style={{display:"flex",alignItems:"baseline",gap:4,marginBottom:10}}>
                    <span style={{fontSize:"1rem",fontWeight:800,color:"#2563EB"}}>{p.price}</span>
                    <span style={{fontSize:"0.7rem",color:"#9CA3AF",textDecoration:"line-through"}}>{p.mrp}</span>
                  </div>
                  <a href={WA} target="_blank" rel="noopener noreferrer" style={{display:"block",background:"#0D0D0D",color:"#fff",textAlign:"center",padding:"9px",borderRadius:8,fontWeight:700,fontSize:"0.78rem",textDecoration:"none"}}>🔔 Notify Me</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "ItemList", "name": "Pod Systems in Mumbai", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@type": "Product", "name": "Caliburn G3 Pro", "description": "Caliburn G3 Pro pod system in Mumbai. 45-60 min delivery.", "image": "https://thevapesinmumbai.com/products/caliburn-g3-pro.webp", "brand": {"@type": "Brand", "name": "Uwell"}, "offers": {"@type": "Offer", "price": "6499", "priceCurrency": "INR", "availability": "https://schema.org/InStock", "url": "https://thevapesinmumbai.com/products/pod-systems", "seller": {"@type": "Organization", "name": "TheVapesInMumbai.com"}}}}, {"@type": "ListItem", "position": 2, "item": {"@type": "Product", "name": "Caliburn G4", "description": "Caliburn G4 pod system in Mumbai.", "image": "https://thevapesinmumbai.com/products/caliburn-g4.webp", "brand": {"@type": "Brand", "name": "Uwell"}, "offers": {"@type": "Offer", "price": "6999", "priceCurrency": "INR", "availability": "https://schema.org/InStock", "url": "https://thevapesinmumbai.com/products/pod-systems", "seller": {"@type": "Organization", "name": "TheVapesInMumbai.com"}}}}]}` }} />
    </>
  );
}
