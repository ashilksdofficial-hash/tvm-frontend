'use client'
import { useState, useEffect } from "react"

export default function FlashSale() {
  const [time, setTime] = useState({ h: 0, m: 0, s: 0 })

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      const end = new Date()
      end.setHours(23, 59, 59, 0)
      const diff = Math.max(0, Math.floor((end.getTime() - now.getTime()) / 1000))
      setTime({
        h: Math.floor(diff / 3600),
        m: Math.floor((diff % 3600) / 60),
        s: diff % 60
      })
    }
    tick()
    const i = setInterval(tick, 1000)
    return () => clearInterval(i)
  }, [])

  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <div style={{
      background:"linear-gradient(135deg,#E23744,#c02535)",
      borderRadius:12, padding:"14px 16px",
      display:"flex", alignItems:"center",
      justifyContent:"space-between", flexWrap:"wrap", gap:10,
      marginBottom:24
    }}>
      <div>
        <div style={{color:"#fff",fontWeight:800,fontSize:"0.9rem"}}>⚡ Today Only — Special Price</div>
        <div style={{color:"rgba(255,255,255,0.8)",fontSize:"0.75rem",marginTop:2}}>Elfbar Raya D1 at ₹1,999 — limited stock</div>
      </div>
      <div style={{display:"flex",alignItems:"center",gap:6}}>
        {[pad(time.h), pad(time.m), pad(time.s)].map((v, i) => (
          <span key={i} style={{display:"flex",alignItems:"center",gap:6}}>
            <span style={{
              background:"rgba(0,0,0,0.3)",color:"#fff",
              fontWeight:800,fontSize:"1rem",padding:"6px 10px",
              borderRadius:8,fontFamily:"monospace",minWidth:36,textAlign:"center"
            }}>{v}</span>
            {i < 2 && <span style={{color:"rgba(255,255,255,0.8)",fontWeight:700}}>:</span>}
          </span>
        ))}
      </div>
    </div>
  )
}
