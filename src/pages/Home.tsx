import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, ShieldCheck, DollarSign, TrendingUp } from 'lucide-react';
import { type ReactNode } from 'react';

interface Highlight {
  icon: ReactNode;
  title: string;
  description: string;
}

const highlights: Highlight[] = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Direct Sourcing from Nashik',
    description: 'Onions procured directly from India\'s premier onion-producing region, ensuring freshness and quality.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Export-Grade Quality Control',
    description: 'Rigorous inspection, sorting, and grading at every stage — from farm selection to final dispatch.',
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: 'Competitive Pricing',
    description: 'Direct farmer relationships eliminate middlemen, delivering premium quality at competitive rates.',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Consistent Supply',
    description: 'Year-round availability backed by robust procurement networks across the Nashik district.',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-soil-950/85 via-grove-950/75 to-soil-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-soil-950/40 via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-grove-600/20 border border-grove-400/30 text-grove-300 text-sm font-medium backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-grove-400 animate-pulse" />
                Premium Indian Onion Exporters
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] text-balance"
            >
              Welcome to{' '}
              <span className="text-onion-400">Sattvika Overseas</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-6 text-lg sm:text-xl text-cream-300 leading-relaxed max-w-xl"
            >
              Delivering India's Agricultural Excellence to Global Markets.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                to="/products/fresh-red-onion"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-onion-500 text-white font-semibold hover:bg-onion-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Explore Our Products
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-cream-400/30 text-cream-200 font-semibold hover:bg-white/10 hover:border-cream-400/50 transition-all backdrop-blur-sm"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 rounded-full border-2 border-cream-400/40 flex items-start justify-center p-1.5"
          >
            <div className="w-1.5 h-3 rounded-full bg-cream-400/60" />
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-soil-900 text-balance">
              Connecting Global Buyers with Premium Indian Onions
            </h2>
            <p className="mt-6 text-soil-600 leading-relaxed text-lg">
              India has long been recognized as one of the world's leading
              producers of high-quality onions, and Maharashtra stands at the
              heart of this agricultural excellence. At Sattvika Overseas, our
              purpose is simple: to connect international buyers with premium
              Indian onions and onion-based products through a supply chain built
              on quality, transparency, consistency, and trust.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Buyers Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="text-grove-600 text-sm font-semibold uppercase tracking-wider">
              Why Buyers Choose Us
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-soil-900 text-balance">
              Built on Quality, Driven by Trust
            </h2>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-cream-50 rounded-2xl p-6 border border-cream-200 hover:border-grove-300 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-grove-50 text-grove-600 flex items-center justify-center group-hover:bg-grove-100 transition-colors">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-lg font-display font-bold text-soil-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-soil-500 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="text-grove-600 text-sm font-semibold uppercase tracking-wider">
              Our Products
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-soil-900 text-balance">
              Premium Onion Products
            </h2>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/products/fresh-red-onion"
                className="group block bg-white rounded-2xl overflow-hidden border border-cream-200 hover:border-onion-300 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/539703/pexels-photo-539703.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Fresh Red Onions"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 text-xs font-semibold text-onion-600 backdrop-blur-sm">
                    Fresh Produce
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-soil-900 group-hover:text-onion-600 transition-colors">
                    Fresh Red Onion
                  </h3>
                  <p className="mt-2 text-sm text-soil-500 leading-relaxed">
                    Sourced from Nashik, Maharashtra. Uniform shape, full
                    maturity, export quality, and long shelf life.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-grove-600 group-hover:text-grove-700 transition-colors">
                    View Details
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link
                to="/products/white-onion-powder"
                className="group block bg-white rounded-2xl overflow-hidden border border-cream-200 hover:border-grove-300 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/28025270/pexels-photo-28025270.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="White Onion Powder"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 text-xs font-semibold text-grove-700 backdrop-blur-sm">
                    Processed
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-soil-900 group-hover:text-grove-700 transition-colors">
                    White Onion Powder
                  </h3>
                  <p className="mt-2 text-sm text-soil-500 leading-relaxed">
                    Fine mesh texture, strong aroma, low moisture, and long
                    storage stability for the seasoning and food processing
                    industries.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-grove-600 group-hover:text-grove-700 transition-colors">
                    View Details
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
