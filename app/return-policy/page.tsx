import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Return & Exchange Policy | TheVapesInMumbai.com",
  description: "Our return and exchange policy for vape products. 48-hour window with video proof required. Call support confirmation needed.",
  alternates: { canonical: "https://thevapesinmumbai.com/return-policy" },
};

const WA = "https://wa.me/916282878843?text=Hi%20TheVapesInMumbai%2C%20I%20want%20to%20raise%20a%20return%20request";

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
          <div style={{fontWeight:700,color:"#991B1B",fontSize:"1rem",marginBottom:8}}>⏱ 48-Hour Claim Window</div>
          <p style={{color:"#7F1D1D",fontSize:"0.88rem",lineHeight:1.7,margin:0}}>
            All return and exchange requests must be raised within 48 hours of delivery. This window can only be extended by our support team — not by the customer. Requests raised after 48 hours will not be entertained under any circumstances.
          </p>
        </div>

        <div style={{display:"flex",flexDirection:"column",gap:16,marginBottom:32}}>

          <div style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:12,padding:20}}>
            <div style={{fontWeight:700,fontSize:"0.95rem",marginBottom:12,color:"#0D0D0D"}}>💧 E-Liquids & Nic Salts</div>
            <div style={{background:"#FFF7ED",border:"1px solid #FED7AA",borderRadius:8,padding:12,marginBottom:12}}>
              <div style={{fontWeight:700,fontSize:"0.82rem",color:"#92400E",marginBottom:4}}>📹 Video Proof Required</div>
              <p style={{color:"#78350F",fontSize:"0.82rem",lineHeight:1.6,margin:0}}>
                If you experience any taste issues or smoke/vapour quality issues with an e-liquid or nic salt product, you must record a clear video showing the issue while using the product. Send this video to us on WhatsApp within 48 hours.
              </p>
            </div>
            <ul style={{color:"#6B7280",fontSize:"0.85rem",lineHeight:1.9,margin:0,paddingLeft:18}}>
              <li>Record a video clearly showing the taste or smoke issue</li>
              <li>Send the video on WhatsApp within 48 hours of delivery</li>
              <li>Our support team will review and schedule a call with you</li>
              <li>After call confirmation, our team will decide if a replacement is needed</li>
              <li>Decision of our support team is final</li>
            </ul>
          </div>

          <div style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:12,padding:20}}>
            <div style={{fontWeight:700,fontSize:"0.95rem",marginBottom:12,color:"#0D0D0D"}}>🔋 Pod Devices & Hardware</div>
            <div style={{background:"#FEF2F2",border:"1px solid #FECACA",borderRadius:8,padding:12,marginBottom:12}}>
              <div style={{fontWeight:700,fontSize:"0.82rem",color:"#991B1B",marginBottom:4}}>📹 Unboxing Video Mandatory</div>
              <p style={{color:"#7F1D1D",fontSize:"0.82rem",lineHeight:1.6,margin:0}}>
                Before opening the package, filling liquid, or taking the first puff — you MUST record a clear unboxing video. This video is required for any hardware claim to be considered valid.
              </p>
            </div>
            <ul style={{color:"#6B7280",fontSize:"0.85rem",lineHeight:1.9,margin:0,paddingLeft:18}}>
              <li>Record unboxing video BEFORE opening the package</li>
              <li>Video must show the sealed package, our label, and full unboxing</li>
              <li>Fill liquid and record first use on video if device has issues</li>
              <li>Send video to us on WhatsApp within 48 hours</li>
              <li>Our support team will review and contact you for a call</li>
              <li>Replacement decided after call confirmation by support team</li>
            </ul>
            <div style={{background:"#F9FAFB",border:"1px solid #E5E7EB",borderRadius:8,padding:12,marginTop:12}}>
              <div style={{fontWeight:700,fontSize:"0.82rem",color:"#374151",marginBottom:4}}>❌ Not Eligible for Replacement</div>
              <ul style={{color:"#6B7280",fontSize:"0.82rem",lineHeight:1.8,margin:0,paddingLeft:16}}>
                <li>Water damage of any kind</li>
                <li>Physical damage caused by the customer</li>
                <li>Damage not related to transportation</li>
                <li>Claims without unboxing video proof</li>
                <li>Requests raised after 48 hours</li>
              </ul>
            </div>
          </div>

          <div style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:12,padding:20}}>
            <div style={{fontWeight:700,fontSize:"0.95rem",marginBottom:8,color:"#0D0D0D"}}>🚬 Disposable Vapes</div>
            <ul style={{color:"#6B7280",fontSize:"0.85rem",lineHeight:1.9,margin:0,paddingLeft:18}}>
              <li>Record unboxing video before opening sealed package</li>
              <li>Issues must be reported within 48 hours with video proof</li>
              <li>Support team will review and confirm replacement after call</li>
              <li>Used or opened products without video proof not eligible</li>
            </ul>
          </div>

          <div style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:12,padding:20}}>
            <div style={{fontWeight:700,fontSize:"0.95rem",marginBottom:8,color:"#0D0D0D"}}>⏰ Time Extension Policy</div>
            <p style={{color:"#6B7280",fontSize:"0.85rem",lineHeight:1.7,margin:0}}>
              The 48-hour claim window is strictly enforced. Extensions can only be granted by our support team under exceptional circumstances — for example, if you are travelling or in an emergency. Customers cannot self-extend the window. Contact support immediately if you need an extension before the 48 hours expire.
            </p>
          </div>

          <div style={{background:"#F0FDF4",border:"1px solid #BBF7D0",borderRadius:12,padding:20}}>
            <div style={{fontWeight:700,fontSize:"0.95rem",marginBottom:8,color:"#065F46"}}>💯 Our Guarantee</div>
            <p style={{color:"#065F46",fontSize:"0.85rem",lineHeight:1.7,margin:0}}>
              Every product we deliver is 100% original, sourced directly from authorised distributors with factory-sealed packaging. We offer video call confirmation before dispatch so you can verify your product before we send it out.
            </p>
          </div>

        </div>

        <div style={{background:"#0D0D0D",borderRadius:14,padding:28,textAlign:"center"}}>
          <h3 style={{color:"#fff",marginBottom:8}}>Have an Issue?</h3>
          <p style={{color:"rgba(255,255,255,0.6)",fontSize:"0.88rem",marginBottom:20}}>
            Contact us on WhatsApp within 48 hours with your video proof. Our support team will guide you through the process.
          </p>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            style={{display:"inline-flex",alignItems:"center",gap:8,background:"#25D366",color:"#fff",padding:"12px 28px",borderRadius:10,fontWeight:700,fontSize:"0.88rem",textDecoration:"none"}}>
            💬 Contact Support on WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
}
