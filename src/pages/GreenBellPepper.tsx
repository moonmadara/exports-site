import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Package, Ruler, MessageCircle } from 'lucide-react';
import ImageCarousel from '../components/ImageCarousel';
import ProductNav from '../components/ProductNav';

const WHATSAPP_NUMBER = '919372956041';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const productImages = [
  { src: '/images/green-bell-pepper/Pepper1.jpeg', alt: 'Green bell peppers' },
  { src: '/images/green-bell-pepper/Pepper2.jpeg', alt: 'Bell pepper harvest' },
  { src: '/images/green-bell-pepper/Pepper3.jpeg', alt: 'Fresh vegetables' },
  { src: '/images/green-bell-pepper/Pepper4.jpeg', alt: 'Bell pepper variety' },
];

const specs: [string, string][] = [
  ['Product Name', 'Fresh Green Bell Pepper (Capsicum)'],
  ['Botanical Name', 'Capsicum annuum'],
  ['Origin', 'Maharashtra, India'],
  ['Colour', 'Uniform Bright Green'],
  ['Shape', 'Blocky Bell Shape'],
  ['Texture', 'Firm and Crisp'],
  ['Taste', 'Mild, Fresh Flavour'],
  ['Harvesting Stage', 'Commercial Mature Green Stage'],
  ['Freshness', 'Freshly Harvested'],
  ['Shelf Life', '2\u20134 Weeks Under Proper Cold Storage'],
  ['Pest Damage', 'Not Accepted'],
  ['Decay', 'Not Accepted'],
  ['Defects', 'Minimal'],
  ['Quality', 'Export Grade'],
];

const sizes = [
  { label: 'Small Grade', range: '80\u2013100 mm' },
  { label: 'Medium Grade', range: '100\u2013140 mm' },
  { label: 'Large Grade', range: '140\u2013180 mm' },
  { label: 'Premium Grade', range: '180 mm+' },
];

const packaging = [
  '4 kg Net Weight',
  '5 kg Net Weight',
  '6 kg Net Weight',
  '8 kg Net Weight',
  '10 kg Net Weight',
  'Export-Grade 5-Ply Corrugated Cartons',
  'Ventilated Boxes',
  'Food Grade Export Packaging',
  'Customized Buyer Packaging',
];

const applications = [
  'Supermarkets',
  'Hotels',
  'Restaurants',
  'Food Service Industry',
  'Fresh Produce Markets',
];

export default function GreenBellPepper() {
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
              <span className="text-cream-200">Green Bell Pepper</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-balance">
              Premium Green Bell Pepper
            </h1>
            <p className="mt-4 text-lg text-grove-200 max-w-2xl">
              Sattvika Overseas supplies fresh export-quality green bell peppers
              sourced from carefully selected farms in Maharashtra known for producing
              healthy, vibrant, and high-quality vegetables.
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
                <h2 className="text-2xl font-display font-bold text-soil-900 mb-4">Product Specifications</h2>
                <div className="bg-white rounded-xl border border-cream-200 overflow-hidden">
                  {specs.map(([label, value], i) => (
                    <div key={label} className={`flex items-center justify-between px-5 py-3 ${i % 2 === 0 ? 'bg-cream-50' : 'bg-white'}`}>
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

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 border border-cream-200"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-grove-50 text-grove-600 flex items-center justify-center"><Ruler className="w-5 h-5" /></div>
                <h3 className="text-xl font-display font-bold text-soil-900">Available Sizes</h3>
              </div>
              <div className="space-y-3">
                {sizes.map((s) => (
                  <div key={s.label} className="flex items-center justify-between px-4 py-3 rounded-lg bg-cream-50 border border-cream-200">
                    <span className="text-sm font-medium text-soil-700">{s.label}</span>
                    <span className="text-sm font-semibold text-grove-700">{s.range}</span>
                  </div>
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
                <div className="w-10 h-10 rounded-xl bg-onion-50 text-onion-600 flex items-center justify-center"><Package className="w-5 h-5" /></div>
                <h3 className="text-xl font-display font-bold text-soil-900">Packaging Options</h3>
              </div>
              <ul className="space-y-2.5">
                {packaging.map((pkg) => (
                  <li key={pkg} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-grove-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-soil-600">{pkg}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-grove-600 font-medium">Cold Chain Available: Yes</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 text-center bg-grove-800 rounded-2xl p-10 text-white"
          >
            <h2 className="text-2xl font-display font-bold text-balance">Interested in Green Bell Peppers?</h2>
            <p className="mt-3 text-grove-200 max-w-lg mx-auto">Contact us for pricing, availability, and custom packaging requirements.</p>
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
            previous={{ label: 'Onion Powder', to: '/products/onion-powder' }}
          />
        </div>
      </section>
    </>
  );
}
