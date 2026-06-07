import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Package } from 'lucide-react';

const specs = [
  ['Moisture', '\u2264 6%'],
  ['Color', 'White to Cream'],
  ['Purity', '99%'],
  ['Mesh Size', '80\u2013120 Mesh'],
  ['Shelf Life', '12\u201318 Months'],
];

const packaging = [
  'Food-grade poly bags',
  'Multi-layer moisture-resistant packaging',
  'Bulk export cartons',
  'Customized industrial packaging',
];

export default function WhiteOnionPowder() {
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
              <Link to="/products/white-onion-powder" className="hover:text-white transition-colors">
                Products
              </Link>
              <span>/</span>
              <span className="text-cream-200">White Onion Powder</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-balance">
              White Onion Powder
            </h1>
            <p className="mt-4 text-lg text-grove-200 max-w-2xl">
              Features strong natural aroma, a fine mesh texture, low moisture
              content, and long storage stability. Ideal for the seasoning
              industry, food processing, hotels, and snack manufacturing.
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
                  src="https://images.pexels.com/photos/28025270/pexels-photo-28025270.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="White Onion Powder"
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

              {/* Packaging */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-grove-50 text-grove-600 flex items-center justify-center">
                    <Package className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-soil-900">
                    Packaging Options
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {packaging.map((pkg) => (
                    <li key={pkg} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-grove-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-soil-600">{pkg}</span>
                    </li>
                  ))}
                </ul>
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
              Interested in White Onion Powder?
            </h2>
            <p className="mt-3 text-grove-200 max-w-lg mx-auto">
              Contact us for pricing, specifications, and custom packaging
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
