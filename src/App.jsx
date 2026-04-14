import { useState } from "react";

export default function App() {
  const [cart, setCart] = useState([]);

  const products = [
    { name: "Vanilla Glow", price: 1200 },
    { name: "Amber Night", price: 1500 },
    { name: "Rose Luxury", price: 1800 },
  ];

  const addToCart = (p) => setCart([...cart, p]);

  const total = cart.reduce((a, b) => a + b.price, 0);

  return (
    <div style={{ background: "black", color: "white", minHeight: "100vh", padding: 20 }}>
      
      <h1 style={{ color: "#d4af37" }}>HSCANDLES</h1>

      <div>
        {products.map((p, i) => (
          <div key={i} style={{ margin: 10, padding: 10, background: "#111" }}>
            <h3>{p.name}</h3>
            <p>{p.price} DA</p>
            <button onClick={() => addToCart(p)}>Add</button>
          </div>
        ))}
      </div>

      <hr />

      <h3>Cart 🛒</h3>
      {cart.map((c, i) => (
        <p key={i}>{c.name} - {c.price}</p>
      ))}

      <h2>Total: {total} DA</h2>
    </div>
  );
}
