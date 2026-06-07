import { motion } from 'framer-motion';
import { CheckCircle2, MapPin, Users, Cog, Award } from 'lucide-react';

const nashikReasons = [
  'Excellent shelf life',
  'High dry matter content',
  'Attractive red color',
  'Strong flavor',
  'Suitable for long-distance export',
];

const sourcingRegions = [
  'Lasalgaon',
  'Niphad',
  'Pimpalgaon Baswant',
  'Chandwad',
  'Sinnar',
  'Yeola',
];

const freshOnionSteps = [
  'Initial farm inspection',
  'Cleaning',
  'Sorting',
  'Size grading',
  'Quality inspection',
  'Packaging',
  'Final dispatch verification',
];

const powderSteps = [
  'Dehydrated onion selection',
  'Grinding',
  'Sieving',
  'Standardization',
  'Moisture testing',
  'Quality verification',
  'Food-grade packaging',
];

const certifications = [
  'APEDA Registration',
  'AD Code Registration',
  'ICEGATE Registration',
];

const documents = [
  'Phytosanitary Certificate',
  'Certificate of Origin',
  'Fumigation Certificate',
];

export default function SourcingQuality() {
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
              Quality Assurance
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-display font-bold text-balance">
              Sourcing & Quality Management
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* Sourcing Strength */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-grove-100 text-grove-600 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-soil-900">
                Our Sourcing Strength
              </h2>
            </div>
            <p className="text-soil-600 leading-relaxed max-w-3xl">
              Our onions are carefully sourced from selected agricultural regions
              within the Nashik district ({sourcingRegions.join(', ')}).
            </p>

            <div className="mt-8 grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-cream-200">
                <h3 className="text-xl font-display font-bold text-soil-900 mb-4">
                  Why Nashik Onions?
                </h3>
                <ul className="space-y-2.5">
                  {nashikReasons.map((reason) => (
                    <li key={reason} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-grove-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-soil-700">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Onion fields"
                  className="w-full h-full object-cover min-h-[260px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-grove-900/40 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Farmer Relationships */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 sm:p-10 border border-cream-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-onion-100 text-onion-600 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-soil-900">
                Farmer Relationships
              </h2>
            </div>
            <p className="text-soil-600 leading-relaxed max-w-3xl">
              We work closely with farmers to reduce middlemen, maintain direct
              procurement, promote quality cultivation, and support fair pricing.
            </p>
          </motion.div>

          {/* Processing Standards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-grove-100 text-grove-600 flex items-center justify-center">
                <Cog className="w-5 h-5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-soil-900">
                Processing Standards
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-cream-200">
                <h3 className="text-xl font-display font-bold text-soil-900 mb-4">
                  Fresh Onion Processing
                </h3>
                <ol className="space-y-2">
                  {freshOnionSteps.map((step, i) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-grove-100 text-grove-700 flex items-center justify-center text-xs font-bold shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-sm text-soil-700 pt-0.5">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-cream-200">
                <h3 className="text-xl font-display font-bold text-soil-900 mb-4">
                  Onion Powder Processing
                </h3>
                <ol className="space-y-2">
                  {powderSteps.map((step, i) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-onion-100 text-onion-700 flex items-center justify-center text-xs font-bold shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-sm text-soil-700 pt-0.5">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-grove-100 text-grove-600 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-soil-900">
                Certifications & Compliance
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-cream-200">
                <h3 className="text-lg font-display font-bold text-soil-900 mb-4">
                  Registrations
                </h3>
                <ul className="space-y-2.5">
                  {certifications.map((cert) => (
                    <li key={cert} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-grove-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-soil-700">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-cream-200">
                <h3 className="text-lg font-display font-bold text-soil-900 mb-4">
                  Export Documentation
                </h3>
                <ul className="space-y-2.5">
                  {documents.map((doc) => (
                    <li key={doc} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-onion-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-soil-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
