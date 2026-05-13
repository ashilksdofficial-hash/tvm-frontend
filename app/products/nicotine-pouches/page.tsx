import type { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Nicotine Pouches in Mumbai — ZYN, Velo | TheVapesInMumbai.in",
  description: "Buy ZYN and Velo nicotine pouches in Mumbai. 45-60 min delivery.",
  alternates: { canonical: "https://thevapesinmumbai.com/products/nicotine-pouches" },
};
const WA = "https://wa.me/916282878843?text=Hi%2C%20I%20want%20to%20order%20a%20vape";
export default function Page() {
  return (
    <>
      <section style={{position:"relative",overflow:"hidden",minHeight:220}}>
        <Image src="/nicotine-pouches-banner.jpg" alt="Nicotine Pouches in Mumbai" fill style={{objectFit:"contain",objectPosition:"center",background:"#F9F9F9"}} priority sizes="100vw" />
        <div style={{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(13,13,13,0.7) 0%, rgba(13,13,13,0.15) 50%, rgba(13,13,13,0) 100%)"}} />
        <div style={{position:"relative",zIndex:1,padding:"48px 0 24px"}}>
          <div className="container">
            <a href="/" style={{color:"#fff",fontSize:"0.85rem",textDecoration:"none",background:"rgba(0,0,0,0.35)",padding:"5px 12px",borderRadius:100,backdropFilter:"blur(4px)"}}>← All Categories</a>
            <h1 style={{position:"absolute",width:1,height:1,overflow:"hidden",opacity:0,pointerEvents:"none",marginTop:12}}>Nicotine Pouches in Mumbai</h1>
            <p style={{position:"absolute",width:1,height:1,overflow:"hidden",opacity:0,pointerEvents:"none",marginTop:8,maxWidth:560}}>45-60 minute delivery across Mumbai. 100% original products.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div style={{background:"#ECFDF5",border:"1px solid #A7F3D0",borderRadius:12,padding:16,marginBottom:32,fontSize:"0.85rem",color:"#065F46"}}>
            Smoke-free. Use anywhere. No smell, totally discreet.
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:16}}>
              <div key="ZYN Cool Mint" style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:16,overflow:"hidden",boxShadow:"0 2px 12px rgba(0,0,0,0.06)"}}>
                <div style={{background:"#F9F9F9",position:"relative",aspectRatio:"1",overflow:"hidden"}}>
                  <span style={{position:"absolute",top:8,left:8,zIndex:1,background:"#059669",color:"#fff",fontSize:"0.6rem",fontWeight:700,padding:"3px 7px",borderRadius:100}}>"POPULAR"</span>
                  <Image src="/products/zyn-velo.webp" alt="ZYN Cool Mint" fill style={{objectFit:"contain",padding:"8px"}} sizes="50vw" />
                </div>
                <div style={{padding:12}}>
                  <div style={{fontSize:"0.82rem",fontWeight:700,color:"#0D0D0D",marginBottom:2,lineHeight:1.3}}>ZYN Cool Mint</div>
                  <div style={{fontSize:'0.7rem',color:'#6B7280',marginBottom:6}}>3mg/6mg</div>
                  <div style={{display:"flex",alignItems:"baseline",gap:4,marginBottom:10}}>
                    <span style={{fontSize:"1rem",fontWeight:800,color:"#059669"}}>₹999</span>
                    <span style={{fontSize:"0.7rem",color:"#9CA3AF",textDecoration:"line-through"}}>₹1,248</span>
                  </div>
                  <a href="https://wa.me/916282878843?text=Hi%2C%20I%20want%20to%20be%20notified%20when%20TheVapesInMumbai.com%20launches%21%20Please%20add%20me%20to%20the%20list." target="_blank" rel="noopener noreferrer" style={{display:"block",background:"#0D0D0D",color:"#fff",textAlign:"center",padding:"9px",borderRadius:8,fontWeight:700,fontSize:"0.78rem",textDecoration:"none",border:"1px solid rgba(255,255,255,0.15)"}}>🔔 Notify Me</a>
                </div>
              </div>
              <div key="Velo Freezing Peppermint" style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:16,overflow:"hidden",boxShadow:"0 2px 12px rgba(0,0,0,0.06)"}}>
                <div style={{background:"#F9F9F9",position:"relative",aspectRatio:"1",overflow:"hidden"}}>
                  <span style={{position:"absolute",top:8,left:8,zIndex:1,background:"#059669",color:"#fff",fontSize:"0.6rem",fontWeight:700,padding:"3px 7px",borderRadius:100}}>"STRONG"</span>
                  <Image src="/products/velo-freezing-peppermint.webp" alt="Velo Freezing Peppermint" fill style={{objectFit:"contain",padding:"8px"}} sizes="50vw" />
                </div>
                <div style={{padding:12}}>
                  <div style={{fontSize:"0.82rem",fontWeight:700,color:"#0D0D0D",marginBottom:2,lineHeight:1.3}}>Velo Freezing Peppermint</div>
                  <div style={{fontSize:'0.7rem',color:'#6B7280',marginBottom:6}}>10mg</div>
                  <div style={{display:"flex",alignItems:"baseline",gap:4,marginBottom:10}}>
                    <span style={{fontSize:"1rem",fontWeight:800,color:"#059669"}}>₹999</span>
                    <span style={{fontSize:"0.7rem",color:"#9CA3AF",textDecoration:"line-through"}}>₹1,248</span>
                  </div>
                  <a href="https://wa.me/916282878843?text=Hi%2C%20I%20want%20to%20be%20notified%20when%20TheVapesInMumbai.com%20launches%21%20Please%20add%20me%20to%20the%20list." target="_blank" rel="noopener noreferrer" style={{display:"block",background:"#0D0D0D",color:"#fff",textAlign:"center",padding:"9px",borderRadius:8,fontWeight:700,fontSize:"0.78rem",textDecoration:"none",border:"1px solid rgba(255,255,255,0.15)"}}>🔔 Notify Me</a>
                </div>
              </div>
          </div>
        </div>
      </section>
    
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "ItemList", "name": "Nicotine Pouches in Mumbai", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@type": "Product", "name": "ZYN Cool Mint", "description": "ZYN Cool Mint nicotine pouches in Mumbai.", "offers": {"@type": "Offer", "price": "499", "priceCurrency": "INR", "availability": "https://schema.org/InStock", "seller": {"@type": "Organization", "name": "TheVapesInMumbai.in"}}}}, {"@type": "ListItem", "position": 2, "item": {"@type": "Product", "name": "Velo Freezing Peppermint", "description": "Velo nicotine pouches in Mumbai.", "offers": {"@type": "Offer", "price": "449", "priceCurrency": "INR", "availability": "https://schema.org/InStock", "seller": {"@type": "Organization", "name": "TheVapesInMumbai.in"}}}}]}` }} />
    
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "ItemList", "name": "Nicotine Pouches in Mumbai", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@type": "Product", "name": "ZYN Cool Mint", "description": "ZYN Cool Mint nicotine pouches in Mumbai.", "image": "https://thevapesinmumbai.com/products/zyn-velo.webp", "brand": {"@type": "Brand", "name": "ZYN"}, "offers": {"@type": "Offer", "price": "499", "priceCurrency": "INR", "availability": "https://schema.org/InStock", "url": "https://thevapesinmumbai.com/products/nicotine-pouches", "seller": {"@type": "Organization", "name": "TheVapesInMumbai.in"}}}}, {"@type": "ListItem", "position": 2, "item": {"@type": "Product", "name": "Velo Freezing Peppermint", "description": "Velo nicotine pouches in Mumbai.", "image": "https://thevapesinmumbai.com/products/velo-freezing-peppermint.webp", "brand": {"@type": "Brand", "name": "Velo"}, "offers": {"@type": "Offer", "price": "449", "priceCurrency": "INR", "availability": "https://schema.org/InStock", "url": "https://thevapesinmumbai.com/products/nicotine-pouches", "seller": {"@type": "Organization", "name": "TheVapesInMumbai.in"}}}}]}` }} />
    </>
  );
}