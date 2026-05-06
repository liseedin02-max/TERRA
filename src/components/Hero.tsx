import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:col-span-5 z-10"
        >
          <span className="text-[10px] font-bold text-terra-secondary uppercase tracking-[0.3em] mb-6 block">
            Artesanal & Mediterranean
          </span>
          <h1 className="text-6xl md:text-7xl text-terra-text mb-8 leading-[1.1] font-serif">
            L'art de vivre en terre crue
          </h1>
          <p className="text-lg text-terra-text-muted mb-12 max-w-md leading-relaxed">
            Discover a collection where raw earth meets refined design. Every piece is a dialogue between the hand of the artisan and the ancient landscapes of the Mediterranean.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="pulp-shape bg-terra-primary text-white px-10 py-5 text-[10px] font-bold tracking-[0.2em] uppercase soft-glow transition-all"
          >
            Explore the Collection
          </motion.button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="md:col-span-7 relative h-[500px] md:h-[700px]"
        >
          <div className="absolute inset-0 bg-terra-secondary/5 organic-blob-1 -rotate-6 scale-110 -z-10" />
          <img 
            src="https://images.unsplash.com/photo-1594913785162-e67832684039?q=80&w=2000&auto=format&fit=crop" 
            alt="Artisanal ceramics"
            className="w-full h-full object-cover organic-blob-2 shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
}
