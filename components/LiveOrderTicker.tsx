'use client'
import { useState, useEffect } from "react"

const ORDERS = [
  { name: "Rahul K.", area: "Bandra West", product: "Elfbar Raya D1", time: "2 mins ago" },
  { name: "Ananya M.", area: "Andheri West", product: "Caliburn G4", time: "5 mins ago" },
  { name: "Vikram S.", area: "Juhu", product: "Lost Mary MT35000", time: "8 mins ago" },
  { name: "Priya T.", area: "Powai", product: "Elfbar MoonNight 40K", time: "11 mins ago" },
  { name: "Karthik B.", area: "Worli", product: "ZYN Cool Mint", time: "14 mins ago" },
  { name: "Shreya R.", area: "Lower Parel", product: "Elfbar Raya D3", time: "17 mins ago" },
  { name: "Aditya N.", area: "BKC", product: "Nasty Bolt 50K", time: "20 mins ago" },
  { name: "Divya L.", area: "Thane West", product: "Caliburn G3 Pro", time: "23 mins ago" },
  { name: "Rohan P.", area: "Malad West", product: "Yuoto Thanos", time: "26 mins ago" },
  { name: "Sneha K.", area: "Borivali West", product: "Elfbar BC 10000", time: "29 mins ago" },
]

export default function LiveOrderTicker() {
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % ORDERS.length)
        setVisible(true)
      }, 400)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const order = ORDERS[current]

  return (
    <div style={{
      background:"#0D0D0D", borderBottom:"1px solid #1a1a1a",
      padding:"8px 16px", display:"flex", alignItems:"center",
      justifyContent:"center", gap:8, overflow:"hidden"
    }}>
      <span style={{
        width:8, height:8, borderRadius:"50%", background:"#22c55e",
        flexShrink:0, boxShadow:"0 0 6px #22c55e", animation:"pulse 2s infinite"
      }} />
      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>
      <span style={{
        fontSize:"0.75rem", color:"rgba(255,255,255,0.7)",
        transition:"opacity 0.4s", opacity: visible ? 1 : 0,
        whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis"
      }}>
        <span style={{color:"#fff",fontWeight:700}}>{order.name}</span>
        {" from "}
        <span style={{color:"#E23744"}}>{order.area}</span>
        {" just ordered "}
        <span style={{color:"#fff",fontWeight:600}}>{order.product}</span>
        {" · "}
        <span style={{color:"rgba(255,255,255,0.4)"}}>{order.time}</span>
      </span>
    </div>
  )
}
