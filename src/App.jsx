   import { useState } from "react";

export default function App() { const [cart, setCart] = useState([]);

const products = [ { name: "Vanilla Glow", price: 1200 }, { name: "Amber Night", price: 1500 }, { name: "Rose Luxury", price: 1800 }, ];

const addToCart = (p) => setCart([...cart, p]);

const total = cart.reduce((a, b) => a + b.price, 0);

return ( <div className="app">

{/* BACKGROUND VIDEO STYLE IMAGE */}
  <div className="bg"></div>

  {/* OVERLAY DARK */}
  <div className="overlay"></div>

  {/* FLOATING CANDLE FLAME */}
  <div className="flame"></div>

  {/* CONTENT */}
  <div className="content">

    {/* NAV */}
    <div className="nav">
      <h1 className="logo">HSCANDLES</h1>
      <div className="cartBox">🛒 {cart.length}</div>
    </div>

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
          <button onClick={() => addToCart(p)}>Add to Cart</button>
        </div>
      ))}
    </div>

    {/* CART */}
    <div className="cart">
      <h3>Cart</h3>
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
      overflow: hidden;
    }

    /* BACKGROUND IMAGE ANIMATION */
    .bg {
      position: fixed;
      inset: 0;
      background-image: url('https://images.unsplash.com/photo-1602524814058-f3a7b7b0f9f5');
      background-size: cover;
      background-position: center;
      animation: zoom 18s infinite alternate;
      filter: brightness(0.4);
      z-index: 0;
    }

    @keyframes zoom {
      from { transform: scale(1); }
      to { transform: scale(1.12); }
    }

    /* DARK OVERLAY */
    .overlay {
      position: fixed;
      inset: 0;
      background: radial-gradient(circle, rgba(0,0,0,0.3), rgba(0,0,0,0.9));
      z-index: 1;
    }

    /* FLAME ANIMATION */
    .flame {
      position: fixed;
      top: 40%;
      left: 50%;
      width: 120px;
      height: 120px;
      transform: translate(-50%, -50%);
      background-image: url('https://i.imgur.com/8YQZQ9v.png');
      background-size: contain;
      background-repeat: no-repeat;
      animation: flameMove 2s infinite ease-in-out;
      z-index: 2;
      opacity: 0.8;
    }

    @keyframes flameMove {
      0% { transform: translate(-50%, -50%) scale(1) rotate(-2deg); }
      50% { transform: translate(-50%, -52%) scale(1.1) rotate(2deg); }
      100% { transform: translate(-50%, -50%) scale(1) rotate(-2deg); }
    }

    /* CONTENT */
    .content {
      position: relative;
      z-index: 3;
      padding: 20px;
    }

    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-size: 42px;
      letter-spacing: 6px;
      color: #d4af37;
    }

    .cartBox {
      background: #111;
      padding: 10px 15px;
      border-radius: 10px;
    }

    .hero {
      text-align: center;
      margin-top: 80px;
    }

    .hero h2 {
      font-size: 40px;
      color: #fff;
    }

    .hero p {
      color: #aaa;
    }

    .grid {
      margin-top: 50px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 20px;
    }

    .card {
      background: rgba(0,0,0,0.6);
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

); }   
