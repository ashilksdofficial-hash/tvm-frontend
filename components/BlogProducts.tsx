import Image from "next/image";
import Link from "next/link";

const FEATURED = [
  { name: "Elfbar Raya D1", puffs: "13,000 Puffs", price: "₹2,199", img: "/products/raya-d1.webp", slug: "disposables" },
  { name: "Caliburn G3 Pro", puffs: "900mAh · 25W", price: "₹5,999", img: "/products/caliburn-g3-pro.webp", slug: "pod-systems" },
  { name: "Lost Mary MT35000", puffs: "35,000 Puffs", price: "₹2,999", img: "/products/lost-mary-mt35000.webp", slug: "disposables" },
  { name: "ZYN Cool Mint", puffs: "Nicotine Pouch", price: "₹999", img: "/products/zyn-velo.webp", slug: "nicotine-pouches" },
];

const WA = "https://wa.me/916282878843?text=Hi%20TheVapesInMumbai%2C%20I%20want%20to%20order%20a%20vape%20in%20Mumbai";

export default function BlogProducts() {
  return (
    <div style={{ background: "#F9FAFB", borderRadius: 16, padding: "20px 16px", marginBottom: 40 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <div style={{ fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "#E23744" }}>Featured Products</div>
        <Link href="/" style={{ fontSize: "0.75rem", fontWeight: 700, color: "#E23744", textDecoration: "none" }}>Browse All →</Link>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 10 }}>
        {FEATURED.map(p => (
          <div key={p.name} style={{ background: "#fff", borderRadius: 12, overflow: "hidden", border: "1px solid #E5E7EB", boxShadow: "0 1px 6px rgba(0,0,0,0.05)" }}>
            <div style={{ position: "relative", aspectRatio: "1", background: "#F9F9F9" }}>
              <Image src={p.img} alt={p.name} fill style={{ objectFit: "contain", padding: 8 }} sizes="50vw" />
            </div>
            <div style={{ padding: "10px 10px 12px" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#0D0D0D", lineHeight: 1.3, marginBottom: 2 }}>{p.name}</div>
              <div style={{ fontSize: "0.65rem", color: "#6B7280", marginBottom: 6 }}>{p.puffs}</div>
              <div style={{ fontSize: "0.9rem", fontWeight: 800, color: "#E23744", marginBottom: 8 }}>{p.price}</div>
              <a href={`${WA.replace("a%20vape", encodeURIComponent(p.name))}`} target="_blank" rel="noopener noreferrer" style={{ display: "block", background: "#E23744", color: "#fff", textAlign: "center", padding: "7px", borderRadius: 8, fontWeight: 700, fontSize: "0.72rem", textDecoration: "none" }}>
                🛒 Order Now
              </a>
            </div>
          </div>
        ))}
      </div>
      <Link href="/" style={{ display: "block", marginTop: 14, background: "#0D0D0D", color: "#fff", textAlign: "center", padding: "12px", borderRadius: 10, fontWeight: 700, fontSize: "0.85rem", textDecoration: "none" }}>
        Browse All Products →
      </Link>
    </div>
  );
}
