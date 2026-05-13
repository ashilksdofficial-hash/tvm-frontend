import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vapes in Versova Mumbai - Fast Delivery | TheVapesInMumbai.com",
  description: "Buy vapes in Versova Mumbai. Elfbar, Caliburn, ZYN and more. 47-57 min delivery to Versova (400061). 100% original products.",
  alternates: { canonical: "https://thevapesinmumbai.com/locations/versova" },
};

export default function Page() {
  const WA = "https://wa.me/916282878843?text=Hi%2C%20I%20want%20to%20be%20notified%20when%20TheVapesInMumbai.com%20launches";
  return (
    <div>
      <div style={{background:"#0D0D0D",padding:"48px 20px 32px"}}>
        <a href="/" style={{color:"rgba(255,255,255,0.5)",fontSize:"0.82rem",textDecoration:"none"}}>Back to Home</a>
        <h1 style={{color:"#fff",marginTop:12,fontSize:"2rem",fontFamily:"Inter,sans-serif"}}>
          Vapes in <span style={{color:"#E23744"}}>Versova</span>, Mumbai
        </h1>
        <p style={{color:"rgba(255,255,255,0.6)",marginTop:10,maxWidth:560,fontSize:"0.95rem",fontFamily:"Inter,sans-serif"}}>
          Versova is a beachside neighbourhood popular with media professionals and expats. Fast 47-57 min delivery. 100% original products.
        </p>
        <div style={{display:"flex",gap:10,marginTop:20,flexWrap:"wrap"}}>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            style={{background:"#25D366",color:"#fff",padding:"10px 20px",borderRadius:10,fontWeight:700,fontSize:"0.85rem",textDecoration:"none",fontFamily:"Inter,sans-serif"}}>
            Notify Me at Launch
          </a>
          <span style={{background:"rgba(255,255,255,0.1)",color:"#fff",padding:"10px 16px",borderRadius:10,fontSize:"0.82rem",fontFamily:"Inter,sans-serif"}}>
            47-57 min delivery
          </span>
        </div>
      </div>

      <div style={{padding:"40px 20px"}}>

        <h2 style={{fontSize:"1.1rem",marginBottom:12,fontFamily:"Inter,sans-serif"}}>Areas We Cover in Versova</h2>
        <div style={{display:"flex",flexWrap:"wrap",gap:8,marginBottom:32}}>
          <span style={{background:"#fff",border:"1px solid #E5E7EB",padding:"4px 12px",borderRadius:100,fontSize:"0.75rem",fontWeight:500}}>📍 Versova Beach</span> <span style={{background:"#fff",border:"1px solid #E5E7EB",padding:"4px 12px",borderRadius:100,fontSize:"0.75rem",fontWeight:500}}>📍 Yari Road</span> <span style={{background:"#fff",border:"1px solid #E5E7EB",padding:"4px 12px",borderRadius:100,fontSize:"0.75rem",fontWeight:500}}>📍 Four Bungalows</span> <span style={{background:"#fff",border:"1px solid #E5E7EB",padding:"4px 12px",borderRadius:100,fontSize:"0.75rem",fontWeight:500}}>📍 Gilbert Hill</span>
        </div>

        <h2 style={{fontSize:"1.1rem",marginBottom:16,fontFamily:"Inter,sans-serif"}}>Popular Vapes Delivering to Versova</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:12,marginBottom:32}}>
          <div style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:14,overflow:"hidden"}}><div style={{aspectRatio:"1",background:"#F9F9F9",padding:8}}><img src="/products/raya-d1.webp" alt="Elfbar Raya D1 Versova" style={{width:"100%",height:"100%",objectFit:"contain"}} /></div><div style={{padding:10}}><div style={{fontSize:"0.78rem",fontWeight:700,marginBottom:2}}>Elfbar Raya D1</div><div style={{fontSize:"0.68rem",color:"#6B7280",marginBottom:4}}>13000 Puffs</div><div style={{fontSize:"0.9rem",fontWeight:800,color:"#E23744",marginBottom:8}}>Rs.2399</div><a href={WA} target="_blank" rel="noopener noreferrer" style={{display:"block",background:"#0D0D0D",color:"#fff",textAlign:"center",padding:"8px",borderRadius:8,fontWeight:700,fontSize:"0.72rem",textDecoration:"none"}}>Notify Me</a></div></div> <div style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:14,overflow:"hidden"}}><div style={{aspectRatio:"1",background:"#F9F9F9",padding:8}}><img src="/products/elfbar-moonnight.webp" alt="Elfbar MoonNight 40K Versova" style={{width:"100%",height:"100%",objectFit:"contain"}} /></div><div style={{padding:10}}><div style={{fontSize:"0.78rem",fontWeight:700,marginBottom:2}}>Elfbar MoonNight 40K</div><div style={{fontSize:"0.68rem",color:"#6B7280",marginBottom:4}}>40000 Puffs</div><div style={{fontSize:"0.9rem",fontWeight:800,color:"#E23744",marginBottom:8}}>Rs.3199</div><a href={WA} target="_blank" rel="noopener noreferrer" style={{display:"block",background:"#0D0D0D",color:"#fff",textAlign:"center",padding:"8px",borderRadius:8,fontWeight:700,fontSize:"0.72rem",textDecoration:"none"}}>Notify Me</a></div></div> <div style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:14,overflow:"hidden"}}><div style={{aspectRatio:"1",background:"#F9F9F9",padding:8}}><img src="/products/lost-mary-mt35000.webp" alt="Lost Mary MT35000 Versova" style={{width:"100%",height:"100%",objectFit:"contain"}} /></div><div style={{padding:10}}><div style={{fontSize:"0.78rem",fontWeight:700,marginBottom:2}}>Lost Mary MT35000</div><div style={{fontSize:"0.68rem",color:"#6B7280",marginBottom:4}}>35000 Puffs</div><div style={{fontSize:"0.9rem",fontWeight:800,color:"#E23744",marginBottom:8}}>Rs.3199</div><a href={WA} target="_blank" rel="noopener noreferrer" style={{display:"block",background:"#0D0D0D",color:"#fff",textAlign:"center",padding:"8px",borderRadius:8,fontWeight:700,fontSize:"0.72rem",textDecoration:"none"}}>Notify Me</a></div></div> <div style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:14,overflow:"hidden"}}><div style={{aspectRatio:"1",background:"#F9F9F9",padding:8}}><img src="/products/caliburn-g3-pro.webp" alt="Caliburn G3 Pro Versova" style={{width:"100%",height:"100%",objectFit:"contain"}} /></div><div style={{padding:10}}><div style={{fontSize:"0.78rem",fontWeight:700,marginBottom:2}}>Caliburn G3 Pro</div><div style={{fontSize:"0.68rem",color:"#6B7280",marginBottom:4}}>Pod System</div><div style={{fontSize:"0.9rem",fontWeight:800,color:"#E23744",marginBottom:8}}>Rs.6499</div><a href={WA} target="_blank" rel="noopener noreferrer" style={{display:"block",background:"#0D0D0D",color:"#fff",textAlign:"center",padding:"8px",borderRadius:8,fontWeight:700,fontSize:"0.72rem",textDecoration:"none"}}>Notify Me</a></div></div>
        </div>

        <div style={{background:"#F0FDF4",border:"1px solid #BBF7D0",borderRadius:12,padding:16,marginBottom:32}}>
          <div style={{fontWeight:700,color:"#065F46",marginBottom:4,fontFamily:"Inter,sans-serif"}}>Porter-Powered Delivery to Versova</div>
          <p style={{color:"#065F46",fontSize:"0.85rem",margin:0,fontFamily:"Inter,sans-serif"}}>
            We use Porter delivery partners for fast reliable delivery across Versova. Your order reaches you in 47-57 min with discreet packaging.
          </p>
        </div>

        <h2 style={{fontSize:"1.1rem",marginBottom:16,fontFamily:"Inter,sans-serif"}}>FAQs - Vape Delivery in Versova</h2>
        <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:32}}>
          <div style={{background:"#F9FAFB",border:"1px solid #E5E7EB",borderRadius:10,padding:16}}><div style={{fontWeight:700,fontSize:"0.88rem",marginBottom:6}}>Do you deliver vapes to Versova Mumbai?</div><div style={{color:"#6B7280",fontSize:"0.84rem"}}>Yes! We deliver vapes to Versova (400061) in 47-57 min. 100% original products.</div></div> <div style={{background:"#F9FAFB",border:"1px solid #E5E7EB",borderRadius:10,padding:16}}><div style={{fontWeight:700,fontSize:"0.88rem",marginBottom:6}}>How long does vape delivery take in Versova?</div><div style={{color:"#6B7280",fontSize:"0.84rem"}}>Our estimated delivery time to Versova is 47-57 min via Porter delivery partners.</div></div> <div style={{background:"#F9FAFB",border:"1px solid #E5E7EB",borderRadius:10,padding:16}}><div style={{fontWeight:700,fontSize:"0.88rem",marginBottom:6}}>What vapes are available in Versova?</div><div style={{color:"#6B7280",fontSize:"0.84rem"}}>Elfbar, Lost Mary, Caliburn, ZYN pouches, e-liquids and rolling tobacco all delivered to Versova.</div></div> <div style={{background:"#F9FAFB",border:"1px solid #E5E7EB",borderRadius:10,padding:16}}><div style={{fontWeight:700,fontSize:"0.88rem",marginBottom:6}}>Are the vapes original in Versova?</div><div style={{color:"#6B7280",fontSize:"0.84rem"}}>Yes 100% original sourced from authorised distributors with sealed packaging.</div></div> <div style={{background:"#F9FAFB",border:"1px solid #E5E7EB",borderRadius:10,padding:16}}><div style={{fontWeight:700,fontSize:"0.88rem",marginBottom:6}}>How do I order vapes in Versova?</div><div style={{color:"#6B7280",fontSize:"0.84rem"}}>Click the WhatsApp button send your order and Versova address. We confirm and dispatch in minutes.</div></div>
        </div>

        <div style={{background:"#0D0D0D",borderRadius:14,padding:28,textAlign:"center"}}>
          <h3 style={{color:"#fff",marginBottom:8,fontFamily:"Inter,sans-serif"}}>Launching Soon in Versova</h3>
          <p style={{color:"rgba(255,255,255,0.6)",fontSize:"0.88rem",marginBottom:20,fontFamily:"Inter,sans-serif"}}>
            Join the waitlist and be the first to order when we launch in Versova, Mumbai.
          </p>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            style={{display:"inline-flex",alignItems:"center",gap:8,background:"#25D366",color:"#fff",padding:"12px 28px",borderRadius:10,fontWeight:700,fontSize:"0.88rem",textDecoration:"none",fontFamily:"Inter,sans-serif"}}>
            Join Waitlist for Versova
          </a>
        </div>

      </div>
    </div>
  );
}
