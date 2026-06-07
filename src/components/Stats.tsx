import { motion } from 'framer-motion';
import { Clock, Gauge, Leaf, ShieldCheck } from 'lucide-react';
import { type ReactNode } from 'react';

interface StatItem {
  icon: ReactNode;
  value: string;
  label: string;
}

const stats: StatItem[] = [
  {
    icon: <Clock className="w-6 h-6" />,
    value: '65+',
    label: 'Years of Farming Expertise',
  },
  {
    icon: <Gauge className="w-6 h-6" />,
    value: '4 MT/Hr',
    label: 'Modern Processing Capacity',
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    value: '100%',
    label: 'Organic & Non-GMO Focus',
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    value: 'FSSAI, HACCP & ISO',
    label: 'Certified Operations',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Stats() {
  return (
    <section className="relative -mt-20 z-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 shadow-lg shadow-soil-200/20 border border-cream-200 hover:border-grove-300 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-grove-50 text-grove-600 flex items-center justify-center group-hover:bg-grove-100 transition-colors">
                {stat.icon}
              </div>
              <p className="mt-4 text-2xl font-display font-bold text-soil-900">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-soil-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
