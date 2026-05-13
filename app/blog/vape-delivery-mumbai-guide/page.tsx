import type { Metadata } from "next";
import Link from "next/link";
import BlogProducts from "../../../components/BlogProducts";
export const metadata: Metadata = {
  title: "Vape Delivery in Mumbai — Complete Guide 2026 | TheVapesInMumbai.in",
  description: "Everything about vape delivery in Mumbai. Areas covered, delivery times, how to order, and what to expect. The complete 2026 guide.",
  alternates: { canonical: "https://thevapesinmumbai.com/blog/vape-delivery-mumbai-guide" },
};
const WA = "https://wa.me/916282878843?text=Hi%2C%20I%20want%20to%20order%20a%20vape";
const AREAS = ["Bandra West","Andheri West","Juhu","Powai","Worli","Lower Parel","Thane West","Borivali West","Malad West","Goregaon West","Kandivali West","Andheri East","Bannerghatta Road","Kharghar Road","Vile Parle","Kadugodi","KR Puram","Dadar","Navi Mumbai","Mysore Road"];
export default function VapeDeliveryGuidePage() {
  return (
    <article>
      <section style={{background:"var(--black)",padding:"60px 0 40px"}}>
        <div className="container" style={{maxWidth:800}}>
          <p className="section-label">Delivery Guide</p>
          <h1 style={{color:"#fff"}}>Vape Delivery in Mumbai — The Complete Guide 2026</h1>
          <p style={{color:"rgba(255,255,255,0.6)",marginTop:16}}>Everything you need to know about ordering vapes for delivery in Mumbai.</p>
          <div style={{marginTop:20,fontSize:"0.8rem",color:"rgba(255,255,255,0.4)"}}>Updated May 2026 · 5 min read</div>
        </div>
      </section>
      <section className="section">
        <div className="container" style={{maxWidth:800}}>
          <h2 style={{marginBottom:16}}>How Vape Delivery Works in Mumbai</h2>
          <div style={{display:"flex",flexDirection:"column",gap:12,marginBottom:40}}>
            {[{step:"1",title:"Browse & Choose",desc:"Browse products on our website or ask us on WhatsApp for recommendations."},
              {step:"2",title:"Order on WhatsApp",desc:"Message us your order. Name, phone, address, product and quantity."},
              {step:"3",title:"Confirm & Pay",desc:"We confirm availability and price. Pay on delivery (COD) or UPI."},
              {step:"4",title:"45-60 Min Delivery",desc:"We dispatch immediately via Porter or Rapido. Track your delivery."},
            ].map(s => (
              <div key={s.step} style={{display:"flex",gap:16,alignItems:"flex-start",background:"var(--off-white)",borderRadius:10,padding:20}}>
                <div style={{width:40,height:40,borderRadius:"50%",background:"var(--red)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:800,flexShrink:0}}>{s.step}</div>
                <div><div style={{fontWeight:700,marginBottom:4}}>{s.title}</div><div style={{color:"var(--gray)",fontSize:"0.9rem"}}>{s.desc}</div></div>
              </div>
            ))}
          </div>
          <h2 style={{marginBottom:16}}>Delivery Areas in Mumbai</h2>
          <div style={{display:"flex",flexWrap:"wrap",gap:10,marginBottom:40}}>
            {AREAS.map(a => <span key={a} style={{background:"#fff",border:"1px solid var(--border)",padding:"8px 16px",borderRadius:100,fontSize:"0.85rem",fontWeight:500}}>📍 {a}</span>)}
          </div>
          <h2 style={{marginBottom:16}}>Delivery FAQ</h2>
          <div style={{display:"flex",flexDirection:"column",gap:12,marginBottom:40}}>
            {[{q:"How long does delivery take?",a:"45-60 minutes for most areas in Mumbai. Some distant areas may take up to 60 minutes."},
              {q:"What are the delivery charges?",a:"Free delivery on orders above ₹2,000. ₹49 delivery charge on smaller orders."},
              {q:"Can I pay cash on delivery?",a:"Yes, we accept COD, UPI (GPay, PhonePe, Paytm) and bank transfer."},
              {q:"What if I am not home?",a:"We will call you before arriving. We can wait up to 10 minutes or reschedule."},
              {q:"Do you deliver late at night?",a:"We deliver from 10am to 10pm daily across Mumbai."},
            ].map(f => (
              <div key={f.q} style={{background:"#fff",border:"1px solid var(--border)",borderRadius:10,padding:20}}>
                <div style={{fontWeight:700,marginBottom:6}}>{f.q}</div>
                <div style={{color:"var(--gray)",fontSize:"0.9rem"}}>{f.a}</div>
              </div>
            ))}
          </div>
          <div style={{background:"var(--black)",borderRadius:12,padding:32,textAlign:"center"}}>
            <h3 style={{color:"#fff",marginBottom:8}}>Ready to Order?</h3>
            <p style={{color:"rgba(255,255,255,0.6)",marginBottom:24,fontSize:"0.9rem"}}>Message us on WhatsApp and get your vape delivered in 45-60 minutes.</p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">Order on WhatsApp →</a>
          </div>
        </div>
      </section>
    </article>
  );
}