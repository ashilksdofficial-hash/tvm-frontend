import type { Metadata } from "next";
import Link from "next/link";
import BlogProducts from "../../../components/BlogProducts";
export const metadata: Metadata = {
  title: "ZYN Nicotine Pouches in Mumbai — Price, Flavours & Delivery | TheVapesInMumbai.com",
  description: "Complete guide to ZYN nicotine pouches in Mumbai. Flavours, strengths, prices and where to get ZYN delivered fast across Mumbai.",
  alternates: { canonical: "https://thevapesinmumbai.com/blog/zyn-nicotine-pouches-mumbai" },
};
const WA = "https://wa.me/916282878843?text=Hi%20TheVapesInMumbai%2C%20I%20want%20to%20order%20ZYN";
export default function ZynPage() {
  return (
    <>
    <article>
      <section style={{background:"var(--black)",padding:"60px 0 40px"}}>
        <div className="container" style={{maxWidth:800}}>
          <p className="section-label">Products</p>
          <h1 style={{color:"#fff"}}>ZYN Nicotine Pouches in Mumbai — Price & Delivery</h1>
          <p style={{color:"rgba(255,255,255,0.6)",marginTop:16}}>Everything about ZYN pouches in Mumbai — flavours, strengths, prices and delivery.</p>
          <div style={{marginTop:20,fontSize:"0.8rem",color:"rgba(255,255,255,0.4)"}}>Updated May 2026 · 5 min read</div>
        </div>
      </section>
      <section className="section">
        <div className="container" style={{maxWidth:800}}>
          <p style={{fontSize:"1.05rem",color:"var(--gray)",marginBottom:32}}>ZYN is the world's leading nicotine pouch brand. Smoke-free, vapour-free, and completely discreet — ZYN pouches are the preferred choice for people who want nicotine without vaping. Available for fast delivery across Mumbai.</p>
          <h2 style={{marginBottom:24}}>ZYN Products Available in Mumbai</h2>
          <div style={{display:"flex",flexDirection:"column",gap:16,marginBottom:40}}>
            {[{name:"ZYN Cool Mint",strength:"3mg / 6mg",price:"₹1,299",desc:"Most popular flavour. Clean, refreshing mint with a smooth nicotine delivery. Perfect for beginners."},
              {name:"ZYN Icy Blackcurrant",strength:"6mg",price:"₹1,299",desc:"Bold blackcurrant with a cool finish. Popular with vapers switching to pouches."},
              {name:"Velo Freezing Peppermint",strength:"10mg",price:"₹1,299",desc:"Stronger alternative to ZYN. Intense peppermint with higher nicotine strength."},
            ].map(p => (
              <div key={p.name} style={{background:"#fff",border:"1px solid var(--border)",borderRadius:12,padding:24}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8,flexWrap:"wrap",gap:8}}>
                  <h3>{p.name}</h3>
                  <span style={{fontWeight:800,color:"var(--red)",fontSize:"1.1rem"}}>{p.price}</span>
                </div>
                <div style={{display:"flex",gap:8,marginBottom:12}}>
                  <span style={{background:"#EDE9FE",color:"#7C3AED",padding:"3px 10px",borderRadius:100,fontSize:"0.78rem",fontWeight:700}}>{p.strength}</span>
                </div>
                <p style={{color:"var(--gray)",fontSize:"0.9rem"}}>{p.desc}</p>
              </div>
            ))}
          </div>
          <h2 style={{marginBottom:16}}>Why Choose ZYN?</h2>
          <div style={{display:"flex",flexDirection:"column",gap:12,marginBottom:40}}>
            {["Completely smoke-free and vapour-free","Use anywhere — offices, restaurants, flights","No smell, completely discreet","Each pouch lasts 45-60 minutes","Available in multiple strengths for all nicotine levels","Safer alternative to smoking for nicotine delivery"].map((b,i) => (
              <div key={i} style={{display:"flex",gap:12,alignItems:"center",background:"var(--off-white)",borderRadius:10,padding:16}}>
                <span style={{color:"#059669",fontWeight:700}}>✓</span>
                <span style={{color:"var(--gray)",fontSize:"0.9rem"}}>{b}</span>
              </div>
            ))}
          </div>
          <div style={{background:"var(--black)",borderRadius:12,padding:32,textAlign:"center"}}>
            <h3 style={{color:"#fff",marginBottom:8}}>Order ZYN in Mumbai</h3>
            <p style={{color:"rgba(255,255,255,0.6)",marginBottom:24,fontSize:"0.9rem"}}>Fast delivery across Mumbai. All flavours and strengths available.</p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">Order ZYN Now →</a>
          </div>
        </div>
      </section>
    </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "ZYN Nicotine Pouches in Mumbai — Price, Flavours & Delivery | TheVapesInMumbai.com", "author": {"@type": "Organization", "name": "TheVapesInMumbai.com"}, "publisher": {"@type": "Organization", "name": "TheVapesInMumbai.com", "url": "https://thevapesinmumbai.com"}, "url": "https://thevapesinmumbai.com/blog/zyn-nicotine-pouches-mumbai" }) }} />
    </>
  );
}