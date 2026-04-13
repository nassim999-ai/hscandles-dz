import React from "react";

export default function App() {
  const products = [
    { name: "Bougie Vanille", price: "880 DA" },
    { name: "Bougie Lavande", price: "880 DA" },
    { name: "Bougie Rose", price: "880 DA" },
  ];

  return (
    <div style={{ background: "#000", color: "#fff", minHeight: "100vh", padding: "20px", fontFamily: "Arial" }}>
      
      <h1 style={{ color: "#d4af37", textAlign: "center" }}>
        HSCANDLES 
      </h1>

      <p style={{ textAlign: "center", marginBottom: "40px" }}>
        Bougies parfumées de luxe
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
        
        {products.map((p, i) => (
          <div key={i} style={{ background: "#111", padding: "20px", borderRadius: "10px", textAlign: "center" }}>
            <h3>{p.name}</h3>
            <p style={{ color: "#d4af37" }}>{p.price}</p>

            <a
              href={`https://wa.me/213771063641?text=Bonjour je veux commander ${p.name}`}
              target="_blank"
              style={{
                display: "inline-block",
                marginTop: "10px",
                padding: "10px 15px",
                background: "#25D366",
                color: "#fff",
                borderRadius: "5px",
                textDecoration: "none"
              }}
            >
              Commander WhatsApp
            </a>
          </div>
        ))}

      </div>

    </div>
  );
}
