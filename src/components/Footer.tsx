import { Sprout, MapPin, Mail, Phone, Headphones, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-soil-900 text-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div>
            <div className="flex items-center gap-2.5">
              <Sprout className="w-7 h-7 text-grove-400" />
              <span className="text-xl font-display font-bold text-white">
                PLACEHOLDER
              </span>
            </div>
            <p className="mt-1 text-sm text-peanut-400 italic">
              Excellence in Every Shell.
            </p>
            <p className="mt-4 text-sm text-soil-400 leading-relaxed">
              From India's fertile fields to tables worldwide — delivering
              premium groundnuts with 65+ years of trusted expertise and
              unwavering quality.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {[
                ['Home', '#home'],
                ['About Us', '#about'],
                ['Products', '#products'],
                ['Certifications', '#certifications'],
                ['Leadership', '#leadership'],
                ['Request a Sample', '#contact'],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-soil-400 hover:text-cream-200 transition-colors inline-flex items-center gap-1"
                  >
                    {label}
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Global Offices
            </h4>
            <div className="mt-4 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-grove-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-cream-200">
                    India HQ
                  </p>
                  <p className="text-sm text-soil-400">
                    Thane (W), Mumbai, India
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-grove-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-cream-200">
                    Europe Office
                  </p>
                  <p className="text-sm text-soil-400">
                    Nottingham, England, UK
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-grove-400 shrink-0" />
                <a
                  href="mailto:info@placeholder.com"
                  className="text-sm text-soil-400 hover:text-cream-200 transition-colors"
                >
                  info@placeholder.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-grove-400 shrink-0" />
                <a
                  href="tel:+919778888339"
                  className="text-sm text-soil-400 hover:text-cream-200 transition-colors"
                >
                  +91 9778888339
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Headphones className="w-4 h-4 text-grove-400 shrink-0" />
                <span className="text-sm text-soil-400">24/7 Support</span>
              </li>
            </ul>

            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-grove-600 text-white text-sm font-semibold hover:bg-grove-700 transition-colors"
              >
                Request a Sample
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-soil-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-soil-500">
            &copy; {new Date().getFullYear()} PLACEHOLDER. All rights reserved.
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
