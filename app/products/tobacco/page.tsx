import type { Metadata } from "next";
import Image from "next/image";
import AddToCartButton from "../../../components/AddToCartButton";

export const metadata: Metadata = {
  title: "Rolling Tobacco in Mumbai — Amber Leaf, Drum, Golden Virginia | TheVapesInMumbai.com",
  description: "Buy rolling tobacco in Mumbai. Amber Leaf, Drum, Golden Virginia and more. 45-60 min delivery across Mumbai. 100% original products.",
  alternates: { canonical: "https://thevapesinmumbai.com/products/tobacco" },
};

const WA = "https://wa.me/916282878843?text=Hi%20TheVapesInMumbai%2C%20I%20want%20to%20order%20a%20vape%20in%20Mumbai";

const products = [
  { name: "Amber Leaf Rolling Tobacco", specs: "50g pouch", price: "₹1,299", mrp: "₹1,499", badge: "POPULAR", img: "amber-leaf.webp" },
  { name: "Drum Bright Blue", specs: "50g pouch", price: "₹1,299", mrp: "₹1,499", badge: "SMOOTH", img: "drum-blue.webp" },
  { name: "Golden Virginia", specs: "50g pouch", price: "₹1,299", mrp: "₹1,499", badge: "PREMIUM", img: "golden-virginia.webp" },
  { name: "Natural American Spirit", specs: "50g pouch", price: "₹1,299", mrp: "₹1,499", badge: "ORGANIC", img: "american-spirit.webp" },
];

export default function Page() {
  return (
    <>
      <section style={{position:"relative",overflow:"hidden",minHeight:220}}>
        <Image src="/tobacco-banner.jpg" alt="Rolling Tobacco in Mumbai" fill style={{objectFit:"contain",objectPosition:"center",background:"#FFFBEB"}} priority sizes="100vw" />
        <div style={{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(13,13,13,0.92) 0%, rgba(13,13,13,0.4) 60%, rgba(13,13,13,0) 100%)"}} />
        <div style={{position:"relative",zIndex:1,padding:"48px 0 24px"}}>
          <div className="container">
            <a href="/" style={{color:"rgba(255,255,255,0.6)",fontSize:"0.85rem",textDecoration:"none"}}>← Back to Home</a>
            <h1 style={{color:"#fff",marginTop:12}}>Rolling Tobacco in Mumbai</h1>
            <p style={{color:"rgba(255,255,255,0.7)",marginTop:8,maxWidth:560}}>45-60 minute delivery across Mumbai. 100% original products.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div style={{background:"#FFFBEB",border:"1px solid #FDE68A",borderRadius:12,padding:16,marginBottom:32,fontSize:"0.85rem",color:"#92400E"}}>
            Warning: Tobacco products are for adults 18+ only.
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:16}}>
            {products.map((p) => (
              <div key={p.name} style={{background:"#fff",border:"1px solid #E5E7EB",borderRadius:16,overflow:"hidden",boxShadow:"0 2px 12px rgba(0,0,0,0.06)"}}>
                <div style={{background:"#F9F9F9",position:"relative",aspectRatio:"1",overflow:"hidden"}}>
                  <span style={{position:"absolute",top:8,left:8,zIndex:1,background:"#D97706",color:"#fff",fontSize:"0.6rem",fontWeight:700,padding:"3px 7px",borderRadius:100}}>{p.badge}</span>
                  <Image src={"/products/" + p.img} alt={p.name + " Mumbai"} fill style={{objectFit:"contain",padding:"8px"}} sizes="50vw" />
                </div>
                <div style={{padding:12}}>
                  <div style={{fontSize:"0.82rem",fontWeight:700,color:"#0D0D0D",marginBottom:2,lineHeight:1.3}}>{p.name}</div>
                  <div style={{fontSize:"0.7rem",color:"#6B7280",marginBottom:6}}>{p.specs}</div>
                  <div style={{display:"flex",alignItems:"baseline",gap:4,marginBottom:10}}>
                    <span style={{fontSize:"1rem",fontWeight:800,color:"#D97706"}}>{p.price}</span>
                    <span style={{fontSize:"0.7rem",color:"#9CA3AF",textDecoration:"line-through"}}>{p.mrp}</span>
                  </div>
                  <AddToCartButton productId="amber-leaf" productName="Amber Leaf Rolling Tobacco" price={1299} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "ItemList", "name": "Tobacco in Mumbai", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@type": "Product", "name": "Amber Leaf Rolling Tobacco", "description": "Amber Leaf rolling tobacco in Mumbai.", "image": "https://thevapesinmumbai.com/products/amber-leaf.webp", "brand": {"@type": "Brand", "name": "Amber Leaf"}, "offers": {"@type": "Offer", "price": "1299", "priceCurrency": "INR", "availability": "https://schema.org/InStock", "shippingDetails": {"@type": "OfferShippingDetails", "shippingRate": {"@type": "MonetaryAmount", "value": "0", "currency": "INR"}, "shippingDestination": {"@type": "DefinedRegion", "addressCountry": "IN"}, "deliveryTime": {"@type": "ShippingDeliveryTime", "handlingTime": {"@type": "QuantitativeValue", "minValue": 0, "maxValue": 1, "unitCode": "HUR"}, "transitTime": {"@type": "QuantitativeValue", "minValue": 0, "maxValue": 1, "unitCode": "HUR"}}}, "hasMerchantReturnPolicy": {"@type": "MerchantReturnPolicy", "applicableCountry": "IN", "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow", "merchantReturnDays": 2, "returnMethod": "https://schema.org/ReturnByMail", "returnFees": "https://schema.org/FreeReturn"}, "url": "https://thevapesinmumbai.com/products/tobacco", "seller": {"@type": "Organization", "name": "TheVapesInMumbai.com"}}}}, {"@type": "ListItem", "position": 2, "item": {"@type": "Product", "name": "Golden Virginia", "description": "Golden Virginia rolling tobacco in Mumbai.", "image": "https://thevapesinmumbai.com/products/golden-virginia.webp", "brand": {"@type": "Brand", "name": "Golden Virginia"}, "offers": {"@type": "Offer", "price": "1299", "priceCurrency": "INR", "availability": "https://schema.org/InStock", "shippingDetails": {"@type": "OfferShippingDetails", "shippingRate": {"@type": "MonetaryAmount", "value": "0", "currency": "INR"}, "shippingDestination": {"@type": "DefinedRegion", "addressCountry": "IN"}, "deliveryTime": {"@type": "ShippingDeliveryTime", "handlingTime": {"@type": "QuantitativeValue", "minValue": 0, "maxValue": 1, "unitCode": "HUR"}, "transitTime": {"@type": "QuantitativeValue", "minValue": 0, "maxValue": 1, "unitCode": "HUR"}}}, "hasMerchantReturnPolicy": {"@type": "MerchantReturnPolicy", "applicableCountry": "IN", "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow", "merchantReturnDays": 2, "returnMethod": "https://schema.org/ReturnByMail", "returnFees": "https://schema.org/FreeReturn"}, "url": "https://thevapesinmumbai.com/products/tobacco", "seller": {"@type": "Organization", "name": "TheVapesInMumbai.com"}}}}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thevapesinmumbai.com"}, {"@type": "ListItem", "position": 2, "name": "Products", "item": "https://thevapesinmumbai.com/#categories"}, {"@type": "ListItem", "position": 3, "name": "Tobacco", "item": "https://thevapesinmumbai.com/products/tobacco"}]}` }} />
    </>
  );
}
