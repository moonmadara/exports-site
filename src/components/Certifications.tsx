import { motion } from 'framer-motion';
import { Award, BadgeCheck, FileCheck, Globe2 } from 'lucide-react';
import { type ReactNode } from 'react';

interface Cert {
  icon: ReactNode;
  name: string;
  description: string;
}

const certs: Cert[] = [
  {
    icon: <Award className="w-8 h-8" />,
    name: 'FSSAI',
    description: 'Food Safety and Standards Authority of India — ensuring every batch meets national food safety regulations.',
  },
  {
    icon: <BadgeCheck className="w-8 h-8" />,
    name: 'HACCP',
    description: 'Hazard Analysis & Critical Control Points — internationally recognized food safety management system.',
  },
  {
    icon: <FileCheck className="w-8 h-8" />,
    name: 'ISO 22000',
    description: 'International standard for food safety management — covering the entire supply chain from farm to fork.',
  },
  {
    icon: <Globe2 className="w-8 h-8" />,
    name: 'APEDA Registered',
    description: 'Agricultural & Processed Food Products Export Development Authority — enabling seamless global trade.',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-grove-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-grove-300 text-sm font-semibold uppercase tracking-wider">
            Certifications & Compliance
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-balance">
            Quality Backed by Global Standards
          </h2>
          <p className="mt-4 text-grove-200 text-lg">
            Our operations are audited and certified by leading international
            bodies — giving buyers confidence in every shipment.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-grove-800/50 rounded-2xl p-6 border border-grove-700/50 hover:border-grove-500/50 transition-colors group backdrop-blur-sm"
            >
              <div className="w-14 h-14 rounded-xl bg-grove-700/50 text-grove-300 flex items-center justify-center group-hover:bg-grove-600/50 group-hover:text-grove-200 transition-colors">
                {cert.icon}
              </div>
              <h3 className="mt-4 text-xl font-display font-bold text-white">
                {cert.name}
              </h3>
              <p className="mt-2 text-sm text-grove-300 leading-relaxed">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
