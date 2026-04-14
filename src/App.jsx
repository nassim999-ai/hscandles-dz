   import { useState } from "react";

// ملاحظة هامة: يجب أن يكون لديك ملف شعار بصيغة PNG وخلفية شفافة
// قم باستبدال الرابط أدناه برابط الشعار الخاص بك المرفوع على خادمك أو في مجلد assets.
// هذا مجرد رابط تجريبي لشعار ذهبي شفاف ليشغل الكود.
const goldLogoPngUrl = 'https://i.imgur.com/vHqB3qQ.png'; 

// رابط صورة خلفية الشموع (يمكنك استبداله بصورتك المفضلة)
const candlesBgImageUrl = 'https://images.unsplash.com/photo-1602524814058-f3a7b7b0f9f5';

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

      {/* BACKGROUND IMAGE WITH BLUR EFFECT */}
      <div className="bg" style={{ backgroundImage: `url(${candlesBgImageUrl})` }}></div>

      {/* DARK OVERLAY */}
      <div className="overlay"></div>

      {/* FLOATING CANDLE FLAME */}
      <div className="flame"></div>

      {/* CONTENT LAYER */}
      <div className="content">

        {/* NAVIGATION BAR */}
        <div className="nav">
          {/* حاوية الشعار الجديد - تم استبدال النص بالصورة PNG */}
          <div className="logo-container">
            <img src={goldLogoPngUrl} alt="HSCANDLES Logo" />
          </div>
          <div className="cartBox">🛒 {cart.length}</div>
        </div>

        {/* HERO SECTION */}
        <div className="hero">
          <h2>Luxury Candle Experience</h2>
          <p>Warm light, elegant scent, pure emotion</p>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid">
          {products.map((p, i) => (
            <div key={i} className="card">
              <h3>{p.name}</h3>
              <p>{p.price} DA</p>
              <button onClick={() => addToCart(p)}>Add to Cart</button>
            </div>
          ))}
        </div>

        {/* CART SECTION */}
        <div className="cart">
          <h3>Cart</h3>
          {cart.map((c, i) => (
            <p key={i}>{c.name} - {c.price} DA</p>
          ))}
          <hr />
          <b>Total: {total} DA</b>
        </div>

      </div>

      {/* STYLE SECTION (CSS) */}
      <style>{`

        body, html {
          margin: 0;
          padding: 0;
          overflow-x: hidden; /* لمنع شريط التمرير الأفقي */
        }

        .app {
          min-height: 100vh;
          color: white;
          /* إضافة خط احتياطي أنيق إذا لم يتوفر Playfair Display */
          font-family: 'Playfair Display', serif, sans-serif; 
          position: relative;
        }

        /* BACKGROUND IMAGE WITH BLUR */
        .bg {
          position: fixed;
          inset: -15px; /* لتكبير الصورة قليلاً لتغطية حواف الضبابية */
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          /* السحر: تطبيق تأثير الضبابية */
          filter: blur(12px) brightness(0.5); /* يمكنك تغيير 12px حسب الرغبة */
          z-index: 0;
          transform: scale(1); /* لإعادة الحجم الطبيعي */
        }

        /* DARK OVERLAY */
        .overlay {
          position: fixed;
          inset: 0;
          background: radial-gradient(circle, rgba(0,0,0,0.2), rgba(0,0,0,0.85));
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
          /* تأثير توهج للشعلة */
          filter: drop-shadow(0 0 10px rgba(212,175,55,0.7)); 
        }

        @keyframes flameMove {
          0% { transform: translate(-50%, -50%) scale(1) rotate(-2deg); }
          50% { transform: translate(-50%, -52%) scale(1.1) rotate(2deg); }
          100% { transform: translate(-50%, -50%) scale(1) rotate(-2deg); }
        }

        /* CONTENT LAYER */
        .content {
          position: relative;
          z-index: 3;
          padding: 20px;
          /* لتوسيط المحتوى الرئيسي */
          max-width: 1200px;
          margin: 0 auto;
        }

        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 0;
          margin-bottom: 40px;
        }

        /* تخصيص حاوية الشعار */
        .logo-container {
          width: 200px; /* يمكنك التحكم في الحجم الأقصى للشعار هنا */
          height: auto;
          /* السحر: جعل الشعار الذهبي يلمع ويبرز عن الخلفية الضبابية */
          filter: drop-shadow(0px 0px 8px rgba(212,175,55,0.9));
        }

        /* تخصيص صورة الشعار نفسها */
        .logo-container img {
          width: 100%;
          height: auto;
          display: block; /* لمنع أي مسافات زائدة */
        }

        .cartBox {
          background: rgba(17, 17, 17, 0.8);
          padding: 10px 15px;
          border-radius: 10px;
          border: 1px solid #d4af37; /* حد ذهبي خفيف */
          font-weight: bold;
        }

        .hero {
          text-align: center;
          margin-top: 60px;
          margin-bottom: 80px;
        }

        .hero h2 {
          font-size: 40px;
          color: #fff;
          filter: drop-shadow(0 0 5px rgba(255,255,255,0.6)); /* تأثير توهج للنص */
        }

        .hero p {
          color: #aaa;
          font-style: italic;
        }

        .grid {
          margin-top: 50px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }

        .card {
          background: rgba(0,0,0,0.7); /* لون خلفية أغمق للبطاقات */
          padding: 15px;
          border-radius: 15px;
          border: 1px solid rgba(212,175,55,0.2); /* حد ذهبي خفيف جداً */
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .card:hover {
          transform: translateY(-5px); /* تأثير ارتفاع عند التحويم */
          border-color: rgba(212,175,55,0.6); /* زيادة حدة الحد الذهبي عند التحويم */
        }

        .card h3 {
          margin-top: 0;
        }

        button {
          width: 100%;
          padding: 10px;
          background: #d4af37;
          color: #111; /* لون نص داكن على الزر */
          font-weight: bold;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          margin-top: 10px;
          transition: background 0.3s ease;
        }

        button:hover {
          background: #b6922e; /* لون أغمق عند التحويم */
        }

        .cart {
          margin-top: 50px;
          margin-bottom: 30px;
          background: rgba(0,0,0,0.8);
          padding: 20px;
          border-radius: 10px;
          border: 1px solid rgba(212,175,55,0.3);
        }

        .cart hr {
          border: 0;
          border-top: 1px solid rgba(212,175,55,0.2);
          margin: 15px 0;
        }

      `}</style>

    </div>
  );
}
            
