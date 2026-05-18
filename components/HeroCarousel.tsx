"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const SLIDES = [
  { src: "/hero-1.jpg", alt: "Vapes in Mumbai — 45-60 min delivery, 100% authentic Elfbar products, fast and discreet" },
  { src: "/hero-2.jpg", alt: "All leading vape brands in Mumbai — Elfbar, Uwell Caliburn, Yuoto, IGET, Lost Mary — 100% authentic authorized seller" },
  { src: "/hero-3.jpg", alt: "Most trusted vape store in Mumbai — TheVapesInMumbai.in — verified and safe" },
];

const WA = "https://wa.me/916282878843?text=Hi%2C%20I%20want%20to%20order%20a%20vape%21";

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % SLIDES.length), 4500);
    return () => clearInterval(t);
  }, []);

  function onTouchStart(e: React.TouchEvent) { touchStartX.current = e.touches[0].clientX; }
  function onTouchEnd(e: React.TouchEvent) {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) setCurrent(p => diff > 0 ? (p + 1) % SLIDES.length : (p - 1 + SLIDES.length) % SLIDES.length);
  }

  return (
    <section>
      {/* SEO */}
      <div style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", opacity: 0, pointerEvents: "none" }}>
        <h1>The Best Vapes in Mumbai — Authorized Seller of Elfbar, Uwell Caliburn, Yuoto. 45-60 min delivery. 100% authentic.</h1>
      </div>

      {/* Slides */}
      <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", overflow: "hidden" }}
        onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        {SLIDES.map((slide, i) => (
          <div key={slide.src} style={{
            position: "absolute", inset: 0,
            opacity: i === current ? 1 : 0,
            transition: "opacity 0.9s ease-in-out",
            zIndex: i === current ? 1 : 0,
          }}>
            <Image src={slide.src} alt={slide.alt} fill style={{ objectFit: "contain", objectPosition: "center", background: "#fff" }} priority={i === 0} sizes="100vw" />
          </div>
        ))}
        {/* Dots */}
        <div style={{ position: "absolute", bottom: 10, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 7, zIndex: 10 }}>
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} style={{
              width: i === current ? 20 : 7, height: 7, borderRadius: 100,
              background: i === current ? "#E23744" : "rgba(255,255,255,0.5)",
              border: "none", cursor: "pointer", padding: 0, transition: "all 0.3s",
            }} />
          ))}
        </div>
      </div>

      {/* Buttons below — white background, no black */}
      <div style={{ padding: "12px 16px 16px", display: "flex", gap: 10, background: "#fff" }}>
        <a href={WA} target="_blank" rel="noopener noreferrer" style={{
          flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          background: "#25D366", color: "#fff", padding: "13px 0", borderRadius: 12,
          fontWeight: 700, fontSize: "0.88rem", textDecoration: "none",
        }}>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.554 4.122 1.523 5.855L0 24l6.29-1.49A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.374l-.36-.214-3.733.884.937-3.638-.234-.374A9.818 9.818 0 0112 2.182c5.424 0 9.818 4.394 9.818 9.818 0 5.425-4.394 9.818-9.818 9.818z"/></svg>
          Order Now
        </a>
        <a href="#categories" style={{
          flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
          background: "#E23744", color: "#fff", padding: "13px 0", borderRadius: 12,
          fontWeight: 700, fontSize: "0.88rem", textDecoration: "none",
        }}>
          Shop Now →
        </a>
      </div>
    </section>
  );
}
