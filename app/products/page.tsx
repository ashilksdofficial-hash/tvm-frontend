import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All Vape Products in Mumbai | TheVapesInMumbai.com",
  description: "Browse all vape products available in Mumbai. Disposables, pod systems, e-liquids, nicotine pouches and tobacco. 45-60 min delivery.",
  alternates: { canonical: "https://thevapesinmumbai.com/products" },
};

const CATS = [
  { slug:"disposables", emoji:"💨", name:"Disposable Vapes", count:"15+ products", color:"#E23744", bg:"#FEF2F2" },
  { slug:"pod-systems", emoji:"🔋", name:"Reusable Pod Systems", count:"12+ products", color:"#2563EB", bg:"#EFF6FF" },
  { slug:"eliquids", emoji:"🧪", name:"E-Liquids & Nic Salts", count:"8+ products", color:"#7C3AED", bg:"#F5F3FF" },
  { slug:"nicotine-pouches", emoji:"🌿", name:"Nicotine Pouches", count:"4+ products", color:"#059669", bg:"#ECFDF5" },
  { slug:"tobacco", emoji:"🍃", name:"Rolling Tobacco", count:"5+ products", color:"#D97706", bg:"#FFFBEB" },
];

export default function ProductsPage() {
  return (
    <>
      <section style={{background:"var(--black)",padding:"60px 0 40px"}}>
        <div className="container">
          <p className="section-label">All Products</p>
          <h1 style={{color:"#fff"}}>Shop by Category</h1>
          <p style={{color:"rgba(255,255,255,0.6)",marginTop:12}}>Choose a category to see all products with prices.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div style={{display:"flex",flexDirection:"column",gap:16}}>
            {CATS.map(c => (
              <Link key={c.slug} href={`/products/${c.slug}`} style={{display:"block",textDecoration:"none"}}>
                <div style={{background:"#fff",border:`2px solid ${c.bg}`,borderRadius:16,padding:"20px 24px",display:"flex",alignItems:"center",gap:20}}>
                  <div style={{width:56,height:56,borderRadius:14,background:c.bg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.8rem",flexShrink:0}}>{c.emoji}</div>
                  <div style={{flex:1}}>
                    <div style={{fontWeight:700,fontSize:"1rem",color:"#0D0D0D",marginBottom:2}}>{c.name}</div>
                    <div style={{fontSize:"0.82rem",color:c.color,fontWeight:600}}>{c.count}</div>
                  </div>
                  <div style={{color:c.color,fontWeight:700,fontSize:"1.3rem"}}>{"→"}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
