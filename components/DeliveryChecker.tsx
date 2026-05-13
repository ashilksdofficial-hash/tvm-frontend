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
