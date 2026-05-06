import { Share2, Globe, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-terra-surface/50 py-24 px-6 border-t border-terra-outline/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
        <div className="flex flex-col gap-8">
          <div className="font-serif text-3xl tracking-[0.2em] text-terra-tertiary font-bold">TERRA</div>
          <p className="text-[11px] font-bold text-terra-text-muted tracking-wide max-w-xs leading-relaxed uppercase">
            © 2024 TERRA Studio. <br />
            Handcrafted for slow living.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-16 gap-y-6">
          <FooterLink href="#">Shipping & Returns</FooterLink>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Contact Us</FooterLink>
          <FooterLink href="#">Wholesale</FooterLink>
        </div>

        <div className="flex gap-8">
          <SocialIcon icon={<Share2 size={20} strokeWidth={1.5} />} />
          <SocialIcon icon={<Globe size={20} strokeWidth={1.5} />} />
          <SocialIcon icon={<Mail size={20} strokeWidth={1.5} />} />
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      className="text-[11px] font-bold text-terra-text-muted uppercase tracking-widest hover:text-terra-primary underline underline-offset-4 transition-colors"
    >
      {children}
    </a>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <a href="#" className="text-terra-text-muted hover:text-terra-primary transition-colors">
      {icon}
    </a>
  );
}
