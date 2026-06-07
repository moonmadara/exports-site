import { Link } from 'react-router-dom';
import { Sprout, MapPin, Mail, Globe, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-soil-900 text-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div>
            <div className="flex items-center gap-2.5">
              <Sprout className="w-7 h-7 text-grove-400" />
              <span className="text-xl font-display font-bold text-white">
                Sattvika Overseas
              </span>
            </div>
            <p className="mt-4 text-sm text-soil-400 leading-relaxed">
              Delivering India's Agricultural Excellence to Global Markets.
              Premium Fresh Red Onions and White Onion Powder sourced directly
              from Nashik, Maharashtra.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {[
                ['Home', '/'],
                ['About Us', '/about'],
                ['Fresh Red Onion', '/products/fresh-red-onion'],
                ['White Onion Powder', '/products/white-onion-powder'],
                ['Sourcing & Quality', '/sourcing-quality'],
                ['Contact Us', '/contact'],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-soil-400 hover:text-cream-200 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
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
                  href="mailto:sales@sattvikaoverseas.com"
                  className="text-sm text-soil-400 hover:text-cream-200 transition-colors"
                >
                  sales@sattvikaoverseas.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-grove-400 shrink-0" />
                <span className="text-sm text-soil-400">
                  www.sattvikaoverseas.com
                </span>
              </li>
            </ul>

            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-grove-600 text-white text-sm font-semibold hover:bg-grove-700 transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-soil-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-soil-500">
            &copy; {new Date().getFullYear()} Sattvika Overseas. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-soil-500">
            <a href="#" className="hover:text-cream-200 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-cream-200 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
