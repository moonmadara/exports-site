import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const highlights = [
  'Rooted in fertile land farming heritage since 1958',
  'State-of-the-art processing unit with 4 MT/hour capacity',
  'End-to-end quality control from seed selection to shipment',
  'Global footprint spanning Europe, Middle East & Asia',
  'Commitment to organic, non-GMO cultivation practices',
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/2165471/pexels-photo-2165471.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Agricultural heritage"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-grove-900/30 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-grove-600 text-white rounded-2xl p-6 shadow-lg hidden sm:block">
              <p className="text-3xl font-display font-bold">65+</p>
              <p className="text-sm text-grove-200">Years of Excellence</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-grove-600 text-sm font-semibold uppercase tracking-wider">
              Our Journey
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-soil-900 text-balance">
              From Fertile Fields to Global Markets
            </h2>
            <p className="mt-6 text-soil-600 leading-relaxed">
              What began as a family's deep connection to the fertile lands of
              Saurashtra has grown into a world-class groundnut processing and
              export enterprise. For over six decades, we have combined
              generational farming wisdom with modern technology to deliver
              peanuts of uncompromising quality.
            </p>
            <p className="mt-4 text-soil-600 leading-relaxed">
              Today, our state-of-the-art facility processes premium groundnuts
              for markets across Europe, the Middle East, and Asia — while
              staying true to the values of integrity, sustainability, and
              farmer-first partnerships that define our heritage.
            </p>

            <ul className="mt-8 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-grove-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-soil-700">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#products"
              className="mt-10 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-peanut-500 text-white font-semibold hover:bg-peanut-600 transition-all shadow-md hover:shadow-lg"
            >
              See Our Products
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
