import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Package, Ruler } from 'lucide-react';

const specs = [
  ['Origin', 'Nashik, Maharashtra, India'],
  ['Color', 'Red'],
  ['Shape', 'Round'],
  ['Maturity', 'Fully Mature'],
  ['Purity', '99%'],
  ['Moisture', 'Natural'],
  ['Shelf Life', 'Long Storage Variety'],
];

const qualityParams = [
  'Free from decay, sprouting, excessive moisture, and pest infestation',
  'Proper neck drying',
  'Uniform grading',
];

const sizes = ['35-45 mm', '45-55 mm', '50-60 mm', '55-65 mm', '65 mm+'];
const packaging = ['5 Kg', '10 Kg', '20 Kg', '25 Kg', '50 Kg Mesh Bags'];

export default function FreshRedOnion() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-grove-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 text-sm text-grove-300 mb-3">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link to="/products/fresh-red-onion" className="hover:text-white transition-colors">
                Products
              </Link>
              <span>/</span>
              <span className="text-cream-200">Fresh Red Onion</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-balance">
              Fresh Red Onion
            </h1>
            <p className="mt-4 text-lg text-grove-200 max-w-2xl">
              Sourced from Nashik, Maharashtra. Our fresh red onions are
              properly cured and known for their uniform shape, maturity, export
              quality, and long shelf life.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/539703/pexels-photo-539703.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Fresh Red Onions"
                  className="w-full h-[420px] object-cover"
                />
              </div>
            </motion.div>

            {/* Right - Specifications */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Spec Table */}
              <div>
                <h2 className="text-2xl font-display font-bold text-soil-900 mb-4">
                  Product Specifications
                </h2>
                <div className="bg-white rounded-xl border border-cream-200 overflow-hidden">
                  {specs.map(([label, value], i) => (
                    <div
                      key={label}
                      className={`flex items-center justify-between px-5 py-3.5 ${
                        i % 2 === 0 ? 'bg-cream-50' : 'bg-white'
                      }`}
                    >
                      <span className="text-sm font-medium text-soil-700">
                        {label}
                      </span>
                      <span className="text-sm text-soil-900 font-semibold">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quality Parameters */}
              <div>
                <h2 className="text-2xl font-display font-bold text-soil-900 mb-4">
                  Quality Parameters
                </h2>
                <ul className="space-y-2.5">
                  {qualityParams.map((param) => (
                    <li key={param} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-grove-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-soil-600">{param}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Sizes & Packaging */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 border border-cream-200"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-grove-50 text-grove-600 flex items-center justify-center">
                  <Ruler className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-display font-bold text-soil-900">
                  Available Sizes
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {sizes.map((size) => (
                  <span
                    key={size}
                    className="px-4 py-2 rounded-lg bg-cream-100 text-sm font-medium text-soil-700 border border-cream-200"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 border border-cream-200"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-onion-50 text-onion-600 flex items-center justify-center">
                  <Package className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-display font-bold text-soil-900">
                  Packaging Options
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {packaging.map((pkg) => (
                  <span
                    key={pkg}
                    className="px-4 py-2 rounded-lg bg-cream-100 text-sm font-medium text-soil-700 border border-cream-200"
                  >
                    {pkg}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 text-center bg-grove-800 rounded-2xl p-10 text-white"
          >
            <h2 className="text-2xl font-display font-bold text-balance">
              Interested in Fresh Red Onions?
            </h2>
            <p className="mt-3 text-grove-200 max-w-lg mx-auto">
              Contact us for pricing, availability, and custom packaging
              requirements.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-grove-800 font-semibold hover:bg-cream-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
