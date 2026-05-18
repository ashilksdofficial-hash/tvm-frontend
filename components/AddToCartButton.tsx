'use client'

interface Props {
  productId: string
  productName: string
  price: number
}

export default function AddToCartButton({ productId, productName, price }: Props) {
  const handleAdd = () => {
    window.dispatchEvent(new CustomEvent('add-to-cart', {
      detail: { id: productId, name: productName, price }
    }))
  }

  return (
    <button
      onClick={handleAdd}
      style={{
        display:"block", width:"100%", background:"#E23744", color:"#fff",
        textAlign:"center", padding:"9px", borderRadius:8, fontWeight:700,
        fontSize:"0.78rem", border:"none", cursor:"pointer"
      }}
    >
      + Add to Order
    </button>
  )
}
