import type { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Rolling Tobacco in Bangalore | TheVapesInBangalore.in",
  description: "Buy rolling tobacco in Bangalore. 30-45 min delivery.",
  alternates: { canonical: "https://thevapesinbangalore.in/products/tobacco" },
};
const WA = "https://wa.me/916282878843?text=Hi%2C%20I%20want%20to%20order%20a%20vape";
export default function Page() {
  return (
    <>
      <section style={{position:"relative",overflow:"hidden",minHeight:220}}>
        <Image src="/tobacco-banner.jpg" alt="Rolling Tobacco in Bangalore" fill style={{objectFit:"contain",objectPosition:"center",background:"#FFFBEB"}} priority sizes="100vw" />
        <div style={{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(13,13,13,0.7) 0%, rgba(13,13,13,0.15) 50%, rgba(13,13,13,0) 100%)"}} />
        <div style={{position:"relative",zIndex:1,padding:"48px 0 24px"}}>
          <div className="container">
            <a href="/" style={{color:"#fff",fontSize:"0.85rem",textDecoration:"none",background:"rgba(0,0,0,0.35)",padding:"5px 12px",borderRadius:100,backdropFilter:"blur(4px)"}}>← All Categories</a>
            <h1 style={{position:"absolute",width:1,height:1,overflow:"hidden",opacity:0,pointerEvents:"none",marginTop:12}}>Rolling Tobacco in Bangalore</h1>
            <p style={{position:"absolute",width:1,height:1,overflow:"hidden",opacity:0,pointerEvents:"none",marginTop:8,maxWidth:560}}>30-45 minute delivery across Bangalore. 100% original products.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div style={{background:"#FFFBEB",border:"1px solid #FDE68A",borderRadius:12,padding:16,marginBottom:32,fontSize:"0.85rem",color:"#92400E"}}>
            Warning: Tobacco products are for adults 18+ only.
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:16}}>
              <div key="Amber Leaf Rolling Tobacco" style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:16,overflow:"hidden",boxShadow:"0 2px 12px rgba(0,0,0,0.06)"}}>
                <div style={{background:"#F9F9F9",position:"relative",aspectRatio:"1",overflow:"hidden"}}>
                  <span style={{position:"absolute",top:8,left:8,zIndex:1,background:"#D97706",color:"#fff",fontSize:"0.6rem",fontWeight:700,padding:"3px 7px",borderRadius:100}}>"POPULAR"</span>
                  <Image src="/products/amber-leaf.webp" alt="Amber Leaf Rolling Tobacco" fill style={{objectFit:"contain",padding:"8px"}} sizes="50vw" />
                </div>
                <div style={{padding:12}}>
                  <div style={{fontSize:"0.82rem",fontWeight:700,color:"#0D0D0D",marginBottom:2,lineHeight:1.3}}>Amber Leaf Rolling Tobacco</div>
                  <div style={{fontSize:'0.7rem',color:'#6B7280',marginBottom:6}}>50g</div>
                  <div style={{display:"flex",alignItems:"baseline",gap:4,marginBottom:10}}>
                    <span style={{fontSize:"1rem",fontWeight:800,color:"#D97706"}}>₹1,199</span>
                    <span style={{fontSize:"0.7rem",color:"#9CA3AF",textDecoration:"line-through"}}>₹1,498</span>
                  </div>
                  <a href="https://wa.me/916282878843?text=Hi%2C%20I%20want%20to%20order%20a%20vape" target="_blank" rel="noopener noreferrer" style={{display:"block",background:"#D97706",color:"#fff",textAlign:"center",padding:"9px",borderRadius:8,fontWeight:700,fontSize:"0.78rem",textDecoration:"none"}}>Order Now</a>
                </div>
              </div>
              <div key="Drum Bright Blue Tobacco" style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:16,overflow:"hidden",boxShadow:"0 2px 12px rgba(0,0,0,0.06)"}}>
                <div style={{background:"#F9F9F9",position:"relative",aspectRatio:"1",overflow:"hidden"}}>
                  <span style={{position:"absolute",top:8,left:8,zIndex:1,background:"#D97706",color:"#fff",fontSize:"0.6rem",fontWeight:700,padding:"3px 7px",borderRadius:100}}>"SMOOTH"</span>
                  <Image src="/products/drum-blue.webp" alt="Drum Bright Blue Tobacco" fill style={{objectFit:"contain",padding:"8px"}} sizes="50vw" />
                </div>
                <div style={{padding:12}}>
                  <div style={{fontSize:"0.82rem",fontWeight:700,color:"#0D0D0D",marginBottom:2,lineHeight:1.3}}>Drum Bright Blue Tobacco</div>
                  <div style={{fontSize:'0.7rem',color:'#6B7280',marginBottom:6}}>50g</div>
                  <div style={{display:"flex",alignItems:"baseline",gap:4,marginBottom:10}}>
                    <span style={{fontSize:"1rem",fontWeight:800,color:"#D97706"}}>₹1,199</span>
                    <span style={{fontSize:"0.7rem",color:"#9CA3AF",textDecoration:"line-through"}}>₹1,498</span>
                  </div>
                  <a href="https://wa.me/916282878843?text=Hi%2C%20I%20want%20to%20order%20a%20vape" target="_blank" rel="noopener noreferrer" style={{display:"block",background:"#D97706",color:"#fff",textAlign:"center",padding:"9px",borderRadius:8,fontWeight:700,fontSize:"0.78rem",textDecoration:"none"}}>Order Now</a>
                </div>
              </div>
              <div key="Golden Virginia Tobacco" style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:16,overflow:"hidden",boxShadow:"0 2px 12px rgba(0,0,0,0.06)"}}>
                <div style={{background:"#F9F9F9",position:"relative",aspectRatio:"1",overflow:"hidden"}}>
                  <span style={{position:"absolute",top:8,left:8,zIndex:1,background:"#D97706",color:"#fff",fontSize:"0.6rem",fontWeight:700,padding:"3px 7px",borderRadius:100}}>"CLASSIC"</span>
                  <Image src="/products/golden-virginia.webp" alt="Golden Virginia Tobacco" fill style={{objectFit:"contain",padding:"8px"}} sizes="50vw" />
                </div>
                <div style={{padding:12}}>
                  <div style={{fontSize:"0.82rem",fontWeight:700,color:"#0D0D0D",marginBottom:2,lineHeight:1.3}}>Golden Virginia Tobacco</div>
                  <div style={{fontSize:'0.7rem',color:'#6B7280',marginBottom:6}}>50g</div>
                  <div style={{display:"flex",alignItems:"baseline",gap:4,marginBottom:10}}>
                    <span style={{fontSize:"1rem",fontWeight:800,color:"#D97706"}}>₹1,199</span>
                    <span style={{fontSize:"0.7rem",color:"#9CA3AF",textDecoration:"line-through"}}>₹1,498</span>
                  </div>
                  <a href="https://wa.me/916282878843?text=Hi%2C%20I%20want%20to%20order%20a%20vape" target="_blank" rel="noopener noreferrer" style={{display:"block",background:"#D97706",color:"#fff",textAlign:"center",padding:"9px",borderRadius:8,fontWeight:700,fontSize:"0.78rem",textDecoration:"none"}}>Order Now</a>
                </div>
              </div>
              <div key="Natural American Spirit" style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:16,overflow:"hidden",boxShadow:"0 2px 12px rgba(0,0,0,0.06)"}}>
                <div style={{background:"#F9F9F9",position:"relative",aspectRatio:"1",overflow:"hidden"}}>
                  <span style={{position:"absolute",top:8,left:8,zIndex:1,background:"#D97706",color:"#fff",fontSize:"0.6rem",fontWeight:700,padding:"3px 7px",borderRadius:100}}>"NATURAL"</span>
                  <Image src="/products/american-spirit.webp" alt="Natural American Spirit" fill style={{objectFit:"contain",padding:"8px"}} sizes="50vw" />
                </div>
                <div style={{padding:12}}>
                  <div style={{fontSize:"0.82rem",fontWeight:700,color:"#0D0D0D",marginBottom:2,lineHeight:1.3}}>Natural American Spirit</div>
                  
                  <div style={{display:"flex",alignItems:"baseline",gap:4,marginBottom:10}}>
                    <span style={{fontSize:"1rem",fontWeight:800,color:"#D97706"}}>₹1,199</span>
                    <span style={{fontSize:"0.7rem",color:"#9CA3AF",textDecoration:"line-through"}}>₹1,498</span>
                  </div>
                  <a href="https://wa.me/916282878843?text=Hi%2C%20I%20want%20to%20order%20a%20vape" target="_blank" rel="noopener noreferrer" style={{display:"block",background:"#D97706",color:"#fff",textAlign:"center",padding:"9px",borderRadius:8,fontWeight:700,fontSize:"0.78rem",textDecoration:"none"}}>Order Now</a>
                </div>
              </div>
          </div>
        </div>
      </section>
    
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "ItemList", "name": "Tobacco in Bangalore", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@type": "Product", "name": "Amber Leaf Rolling Tobacco", "description": "Amber Leaf rolling tobacco in Bangalore.", "offers": {"@type": "Offer", "price": "1800", "priceCurrency": "INR", "availability": "https://schema.org/InStock", "seller": {"@type": "Organization", "name": "TheVapesInBangalore.in"}}}}, {"@type": "ListItem", "position": 2, "item": {"@type": "Product", "name": "Golden Virginia", "description": "Golden Virginia rolling tobacco in Bangalore.", "offers": {"@type": "Offer", "price": "2200", "priceCurrency": "INR", "availability": "https://schema.org/InStock", "seller": {"@type": "Organization", "name": "TheVapesInBangalore.in"}}}}]}` }} />
    
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "ItemList", "name": "Tobacco in Bangalore", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@type": "Product", "name": "Amber Leaf Rolling Tobacco", "description": "Amber Leaf rolling tobacco in Bangalore.", "image": "https://thevapesinbangalore.in/products/amber-leaf.webp", "brand": {"@type": "Brand", "name": "Amber Leaf"}, "offers": {"@type": "Offer", "price": "1800", "priceCurrency": "INR", "availability": "https://schema.org/InStock", "url": "https://thevapesinbangalore.in/products/tobacco", "seller": {"@type": "Organization", "name": "TheVapesInBangalore.in"}}}}, {"@type": "ListItem", "position": 2, "item": {"@type": "Product", "name": "Golden Virginia", "description": "Golden Virginia rolling tobacco in Bangalore.", "image": "https://thevapesinbangalore.in/products/golden-virginia.webp", "brand": {"@type": "Brand", "name": "Golden Virginia"}, "offers": {"@type": "Offer", "price": "2200", "priceCurrency": "INR", "availability": "https://schema.org/InStock", "url": "https://thevapesinbangalore.in/products/tobacco", "seller": {"@type": "Organization", "name": "TheVapesInBangalore.in"}}}}]}` }} />
    </>
  );
}