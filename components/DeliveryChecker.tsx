"use client";
import { useState } from "react";

const DELIVERY_ZONES: Record<string, { area: string; time: string }> = {
  // Bandra & Khar
  "400047": { area: "Khar West", time: "40-50 min" },
  "400048": { area: "Khar East", time: "40-50 min" },
  "400050": { area: "Bandra West", time: "40-50 min" },
  "400051": { area: "Bandra East", time: "40-50 min" },

  // Santacruz
  "400054": { area: "Santacruz West", time: "42-52 min" },
  "400055": { area: "Santacruz East", time: "42-52 min" },

  // Juhu & Vile Parle
  "400049": { area: "Juhu", time: "40-50 min" },
  "400056": { area: "Vile Parle West", time: "42-52 min" },
  "400057": { area: "Vile Parle East", time: "42-52 min" },

  // Andheri
  "400053": { area: "Andheri West", time: "45-55 min" },
  "400058": { area: "Andheri West", time: "45-55 min" },
  "400059": { area: "Andheri East", time: "45-55 min" },
  "400069": { area: "Andheri East", time: "45-55 min" },
  "400093": { area: "Andheri East", time: "45-55 min" },

  // Jogeshwari & Versova
  "400060": { area: "Jogeshwari West", time: "47-57 min" },
  "400061": { area: "Jogeshwari East", time: "47-57 min" },

  // Malad & Goregaon
  "400064": { area: "Malad West", time: "50-60 min" },
  "400097": { area: "Malad East", time: "50-60 min" },
  "400062": { area: "Goregaon West", time: "50-60 min" },
  "400063": { area: "Goregaon East", time: "50-60 min" },
  "400104": { area: "Goregaon East", time: "50-60 min" },

  // Kandivali & Borivali
  "400067": { area: "Kandivali West", time: "52-60 min" },
  "400101": { area: "Kandivali East", time: "52-60 min" },
  "400092": { area: "Borivali West", time: "55-60 min" },
  "400066": { area: "Borivali East", time: "55-60 min" },
  "400103": { area: "Borivali East", time: "55-60 min" },

  // Dahisar
  "400068": { area: "Dahisar", time: "55-60 min" },

  // Powai & Vikhroli
  "400076": { area: "Powai", time: "50-60 min" },
  "400072": { area: "Powai", time: "50-60 min" },
  "400079": { area: "Vikhroli West", time: "50-60 min" },
  "400083": { area: "Vikhroli East", time: "50-60 min" },

  // BKC & Kurla
  "400070": { area: "BKC", time: "45-55 min" },
  "400024": { area: "Kurla West", time: "47-57 min" },
  "400071": { area: "Kurla East", time: "47-57 min" },

  // Worli & Lower Parel
  "400018": { area: "Worli", time: "40-50 min" },
  "400030": { area: "Worli", time: "40-50 min" },
  "400013": { area: "Lower Parel", time: "40-50 min" },
  "400011": { area: "Parel", time: "40-50 min" },
  "400012": { area: "Parel", time: "40-50 min" },

  // Dadar & Matunga
  "400014": { area: "Dadar West", time: "40-50 min" },
  "400028": { area: "Dadar East", time: "40-50 min" },
  "400019": { area: "Matunga", time: "42-52 min" },

  // Sion & Chembur
  "400022": { area: "Sion", time: "45-55 min" },
  "400074": { area: "Chembur", time: "47-57 min" },
  "400089": { area: "Chembur", time: "47-57 min" },

  // Ghatkopar & Mulund
  "400077": { area: "Ghatkopar West", time: "50-60 min" },
  "400086": { area: "Ghatkopar East", time: "50-60 min" },
  "400080": { area: "Mulund West", time: "55-60 min" },
  "400081": { area: "Mulund East", time: "55-60 min" },

  // Marine Lines, Churchgate & Colaba
  "400001": { area: "Marine Lines", time: "40-50 min" },
  "400002": { area: "Churchgate", time: "40-50 min" },
  "400005": { area: "Colaba", time: "45-55 min" },
  "400020": { area: "Colaba", time: "45-55 min" },

  // Fort, CST & Nariman Point
  "400021": { area: "Nariman Point", time: "42-52 min" },
  "400023": { area: "Mandvi", time: "45-55 min" },

  // Grant Road, Tardeo & Malabar Hill
  "400007": { area: "Grant Road", time: "40-50 min" },
  "400034": { area: "Tardeo", time: "40-50 min" },
  "400006": { area: "Malabar Hill", time: "42-52 min" },
  "400036": { area: "Malabar Hill", time: "42-52 min" },

  // Byculla & Mazagaon
  "400008": { area: "Byculla", time: "42-52 min" },
  "400010": { area: "Mazagaon", time: "42-52 min" },

  // Thane
  "400601": { area: "Thane West", time: "55-60 min" },
  "400602": { area: "Thane East", time: "55-60 min" },
  "400603": { area: "Thane", time: "55-60 min" },
  "400604": { area: "Thane", time: "55-60 min" },
  "400606": { area: "Thane", time: "55-60 min" },
  "400607": { area: "Thane", time: "55-60 min" },
  "400608": { area: "Thane", time: "55-60 min" },
  "400610": { area: "Thane", time: "55-60 min" },

  // Navi Mumbai
  "400703": { area: "Vashi", time: "55-60 min" },
  "400705": { area: "Belapur", time: "55-60 min" },
  "400706": { area: "Kharghar", time: "55-60 min" },
  "400708": { area: "Panvel", time: "55-60 min" },
  "400709": { area: "Nerul", time: "55-60 min" },
  "400710": { area: "Airoli", time: "55-60 min" },
  "400614": { area: "Ghansoli", time: "55-60 min" },
  "400615": { area: "Kopar Khairane", time: "55-60 min" },
  "400701": { area: "Navi Mumbai", time: "55-60 min" },
  "400702": { area: "Navi Mumbai", time: "55-60 min" },
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
