"use client";
import { useState, useEffect } from "react";

const WA = "https://wa.me/916282878843?text=Hi%2C%20I%20want%20to%20order%20a%20vape%21";

export default function StickyWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => { setVisible(true); setShowText(true); setTextVisible(true); }, 5000);
    const t2 = setTimeout(() => { setTextVisible(false); }, 8000);
    const t3 = setTimeout(() => { setShowText(false); }, 9000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  if (!visible) return null;

  return (
    <a href={WA} target="_blank" rel="noopener noreferrer" style={{ position: "fixed", bottom: 24, right: 20, zIndex: 1000, display: "flex", alignItems: "center", gap: 10, textDecoration: "none", filter: "drop-shadow(0 4px 12px rgba(37,211,102,0.4))" }}>
      {showText && (
        <div style={{ background: "#fff", color: "#0D0D0D", fontSize: "0.82rem", fontWeight: 600, padding: "8px 14px", borderRadius: 20, boxShadow: "0 2px 12px rgba(0,0,0,0.12)", whiteSpace: "nowrap", opacity: textVisible ? 1 : 0, transition: "opacity 0.8s ease-in-out", fontFamily: "Inter, sans-serif" }}>
          Order Now 🛵
        </div>
      )}
      <div style={{ width: 52, height: 52, borderRadius: "50%", background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.554 4.122 1.523 5.855L0 24l6.29-1.49A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.374l-.36-.214-3.733.884.937-3.638-.234-.374A9.818 9.818 0 0112 2.182c5.424 0 9.818 4.394 9.818 9.818 0 5.425-4.394 9.818-9.818 9.818z"/>
        </svg>
      </div>
    </a>
  );
}
