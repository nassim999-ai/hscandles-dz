   import { useState } from "react"; import { motion } from "framer-motion"; import { Button } from "@/components/ui/button";

export default function Home() { const [cart, setCart] = useState([]);

const products = [ { name: "Vanilla Glow", price: 1200, img: "https://images.unsplash.com/photo-1603006905003-be475563bc59" }, { name: "Amber Night", price: 1500, img: "https://images.unsplash.com/photo-1602524814058-f3a7b7b0f9f5" }, { name: "Rose Luxury", price: 1800, img: "https://images.unsplash.com/photo-1616627981079-16c2c2c1b7a5" }, ];

const addToCart = (product) => { setCart([...cart, product]); };

const total = cart.reduce((sum, item) => sum + item.price, 0);

return ( <div className="bg-black text-white min-h-screen font-serif relative">

{/* BACKGROUND GIF */}
  <div className="fixed inset-0 -z-10 opacity-30 bg-cover bg-center"
    style={{
      backgroundImage: "url('https://media.giphy.com/media/3o7TKsQ8UQx1m8w4W4/giphy.gif')"
    }}
  />

  {/* HERO */}
  <section className="h-screen flex items-center justify-center text-center">
    <div className="bg-black/70 backdrop-blur-md p-12 rounded-3xl shadow-2xl">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl md:text-8xl font-bold tracking-widest text-yellow-500"
      >
        HSCANDLES
      </motion.h1>
      <p className="mt-6 text-lg text-gray-300 max-w-xl">
        Luxury scented candles with a warm elegant atmosphere
      </p>
      <Button className="mt-8 px-8 py-3 text-lg bg-yellow-500 text-black rounded-full hover:bg-yellow-600">
        Shop Now
      </Button>
    </div>
  </section>

  {/* PRODUCTS */}
  <section className="px-6 pb-24">
    <h2 className="text-4xl text-center mb-14 text-yellow-500 font-bold">
      Best Sellers
    </h2>
    <div className="grid md:grid-cols-3 gap-10">
      {products.map((p, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.08 }}
          className="rounded-3xl overflow-hidden bg-zinc-900 shadow-2xl border border-yellow-500/20"
        >
          <img src={p.img} className="h-72 w-full object-cover" />
          <div className="p-6 text-center">
            <h3 className="text-2xl font-semibold">{p.name}</h3>
            <p className="text-gray-400 mt-2">{p.price} DA</p>
            <Button
              onClick={() => addToCart(p)}
              className="mt-4 w-full bg-yellow-500 text-black rounded-full hover:bg-yellow-600"
            >
              Add to Cart
            </Button>
          </div>
        </motion.div>
      ))}
    </div>
  </section>

  {/* CART */}
  <div className="fixed top-5 right-5 bg-zinc-900 p-5 rounded-2xl shadow-xl w-72">
    <h3 className="text-xl mb-4 text-yellow-500">Cart 🛒</h3>
    {cart.length === 0 ? (
      <p className="text-gray-400">Cart is empty</p>
    ) : (
      <div>
        {cart.map((item, i) => (
          <div key={i} className="flex justify-between text-sm mb-2">
            <span>{item.name}</span>
            <span>{item.price} DA</span>
          </div>
        ))}
        <hr className="my-3 border-zinc-700" />
        <p className="flex justify-between font-bold">
          <span>Total</span>
          <span>{total} DA</span>
        </p>
      </div>
    )}
  </div>

  {/* FOOTER */}
  <footer className="text-center py-12 border-t border-yellow-500/20 text-gray-500">
    <p>© 2026 HSCANDLES DZ</p>
  </footer>
</div>

); }   
