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
    <div className="app">

      {/* BACKGROUND GIF CANDLE */}
      <div className="bg"></div>

      {/* DARK OVERLAY */}
      <div className="overlay"></div>

      {/* CONTENT */}
      <div className="content">

        {/* LOGO */}
        <img src="/logo.png" alt="logo" className="logoImg" />

        {/* HERO */}
        <div className="hero">
          <h2>Luxury Candle Experience</h2>
          <p>Warm light, elegant scent, pure emotion</p>
        </div>

        {/* PRODUCTS */}
        <div className="grid">
          {products.map((p, i) => (
            <div key={i} className="card">
              <h3>{p.name}</h3>
              <p>{p.price} DA</p>
              <button onClick={() => addToCart(p)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* CART */}
        <div className="cart">
          <h3>Cart 🛒</h3>
          {cart.map((c, i) => (
            <p key={i}>{c.name} - {c.price} DA</p>
          ))}
          <hr />
          <b>Total: {total} DA</b>
        </div>

      </div>

      {/* STYLE */}
      <style>{`

        body, html {
          margin: 0;
          padding: 0;
        }

        .app {
          min-height: 100vh;
          color: white;
          font-family: 'Playfair Display', serif;
        }

        /* BACKGROUND GIF */
        .bg {
          position: fixed;
          inset: 0;
          background-image: url("https://media.giphy.com/media/l0HlOvJ7yaacpuSas/giphy.gif");
          background-size: cover;
          background-position: center;
          filter: brightness(0.4);
          z-index: 0;
          animation: zoom 20s infinite alternate;
        }

        @keyframes zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }

        .overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          z-index: 1;
        }

        .content {
          position: relative;
          z-index: 2;
          padding: 20px;
          text-align: center;
        }

        /* LOGO */
        .logoImg {
          width: 200px;
          margin: auto;
          display: block;
          filter: drop-shadow(0 0 10px rgba(212,175,55,0.6));
          animation: logoGlow 3s infinite alternate;
        }

        @keyframes logoGlow {
          from { transform: scale(1); }
          to { transform: scale(1.05); }
        }

        .hero h2 {
          font-size: 40px;
          margin-top: 20px;
        }

        .hero p {
          color: #ccc;
        }

        .grid {
          margin-top: 40px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }

        .card {
          background: rgba(0,0,0,0.7);
          padding: 15px;
          border-radius: 15px;
          border: 1px solid #d4af3740;
        }

        button {
          width: 100%;
          padding: 10px;
          background: #d4af37;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          margin-top: 10px;
        }

        .cart {
          margin-top: 40px;
          background: rgba(0,0,0,0.7);
          padding: 15px;
          border-radius: 10px;
        }

      `}</style>

    </div>
  );
}
