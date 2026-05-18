'use client'
import { useState, useEffect } from "react"

export default function WAStatus() {
  const [online, setOnline] = useState(true)

  useEffect(() => {
    const hour = new Date().getHours()
    setOnline(hour >= 9 && hour < 2)
  }, [])

  return (
    <div style={{
      display:"flex", alignItems:"center", gap:6,
      padding:"6px 14px", borderRadius:100,
      background: online ? "#F0FDF4" : "#F9FAFB",
      border: `1px solid ${online ? "#BBF7D0" : "#E5E7EB"}`,
      width:"fit-content"
    }}>
      <span style={{
        width:8, height:8, borderRadius:"50%",
        background: online ? "#22c55e" : "#9CA3AF",
        boxShadow: online ? "0 0 6px #22c55e" : "none",
        animation: online ? "pulse 2s infinite" : "none"
      }} />
      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>
      <span style={{
        fontSize:"0.75rem", fontWeight:600,
        color: online ? "#065F46" : "#6B7280"
      }}>
        {online ? "🟢 We're online — replies in ~2 mins" : "🔴 Offline — Back at 9 AM"}
      </span>
    </div>
  )
}
