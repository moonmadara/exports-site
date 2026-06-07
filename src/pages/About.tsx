import { motion } from 'framer-motion';
import { Eye, Target, CheckCircle2 } from 'lucide-react';

const missions = [
  'Deliver consistent export-quality products',
  'Build long-term relationships with buyers',
  'Support farming communities',
  'Ensure transparent business practices',
  'Maintain international quality standards',
  'Create value throughout the supply chain',
];

export default function About() {
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
            <span className="text-grove-300 text-sm font-semibold uppercase tracking-wider">
              About Us
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-display font-bold text-balance">
              About Sattvika Overseas
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-soil-600 leading-relaxed text-lg">
                Sattvika Overseas is an Indian agricultural export company
                headquartered in Thane, Mumbai, Maharashtra. Our journey began
                decades ago with a simple vision — to connect India's
                agricultural excellence with international markets through
                quality, trust, and long-term partnerships.
              </p>
              <p className="mt-4 text-soil-600 leading-relaxed">
                We specialize in the international supply of Fresh Red Onions
                and White Onion Powder to Importers, Wholesalers, Supermarket
                Chains, Food Processing Industries, and Hospitality Businesses.
              </p>

              <div className="relative mt-8 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/2165471/pexels-photo-2165471.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Agricultural sourcing"
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-grove-900/30 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-10"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-grove-100 text-grove-600 flex items-center justify-center">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-soil-900">
                    Our Vision
                  </h2>
                </div>
                <p className="text-soil-600 leading-relaxed">
                  To become one of India's most trusted agricultural export
                  companies by delivering premium-quality farm products to
                  global markets while supporting sustainable farming
                  communities.
                </p>
              </div>

              <div className="h-px bg-cream-300" />

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-onion-100 text-onion-600 flex items-center justify-center">
                    <Target className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-soil-900">
                    Our Mission
                  </h2>
                </div>
                <ul className="space-y-3">
                  {missions.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-grove-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-soil-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
