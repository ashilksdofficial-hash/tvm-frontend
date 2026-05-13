import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Disposable Vapes in Mumbai — Elfbar, Lost Mary, Nasty | TheVapesInMumbai.com",
  description: "Buy disposable vapes in Mumbai. Elfbar Raya D1, Lost Mary MT35000, Nasty Bolt 50K and more. 45-60 min delivery across Mumbai. 100% original products.",
  alternates: { canonical: "https://thevapesinmumbai.com/products/disposables" },
};

const WA = "https://wa.me/916282878843?text=Hi%2C%20I%20want%20to%20be%20notified%20when%20TheVapesInMumbai.com%20launches";

const products = [
  { name: "Elfbar 600", puffs: "600 Puffs", price: "₹1,099", mrp: "₹1,374", badge: "BUDGET", img: "elfbar-600.webp" },
  { name: "Elfbar Raya D1", puffs: "13,000 Puffs", price: "₹2,399", mrp: "₹2,998", badge: "BEST SELLER", img: "raya-d1.webp" },
  { name: "Elfbar Raya D3", puffs: "25,000 Puffs", price: "₹2,999", mrp: "₹3,748", badge: "TOP RATED", img: "raya-d3.webp" },
  { name: "Elfbar D3 Pro", puffs: "25,000 Puffs", price: "₹3,199", mrp: "₹3,998", badge: "PRO", img: "d3-pro.webp" },
  { name: "Elfbar Ice King", puffs: "30,000 Puffs", price: "₹3,199", mrp: "₹3,998", badge: "VALUE", img: "ice-king.webp" },
  { name: "Elfbar BC 10000", puffs: "10,000 Puffs", price: "₹2,399", mrp: "₹2,998", badge: "COMPACT", img: "bc10000.webp" },
  { name: "Elfbar Raya SOBO", puffs: "20,000 Puffs", price: "₹3,499", mrp: "₹4,374", badge: "PREMIUM", img: "raya-sobo.webp" },
  { name: "Elfbar Trio", puffs: "20,000 Puffs", price: "₹3,199", mrp: "₹3,998", badge: "NEW", img: "elfbar-trio.webp" },
  { name: "Elfbar MoonNight 40K", puffs: "40,000 Puffs", price: "₹3,199", mrp: "₹3,998", badge: "LONGEST", img: "elfbar-moonnight.webp" },
  { name: "Lost Mary MT35000 Turbo", puffs: "35,000 Puffs", price: "₹3,199", mrp: "₹3,998", badge: "HIGH PUFF", img: "lost-mary-mt35000.webp" },
  { name: "Lost Mary MO10000", puffs: "10,000 Puffs", price: "₹2,699", mrp: "₹3,374", badge: "COMPACT", img: "lost-mary-mo10000.webp" },
  { name: "Nasty Bolt WTF 50K", puffs: "50,000 Puffs", price: "₹4,299", mrp: "₹5,374", badge: "50K PUFFS", img: "nasty-bolt.webp" },
  { name: "IGET Astro B18000", puffs: "18,000 Puffs", price: "₹4,299", mrp: "₹5,374", badge: "NEW", img: "iget-astro.webp" },
  { name: "Yuoto Beyonder", puffs: "", price: "₹3,199", mrp: "₹3,998", badge: "BUDGET", img: "yuoto-beyonder.webp" },
  { name: "Yuoto Thanos", puffs: "5,000 Puffs", price: "₹1,899", mrp: "₹2,374", badge: "NEW", img: "yuoto-thanos.png" },
];

export default function Page() {
  return (
    <>
      <section style={{background:"var(--black)",padding:"60px 0 40px"}}>
        <div className="container">
          <a href="/" style={{color:"rgba(255,255,255,0.4)",fontSize:"0.85rem",textDecoration:"none"}}>← Back to Home</a>
          <h1 style={{color:"#fff",marginTop:12}}>Disposable Vapes in Mumbai</h1>
          <p style={{color:"rgba(255,255,255,0.6)",marginTop:12,maxWidth:560}}>45-60 minute delivery across Mumbai via Porter. 100% original products.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div style={{background:"#FEF2F2",border:"1px solid #FECACA",borderRadius:12,padding:16,marginBottom:32,fontSize:"0.85rem",color:"#991B1B"}}>
            🚀 Launching soon in Mumbai — Join the waitlist to be notified first!
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:16}}>
            {products.map((p) => (
              <div key={p.name} style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:16,overflow:"hidden",boxShadow:"0 2px 12px rgba(0,0,0,0.06)"}}>
                <div style={{background:"#F9F9F9",position:"relative",aspectRatio:"1",overflow:"hidden"}}>
                  <span style={{position:"absolute",top:8,left:8,zIndex:1,background:"#E23744",color:"#fff",fontSize:"0.6rem",fontWeight:700,padding:"3px 7px",borderRadius:100}}>{p.badge}</span>
                  <Image src={"/products/" + p.img} alt={p.name + " Mumbai"} fill style={{objectFit:"contain",padding:"8px"}} sizes="50vw" />
                </div>
                <div style={{padding:12}}>
                  <div style={{fontSize:"0.82rem",fontWeight:700,color:"#0D0D0D",marginBottom:2,lineHeight:1.3}}>{p.name}</div>
                  {p.puffs && <div style={{fontSize:"0.7rem",color:"#6B7280",marginBottom:6}}>{p.puffs}</div>}
                  <div style={{display:"flex",alignItems:"baseline",gap:4,marginBottom:10}}>
                    <span style={{fontSize:"1rem",fontWeight:800,color:"#E23744"}}>{p.price}</span>
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
