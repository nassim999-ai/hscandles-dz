     import { useState } from "react";

export default function App() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      name: "Vanilla Glow",
      price: 1200,
      img: "https://images.unsplash.com/photo-1603006905003-be475563bc59",
    },
    {
      name: "Amber Night",
      price: 1500,
      img: "https://images.unsplash.com/photo-1602524814058-f3a7b7b0f9f5",
    },
    {
      name: "Rose Luxury",
      price: 1800,
      img: "https://images.unsplash.com/photo-1616627981079-16c2c2c1b7a5",
    },
  ];

  const addToCart = (p) => {
    setCart([...cart, p]);
  };

  const total = cart.reduce((a, b) => a + b.price, 0);

  return (
    <div style={{ fontFamily: "sans-serif", color: "white", background: "black", minHeight: "100vh" }}>

      {/* BACKGROUND */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
          opacity: 0.25,
          backgroundImage:
            "url('https://media.giphy.com/media/3o7TKsQ8UQx1m8w4W4/giphy.gif')",
          backgroundSize: "cover",
        }}
      />

      {/* HERO */}
      <div style={{ textAlign: "center", padding: "100px 20px" }}>
        <h1 style={{ fontSize: "60px", color: "#d4af37" }}>HSCANDLES DZ</h1>
        <p style={{ color: "#ccc" }}>
          Luxury handmade candles for a warm atmosphere
        </p>

        <button
          style={{
            marginTop: 20,
            padding: "10px 25px",
            background: "#d4af37",
            border: "none",
            borderRadius: 20,
            cursor: "pointer",
          }}
        >
          Shop Now
        </button>
      </div>

      {/* PRODUCTS */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))", gap: 20, padding: 20 }}>
        {products.map((p, i) => (
          <div key={i} style={{ background: "#111", padding: 10, borderRadius: 15 }}>
            <img src={p.img} style={{ width: "100%", height: 200, objectFit: "cover", borderRadius: 10 }} />
            <h3>{p.name}</h3>
            <p style={{ color: "#aaa" }}>{p.price} DA</p>
            <button
              onClick={() => addToCart(p)}
              style={{
                width: "100%",
                padding: 10,
                background: "#d4af37",
                border: "none",
                borderRadius: 10,
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* CART */}
      <div style={{ position: "fixed", right: 10, top: 10, background: "#111", padding: 15, borderRadius: 10, width: 220 }}>
        <h3 style={{ color: "#d4af37" }}>Cart 🛒</h3>

        {cart.length === 0 ? (
          <p style={{ color: "#aaa" }}>Empty</p>
        ) : (
          <>
            {cart.map((c, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
                <span>{c.name}</span>
                <span>{c.price}</span>
              </div>
            ))}
            <hr />
            <b>Total: {total} DA</b>
          </>
        )}
      </div>
    </div>
  );
}         
