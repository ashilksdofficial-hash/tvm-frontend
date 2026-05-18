'use client'
import { useState, useEffect } from "react"

const PRODUCTS = [
  { id: "raya-d1", name: "Elfbar Raya D1", price: 2399, category: "Disposables" },
  { id: "moonnight", name: "Elfbar MoonNight 40K", price: 3499, category: "Disposables" },
  { id: "lost-mary", name: "Lost Mary MT35000", price: 3199, category: "Disposables" },
  { id: "d3-pro", name: "Elfbar D3 Pro", price: 3499, category: "Disposables" },
  { id: "bc10000", name: "Elfbar BC 10000", price: 1999, category: "Disposables" },
  { id: "sobo", name: "Elfbar Raya SOBO", price: 3599, category: "Disposables" },
  { id: "trio", name: "Elfbar Trio", price: 3299, category: "Disposables" },
  { id: "raya-d3", name: "Elfbar Raya D3", price: 2999, category: "Disposables" },
  { id: "ice-king", name: "Elfbar Ice King", price: 3199, category: "Disposables" },
  { id: "nasty", name: "Nasty Bolt WTF 50K", price: 4299, category: "Disposables" },
  { id: "yuoto-thanos", name: "Yuoto Thanos", price: 1899, category: "Disposables" },
  { id: "yuoto-beyonder", name: "Yuoto Beyonder", price: 1999, category: "Disposables" },
  { id: "caliburn-g3-pro", name: "Caliburn G3 Pro", price: 6499, category: "Pod System" },
  { id: "caliburn-g4", name: "Caliburn G4", price: 6999, category: "Pod System" },
  { id: "caliburn-g4-pro", name: "Caliburn G4 Pro", price: 7699, category: "Pod System" },
  { id: "caliburn-g5-lite", name: "Caliburn G5 Lite", price: 5299, category: "Pod System" },
  { id: "elfliq", name: "Elfliq Nic Salt", price: 1999, category: "E-Liquid" },
  { id: "pod-salt-core", name: "Pod Salt Core", price: 1999, category: "E-Liquid" },
  { id: "zyn", name: "ZYN Cool Mint", price: 1199, category: "Nicotine Pouch" },
  { id: "velo", name: "Velo Freezing Peppermint", price: 1199, category: "Nicotine Pouch" },
  { id: "amber-leaf", name: "Amber Leaf Tobacco", price: 1199, category: "Tobacco" },
  { id: "golden-virginia", name: "Golden Virginia", price: 1199, category: "Tobacco" },
]

type CartItem = { id: string; name: string; price: number; qty: number }

export default function MiniCart() {
  const [open, setOpen] = useState(false)
  const [cart, setCart] = useState<CartItem[]>([])
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(cart.length > 0)
  }, [cart])

  const addToCart = (product: typeof PRODUCTS[0]) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id)
      if (existing) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(i => i.id !== id))
  }

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0)

  const buildWAMessage = () => {
    const lines = cart.map(i => `${i.name} x${i.qty} — ₹${(i.price * i.qty).toLocaleString('en-IN')}`)
    const msg = `Hello TheVapesInMumbai,\n\nCan you confirm my order:\n\n${lines.join('\n')}\n\nTotal: ₹${total.toLocaleString('en-IN')}\n\nPlease share delivery details.`
    return `https://wa.me/916282878843?text=${encodeURIComponent(msg)}`
  }

  const categories = [...new Set(PRODUCTS.map(p => p.category))]

  return (
    <>
      {/* Floating Cart Button */}
      {visible && (
        <div style={{
          position:"fixed", bottom:90, left:"50%", transform:"translateX(-50%)",
          zIndex:999, animation:"fadeUp 0.3s ease"
        }}>
          <style>{`
            @keyframes fadeUp { from { opacity:0; transform:translateX(-50%) translateY(20px); } to { opacity:1; transform:translateX(-50%) translateY(0); } }
          `}</style>
          <button onClick={() => setOpen(true)} style={{
            background:"#E23744", color:"#fff", border:"none", borderRadius:100,
            padding:"12px 24px", fontWeight:800, fontSize:"0.9rem", cursor:"pointer",
            boxShadow:"0 4px 20px rgba(226,55,68,0.4)", display:"flex", alignItems:"center", gap:10,
            whiteSpace:"nowrap"
          }}>
            🛒 {cart.reduce((s,i) => s+i.qty, 0)} items — ₹{total.toLocaleString('en-IN')} &nbsp;→ Complete Order
          </button>
        </div>
      )}

      {/* Order Builder Modal */}
      {open && (
        <div style={{
          position:"fixed", inset:0, background:"rgba(0,0,0,0.7)", zIndex:1000,
          display:"flex", alignItems:"flex-end", justifyContent:"center"
        }} onClick={(e) => e.target === e.currentTarget && setOpen(false)}>
          <div style={{
            background:"#fff", borderRadius:"20px 20px 0 0", width:"100%", maxWidth:600,
            maxHeight:"85vh", overflow:"auto", padding:24
          }}>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20}}>
              <div style={{fontWeight:800, fontSize:"1.1rem"}}>Build Your Order</div>
              <button onClick={() => setOpen(false)} style={{background:"#F3F4F6", border:"none", borderRadius:100, width:32, height:32, cursor:"pointer", fontSize:"1rem"}}>✕</button>
            </div>

            {/* Product List */}
            {categories.map(cat => (
              <div key={cat} style={{marginBottom:20}}>
                <div style={{fontWeight:700, fontSize:"0.78rem", color:"#6B7280", textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:10}}>{cat}</div>
                <div style={{display:"flex", flexDirection:"column", gap:8}}>
                  {PRODUCTS.filter(p => p.category === cat).map(p => {
                    const inCart = cart.find(i => i.id === p.id)
                    return (
                      <div key={p.id} style={{
                        display:"flex", justifyContent:"space-between", alignItems:"center",
                        padding:"10px 14px", borderRadius:10,
                        background: inCart ? "#FEF2F2" : "#F9FAFB",
                        border: inCart ? "1.5px solid #E23744" : "1px solid #E5E7EB"
                      }}>
                        <div>
                          <div style={{fontWeight:600, fontSize:"0.85rem"}}>{p.name}</div>
                          <div style={{fontSize:"0.75rem", color:"#E23744", fontWeight:700}}>₹{p.price.toLocaleString('en-IN')}</div>
                        </div>
                        <div style={{display:"flex", alignItems:"center", gap:8}}>
                          {inCart && (
                            <>
                              <button onClick={() => {
                                if (inCart.qty === 1) removeFromCart(p.id)
                                else setCart(prev => prev.map(i => i.id === p.id ? {...i, qty: i.qty-1} : i))
                              }} style={{background:"#E5E7EB", border:"none", borderRadius:100, width:28, height:28, cursor:"pointer", fontWeight:700}}>−</button>
                              <span style={{fontWeight:700, minWidth:16, textAlign:"center"}}>{inCart.qty}</span>
                            </>
                          )}
                          <button onClick={() => addToCart(p)} style={{
                            background:"#E23744", color:"#fff", border:"none", borderRadius:100,
                            width:28, height:28, cursor:"pointer", fontWeight:700, fontSize:"1.1rem"
                          }}>+</button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}

            {/* Cart Summary */}
            {cart.length > 0 && (
              <div style={{
                background:"#0D0D0D", borderRadius:14, padding:20, marginTop:8,
                position:"sticky", bottom:0
              }}>
                <div style={{marginBottom:12}}>
                  {cart.map(i => (
                    <div key={i.id} style={{display:"flex", justifyContent:"space-between", color:"rgba(255,255,255,0.8)", fontSize:"0.82rem", marginBottom:4}}>
                      <span>{i.name} x{i.qty}</span>
                      <span>₹{(i.price * i.qty).toLocaleString('en-IN')}</span>
                    </div>
                  ))}
                  <div style={{borderTop:"1px solid rgba(255,255,255,0.15)", marginTop:8, paddingTop:8, display:"flex", justifyContent:"space-between", color:"#fff", fontWeight:800}}>
                    <span>Total</span>
                    <span>₹{total.toLocaleString('en-IN')}</span>
                  </div>
                </div>
                <a href={buildWAMessage()} target="_blank" rel="noopener noreferrer" style={{
                  display:"block", background:"#25D366", color:"#fff", textAlign:"center",
                  padding:"13px", borderRadius:10, fontWeight:800, fontSize:"0.9rem", textDecoration:"none"
                }}>
                  ✅ Confirm Order on WhatsApp
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Trigger Button — shown on all pages */}
      <button onClick={() => setOpen(true)} style={{
        position:"fixed", bottom:90, right:20, zIndex:998,
        background:"#0D0D0D", color:"#fff", border:"2px solid #E23744",
        borderRadius:100, padding:"10px 18px", fontWeight:700, fontSize:"0.8rem",
        cursor:"pointer", boxShadow:"0 4px 16px rgba(0,0,0,0.3)"
      }}>
        🛒 Order
      </button>
    </>
  )
}
