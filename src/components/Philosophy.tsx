import { motion } from 'motion/react';
import { MoveRight } from 'lucide-react';

export default function Philosophy() {
  return (
    <section className="bg-terra-surface/30 py-32 overflow-hidden px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-terra-secondary/10 organic-blob-1 -z-10" />
            <img 
              src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=2000&auto=format&fit=crop" 
              alt="Pottery hands"
              className="w-full h-[650px] object-cover organic-blob-2 shadow-sm"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-[10px] font-bold text-terra-primary uppercase tracking-[0.3em] mb-6 block">
              Our Philosophy
            </span>
            <h2 className="text-5xl md:text-6xl text-terra-text mb-10 leading-tight font-serif">
              Mindful Materiality
            </h2>
            <p className="text-lg text-terra-text-muted mb-10 leading-relaxed">
              We believe that the objects we surround ourselves with should tell a story of time, patience, and the natural world. Our process is a slow dance with the elements—earth, water, and fire—honoring the Mediterranean heritage of terre crue.
            </p>
            <div className="p-8 border-l-2 border-terra-primary italic text-terra-text-muted text-lg mb-12 bg-terra-primary/5">
              "To work with clay is to listen to the earth's heartbeat, transforming raw dust into a vessel for living."
            </div>
            <button className="text-terra-text text-[10px] font-bold tracking-[0.2em] flex items-center gap-4 group uppercase hover:text-terra-primary transition-colors">
              Learn Our Process
              <MoveRight className="group-hover:translate-x-3 transition-transform duration-300" size={20} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
