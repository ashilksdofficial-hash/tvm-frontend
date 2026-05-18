import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Return & Exchange Policy | TheVapesInMumbai.com",
  description: "Our return and exchange policy for vape products. 48-hour window with video proof required. 100% original products guaranteed.",
  alternates: { canonical: "https://thevapesinmumbai.com/return-policy" },
};

const WA = "https://wa.me/916282878843?text=Hi%2C%20I%20want%20to%20raise%20a%20return%20or%20exchange%20request";

export default function Page() {
  return (
    <div>
      <div style={{background:"#0D0D0D",padding:"48px 20px 32px"}}>
        <a href="/" style={{color:"rgba(255,255,255,0.5)",fontSize:"0.82rem",textDecoration:"none"}}>← Back to Home</a>
        <h1 style={{color:"#fff",marginTop:12}}>Return & Exchange Policy</h1>
        <p style={{color:"rgba(255,255,255,0.6)",marginTop:10,maxWidth:560,fontSize:"0.95rem"}}>
          We stand behind every product we deliver. Here is our fair and transparent return policy.
        </p>
      </div>

      <div style={{padding:"40px 20px",maxWidth:640,margin:"0 auto"}}>

        <div style={{background:"#FEF2F2",border:"1px solid #FECACA",borderRadius:12,padding:20,marginBottom:24}}>
          <div style={{fontWeight:700,color:"#991B1B",fontSize:"1rem",marginBottom:8}}>📹 Video Proof Required</div>
          <p style={{color:"#7F1D1D",fontSize:"0.88rem",lineHeight:1.7,margin:0}}>
            Before opening your package, you must record a clear unboxing video showing the sealed package, our delivery label, and the full unboxing process. Claims without video proof cannot be processed.
          </p>
        </div>

        <div style={{display:"flex",flexDirection:"column",gap:16,marginBottom:32}}>

          <div style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:12,padding:20}}>
            <div style={{fontWeight:700,fontSize:"0.95rem",marginBottom:8,color:"#0D0D0D"}}>⏱ 48-Hour Claim Window</div>
            <p style={{color:"#6B7280",fontSize:"0.85rem",lineHeight:1.7,margin:0}}>
              All return and exchange requests must be raised within 48 hours of delivery. Requests raised after 48 hours will not be entertained under any circumstances.
            </p>
          </div>

          <div style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:12,padding:20}}>
            <div style={{fontWeight:700,fontSize:"0.95rem",marginBottom:8,color:"#0D0D0D"}}>✅ Valid Reasons for Exchange</div>
            <ul style={{color:"#6B7280",fontSize:"0.85rem",lineHeight:1.9,margin:0,paddingLeft:18}}>
              <li>Wrong product delivered</li>
              <li>Damaged or defective product received</li>
              <li>Tampered or unsealed packaging on delivery</li>
              <li>Missing items from your order</li>
            </ul>
          </div>

          <div style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:12,padding:20}}>
            <div style={{fontWeight:700,fontSize:"0.95rem",marginBottom:8,color:"#0D0D0D"}}>❌ Non-Returnable Conditions</div>
            <ul style={{color:"#6B7280",fontSize:"0.85rem",lineHeight:1.9,margin:0,paddingLeft:18}}>
              <li>Opened or used products</li>
              <li>Change of mind after delivery</li>
              <li>Claims without unboxing video proof</li>
              <li>Requests raised after 48 hours</li>
              <li>Products damaged by the customer</li>
            </ul>
          </div>

          <div style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:12,padding:20}}>
            <div style={{fontWeight:700,fontSize:"0.95rem",marginBottom:8,color:"#0D0D0D"}}>📦 Exchange Process</div>
            <ol style={{color:"#6B7280",fontSize:"0.85rem",lineHeight:1.9,margin:0,paddingLeft:18}}>
              <li>Record unboxing video before opening package</li>
              <li>Contact us on WhatsApp within 48 hours</li>
              <li>Share the unboxing video and order details</li>
              <li>Our team will review and respond within 2 hours</li>
              <li>If approved, exchange will be delivered same day</li>
            </ol>
          </div>

          <div style={{background:"#F0FDF4",border:"1px solid #BBF7D0",borderRadius:12,padding:20}}>
            <div style={{fontWeight:700,fontSize:"0.95rem",marginBottom:8,color:"#065F46"}}>💯 Our Guarantee</div>
            <p style={{color:"#065F46",fontSize:"0.85rem",lineHeight:1.7,margin:0}}>
              Every product we deliver is 100% original, sourced directly from authorised distributors with sealed packaging. We offer video call confirmation before dispatch so you can verify your product before we send it.
            </p>
          </div>

        </div>

        <div style={{background:"#0D0D0D",borderRadius:14,padding:28,textAlign:"center"}}>
          <h3 style={{color:"#fff",marginBottom:8}}>Have an Issue?</h3>
          <p style={{color:"rgba(255,255,255,0.6)",fontSize:"0.88rem",marginBottom:20}}>
            Contact us on WhatsApp within 48 hours with your unboxing video and order details.
          </p>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            style={{display:"inline-flex",alignItems:"center",gap:8,background:"#25D366",color:"#fff",padding:"12px 28px",borderRadius:10,fontWeight:700,fontSize:"0.88rem",textDecoration:"none"}}>
            💬 Raise a Request on WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
}
