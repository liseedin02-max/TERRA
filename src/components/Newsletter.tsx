import { motion } from 'motion/react';

export default function Newsletter() {
  return (
    <section className="py-32 bg-terra-background border-t border-terra-outline/20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl text-terra-text font-serif mb-8">Stay Grounded</h2>
          <p className="text-terra-text-muted text-lg mb-12">
            Receive a monthly journal on slow living, studio updates, and early access to new collections.
          </p>
          
          <form 
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col md:flex-row gap-6 items-center"
          >
            <input 
              type="email" 
              placeholder="Email Address"
              className="w-full bg-transparent border-b border-terra-outline/50 py-5 px-2 focus:outline-none focus:border-terra-primary transition-colors font-sans text-base placeholder:text-terra-outline/60"
            />
            <motion.button 
              whileHover={{ opacity: 0.9 }}
              whileTap={{ scale: 0.98 }}
              className="w-full md:w-auto pulp-shape bg-terra-secondary text-white px-14 py-5 text-[10px] font-bold tracking-[0.2em] whitespace-nowrap uppercase shadow-lg shadow-terra-secondary/20"
            >
              Subscribe
            </motion.button>
          </form>
          
          <p className="text-[10px] text-terra-outline font-bold mt-10 tracking-widest uppercase">
            By subscribing, you agree to our privacy policy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
