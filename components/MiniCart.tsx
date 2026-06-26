'use client'
import { useState, useEffect } from "react"

const PRODUCTS = [
  { id: "raya-d1", name: "Elfbar Raya D1", price: 2299, category: "Disposables" },
  { id: "moonnight", name: "Elfbar MoonNight 40K", price: 3299, category: "Disposables" },
  { id: "lost-mary", name: "Lost Mary MT35000", price: 3199, category: "Disposables" },
  { id: "d3-pro", name: "Elfbar D3 Pro", price: 2999, category: "Disposables" },
  { id: "bc10000", name: "Elfbar BC 10000", price: 2199, category: "Disposables" },
  { id: "sobo", name: "Elfbar Raya SOBO", price: 3499, category: "Disposables" },
  { id: "trio", name: "Elfbar Trio", price: 2999, category: "Disposables" },
  { id: "raya-d3", name: "Elfbar Raya D3", price: 2999, category: "Disposables" },
  { id: "ice-king", name: "Elfbar Ice King", price: 2999, category: "Disposables" },
  { id: "nasty", name: "Nasty Bolt WTF 50K", price: 3999, category: "Disposables" },
  { id: "yuoto-thanos", name: "Yuoto Thanos", price: 1799, category: "Disposables" },
  { id: "yuoto-beyonder", name: "Yuoto Beyonder", price: 2199, category: "Disposables" },
  { id: "iget-astro", name: "IGET Astro B18000", price: 2799, category: "Disposables" },
  { id: "caliburn-g3-pro", name: "Caliburn G3 Pro", price: 6499, category: "Pod System" },
  { id: "caliburn-g4", name: "Caliburn G4", price: 6999, category: "Pod System" },
  { id: "caliburn-g4-pro", name: "Caliburn G4 Pro", price: 7699, category: "Pod System" },
  { id: "caliburn-g5-lite", name: "Caliburn G5 Lite", price: 5299, category: "Pod System" },
  { id: "caliburn-g3-lite", name: "Caliburn G3 Lite", price: 4199, category: "Pod System" },
  { id: "elfliq", name: "Elfliq Nic Salt", price: 1899, category: "E-Liquid" },
  { id: "pod-salt-core", name: "Pod Salt Core", price: 1899, category: "E-Liquid" },
  { id: "zyn", name: "ZYN Cool Mint", price: 1299, category: "Nicotine Pouch" },
  { id: "velo", name: "Velo Freezing Peppermint", price: 1299, category: "Nicotine Pouch" },
  { id: "amber-leaf", name: "Amber Leaf Tobacco", price: 1299, category: "Tobacco" },
  { id: "golden-virginia", name: "Golden Virginia", price: 1299, category: "Tobacco" },
  { id: "drum-blue", name: "Drum Bright Blue", price: 1299, category: "Tobacco" },
]

type CartItem = { id: string; name: string; price: number; qty: number }

const CATEGORY_ICONS: Record<string, string> = {
  "Disposables": "💨",
  "Pod System": "🔋",
  "E-Liquid": "💧",
  "Nicotine Pouch": "🟢",
  "Tobacco": "🍃",
}

export default function MiniCart() {
  const [open, setOpen] = useState(false)
  const [cart, setCart] = useState<CartItem[]>([])
  const [activeCategory, setActiveCategory] = useState("Disposables")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail
      setCart(prev => {
        const existing = prev.find(i => i.id === detail.id)
        if (existing) return prev.map(i => i.id === detail.id ? { ...i, qty: i.qty + 1 } : i)
        return [...prev, { id: detail.id, name: detail.name, price: detail.price, qty: 1 }]
      })
    }
    window.addEventListener('add-to-cart', handler)
    return () => window.removeEventListener('add-to-cart', handler)
  }, [])

  const addToCart = (product: typeof PRODUCTS[0]) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id)
      if (existing) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const removeOne = (id: string) => {
    setCart(prev => {
      const item = prev.find(i => i.id === id)
      if (!item) return prev
      if (item.qty === 1) return prev.filter(i => i.id !== id)
      return prev.map(i => i.id === id ? { ...i, qty: i.qty - 1 } : i)
    })
  }

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0)
  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0)

  const buildWAMessage = () => {
    const lines = cart.map(i => `• ${i.name} x${i.qty} — ₹${(i.price * i.qty).toLocaleString('en-IN')}`)
    const msg = `Hello TheVapesInMumbai,\n\nPlease confirm my order:\n\n${lines.join('\n')}\n\nTotal: ₹${total.toLocaleString('en-IN')}\n\nMy delivery address: `
    return `https://wa.me/916282878843?text=${encodeURIComponent(msg)}`
  }

  const categories = Array.from(new Set(PRODUCTS.map(p => p.category)))

  if (!mounted) return null

  return (
    <>
      <style>{`
        @keyframes cartSlideUp {
          from { opacity:0; transform:translateY(20px); }
          to { opacity:1; transform:translateY(0); }
        }
        .cart-modal {
          position:fixed; inset:0; background:rgba(0,0,0,0.7);
          z-index:1000; display:flex; align-items:flex-end; justify-content:center;
        }
        .cart-sheet {
          background:#fff; border-radius:20px 20px 0 0;
          width:100%; max-width:600px; max-height:88vh;
          display:flex; flex-direction:column;
          animation:cartSlideUp 0.25s ease;
        }
        .cart-body { overflow-y:auto; flex:1; padding:0 20px 16px; }
        .cat-tab {
          padding:8px 14px; border-radius:100px; border:none;
          font-size:0.75rem; font-weight:700; cursor:pointer;
          white-space:nowrap; transition:all 0.15s;
        }
        .cat-tab.active { background:#E23744; color:#fff; }
        .cat-tab.inactive { background:#F3F4F6; color:#6B7280; }
        .product-row {
          display:flex; justify-content:space-between; align-items:center;
          padding:10px 12px; border-radius:10px; margin-bottom:8px;
          transition:all 0.15s;
        }
        .product-row.in-cart { background:#FEF2F2; border:1.5px solid #E23744; }
        .product-row.not-in-cart { background:#F9FAFB; border:1px solid #E5E7EB; }
        .qty-btn {
          width:28px; height:28px; border-radius:100px; border:none;
          font-weight:800; cursor:pointer; font-size:1rem;
          display:flex; align-items:center; justify-content:center;
        }
      `}</style>

      {/* Floating Cart Button */}
      {totalItems > 0 && (
        <div style={{
          position:"fixed", bottom:88, left:"50%", transform:"translateX(-50%)",
          zIndex:999, animation:"cartSlideUp 0.3s ease"
        }}>
          <button onClick={() => setOpen(true)} style={{
            background:"#E23744", color:"#fff", border:"none", borderRadius:100,
            padding:"13px 28px", fontWeight:800, fontSize:"0.88rem", cursor:"pointer",
            boxShadow:"0 4px 24px rgba(226,55,68,0.5)",
            display:"flex", alignItems:"center", gap:10, whiteSpace:"nowrap"
          }}>
            🛒 {totalItems} item{totalItems > 1 ? 's' : ''} · ₹{total.toLocaleString('en-IN')} &nbsp;→ Complete Order
          </button>
        </div>
      )}

      {/* Order Button — always visible */}
      <button onClick={() => setOpen(true)} style={{
        position:"fixed", bottom:88, right:16, zIndex:998,
        background:"#0D0D0D", color:"#fff",
        border:"2px solid #E23744", borderRadius:100,
        padding:"9px 16px", fontWeight:700, fontSize:"0.75rem",
        cursor:"pointer", boxShadow:"0 0 12px rgba(226,55,68,0.3)",
        display: totalItems > 0 ? "none" : "block"
      }}>
        🛒 Order
      </button>

      {/* Modal */}
      {open && (
        <div className="cart-modal" onClick={e => e.target === e.currentTarget && setOpen(false)}>
          <div className="cart-sheet">

            {/* Header */}
            <div style={{padding:"20px 20px 0",borderBottom:"1px solid #F3F4F6",paddingBottom:16}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
                <div>
                  <div style={{fontWeight:800,fontSize:"1.1rem"}}>Build Your Order</div>
                  <div style={{fontSize:"0.75rem",color:"#6B7280",marginTop:2}}>Add products then confirm on WhatsApp</div>
                </div>
                <button onClick={() => setOpen(false)} style={{
                  background:"#F3F4F6", border:"none", borderRadius:100,
                  width:32, height:32, cursor:"pointer", fontSize:"1rem",
                  display:"flex",alignItems:"center",justifyContent:"center"
                }}>✕</button>
              </div>

              {/* Category Tabs */}
              <div style={{display:"flex",gap:8,overflowX:"auto",paddingBottom:4}}>
                {categories.map(cat => (
                  <button key={cat}
                    className={`cat-tab ${activeCategory === cat ? 'active' : 'inactive'}`}
                    onClick={() => setActiveCategory(cat)}>
                    {CATEGORY_ICONS[cat]} {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Product List */}
            <div className="cart-body" style={{paddingTop:16}}>
              {PRODUCTS.filter(p => p.category === activeCategory).map(p => {
                const inCart = cart.find(i => i.id === p.id)
                return (
                  <div key={p.id} className={`product-row ${inCart ? 'in-cart' : 'not-in-cart'}`}>
                    <div>
                      <div style={{fontWeight:600,fontSize:"0.85rem"}}>{p.name}</div>
                      <div style={{fontSize:"0.75rem",color:"#E23744",fontWeight:700,marginTop:2}}>
                        ₹{p.price.toLocaleString('en-IN')}
                      </div>
                    </div>
                    <div style={{display:"flex",alignItems:"center",gap:8}}>
                      {inCart && (
                        <>
                          <button className="qty-btn" onClick={() => removeOne(p.id)}
                            style={{background:"#E5E7EB",color:"#374151"}}>−</button>
                          <span style={{fontWeight:800,minWidth:20,textAlign:"center"}}>{inCart.qty}</span>
                        </>
                      )}
                      <button className="qty-btn" onClick={() => addToCart(p)}
                        style={{background:"#E23744",color:"#fff"}}>+</button>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Cart Summary + Confirm */}
            {cart.length > 0 && (
              <div style={{
                padding:"16px 20px 24px",
                borderTop:"1px solid #F3F4F6",
                background:"#fff"
              }}>
                {/* Order Summary */}
                <div style={{
                  background:"#F9FAFB",borderRadius:12,padding:14,marginBottom:14
                }}>
                  {cart.map(i => (
                    <div key={i.id} style={{
                      display:"flex",justifyContent:"space-between",
                      fontSize:"0.8rem",color:"#374151",marginBottom:4
                    }}>
                      <span>{i.name} × {i.qty}</span>
                      <span style={{fontWeight:600}}>₹{(i.price * i.qty).toLocaleString('en-IN')}</span>
                    </div>
                  ))}
                  <div style={{
                    borderTop:"1px solid #E5E7EB",marginTop:8,paddingTop:8,
                    display:"flex",justifyContent:"space-between",
                    fontWeight:800,fontSize:"0.9rem"
                  }}>
                    <span>Total</span>
                    <span style={{color:"#E23744"}}>₹{total.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <a href={buildWAMessage()} target="_blank" rel="noopener noreferrer"
                  onClick={() => { setOpen(false); setCart([]); }}
                  style={{
                    display:"flex",alignItems:"center",justifyContent:"center",gap:10,
                    background:"#25D366",color:"#fff",
                    padding:"14px",borderRadius:12,fontWeight:800,fontSize:"0.9rem",
                    textDecoration:"none",boxShadow:"0 4px 16px rgba(37,211,102,0.3)"
                  }}>
                  <span style={{fontSize:"1.2rem"}}>✅</span>
                  Confirm Order on WhatsApp
                </a>
              </div>
            )}

          </div>
        </div>
      )}
    </>
  )
}
