import type { Metadata } from "next";
import Link from "next/link";
import BlogProducts from "../../../components/BlogProducts";
export const metadata: Metadata = {
  title: "Caliburn Pod System in Mumbai — Which One to Buy? | TheVapesInMumbai.com",
  description: "Complete guide to all Caliburn pod systems available in Mumbai. Prices, specs and which Caliburn is right for you. Fast delivery across Mumbai.",
  alternates: { canonical: "https://thevapesinmumbai.com/blog/caliburn-pod-system-mumbai" },
};
const WA = "https://wa.me/916282878843?text=Hi%2C%20I%20want%20to%20order%20a%20Caliburn";
const PRODUCTS = [
  {name:"Caliburn A2",price:"₹4,800",battery:"520mAh",power:"15W",best:"Beginners"},
  {name:"Caliburn G3 Lite",price:"₹3,899",battery:"900mAh",power:"25W",best:"Budget pick"},
  {name:"Caliburn G3 Pro",price:"₹6,800",battery:"1000mAh",power:"35W",best:"Advanced users"},
  {name:"Caliburn G3 Pro KOKO",price:"₹6,399",battery:"1250mAh",power:"35W",best:"KOKO design lovers"},
  {name:"Caliburn G4",price:"₹7,200",battery:"1500mAh",power:"40W",best:"Power users"},
  {name:"Caliburn G4 Pro",price:"₹7,199",battery:"1800mAh",power:"40W",best:"Premium performance"},
  {name:"Caliburn G5 Lite",price:"₹4,899",battery:"900mAh",power:"25W",best:"Style + performance"},
  {name:"Caliburn G5 Lite SE",price:"₹8,499",battery:"900mAh",power:"25W",best:"Special edition"},
  {name:"Caliburn GK2",price:"₹4,800",battery:"690mAh",power:"18W",best:"Compact KOKO design"},
  {name:"Caliburn Xpod",price:"₹5,400",battery:"1000mAh",power:"35W",best:"Colour display"},
];
export default function CaliburnPage() {
  return (
    <article>
      <section style={{background:"var(--black)",padding:"60px 0 40px"}}>
        <div className="container" style={{maxWidth:800}}>
          <p className="section-label">Products</p>
          <h1 style={{color:"#fff"}}>Caliburn Pod System in Mumbai — Which One to Buy?</h1>
          <p style={{color:"rgba(255,255,255,0.6)",marginTop:16}}>Full breakdown of all Caliburn pod systems with prices, specs and recommendations.</p>
          <div style={{marginTop:20,fontSize:"0.8rem",color:"rgba(255,255,255,0.4)"}}>Updated May 2026 · 7 min read</div>
        </div>
      </section>
      <section className="section">
        <div className="container" style={{maxWidth:800}}>
          <p style={{fontSize:"1.05rem",color:"var(--gray)",marginBottom:32}}>Caliburn by Uwell is the most trusted pod system brand in Mumbai. Known for exceptional flavour, reliability, and build quality, Caliburn devices are the preferred choice for vapers who want a reusable pod system.</p>
          <h2 style={{marginBottom:24}}>All Caliburn Models Available in Mumbai</h2>
          <div style={{overflowX:"auto",marginBottom:40}}>
            <table style={{width:"100%",borderCollapse:"collapse",fontSize:"0.9rem"}}>
              <thead><tr style={{background:"var(--black)",color:"#fff"}}>
                <th style={{padding:"12px 16px",textAlign:"left"}}>Model</th>
                <th style={{padding:"12px 16px",textAlign:"left"}}>Price</th>
                <th style={{padding:"12px 16px",textAlign:"left"}}>Battery</th>
                <th style={{padding:"12px 16px",textAlign:"left"}}>Power</th>
                <th style={{padding:"12px 16px",textAlign:"left"}}>Best For</th>
              </tr></thead>
              <tbody>
                {PRODUCTS.map((p,i) => (
                  <tr key={p.name} style={{background:i%2===0?"#fff":"var(--off-white)",borderBottom:"1px solid var(--border)"}}>
                    <td style={{padding:"12px 16px",fontWeight:600}}>{p.name}</td>
                    <td style={{padding:"12px 16px",fontWeight:700,color:"var(--red)"}}>{p.price}</td>
                    <td style={{padding:"12px 16px",color:"var(--gray)"}}>{p.battery}</td>
                    <td style={{padding:"12px 16px",color:"var(--gray)"}}>{p.power}</td>
                    <td style={{padding:"12px 16px",color:"var(--gray)",fontSize:"0.85rem"}}>{p.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h2 style={{marginBottom:16}}>Which Caliburn Should You Buy?</h2>
          <div style={{display:"flex",flexDirection:"column",gap:12,marginBottom:40}}>
            {[{who:"Complete beginner",rec:"Caliburn A2 (₹4,800) — Simple, reliable, perfect introduction to pod systems."},
              {who:"Best value",rec:"Caliburn G3 Lite (₹3,899) — Most affordable option with great performance."},
              {who:"Best overall",rec:"Caliburn G3 Pro (₹6,800) — OLED display, 35W, Pro-FOCS technology. Worth every rupee."},
              {who:"Want KOKO compact design",rec:"Caliburn GK2 (₹4,800) — Bold design, reliable, great for on-the-go use."},
              {who:"Power user",rec:"Caliburn G4 Pro (₹7,199) — Highest wattage and battery capacity in the range."},
            ].map(r => (
              <div key={r.who} style={{background:"var(--off-white)",borderRadius:10,padding:20}}>
                <div style={{fontWeight:700,marginBottom:4}}>👤 {r.who}</div>
                <div style={{color:"var(--gray)",fontSize:"0.9rem"}}>{r.rec}</div>
              </div>
            ))}
          </div>
          <div style={{background:"var(--black)",borderRadius:12,padding:32,textAlign:"center"}}>
            <h3 style={{color:"#fff",marginBottom:8}}>Order Caliburn in Mumbai</h3>
            <p style={{color:"rgba(255,255,255,0.6)",marginBottom:24,fontSize:"0.9rem"}}>All Caliburn models available. 45-60 min delivery across Mumbai.</p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">Order Caliburn Now →</a>
          </div>
        </div>
      </section>
    </article>
  );
}