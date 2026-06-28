import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Globe, Clock, MessageCircle, ChevronDown } from 'lucide-react';

const WHATSAPP_NUMBER = '919372956041';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function Footer() {
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <footer className="bg-soil-900 text-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div>
            <div className="flex items-center gap-3">
              <img src="/Logo.png" alt="Sattvika Overseas Logo" className="h-10 w-auto" />
              <span className="text-xl font-display font-bold text-white">
                Sattvika Overseas
              </span>
            </div>
            <p className="mt-1 text-sm text-grove-400 italic">
              Premium Agricultural Exports from Maharashtra, India
            </p>
            <p className="mt-4 text-sm text-soil-400 leading-relaxed">
              Delivering India's Agricultural Excellence to Global Markets.
              Together, we grow global partnerships.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link to="/" className="text-sm text-soil-400 hover:text-cream-200 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-soil-400 hover:text-cream-200 transition-colors">
                  About Us
                </Link>
              </li>

              {/* Expandable Products */}
              <li>
                <button
                  onClick={() => setProductsOpen(!productsOpen)}
                  className="flex items-center justify-between w-full text-sm text-soil-400 hover:text-cream-200 transition-colors"
                >
                  <span>Products</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      productsOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {productsOpen && (
                  <ul className="mt-2 ml-4 space-y-2 border-l border-soil-700 pl-3">
                    <li>
                      <Link to="/products" className="text-sm text-soil-500 hover:text-cream-200 transition-colors">
                        All Products
                      </Link>
                    </li>
                    <li>
                      <Link to="/products/fresh-red-onion" className="text-sm text-soil-500 hover:text-cream-200 transition-colors">
                        Fresh Red Onion
                      </Link>
                    </li>
                    <li>
                      <Link to="/products/onion-powder" className="text-sm text-soil-500 hover:text-cream-200 transition-colors">
                        Onion Powder
                      </Link>
                    </li>
                    <li>
                      <Link to="/products/green-bell-pepper" className="text-sm text-soil-500 hover:text-cream-200 transition-colors">
                        Green Bell Pepper
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <Link to="/sourcing-quality" className="text-sm text-soil-400 hover:text-cream-200 transition-colors">
                  Sourcing & Quality
                </Link>
              </li>
              <li>
                <Link to="/certifications-compliance" className="text-sm text-soil-400 hover:text-cream-200 transition-colors">
                  Certifications & Compliance
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-soil-400 hover:text-cream-200 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Office
            </h4>
            <div className="mt-4 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-grove-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-cream-200">
                    Head Office
                  </p>
                  <p className="text-sm text-soil-400">
                    Thane, Mumbai - 400607,
                    <br />
                    Maharashtra, India
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-grove-400 shrink-0" />
                <div>
                  <p className="text-sm text-soil-400">
                    Mon - Sat, 09:00 AM - 06:00 PM IST
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Contact
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-grove-400 shrink-0" />
                <a
                  href="mailto:sattvikaoverseas@gmail.com"
                  className="text-sm text-soil-400 hover:text-cream-200 transition-colors"
                >
                  sattvikaoverseas@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-grove-400 shrink-0" />
                <a
                  href="tel:+919372956041"
                  className="text-sm text-soil-400 hover:text-cream-200 transition-colors"
                >
                  +91 93729 56041
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-grove-400 shrink-0" />
                <span className="text-sm text-soil-400">
                  www.sattvikaoverseas.com
                </span>
              </li>
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#25D366] hover:text-[#1ebe57] transition-colors font-medium"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-grove-600 text-white text-sm font-semibold hover:bg-grove-700 transition-colors"
              >
                Get a Quote
              </Link>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white text-sm font-semibold hover:bg-[#1ebe57] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-soil-800 text-center">
          <p className="text-xs text-soil-500">
            &copy; {new Date().getFullYear()} Sattvika Overseas. All rights
            reserved. &mdash; &ldquo;Delivering India&rsquo;s Agricultural
            Excellence to Global Markets.&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
}
