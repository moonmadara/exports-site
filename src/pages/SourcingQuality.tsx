import { motion } from 'framer-motion';
import {
  CheckCircle2,
  MapPin,
  Users,
  Cog,
  Award,
  FileCheck,
  ShieldCheck,
  Leaf,
} from 'lucide-react';

const nashikRegions = [
  'Lasalgaon',
  'Niphad',
  'Pimpalgaon Baswant',
  'Chandwad',
  'Sinnar',
  'Yeola',
];

const nashikReasons = [
  'Excellent shelf life',
  'High dry matter content',
  'Attractive red color',
  'Strong flavor and pungency',
  'Suitable for long-distance export',
  'High market acceptance in Middle East and Asia',
];

const capsicumRegions = [
  'Nashik',
  'Pune',
  'Satara',
  'Sangli',
  'Ahmednagar',
];

const capsicumReasons = [
  'Favourable Growing Conditions',
  'Protected Cultivation Practices',
  'Superior Product Quality',
  'Reliable Supply Volumes',
  'Experienced Farming Network',
  'Strong Post-Harvest Infrastructure',
  'Efficient Logistics Connectivity',
  'Export-Oriented Production',
];

const freshOnionSteps = [
  'Initial farm inspection',
  'Cleaning & Sorting',
  'Removal of damaged bulbs',
  'Size grading',
  'Quality inspection',
  'Pre-shipment Inspection',
  'Export Packaging',
  'Final dispatch verification',
];

const powderSteps = [
  'Selection of premium & suitable onions',
  'Washing & Cleaning',
  'Controlled dehydration',
  'Grinding & milling',
  'Quality testing',
  'Particle size standardization',
  'Moisture testing',
  'Quality verification',
  'Food-grade hygienic packaging',
  'Properly cured',
];

const pepperSteps = [
  'Harvesting at optimum maturity',
  'Cleaning and washing',
  'Sorting and size grading',
  'Defect removal',
  'Quality inspection',
  'Cold-chain storage',
  'Export packaging',
];

const qualityAssurance = [
  'Physical inspection',
  'Quality grading',
  'Size verification',
  'Freshness assessment',
  'Packaging inspection',
  'Traceability check',
  'Export compliance review',
  'Pre-dispatch verification',
];

const certifications = [
  'GST',
  'APEDA Registration',
  'FSSAI License',
  'AD Code Registration',
  'ICEGATE Registration',
  'IEC Code',
];

const documents = [
  'Phytosanitary Certificate',
  'Certificate of Origin',
  'Fumigation Certificate (if required)',
  'Packing List',
  'Insurance Documents',
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
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-grove-100 text-grove-600 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-soil-900">
                Our Sourcing Strength
              </h2>
            </div>

            {/* Nashik Onions */}
            <div className="mb-12">
              <h3 className="text-xl font-display font-bold text-soil-900 mb-3">
                Export Quality Onions
              </h3>
              <p className="text-soil-600 leading-relaxed max-w-3xl">
                Our onions are sourced from selected agricultural regions within
                the Nashik district of Maharashtra, India's most renowned
                onion-producing region.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {nashikRegions.map((r) => (
                  <span
                    key={r}
                    className="px-3 py-1.5 rounded-lg bg-onion-50 text-sm font-medium text-onion-700 border border-onion-200"
                  >
                    {r}
                  </span>
                ))}
              </div>

              <div className="mt-6 grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-8 border border-cream-200">
                  <h4 className="text-lg font-display font-bold text-soil-900 mb-4">
                    Why Nashik Onions?
                  </h4>
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
            </div>

            {/* Green Bell Peppers */}
            <div>
              <h3 className="text-xl font-display font-bold text-soil-900 mb-3">
                Green Bell Peppers (Capsicum)
              </h3>
              <p className="text-soil-600 leading-relaxed max-w-3xl">
                Sattvika Overseas strategically sources premium export-quality
                green bell peppers from the major regions of Maharashtra. These
                regions are recognized for their favourable climatic conditions,
                skilled farming communities, modern cultivation practices, and
                strong agricultural infrastructure.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {capsicumRegions.map((r) => (
                  <span
                    key={r}
                    className="px-3 py-1.5 rounded-lg bg-grove-50 text-sm font-medium text-grove-700 border border-grove-200"
                  >
                    {r}
                  </span>
                ))}
              </div>

              <div className="mt-6 bg-white rounded-2xl p-8 border border-cream-200">
                <h4 className="text-lg font-display font-bold text-soil-900 mb-4">
                  Why Maharashtra Region Bell Peppers?
                </h4>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
                  {capsicumReasons.map((reason) => (
                    <div key={reason} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-grove-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-soil-700">{reason}</span>
                    </div>
                  ))}
                </div>
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
                Farmer Relationships & Community Development
              </h2>
            </div>
            <p className="text-soil-600 leading-relaxed max-w-3xl">
              At Sattvika Overseas, farmers are the foundation of our business.
              We maintain long-term, strong and reliable relationships with
              farming communities across Maharashtra and work directly with
              growers whenever possible.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
              {[
                'Maintaining direct procurement relationships',
                'Encouraging responsible agricultural practices',
                'Promoting quality-focused cultivation',
                'Supporting fair and transparent pricing',
                'Creating long-term purchasing commitments',
                'Reducing unnecessary middlemen',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Leaf className="w-4 h-4 text-grove-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-soil-700">{item}</span>
                </div>
              ))}
            </div>
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
                Processing & Quality Management
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-8 border border-cream-200">
                <h3 className="text-lg font-display font-bold text-soil-900 mb-4">
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
                <h3 className="text-lg font-display font-bold text-soil-900 mb-4">
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
              <div className="bg-white rounded-2xl p-8 border border-cream-200">
                <h3 className="text-lg font-display font-bold text-soil-900 mb-4">
                  Green Bell Pepper Processing
                </h3>
                <ol className="space-y-2">
                  {pepperSteps.map((step, i) => (
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
            </div>
          </motion.div>

          {/* Quality Assurance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-grove-50 rounded-2xl p-8 sm:p-10 border border-grove-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-grove-100 text-grove-600 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-soil-900">
                Quality Assurance
              </h2>
            </div>
            <p className="text-soil-600 mb-6">Every shipment undergoes:</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-2.5">
              {qualityAssurance.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-grove-600 mt-0.5 shrink-0" />
                  <span className="text-sm text-soil-700">{item}</span>
                </div>
              ))}
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
                  Product & Shipment Compliance
                </h3>
                <ul className="space-y-2.5">
                  {documents.map((doc) => (
                    <li key={doc} className="flex items-start gap-3">
                      <FileCheck className="w-5 h-5 text-onion-500 mt-0.5 shrink-0" />
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
