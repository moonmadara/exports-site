import { useState, useEffect } from 'react';
import { Menu, X, Sprout } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-2.5 group">
            <Sprout
              className={`w-8 h-8 transition-colors ${
                scrolled ? 'text-grove-600' : 'text-cream-100'
              }`}
            />
            <span
              className={`text-2xl font-display font-bold tracking-tight transition-colors ${
                scrolled ? 'text-soil-900' : 'text-white'
              }`}
            >
              PLACEHOLDER
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-peanut-500 ${
                  scrolled ? 'text-soil-600' : 'text-cream-200'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold bg-grove-600 text-white hover:bg-grove-700 transition-colors shadow-md hover:shadow-lg"
            >
              Request a Sample
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-soil-700' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-cream-200 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-soil-700 hover:bg-cream-100 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block mt-2 text-center px-5 py-3 rounded-full text-sm font-semibold bg-grove-600 text-white hover:bg-grove-700 transition-colors"
            >
              Request a Sample
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
