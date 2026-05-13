"use client";
import { useState } from "react";

const DELIVERY_ZONES: Record<string, { area: string; time: string }> = {
  "560029": { area: "BTM Layout", time: "25-35 min" },
  "560034": { area: "Koramangala", time: "20-30 min" },
  "560095": { area: "Koramangala", time: "20-30 min" },
  "560068": { area: "HSR Layout", time: "25-35 min" },
  "560102": { area: "HSR Layout", time: "25-35 min" },
  "560038": { area: "Indiranagar", time: "25-35 min" },
  "560008": { area: "Indiranagar", time: "25-35 min" },
  "560066": { area: "Whitefield", time: "35-45 min" },
  "560048": { area: "Whitefield", time: "35-45 min" },
  "560100": { area: "Electronic City", time: "35-45 min" },
  "560105": { area: "Electronic City", time: "35-45 min" },
  "560037": { area: "Marathahalli", time: "30-40 min" },
  "560103": { area: "Marathahalli", time: "30-40 min" },
  "560024": { area: "Hebbal", time: "30-40 min" },
  "560032": { area: "Hebbal", time: "30-40 min" },
  "560041": { area: "Jayanagar", time: "25-35 min" },
  "560011": { area: "Jayanagar", time: "25-35 min" },
  "560078": { area: "JP Nagar", time: "25-35 min" },
  "560076": { area: "JP Nagar", time: "25-35 min" },
  "560064": { area: "Yelahanka", time: "35-45 min" },
  "560106": { area: "Yelahanka", time: "35-45 min" },
  "560010": { area: "Rajajinagar", time: "30-40 min" },
  "560021": { area: "Rajajinagar", time: "30-40 min" },
  "560001": { area: "MG Road", time: "20-30 min" },
  "560025": { area: "MG Road", time: "20-30 min" },
  "560003": { area: "Shivajinagar", time: "25-35 min" },
  "560020": { area: "Banashankari", time: "30-40 min" },
  "560050": { area: "Banashankari", time: "30-40 min" },
  "560085": { area: "Sarjapur", time: "35-45 min" },
  "560035": { area: "Malleshwaram", time: "30-40 min" },
  "560043": { area: "Bellandur", time: "30-40 min" },
  "560016": { area: "Basavanagudi", time: "25-35 min" },
  "560004": { area: "Basavanagudi", time: "25-35 min" },
  "560092": { area: "Hoodi", time: "35-45 min" },
  "560045": { area: "Vijayanagar", time: "30-40 min" },
  "560040": { area: "Vijayanagar", time: "30-40 min" },
};

const WA = "https://wa.me/916282878843?text=Hi%2C%20I%20want%20to%20order%20a%20vape";

// Bangalore zones with approximate SVG coordinates
const MAP_ZONES = [
  { name: "Yelahanka", cx: 155, cy: 60 },
  { name: "Hebbal", cx: 160, cy: 90 },
  { name: "Rajajinagar", cx: 110, cy: 115 },
  { name: "Malleshwaram", cx: 135, cy: 120 },
  { name: "Shivajinagar", cx: 170, cy: 130 },
  { name: "MG Road", cx: 185, cy: 145 },
  { name: "Indiranagar", cx: 215, cy: 140 },
  { name: "Vijayanagar", cx: 105, cy: 150 },
  { name: "Whitefield", cx: 255, cy: 155 },
  { name: "Hoodi", cx: 245, cy: 135 },
  { name: "Koramangala", cx: 195, cy: 175 },
  { name: "Marathahalli", cx: 240, cy: 170 },
  { name: "BTM Layout", cx: 175, cy: 200 },
  { name: "HSR Layout", cx: 200, cy: 210 },
  { name: "Jayanagar", cx: 155, cy: 195 },
  { name: "Basavanagudi", cx: 145, cy: 215 },
  { name: "Banashankari", cx: 130, cy: 230 },
  { name: "JP Nagar", cx: 148, cy: 240 },
  { name: "Bellandur", cx: 230, cy: 210 },
  { name: "Sarjapur", cx: 250, cy: 235 },
  { name: "Electronic City", cx: 190, cy: 265 },
];

export default function DeliverySection() {
  const [pincode, setPincode] = useState("");
  const [result, setResult] = useState<null | "yes" | "no">(null);
  const [matchedArea, setMatchedArea] = useState("");
  const [time, setTime] = useState("");

  function check() {
    const trimmed = pincode.trim();
    if (trimmed.length !== 6) return;
    const match = DELIVERY_ZONES[trimmed];
    if (match) {
      setMatchedArea(match.area);
      setTime(match.time);
      setResult("yes");
    } else {
      setResult("no");
      setMatchedArea("");
    }
  }

  return (
    <div>
      {/* Pincode checker — TOP */}
      <div style={{ background: "#fff", border: "1.5px solid #E5E7EB", borderRadius: 14, padding: "18px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", marginBottom: 24 }}>
        <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#0D0D0D", marginBottom: 10 }}>📍 Check if we deliver to you</div>
        <div style={{ display: "flex", gap: 8 }}>
          <input
            type="tel"
            inputMode="numeric"
            placeholder="Enter your pincode"
            value={pincode}
            onChange={e => { setPincode(e.target.value.replace(/\D/g, "").slice(0, 6)); setResult(null); }}
            onKeyDown={e => e.key === "Enter" && check()}
            style={{ flex: 1, padding: "12px 14px", borderRadius: 10, border: "1.5px solid #E5E7EB", fontSize: "1rem", fontFamily: "inherit", outline: "none", color: "#0D0D0D" }}
          />
          <button onClick={check} style={{ background: "#E23744", color: "#fff", border: "none", borderRadius: 10, padding: "12px 20px", fontWeight: 700, fontSize: "0.9rem", cursor: "pointer", fontFamily: "inherit" }}>
            Check
          </button>
        </div>

        {result === "yes" && (
          <div style={{ marginTop: 12, background: "#ECFDF5", border: "1px solid #6EE7B7", borderRadius: 10, padding: "14px 16px" }}>
            <div style={{ fontWeight: 700, color: "#059669", fontSize: "0.92rem", marginBottom: 4 }}>✅ Yes! We deliver to {matchedArea}</div>
            <div style={{ color: "#065F46", fontSize: "0.8rem", marginBottom: 10 }}>Estimated delivery: <strong>{time}</strong></div>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "#25D366", color: "#fff", padding: "8px 16px", borderRadius: 8, fontWeight: 700, fontSize: "0.8rem", textDecoration: "none" }}>Order Now on WhatsApp →</a>
          </div>
        )}
        {result === "no" && (
          <div style={{ marginTop: 12, background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: 10, padding: "14px 16px" }}>
            <div style={{ fontWeight: 700, color: "#E23744", fontSize: "0.92rem", marginBottom: 4 }}>❌ Outside our current zone</div>
            <div style={{ color: "#7F1D1D", fontSize: "0.8rem", marginBottom: 10 }}>We&apos;re expanding fast! WhatsApp us anyway — we&apos;ll try our best.</div>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "#E23744", color: "#fff", padding: "8px 16px", borderRadius: 8, fontWeight: 700, fontSize: "0.8rem", textDecoration: "none" }}>Ask Us Anyway →</a>
          </div>
        )}
      </div>

      {/* Glowing SVG Map */}
      <div style={{ background: "#0D0D0D", borderRadius: 16, padding: "20px 16px", overflow: "hidden", position: "relative" }}>
        <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12, textAlign: "center" }}>
          Bangalore Delivery Coverage
        </div>
        <svg viewBox="0 0 360 320" width="100%" style={{ display: "block" }} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="glow-center" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#E23744" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#E23744" stopOpacity="0" />
            </radialGradient>
            <filter id="blur-glow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="dot-glow">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Background glow */}
          <ellipse cx="185" cy="165" rx="160" ry="140" fill="url(#glow-center)" />

          {/* Connection lines between nearby zones */}
          {[
            [155,60, 160,90], [160,90, 135,120], [160,90, 170,130],
            [135,120, 110,150], [170,130, 185,145], [185,145, 215,140],
            [215,140, 245,135], [245,135, 255,155], [255,155, 240,170],
            [240,170, 215,140], [185,145, 195,175], [195,175, 200,210],
            [195,175, 175,200], [175,200, 155,195], [155,195, 145,215],
            [145,215, 130,230], [130,230, 148,240], [200,210, 230,210],
            [230,210, 250,235], [200,210, 190,265], [190,265, 250,235],
          ].map(([x1,y1,x2,y2], i) => (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="#E23744" strokeOpacity="0.15" strokeWidth="1" />
          ))}

          {/* Zone dots + labels */}
          {MAP_ZONES.map(z => {
            const isMatch = result === "yes" && matchedArea === z.name;
            return (
              <g key={z.name}>
                {/* Outer glow ring for matched */}
                {isMatch && (
                  <circle cx={z.cx} cy={z.cy} r="14" fill="#E23744" fillOpacity="0.2" filter="url(#blur-glow)" />
                )}
                {/* Dot */}
                <circle
                  cx={z.cx} cy={z.cy} r={isMatch ? 6 : 4}
                  fill={isMatch ? "#E23744" : "#E23744"}
                  fillOpacity={isMatch ? 1 : 0.7}
                  filter={isMatch ? "url(#dot-glow)" : undefined}
                />
                {/* Pulse ring */}
                <circle
                  cx={z.cx} cy={z.cy} r={isMatch ? 10 : 7}
                  fill="none"
                  stroke="#E23744"
                  strokeOpacity={isMatch ? 0.5 : 0.2}
                  strokeWidth="1"
                />
                {/* Label */}
                <text
                  x={z.cx} y={z.cy + 16}
                  textAnchor="middle"
                  fontSize={isMatch ? "7.5" : "6.5"}
                  fontWeight={isMatch ? "700" : "500"}
                  fill={isMatch ? "#fff" : "rgba(255,255,255,0.55)"}
                  fontFamily="Inter, sans-serif"
                >
                  {z.name}
                </text>
              </g>
            );
          })}

          {/* Center label */}
          <text x="185" y="310" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.2)" fontFamily="Inter, sans-serif">
            thevapesinbangalore.in · 20+ delivery zones
          </text>
        </svg>
      </div>
    </div>
  );
}
