import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Nicotine Pouches in Mumbai — ZYN, Velo | TheVapesInMumbai.com",
  description: "Buy ZYN and Velo nicotine pouches in Mumbai. Smoke-free nicotine delivered in 45-60 minutes across Mumbai. 100% original products.",
  alternates: { canonical: "https://thevapesinmumbai.com/products/nicotine-pouches" },
};

const WA = "https://wa.me/916282878843?text=Hi%2C%20I%20want%20to%20be%20notified%20when%20TheVapesInMumbai.com%20launches";

const products = [
  { name: "ZYN Cool Mint", specs: "3mg / 6mg", price: "₹1,199", mrp: "₹1,499", badge: "POPULAR", img: "zyn-velo.webp" },
  { name: "Velo Freezing Peppermint", specs: "4mg / 10mg", price: "₹1,199", mrp: "₹1,499", badge: "STRONG", img: "velo-freezing-peppermint.webp" },
];

export default function Page() {
  return (
    <>
      <section style={{background:"var(--black)",padding:"60px 0 40px"}}>
        <div className="container">
          <a href="/" style={{color:"rgba(255,255,255,0.4)",fontSize:"0.85rem",textDecoration:"none"}}>← Back to Home</a>
          <h1 style={{color:"#fff",marginTop:12}}>Nicotine Pouches in Mumbai</h1>
          <p style={{color:"rgba(255,255,255,0.6)",marginTop:12,maxWidth:560}}>ZYN, Velo — smoke-free nicotine delivered in 45-60 minutes across Mumbai.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div style={{background:"#ECFDF5",border:"1px solid #A7F3D0",borderRadius:12,padding:16,marginBottom:32,fontSize:"0.85rem",color:"#065F46"}}>
            Nicotine pouches are smoke-free, discreet and can be used anywhere. No vape device needed.
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:16}}>
            {products.map((p) => (
              <div key={p.name} style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:16,overflow:"hidden",boxShadow:"0 2px 12px rgba(0,0,0,0.06)"}}>
                <div style={{background:"#F9F9F9",position:"relative",aspectRatio:"1",overflow:"hidden"}}>
                  <span style={{position:"absolute",top:8,left:8,zIndex:1,background:"#059669",color:"#fff",fontSize:"0.6rem",fontWeight:700,padding:"3px 7px",borderRadius:100}}>{p.badge}</span>
                  <Image src={"/products/" + p.img} alt={p.name + " Mumbai"} fill style={{objectFit:"contain",padding:"8px"}} sizes="50vw" />
                </div>
                <div style={{padding:12}}>
                  <div style={{fontSize:"0.82rem",fontWeight:700,color:"#0D0D0D",marginBottom:2,lineHeight:1.3}}>{p.name}</div>
                  <div style={{fontSize:"0.7rem",color:"#6B7280",marginBottom:6}}>{p.specs}</div>
                  <div style={{display:"flex",alignItems:"baseline",gap:4,marginBottom:10}}>
                    <span style={{fontSize:"1rem",fontWeight:800,color:"#059669"}}>{p.price}</span>
                    <span style={{fontSize:"0.7rem",color:"#9CA3AF",textDecoration:"line-through"}}>{p.mrp}</span>
                  </div>
                  <a href={WA} target="_blank" rel="noopener noreferrer" style={{display:"block",background:"#0D0D0D",color:"#fff",textAlign:"center",padding:"9px",borderRadius:8,fontWeight:700,fontSize:"0.78rem",textDecoration:"none"}}>🔔 Notify Me</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "ItemList", "name": "Nicotine Pouches in Mumbai", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@type": "Product", "name": "ZYN Cool Mint", "description": "ZYN Cool Mint nicotine pouches in Mumbai.", "image": "https://thevapesinmumbai.com/products/zyn-velo.webp", "brand": {"@type": "Brand", "name": "ZYN"}, "offers": {"@type": "Offer", "price": "549", "priceCurrency": "INR", "availability": "https://schema.org/InStock", "url": "https://thevapesinmumbai.com/products/nicotine-pouches", "seller": {"@type": "Organization", "name": "TheVapesInMumbai.com"}}}}, {"@type": "ListItem", "position": 2, "item": {"@type": "Product", "name": "Velo Freezing Peppermint", "description": "Velo nicotine pouches in Mumbai.", "image": "https://thevapesinmumbai.com/products/velo-freezing-peppermint.webp", "brand": {"@type": "Brand", "name": "Velo"}, "offers": {"@type": "Offer", "price": "499", "priceCurrency": "INR", "availability": "https://schema.org/InStock", "url": "https://thevapesinmumbai.com/products/nicotine-pouches", "seller": {"@type": "Organization", "name": "TheVapesInMumbai.com"}}}}]}` }} />
    </>
  );
}
