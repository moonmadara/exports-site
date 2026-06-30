import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Package, MessageCircle } from 'lucide-react';
import ImageCarousel from '../components/ImageCarousel';
import ProductNav from '../components/ProductNav';

const WHATSAPP_NUMBER = '919372956041';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const productImages = [
  { src: '/images/products/onion-powder/powder1.jpeg', alt: 'Onion powder' },
  { src: '/images/products/onion-powder/powder2.jpeg', alt: 'Spice processing' },
  { src: '/images/products/onion-powder/powder3.jpeg', alt: 'Agricultural landscape' },
  { src: '/images/products/onion-powder/powder4.jpeg', alt: 'Packaged spices' },
];

const specs: [string, string][] = [
  ['Moisture', '\u2264 6%'],
  ['Color', 'White to Cream'],
  ['Purity', '99%'],
  ['Mesh Size', '80\u2013120 Mesh'],
  ['Shelf Life', '12\u201318 Months'],
];

const features = [
  'Strong natural aroma',
  'Zero additives or preservatives',
  'Fine mesh powder',
  'Low moisture content',
  'Long storage stability',
];

const applications = [
  'Seasoning blends',
  'Food processing',
  'Hotels and restaurants',
  'Snack manufacturing',
  'Spice mixes',
];

const packaging = [
  '5 Kg Food Grade Bags',
  '10 Kg Food Grade Bags',
  '20 Kg Food Grade Bags',
  '25 Kg Food Grade Bags',
  'Customized & Private Label Packaging',
  'Multi-layer moisture-resistant packaging',
  'Bulk export cartons',
];

export default function OnionPowder() {
  return (
    <>
      <section className="pt-32 pb-16 bg-grove-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 text-sm text-grove-300 mb-3">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-cream-200">Products</span>
              <span>/</span>
              <span className="text-cream-200">Onion Powder</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-balance">Onion Powder</h1>
            <p className="mt-4 text-lg text-grove-200 max-w-2xl">
              Our onion powder is produced from carefully selected onions processed
              under hygienic conditions using modern dehydration technology. It offers
              excellent flavour, aroma, and consistency for food manufacturers and processors.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ImageCarousel images={productImages} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-display font-bold text-soil-900 mb-4">Product Features</h2>
                <ul className="space-y-2.5">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-grove-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-soil-600">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-soil-900 mb-4">Specifications</h2>
                <div className="bg-white rounded-xl border border-cream-200 overflow-hidden">
                  {specs.map(([label, value], i) => (
                    <div key={label} className={`flex items-center justify-between px-5 py-3.5 ${i % 2 === 0 ? 'bg-cream-50' : 'bg-white'}`}>
                      <span className="text-sm font-medium text-soil-700">{label}</span>
                      <span className="text-sm text-soil-900 font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-soil-900 mb-4">Applications</h2>
                <div className="flex flex-wrap gap-2.5">
                  {applications.map((app) => (
                    <span key={app} className="px-4 py-2 rounded-lg bg-cream-100 text-sm font-medium text-soil-700 border border-cream-200">{app}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 bg-white rounded-2xl p-8 border border-cream-200"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-grove-50 text-grove-600 flex items-center justify-center"><Package className="w-5 h-5" /></div>
              <h3 className="text-xl font-display font-bold text-soil-900">Packaging Options</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
              {packaging.map((pkg) => (
                <div key={pkg} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-grove-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-soil-600">{pkg}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 text-center bg-grove-800 rounded-2xl p-10 text-white"
          >
            <h2 className="text-2xl font-display font-bold text-balance">Interested in Onion Powder?</h2>
            <p className="mt-3 text-grove-200 max-w-lg mx-auto">Contact us for pricing, specifications, and custom packaging requirements.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-grove-800 font-semibold hover:bg-cream-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Request a Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#25D366] text-white font-semibold hover:bg-[#1ebe57] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
            </div>
          </motion.div>

          <ProductNav
            previous={{ label: 'Fresh Red Onion', to: '/products/fresh-red-onion' }}
            next={{ label: 'Green Bell Pepper', to: '/products/green-bell-pepper' }}
          />
        </div>
      </section>
    </>
  );
}
