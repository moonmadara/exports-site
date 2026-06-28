import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '919372956041';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  {
    label: 'Products',
    children: [
      { label: 'All Products', to: '/products' },
      { label: 'Fresh Red Onion', to: '/products/fresh-red-onion' },
      { label: 'Onion Powder', to: '/products/onion-powder' },
      { label: 'Green Bell Pepper', to: '/products/green-bell-pepper' },
    ],
  },
  { label: 'Sourcing & Quality', to: '/sourcing-quality' },
  { label: 'Certifications', to: '/certifications-compliance' },
  { label: 'Contact Us', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src="/Logo.png" alt="Sattvika Overseas Logo" className="h-10 w-auto" />
            <span className="text-xl font-display font-bold text-soil-900 tracking-tight">
              Sattvika Overseas
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      location.pathname.startsWith('/products')
                        ? 'text-grove-600'
                        : 'text-soil-600 hover:text-grove-600'
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        productsOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {productsOpen && (
                    <div className="absolute top-full left-0 mt-1 w-60 bg-white rounded-xl shadow-lg border border-cream-200 py-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className={`block px-4 py-2.5 text-sm transition-colors ${
                            isActive(child.to)
                              ? 'text-grove-600 bg-grove-50'
                              : 'text-soil-600 hover:bg-cream-100 hover:text-grove-600'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.to}
                  to={link.to!}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive(link.to!)
                      ? 'text-grove-600'
                      : 'text-soil-600 hover:text-grove-600'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold bg-[#25D366] text-white hover:bg-[#1ebe57] transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <Link
              to="/contact"
              className="ml-2 inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold bg-grove-600 text-white hover:bg-grove-700 transition-colors shadow-md"
            >
              Get a Quote
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-soil-700"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-cream-200 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    onClick={() => setProductsOpen(!productsOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-soil-700 hover:bg-cream-100 rounded-lg"
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        productsOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {productsOpen && (
                    <div className="pl-6 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className="block px-4 py-2.5 text-sm text-soil-600 hover:bg-cream-100 rounded-lg"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.to}
                  to={link.to!}
                  className="block px-4 py-3 text-sm font-medium text-soil-700 hover:bg-cream-100 rounded-lg"
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="flex flex-col gap-2 mt-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center px-5 py-3 rounded-full text-sm font-semibold bg-[#25D366] text-white hover:bg-[#1ebe57] transition-colors"
              >
                <span className="inline-flex items-center justify-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </span>
              </a>
              <Link
                to="/contact"
                className="text-center px-5 py-3 rounded-full text-sm font-semibold bg-grove-600 text-white hover:bg-grove-700 transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
