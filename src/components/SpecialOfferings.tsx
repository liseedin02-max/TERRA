import { motion } from 'motion/react';

export default function SpecialOfferings() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Custom Orders */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-terra-secondary/5 p-16 md:p-24 organic-blob-1 flex flex-col justify-center relative overflow-hidden group min-h-[450px]"
        >
          <div className="z-10">
            <h2 className="text-4xl md:text-5xl text-terra-secondary font-serif mb-8">Custom Orders</h2>
            <p className="text-terra-secondary/80 text-base mb-12 max-w-sm leading-relaxed">
              From architectural installations to bespoke dinnerware, we collaborate with interior designers and individuals to bring unique earth-based visions to life.
            </p>
            <a href="#" className="inline-block border-b border-terra-secondary pb-1 text-[10px] font-bold tracking-[0.2em] uppercase hover:text-terra-primary hover:border-terra-primary transition-all">
              Inquire Now
            </a>
          </div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-terra-secondary/10 organic-blob-2 group-hover:scale-125 transition-transform duration-1000 -z-0" />
        </motion.div>

        {/* Workshops */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-terra-tertiary/10 p-16 md:p-24 pulp-shape flex flex-col justify-center relative overflow-hidden group min-h-[450px]"
        >
          <div className="z-10">
            <h2 className="text-4xl md:text-5xl text-terra-tertiary font-serif mb-8">Studio Workshops</h2>
            <p className="text-terra-text-muted text-base mb-12 max-w-sm leading-relaxed">
              Join us in our sun-drenched studio for a weekend of slow crafting. Learn the ancient techniques of hand-building and glazing in a meditative environment.
            </p>
            <a href="#" className="inline-block border-b border-terra-tertiary pb-1 text-[10px] font-bold tracking-[0.2em] uppercase hover:text-terra-primary hover:border-terra-primary transition-all">
              Book a Seat
            </a>
          </div>
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-terra-tertiary/5 pulp-shape rotate-12 group-hover:-rotate-12 transition-transform duration-1000 -z-0" />
        </motion.div>
      </div>
    </section>
  );
}
