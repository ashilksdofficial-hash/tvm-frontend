import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Rolling Tobacco in Mumbai — Amber Leaf, Drum, Golden Virginia | TheVapesInMumbai.com",
  description: "Buy rolling tobacco in Mumbai. Amber Leaf, Drum, Golden Virginia and more. 45-60 min delivery across Mumbai. 100% original products.",
  alternates: { canonical: "https://thevapesinmumbai.com/products/tobacco" },
};

const WA = "https://wa.me/916282878843?text=Hi%2C%20I%20want%20to%20be%20notified%20when%20TheVapesInMumbai.com%20launches";

const products = [
  { name: "Amber Leaf Rolling Tobacco", specs: "50g pouch", price: "₹1,999", mrp: "₹2,499", badge: "POPULAR", img: "amber-leaf.webp" },
  { name: "Drum Bright Blue", specs: "50g pouch", price: "₹1,899", mrp: "₹2,374", badge: "SMOOTH", img: "drum-blue.webp" },
  { name: "Golden Virginia", specs: "50g pouch", price: "₹2,399", mrp: "₹2,999", badge: "PREMIUM", img: "golden-virginia.webp" },
  { name: "Natural American Spirit", specs: "50g pouch", price: "₹2,499", mrp: "₹3,124", badge: "ORGANIC", img: "american-spirit.webp" },
];

export default function Page() {
  return (
    <>
      <section style={{position:"relative",overflow:"hidden",minHeight:220}}>
        <Image src="/tobacco-banner.jpg" alt="Rolling Tobacco in Mumbai" fill style={{objectFit:"contain",objectPosition:"center",background:"#FFFBEB"}} priority sizes="100vw" />
        <div style={{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(13,13,13,0.92) 0%, rgba(13,13,13,0.4) 60%, rgba(13,13,13,0) 100%)"}} />
        <div style={{position:"relative",zIndex:1,padding:"48px 0 24px"}}>
          <div className="container">
            <a href="/" style={{color:"rgba(255,255,255,0.6)",fontSize:"0.85rem",textDecoration:"none"}}>← Back to Home</a>
            <h1 style={{color:"#fff",marginTop:12}}>Rolling Tobacco in Mumbai</h1>
            <p style={{color:"rgba(255,255,255,0.7)",marginTop:8,maxWidth:560}}>45-60 minute delivery across Mumbai. 100% original products.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div style={{background:"#FFFBEB",border:"1px solid #FDE68A",borderRadius:12,padding:16,marginBottom:32,fontSize:"0.85rem",color:"#92400E"}}>
            Warning: Tobacco products are for adults 18+ only.
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:16}}>
            {products.map((p) => (
              <div key={p.name} style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:16,overflow:"hidden",boxShadow:"0 2px 12px rgba(0,0,0,0.06)"}}>
                <div style={{background:"#F9F9F9",position:"relative",aspectRatio:"1",overflow:"hidden"}}>
                  <span style={{position:"absolute",top:8,left:8,zIndex:1,background:"#D97706",color:"#fff",fontSize:"0.6rem",fontWeight:700,padding:"3px 7px",borderRadius:100}}>{p.badge}</span>
                  <Image src={"/products/" + p.img} alt={p.name + " Mumbai"} fill style={{objectFit:"contain",padding:"8px"}} sizes="50vw" />
                </div>
                <div style={{padding:12}}>
                  <div style={{fontSize:"0.82rem",fontWeight:700,color:"#0D0D0D",marginBottom:2,lineHeight:1.3}}>{p.name}</div>
                  <div style={{fontSize:"0.7rem",color:"#6B7280",marginBottom:6}}>{p.specs}</div>
                  <div style={{display:"flex",alignItems:"baseline",gap:4,marginBottom:10}}>
                    <span style={{fontSize:"1rem",fontWeight:800,color:"#D97706"}}>{p.price}</span>
                    <span style={{fontSize:"0.7rem",color:"#9CA3AF",textDecoration:"line-through"}}>{p.mrp}</span>
                  </div>
                  <a href={WA} target="_blank" rel="noopener noreferrer" style={{display:"block",background:"#0D0D0D",color:"#fff",textAlign:"center",padding:"9px",borderRadius:8,fontWeight:700,fontSize:"0.78rem",textDecoration:"none"}}>🔔 Notify Me</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
