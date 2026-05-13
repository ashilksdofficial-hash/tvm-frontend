"use client";
import { useState } from "react";

const DELIVERY_ZONES: Record<string, { area: string; time: string }> = {
  "400050": { area: "Bandra West", time: "40-50 min" },
  "400051": { area: "Bandra East", time: "40-50 min" },
  "400053": { area: "Andheri West", time: "45-55 min" },
  "400058": { area: "Andheri West", time: "45-55 min" },
  "400059": { area: "Andheri East", time: "45-55 min" },
  "400069": { area: "Andheri East", time: "45-55 min" },
  "400049": { area: "Juhu", time: "40-50 min" },
  "400076": { area: "Powai", time: "50-60 min" },
  "400072": { area: "Powai", time: "50-60 min" },
  "400018": { area: "Worli", time: "40-50 min" },
  "400030": { area: "Worli", time: "40-50 min" },
  "400013": { area: "Lower Parel", time: "40-50 min" },
  "400001": { area: "Marine Lines", time: "40-50 min" },
  "400002": { area: "Marine Lines", time: "40-50 min" },
  "400005": { area: "Colaba", time: "45-55 min" },
  "400070": { area: "BKC", time: "45-55 min" },
  "400064": { area: "Malad West", time: "50-60 min" },
  "400062": { area: "Goregaon West", time: "50-60 min" },
  "400104": { area: "Goregaon West", time: "50-60 min" },
  "400067": { area: "Kandivali West", time: "55-60 min" },
  "400101": { area: "Kandivali West", time: "55-60 min" },
  "400092": { area: "Borivali West", time: "55-60 min" },
  "400103": { area: "Borivali West", time: "55-60 min" },
  "400602": { area: "Thane West", time: "55-60 min" },
  "400601": { area: "Thane West", time: "55-60 min" },
  "400703": { area: "Navi Mumbai", time: "55-60 min" },
  "400706": { area: "Kharghar", time: "55-60 min" },
  "400028": { area: "Dadar", time: "40-50 min" },
  "400014": { area: "Dadar", time: "40-50 min" },
  "400057": { area: "Vile Parle", time: "45-55 min" },
  "400056": { area: "Vile Parle", time: "45-55 min" },
  "400086": { area: "Ghatkopar", time: "50-60 min" },
  "400077": { area: "Ghatkopar", time: "50-60 min" },
  "400080": { area: "Mulund", time: "55-60 min" },
  "400081": { area: "Mulund", time: "55-60 min" },
};

const WA = "https://wa.me/916282878843?text=Hi%2C%20I%20want%20to%20order%20a%20vape";

export default function DeliveryChecker() {
  const [pincode, setPincode] = useState("");
  const [result, setResult] = useState<null | "yes" | "no">(null);
  const [area, setArea] = useState("");
  const [time, setTime] = useState("");

  function check() {
    const trimmed = pincode.trim();
    if (trimmed.length !== 6) return;
    const match = DELIVERY_ZONES[trimmed];
    if (match) {
      setArea(match.area);
      setTime(match.time);
      setResult("yes");
    } else {
      setResult("no");
    }
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "Enter") check();
  }

  return (
    <div style={{ marginTop: 24 }}>
      <div style={{ background: "#fff", border: "1.5px solid #E5E7EB", borderRadius: 14, padding: "20px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
        <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#0D0D0D", marginBottom: 10 }}>
          📍 Check if we deliver to you
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <input
            type="tel"
            inputMode="numeric"
            placeholder="Enter your pincode"
            value={pincode}
            onChange={e => { setPincode(e.target.value.replace(/\D/g, "").slice(0, 6)); setResult(null); }}
            onKeyDown={handleKey}
            style={{ flex: 1, padding: "12px 14px", borderRadius: 10, border: "1.5px solid #E5E7EB", fontSize: "1rem", fontFamily: "inherit", outline: "none", color: "#0D0D0D" }}
          />
          <button
            onClick={check}
            style={{ background: "#E23744", color: "#fff", border: "none", borderRadius: 10, padding: "12px 20px", fontWeight: 700, fontSize: "0.9rem", cursor: "pointer", fontFamily: "inherit" }}
          >
            Check
          </button>
        </div>

        {result === "yes" && (
          <div style={{ marginTop: 14, background: "#ECFDF5", border: "1px solid #6EE7B7", borderRadius: 10, padding: "14px 16px" }}>
            <div style={{ fontWeight: 700, color: "#059669", fontSize: "0.95rem", marginBottom: 4 }}>✅ Yes! We deliver to {area}</div>
            <div style={{ color: "#065F46", fontSize: "0.82rem", marginBottom: 12 }}>Estimated delivery: <strong>{time}</strong></div>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "#25D366", color: "#fff", padding: "9px 18px", borderRadius: 8, fontWeight: 700, fontSize: "0.82rem", textDecoration: "none" }}>
              Order Now on WhatsApp →
            </a>
          </div>
        )}

        {result === "no" && (
          <div style={{ marginTop: 14, background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: 10, padding: "14px 16px" }}>
            <div style={{ fontWeight: 700, color: "#E23744", fontSize: "0.95rem", marginBottom: 4 }}>❌ Outside our current zone</div>
            <div style={{ color: "#7F1D1D", fontSize: "0.82rem", marginBottom: 12 }}>We&apos;re expanding fast! WhatsApp us anyway — we&apos;ll try our best.</div>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "#E23744", color: "#fff", padding: "9px 18px", borderRadius: 8, fontWeight: 700, fontSize: "0.82rem", textDecoration: "none" }}>
              Ask Us Anyway →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
