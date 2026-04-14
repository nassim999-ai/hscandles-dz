import { useState } from "react";

export default function App() { const [cart, setCart] = useState([]);

const products = [ { name: "Vanilla Glow", price: 1200 }, { name: "Amber Night", price: 1500 }, { name: "Rose Luxury", price: 1800 }, ];

const addToCart = (p) => setCart([...cart, p]);

const total = cart.reduce((a, b) => a + b.price, 0);

return ( <div style={{ minHeight: "100vh", color: "white", fontFamily: "sans-serif", overflow: "hidden" }}>

{/* ANIMATED BACKGROUND IMAGE */}
  <div className="bg"></div>

  {/* SMOKE EFFECT OVERLAY */}
  <div className="smoke"></div>

  {/* CONTENT */}
  <div style={{ position: "relative", zIndex: 3, padding: 20 }}>

    {/* NAV */}
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <h1 style={{ color: "#00ffcc", letterSpacing: 3 }}>HSCANDLES</h1>
      <div style={{ background: "#111", padding: "10px 15px", borderRadius: 10 }}>
        🛒 {cart.length}
      </div>
    </div>

    {/* HERO */}
    <div style={{ textAlign: "center", marginTop: 60 }}>
      <h2 style={{ fontSize: 50, color: "#00ffcc" }}>HSCANDLES</h2>
      <p style={{ color: "#aaa" }}>Clean. Fast. Modern UI Built with React.</p>
    </div>

    {/* PRODUCTS */}
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 20, marginTop: 50 }}>
      {products.map((p, i) => (
        <div key={i} style={{ background: "#111", padding: 15, borderRadius: 15, border: "1px solid #00ffcc33" }}>
          <h3>{p.name}</h3>
          <p style={{ color: "#aaa" }}>{p.price} DA</p>
          <button
            onClick={() => addToCart(p)}
            style={{ width: "100%", padding: 10, background: "#00ffcc", border: "none", borderRadius: 10, cursor: "pointer" }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>

    {/* CART */}
    <div style={{ marginTop: 40, background: "#111", padding: 15, borderRadius: 10 }}>
      <h3 style={{ color: "#00ffcc" }}>Cart</h3>
      {cart.map((c, i) => (
        <p key={i}>{c.name} - {c.price} DA</p>
      ))}
      <hr style={{ borderColor: "#333" }} />
      <h3>Total: {total} DA</h3>
    </div>

  </div>

  {/* BACKGROUND IMAGE */}
  <style>{`
    .bg {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url('https://images.unsplash.com/photo-1518770660439-4636190af475');
      background-size: cover;
      background-position: center;
      filter: brightness(0.25) blur(1px);
      animation: zoom 20s infinite alternate;
      z-index: 1;
    }

    @keyframes zoom {
      from { transform: scale(1); }
      to { transform: scale(1.1); }
    }

    /* SMOKE EFFECT */
    .smoke {
      position: fixed;
      inset: 0;
      z-index: 2;
      pointer-events: none;
      background: radial-gradient(circle at 20% 30%, rgba(255,255,255,0.08), transparent 40%),
                  radial-gradient(circle at 70% 60%, rgba(255,255,255,0.06), transparent 45%),
                  radial-gradient(circle at 40% 80%, rgba(255,255,255,0.05), transparent 50%);
      animation: smokeMove 12s infinite alternate ease-in-out;
    }

    @keyframes smokeMove {
      0% {
        transform: translateY(0px) scale(1);
        opacity: 0.6;
      }
      100% {
        transform: translateY(-20px) scale(1.05);
        opacity: 0.9;
      }
    }
  `}</style>

</div>

); }
