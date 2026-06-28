import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Eye,
  Target,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';

const WHATSAPP_NUMBER = '919372956041';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const missions = [
  'Deliver consistent export-quality products to international markets',
  'Build long-term relationships with global buyers',
  'Support farming communities',
  'Promote sustainable and responsible agricultural sourcing',
  'Maintain international standards in food safety, quality assurance, and export compliance',
  'Create value throughout the supply chain',
];

const customers = [
  'Importers',
  'Wholesalers',
  'Supermarket Chains',
  'Food Processing Industries',
  'Hospitality Businesses',
  'Restaurant Supply Chains',
  'Catering Companies',
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
                Sattvika Overseas is an agricultural export company based in
                Thane, Maharashtra, India. We focus on sourcing, processing,
                packaging, and exporting premium agricultural products to
                international markets.
              </p>
              <p className="mt-4 text-soil-600 leading-relaxed">
                Our products are sourced from our own agricultural network and
                carefully selected farms across Maharashtra practicing
                responsible agricultural methods, quality-focused cultivation,
                controlled and monitored farming practices. Through close
                collaboration with farmers and agricultural communities, we
                ensure that every product meets the quality requirements of
                international buyers.
              </p>
              <p className="mt-4 text-soil-600 leading-relaxed">
                We combine traditional agricultural expertise with modern
                quality-control practices to supply products that consistently
                meet export specifications. Our export operations are designed
                to meet the requirements of international buyers seeking
                consistency, food safety, reliable documentation, and
                competitive pricing.
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
              {/* Specialization */}
              <div>
                <h2 className="text-2xl font-display font-bold text-soil-900 mb-4">
                  Our Specialization
                </h2>
                <p className="text-soil-600 leading-relaxed">
                  We specialize in sourcing and exporting premium-quality
                  agricultural goods from Maharashtra's most productive farming
                  regions. Our expertise lies in identifying export-grade
                  produce, implementing strict quality control procedures,
                  ensuring hygienic processing, and delivering products that
                  meet the expectations of international buyers.
                </p>
                <p className="mt-3 text-soil-600 leading-relaxed">
                  Through our strong network of farmers, modern processing
                  facilities, and efficient logistics partners, we provide
                  consistent quality, competitive pricing, timely deliveries,
                  and customized packaging solutions for importers worldwide.
                </p>
              </div>

              <div className="h-px bg-cream-300" />

              {/* Customers */}
              <div>
                <h2 className="text-2xl font-display font-bold text-soil-900 mb-4">
                  Our Products Are Supplied To
                </h2>
                <div className="flex flex-wrap gap-2.5">
                  {customers.map((c) => (
                    <span
                      key={c}
                      className="px-4 py-2 rounded-lg bg-cream-100 text-sm font-medium text-soil-700 border border-cream-200"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="h-px bg-cream-300" />

              {/* Vision */}
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
                  To become a globally trusted Indian agricultural export
                  company known for premium quality, ethical sourcing,
                  sustainable farming partnerships, and exceptional customer
                  service to global markets.
                </p>
              </div>

              <div className="h-px bg-cream-300" />

              {/* Mission */}
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

      {/* Our Journey */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <span className="text-grove-600 text-sm font-semibold uppercase tracking-wider">
              Our Journey
            </span>
            <h2 className="mt-3 text-3xl font-display font-bold text-soil-900 text-balance">
              From Vision to Global Reach
            </h2>
            <p className="mt-6 text-soil-600 leading-relaxed">
              Our journey began decades ago and was established with a simple
              vision — to connect India's agricultural excellence with
              international markets through quality, trust, and long-term
              partnerships. Our commitment is not only to deliver superior
              products but also to create lasting value for farmers, buyers,
              and business partners by building relationships founded on
              integrity, reliability, and mutual growth.
            </p>
            <p className="mt-4 text-soil-600 leading-relaxed">
              Recognizing the growing global demand for premium agricultural
              commodities, we built a strong sourcing network across
              Maharashtra's leading agricultural regions. Through direct farmer
              relationships, quality inspections, modern processing facilities,
              and export-focused operations, we have created a reliable supply
              chain capable of serving buyers worldwide.
            </p>
            <p className="mt-4 text-soil-600 leading-relaxed">
              Today, Sattvika Overseas continues to strengthen its presence in
              international markets while remaining committed to quality,
              integrity, and customer satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-grove-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-display font-bold text-white">
              Ready to Partner with Us?
            </h2>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                to="/products/fresh-red-onion"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-grove-800 font-semibold hover:bg-cream-100 transition-all shadow-lg"
              >
                View Products
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#25D366] text-white font-semibold hover:bg-[#1ebe57] transition-all shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
