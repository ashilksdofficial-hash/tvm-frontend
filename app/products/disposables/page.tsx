import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Disposable Vapes in Mumbai | TheVapesInMumbai.in",
  description: "Buy disposable vapes in Mumbai. Elfbar, Lost Mary, Nasty & more. 45-60 min delivery.",
  alternates: { canonical: "https://thevapesinmumbai.com/products/disposables" },
};

const WA = (name: string) => `https://wa.me/916282878843?text=Hi%2C%20I%20want%20to%20order%20${encodeURIComponent(name)}%20%E2%80%94%20Could%20you%20share%20the%20flavour%20options%3F`;

const products = [
  { name: "Elfbar 600", puffs: "600 Puffs", price: "₹999", mrp: "₹1,248", badge: "BUDGET", img: "elfbar-600.webp", outOfStock: true },
  { name: "Elfbar Raya D1", puffs: "13,000 Puffs", price: "₹2,199", mrp: "₹2,748", badge: "BEST SELLER", img: "raya-d1.webp" },
  { name: "Elfbar Raya D3", puffs: "25,000 Puffs", price: "₹2,799", mrp: "₹3,498", badge: "TOP RATED", img: "raya-d3.webp" },
  { name: "Elfbar D3 Pro", puffs: "25,000 Puffs", price: "₹2,999", mrp: "₹3,748", badge: "PRO", img: "d3-pro.webp" },
  { name: "Elfbar Ice King", puffs: "30,000 Puffs", price: "₹2,999", mrp: "₹3,748", badge: "VALUE", img: "ice-king.webp" },
  { name: "Elfbar BC 10000", puffs: "10,000 Puffs", price: "₹2,199", mrp: "₹2,748", badge: "COMPACT", img: "bc10000.webp", outOfStock: true },
  { name: "Elfbar Raya SOBO", puffs: "20,000 Puffs", price: "₹3,199", mrp: "₹3,998", badge: "PREMIUM", img: "raya-sobo.webp" },
  { name: "Elfbar Trio", puffs: "20,000 Puffs", price: "₹2,999", mrp: "₹3,748", badge: "NEW", img: "elfbar-trio.webp" },
  { name: "Elfbar MoonNight 40K", puffs: "40,000 Puffs", price: "₹2,999", mrp: "₹3,748", badge: "LONGEST", img: "elfbar-moonnight.webp" },
  { name: "Lost Mary MT35000 Turbo", puffs: "35,000 Puffs", price: "₹2,999", mrp: "₹3,748", badge: "HIGH PUFF", img: "lost-mary-mt35000.webp" },
  { name: "Lost Mary MO10000", puffs: "10,000 Puffs", price: "₹2,499", mrp: "₹3,123", badge: "COMPACT", img: "lost-mary-mo10000.webp" },
  { name: "Nasty Bolt WTF 50K", puffs: "50,000 Puffs", price: "₹3,999", mrp: "₹4,998", badge: "50K PUFFS", img: "nasty-bolt.webp" },
  { name: "IGET Astro B18000", puffs: "18,000 Puffs", price: "₹3,999", mrp: "₹4,998", badge: "NEW", img: "iget-astro.webp" },
  { name: "Yuoto Beyonder", puffs: "", price: "₹2,999", mrp: "₹3,748", badge: "BUDGET", img: "yuoto-beyonder.webp" },
];

export default function Page() {
  return (
    <>
      <section style={{position:"relative",overflow:"hidden",minHeight:220}}>
        <Image src="/disposables-banner.jpg" alt="Disposable Vapes in Mumbai" fill style={{objectFit:"contain",objectPosition:"center",background:"#F9F9F9"}} priority sizes="100vw" />
        <div style={{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(13,13,13,0.7) 0%, rgba(13,13,13,0.15) 50%, rgba(13,13,13,0) 100%)"}} />
        <div style={{position:"relative",zIndex:1,padding:"48px 0 24px"}}>
          <div className="container">
            <a href="/" style={{color:"#fff",fontSize:"0.85rem",textDecoration:"none",background:"rgba(0,0,0,0.35)",padding:"5px 12px",borderRadius:100,backdropFilter:"blur(4px)"}}>← All Categories</a>
            <h1 style={{position:"absolute",width:1,height:1,overflow:"hidden",opacity:0,pointerEvents:"none",marginTop:12}}>Disposable Vapes in Mumbai</h1>
            <p style={{position:"absolute",width:1,height:1,overflow:"hidden",opacity:0,pointerEvents:"none",marginTop:8,maxWidth:560}}>45-60 minute delivery across Mumbai. 100% original products.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div style={{background:"#FEF2F2",border:"1px solid #FECACA",borderRadius:12,padding:16,marginBottom:32,fontSize:"0.85rem",color:"#991B1B"}}>
            All prices updated from our store. 100% original products.
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:16}}>
            {products.map((p) => (
              <div key={p.name} style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:16,overflow:"hidden",boxShadow:"0 2px 12px rgba(0,0,0,0.06)",opacity:(p as {outOfStock?: boolean}).outOfStock ? 0.6 : 1}}>
                <div style={{background:"#F9F9F9",position:"relative",aspectRatio:"1",overflow:"hidden"}}>
                  <span style={{position:"absolute",top:8,left:8,zIndex:1,background:"#E23744",color:"#fff",fontSize:"0.6rem",fontWeight:700,padding:"3px 7px",borderRadius:100}}>{p.badge}</span>
                  <Image src={`/products/${p.img}`} alt={p.name} fill style={{objectFit:"contain",padding:"8px"}} sizes="50vw" />
                  {(p as {outOfStock?: boolean}).outOfStock && (
                    <div style={{position:"absolute",inset:0,background:"rgba(0,0,0,0.45)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:2}}>
                      <span style={{background:"#1F2937",color:"#fff",fontSize:"0.7rem",fontWeight:800,padding:"6px 14px",borderRadius:100,letterSpacing:"0.06em",border:"1.5px solid rgba(255,255,255,0.3)"}}>OUT OF STOCK</span>
                    </div>
                  )}
                </div>
                <div style={{padding:12}}>
                  <div style={{fontSize:"0.82rem",fontWeight:700,color:"#0D0D0D",marginBottom:2,lineHeight:1.3}}>{p.name}</div>
                  {p.puffs && <div style={{fontSize:"0.7rem",color:"#6B7280",marginBottom:6}}>{p.puffs}</div>}
                  <div style={{display:"flex",alignItems:"baseline",gap:4,marginBottom:10}}>
                    <span style={{fontSize:"1rem",fontWeight:800,color:"#E23744"}}>{p.price}</span>
                    <span style={{fontSize:"0.7rem",color:"#9CA3AF",textDecoration:"line-through"}}>{p.mrp}</span>
                  </div>
                  {(p as {outOfStock?: boolean}).outOfStock ? (<a href={`https://wa.me/916282878843?text=Hi%2C%20please%20notify%20me%20when%20${encodeURIComponent(p.name)}%20is%20back%20in%20stock%21`} target="_blank" rel="noopener noreferrer" style={{display:"flex",alignItems:"center",justifyContent:"center",gap:5,background:"#F3F4F6",color:"#374151",textAlign:"center",padding:"9px",borderRadius:8,fontWeight:700,fontSize:"0.72rem",textDecoration:"none",border:"1.5px solid #E5E7EB"}}>🔔 Notify Me</a>) : (<a href="https://wa.me/916282878843?text=Hi%2C%20I%20want%20to%20be%20notified%20when%20TheVapesInMumbai.com%20launches%21%20Please%20add%20me%20to%20the%20list." target="_blank" rel="noopener noreferrer" style={{display:"block",background:"#0D0D0D",color:"#fff",textAlign:"center",padding:"9px",borderRadius:8,fontWeight:700,fontSize:"0.78rem",textDecoration:"none",border:"1px solid rgba(255,255,255,0.15)"}}>🔔 Notify Me</a>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "ItemList", "name": "Disposables in Mumbai", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@type": "Product", "name": "Elfbar Raya D1", "description": "13000 puff disposable vape in Mumbai. 45-60 min delivery.", "offers": {"@type": "Offer", "price": "2199", "priceCurrency": "INR", "availability": "https://schema.org/InStock", "seller": {"@type": "Organization", "name": "TheVapesInMumbai.in"}}}}, {"@type": "ListItem", "position": 2, "item": {"@type": "Product", "name": "Elfbar 600", "description": "600 puff disposable vape in Mumbai. Fast delivery.", "offers": {"@type": "Offer", "price": "999", "priceCurrency": "INR", "availability": "https://schema.org/InStock", "seller": {"@type": "Organization", "name": "TheVapesInMumbai.in"}}}}, {"@type": "ListItem", "position": 3, "item": {"@type": "Product", "name": "Lost Mary MT35000 Turbo", "description": "35000 puff disposable vape in Mumbai.", "offers": {"@type": "Offer", "price": "2999", "priceCurrency": "INR", "availability": "https://schema.org/InStock", "seller": {"@type": "Organization", "name": "TheVapesInMumbai.in"}}}}]}` }} />
    
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "ItemList", "name": "Disposables in Mumbai", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@type": "Product", "name": "Elfbar Raya D1", "description": "13000 puff disposable vape in Mumbai. 45-60 min delivery.", "image": "https://thevapesinmumbai.com/products/raya-d1.webp", "brand": {"@type": "Brand", "name": "Elfbar"}, "offers": {"@type": "Offer", "price": "2199", "priceCurrency": "INR", "availability": "https://schema.org/InStock", "url": "https://thevapesinmumbai.com/products/disposables", "seller": {"@type": "Organization", "name": "TheVapesInMumbai.in"}}}}, {"@type": "ListItem", "position": 2, "item": {"@type": "Product", "name": "Elfbar 600", "description": "600 puff disposable vape in Mumbai. Fast delivery.", "image": "https://thevapesinmumbai.com/products/elfbar-600.webp", "brand": {"@type": "Brand", "name": "Elfbar"}, "offers": {"@type": "Offer", "price": "999", "priceCurrency": "INR", "availability": "https://schema.org/InStock", "url": "https://thevapesinmumbai.com/products/disposables", "seller": {"@type": "Organization", "name": "TheVapesInMumbai.in"}}}}, {"@type": "ListItem", "position": 3, "item": {"@type": "Product", "name": "Lost Mary MT35000 Turbo", "description": "35000 puff disposable vape in Mumbai.", "image": "https://thevapesinmumbai.com/products/lost-mary-mt35000.webp", "brand": {"@type": "Brand", "name": "Lost Mary"}, "offers": {"@type": "Offer", "price": "2999", "priceCurrency": "INR", "availability": "https://schema.org/InStock", "url": "https://thevapesinmumbai.com/products/disposables", "seller": {"@type": "Organization", "name": "TheVapesInMumbai.in"}}}}]}` }} />
    </>
  );
}
