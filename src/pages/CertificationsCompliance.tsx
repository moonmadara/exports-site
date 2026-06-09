import { motion } from 'framer-motion';
import { Ship, FileCheck, Award, CheckCircle2, ClipboardList } from 'lucide-react';

const registrations = [
  'GST',
  'APEDA Registration',
  'FSSAI License',
  'AD Code Registration',
  'ICEGATE Registration',
  'IEC Code',
];

const complianceDocs = [
  'Phytosanitary Certificate',
  'Certificate of Origin',
  'Fumigation Certificate (if required)',
  'Packing List',
  'Insurance Documents',
];

const shippingMethods = [
  { label: 'Sea Freight', desc: 'Cost-effective for large-volume shipments to any international port.' },
  { label: 'Air Freight', desc: 'Fast delivery for time-sensitive or perishable consignments.' },
  { label: 'Reefer Container Services', desc: 'Temperature-controlled containers for fresh produce requiring cold chain.' },
  { label: 'Temperature-Controlled Shipments', desc: 'End-to-end climate monitoring for sensitive agricultural products.' },
];

const incoterms = [
  { code: 'FOB', full: 'Free On Board', desc: 'Seller delivers goods on board the vessel at the port of shipment.' },
  { code: 'CIF', full: 'Cost, Insurance & Freight', desc: 'Seller covers cost, insurance, and freight to the destination port.' },
  { code: 'EXW', full: 'Ex Works', desc: 'Buyer bears all costs and risks from the seller\'s premises.' },
];

export default function CertificationsCompliance() {
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
              Compliance & Documentation
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-display font-bold text-balance">
              Certifications & Compliance
            </h1>
            <p className="mt-4 text-lg text-grove-200 max-w-2xl">
              Our export operations are fully compliant with Indian and
              international trade regulations. Every shipment is backed by
              proper documentation, certifications, and quality assurances.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* Certifications & Registrations */}
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
                Certifications & Registrations
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-cream-200">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-grove-50 text-grove-600 flex items-center justify-center">
                    <ClipboardList className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-soil-900">
                    Business Registrations
                  </h3>
                </div>
                <ul className="space-y-3">
                  {registrations.map((cert) => (
                    <li key={cert} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-grove-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-soil-700">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-cream-200">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-onion-50 text-onion-600 flex items-center justify-center">
                    <FileCheck className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-soil-900">
                    Product & Shipment Compliance
                  </h3>
                </div>
                <ul className="space-y-3">
                  {complianceDocs.map((doc) => (
                    <li key={doc} className="flex items-start gap-3">
                      <FileCheck className="w-5 h-5 text-onion-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-soil-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Logistics & Shipping */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-grove-100 text-grove-600 flex items-center justify-center">
                <Ship className="w-5 h-5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-soil-900">
                Logistics & Shipping
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {shippingMethods.map((method, i) => (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-cream-200 hover:border-grove-300 transition-colors group"
                >
                  <h3 className="text-lg font-display font-bold text-soil-900 group-hover:text-grove-700 transition-colors">
                    {method.label}
                  </h3>
                  <p className="mt-2 text-sm text-soil-500 leading-relaxed">
                    {method.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Incoterms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-grove-100 text-grove-600 flex items-center justify-center">
                <FileCheck className="w-5 h-5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-soil-900">
                Available Incoterms
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {incoterms.map((term, i) => (
                <motion.div
                  key={term.code}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-cream-200 text-center"
                >
                  <span className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-grove-50 text-grove-700 text-xl font-display font-bold mb-3">
                    {term.code}
                  </span>
                  <h3 className="text-sm font-semibold text-soil-900">
                    {term.full}
                  </h3>
                  <p className="mt-2 text-sm text-soil-500 leading-relaxed">
                    {term.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
