import type { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
  title: "E-Liquids & Nic Salts in Mumbai | TheVapesInMumbai.in",
  description: "Buy e-liquids and nic salts in Mumbai. 45-60 min delivery.",
  alternates: { canonical: "https://thevapesinmumbai.com/products/eliquids" },
};
const WA = "https://wa.me/916282878843?text=Hi%2C%20I%20want%20to%20order%20a%20vape";
export default function Page() {
  return (
    <>
      <section style={{position:"relative",overflow:"hidden",minHeight:220}}>
        <Image src="/eliquids-banner.jpg" alt="E-Liquids & Nic Salts in Mumbai" fill style={{objectFit:"contain",objectPosition:"center",background:"#F9F9F9"}} priority sizes="100vw" />
        <div style={{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(13,13,13,0.7) 0%, rgba(13,13,13,0.15) 50%, rgba(13,13,13,0) 100%)"}} />
        <div style={{position:"relative",zIndex:1,padding:"48px 0 24px"}}>
          <div className="container">
            <a href="/" style={{color:"#fff",fontSize:"0.85rem",textDecoration:"none",background:"rgba(0,0,0,0.35)",padding:"5px 12px",borderRadius:100,backdropFilter:"blur(4px)"}}>← All Categories</a>
            <h1 style={{position:"absolute",width:1,height:1,overflow:"hidden",opacity:0,pointerEvents:"none",marginTop:12}}>E-Liquids & Nic Salts in Mumbai</h1>
            <p style={{position:"absolute",width:1,height:1,overflow:"hidden",opacity:0,pointerEvents:"none",marginTop:8,maxWidth:560}}>45-60 minute delivery across Mumbai. 100% original products.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div style={{background:"#F5F3FF",border:"1px solid #DDD6FE",borderRadius:12,padding:16,marginBottom:32,fontSize:"0.85rem",color:"#6D28D9"}}>
            Note: Use with pod systems like Caliburn. Not sure which? Message us.
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:16}}>
              <div key="Elfliq Nic Salts" style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:16,overflow:"hidden",boxShadow:"0 2px 12px rgba(0,0,0,0.06)"}}>
                <div style={{background:"#F9F9F9",position:"relative",aspectRatio:"1",overflow:"hidden"}}>
                  <span style={{position:"absolute",top:8,left:8,zIndex:1,background:"#7C3AED",color:"#fff",fontSize:"0.6rem",fontWeight:700,padding:"3px 7px",borderRadius:100}}>"POPULAR"</span>
                  <Image src="/products/elfliq-nic-salt.webp" alt="Elfliq Nic Salts" fill style={{objectFit:"contain",padding:"8px"}} sizes="50vw" />
                </div>
                <div style={{padding:12}}>
                  <div style={{fontSize:"0.82rem",fontWeight:700,color:"#0D0D0D",marginBottom:2,lineHeight:1.3}}>Elfliq Nic Salts</div>
                  <div style={{fontSize:'0.7rem',color:'#6B7280',marginBottom:6}}>20mg</div>
                  <div style={{display:"flex",alignItems:"baseline",gap:4,marginBottom:10}}>
                    <span style={{fontSize:"1rem",fontWeight:800,color:"#7C3AED"}}>₹1,799</span>
                    <span style={{fontSize:"0.7rem",color:"#9CA3AF",textDecoration:"line-through"}}>₹2,248</span>
                  </div>
                  <a href="https://wa.me/916282878843?text=Hi%2C%20I%20want%20to%20order%20a%20vape" target="_blank" rel="noopener noreferrer" style={{display:"block",background:"#7C3AED",color:"#fff",textAlign:"center",padding:"9px",borderRadius:8,fontWeight:700,fontSize:"0.78rem",textDecoration:"none"}}>Order Now</a>
                </div>
              </div>
              <div key="Pod Salt Core Nic Salt" style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:16,overflow:"hidden",boxShadow:"0 2px 12px rgba(0,0,0,0.06)"}}>
                <div style={{background:"#F9F9F9",position:"relative",aspectRatio:"1",overflow:"hidden"}}>
                  <span style={{position:"absolute",top:8,left:8,zIndex:1,background:"#7C3AED",color:"#fff",fontSize:"0.6rem",fontWeight:700,padding:"3px 7px",borderRadius:100}}>"SMOOTH"</span>
                  <Image src="/products/pod-salt-core.webp" alt="Pod Salt Core Nic Salt" fill style={{objectFit:"contain",padding:"8px"}} sizes="50vw" />
                </div>
                <div style={{padding:12}}>
                  <div style={{fontSize:"0.82rem",fontWeight:700,color:"#0D0D0D",marginBottom:2,lineHeight:1.3}}>Pod Salt Core Nic Salt</div>
                  <div style={{fontSize:'0.7rem',color:'#6B7280',marginBottom:6}}>20mg/50mg</div>
                  <div style={{display:"flex",alignItems:"baseline",gap:4,marginBottom:10}}>
                    <span style={{fontSize:"1rem",fontWeight:800,color:"#7C3AED"}}>₹1,799</span>
                    <span style={{fontSize:"0.7rem",color:"#9CA3AF",textDecoration:"line-through"}}>₹2,248</span>
                  </div>
                  <a href="https://wa.me/916282878843?text=Hi%2C%20I%20want%20to%20order%20a%20vape" target="_blank" rel="noopener noreferrer" style={{display:"block",background:"#7C3AED",color:"#fff",textAlign:"center",padding:"9px",borderRadius:8,fontWeight:700,fontSize:"0.78rem",textDecoration:"none"}}>Order Now</a>
                </div>
              </div>
              <div key="Pod Salt Hit The Spot" style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:16,overflow:"hidden",boxShadow:"0 2px 12px rgba(0,0,0,0.06)"}}>
                <div style={{background:"#F9F9F9",position:"relative",aspectRatio:"1",overflow:"hidden"}}>
                  <span style={{position:"absolute",top:8,left:8,zIndex:1,background:"#7C3AED",color:"#fff",fontSize:"0.6rem",fontWeight:700,padding:"3px 7px",borderRadius:100}}>"PREMIUM"</span>
                  <Image src="/products/pod-salt-disposable.webp" alt="Pod Salt Hit The Spot" fill style={{objectFit:"contain",padding:"8px"}} sizes="50vw" />
                </div>
                <div style={{padding:12}}>
                  <div style={{fontSize:"0.82rem",fontWeight:700,color:"#0D0D0D",marginBottom:2,lineHeight:1.3}}>Pod Salt Hit The Spot</div>
                  <div style={{fontSize:'0.7rem',color:'#6B7280',marginBottom:6}}>20mg/50mg</div>
                  <div style={{display:"flex",alignItems:"baseline",gap:4,marginBottom:10}}>
                    <span style={{fontSize:"1rem",fontWeight:800,color:"#7C3AED"}}>₹999</span>
                    <span style={{fontSize:"0.7rem",color:"#9CA3AF",textDecoration:"line-through"}}>₹1,248</span>
                  </div>
                  <a href="https://wa.me/916282878843?text=Hi%2C%20I%20want%20to%20order%20a%20vape" target="_blank" rel="noopener noreferrer" style={{display:"block",background:"#7C3AED",color:"#fff",textAlign:"center",padding:"9px",borderRadius:8,fontWeight:700,fontSize:"0.78rem",textDecoration:"none"}}>Order Now</a>
                </div>
              </div>
          </div>
        </div>
      </section>
    
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "ItemList", "name": "Eliquids in Mumbai", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@type": "Product", "name": "Elfliq Nic Salt", "description": "Elfliq nicotine salt e-liquid in Mumbai.", "offers": {"@type": "Offer", "price": "1299", "priceCurrency": "INR", "availability": "https://schema.org/InStock", "seller": {"@type": "Organization", "name": "TheVapesInMumbai.in"}}}}, {"@type": "ListItem", "position": 2, "item": {"@type": "Product", "name": "Pod Salt Core", "description": "Pod Salt Core nic salt in Mumbai.", "offers": {"@type": "Offer", "price": "999", "priceCurrency": "INR", "availability": "https://schema.org/InStock", "seller": {"@type": "Organization", "name": "TheVapesInMumbai.in"}}}}]}` }} />
    
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "ItemList", "name": "Eliquids in Mumbai", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@type": "Product", "name": "Elfliq Nic Salt", "description": "Elfliq nicotine salt e-liquid in Mumbai.", "image": "https://thevapesinmumbai.com/products/elfliq-nic-salt.webp", "brand": {"@type": "Brand", "name": "Elfbar"}, "offers": {"@type": "Offer", "price": "1299", "priceCurrency": "INR", "availability": "https://schema.org/InStock", "url": "https://thevapesinmumbai.com/products/eliquids", "seller": {"@type": "Organization", "name": "TheVapesInMumbai.in"}}}}, {"@type": "ListItem", "position": 2, "item": {"@type": "Product", "name": "Pod Salt Core", "description": "Pod Salt Core nic salt in Mumbai.", "image": "https://thevapesinmumbai.com/products/pod-salt-core.webp", "brand": {"@type": "Brand", "name": "Pod Salt"}, "offers": {"@type": "Offer", "price": "999", "priceCurrency": "INR", "availability": "https://schema.org/InStock", "url": "https://thevapesinmumbai.com/products/eliquids", "seller": {"@type": "Organization", "name": "TheVapesInMumbai.in"}}}}]}` }} />
    </>
  );
}