import { motion } from 'motion/react';

const products = [
  {
    id: 1,
    name: "Solana Vase",
    material: "Hand-thrown Clay",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=1000&auto=format&fit=crop",
    shapeClass: "organic-blob-1",
    delay: 0.1,
    marginTop: "mt-12"
  },
  {
    id: 2,
    name: "Petra Bowl Set",
    material: "Stone Glaze",
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=1000&auto=format&fit=crop",
    shapeClass: "organic-blob-2",
    delay: 0.2,
    marginTop: ""
  },
  {
    id: 3,
    name: "Luz Pitcher",
    material: "Raw Earth",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=1000&auto=format&fit=crop",
    shapeClass: "pulp-shape",
    delay: 0.3,
    marginTop: "mt-24"
  }
];

export default function Collection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl text-terra-text font-serif">Current Collection</h2>
            <div className="w-24 h-px bg-terra-tertiary mt-6" />
          </div>
          <a href="#" className="text-[10px] font-bold text-terra-secondary underline underline-offset-8 hover:text-terra-primary transition-colors tracking-widest uppercase">
            View All
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {products.map((product) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: product.delay, duration: 0.6 }}
              className={`${product.marginTop} group cursor-pointer`}
            >
              <div className={`aspect-[4/5] overflow-hidden ${product.shapeClass} mb-8 bg-terra-surface`}>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-serif text-terra-text">{product.name}</h3>
                <p className="text-[10px] font-bold text-terra-text-muted mt-3 uppercase tracking-[0.2em]">{product.material}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
