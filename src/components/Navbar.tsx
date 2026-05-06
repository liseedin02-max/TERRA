import { Search, ShoppingBag, Menu } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 bg-terra-background/90 backdrop-blur-md border-b border-terra-outline/10"
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-serif text-2xl tracking-[0.2em] text-terra-primary font-bold">TERRA</div>
        
        <div className="hidden md:flex items-center gap-10">
          <NavLink href="#">Shop</NavLink>
          <NavLink href="#">Workshops</NavLink>
          <NavLink href="#" active>Process</NavLink>
          <NavLink href="#">Journal</NavLink>
        </div>

        <div className="flex items-center gap-6">
          <button className="text-terra-primary hover:opacity-70 transition-opacity">
            <Search size={22} strokeWidth={1.5} />
          </button>
          <button className="text-terra-primary hover:opacity-70 transition-opacity">
            <ShoppingBag size={22} strokeWidth={1.5} />
          </button>
          <button className="md:hidden text-terra-primary hover:opacity-70 transition-opacity">
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </div>
      </nav>
    </motion.header>
  );
}

function NavLink({ href, children, active = false }: { href: string; children: React.ReactNode; active?: boolean }) {
  return (
    <a 
      href={href} 
      className={`text-sm font-semibold tracking-widest uppercase transition-colors duration-300 relative group ${
        active ? 'text-terra-primary' : 'text-terra-text-muted hover:text-terra-primary'
      }`}
    >
      {children}
      <span className={`absolute -bottom-1 left-0 h-0.5 bg-terra-primary transition-all duration-300 ${
        active ? 'w-full' : 'w-0 group-hover:w-full'
      }`} />
    </a>
  );
}
