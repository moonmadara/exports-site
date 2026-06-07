import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

interface Leader {
  name: string;
  role: string;
  description: string;
  image: string;
}

const leaders: Leader[] = [
  {
    name: 'Mahavir Sharma',
    role: 'Managing Director',
    description:
      'The visionary who started as a farmer and built a global export enterprise — bringing six decades of agricultural mastery and relentless dedication to every decision.',
    image:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Aman Sharma',
    role: 'CEO & Managing Head',
    description:
      'Leading global growth and strategic partnerships — expanding our footprint across Europe, the Middle East, and Asia while maintaining the quality our clients trust.',
    image:
      'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Manish Sharma',
    role: 'Chief Financial Officer',
    description:
      'Driving financial strategy and operational efficiency — ensuring sustainable growth, smart investments, and rock-solid fiscal governance for long-term success.',
    image:
      'https://images.pexels.com/photos/3777934/pexels-photo-3777934.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-grove-600 text-sm font-semibold uppercase tracking-wider">
            Leadership
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-soil-900 text-balance">
            Guided by Experience, Driven by Vision
          </h2>
          <p className="mt-4 text-soil-500 text-lg">
            Our leadership combines deep agricultural roots with modern business
            acumen — steering PLACEHOLDER toward global excellence.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group text-center"
            >
              <div className="relative mx-auto w-48 h-48 rounded-full overflow-hidden ring-4 ring-cream-200 group-hover:ring-grove-300 transition-all duration-300 shadow-lg">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="mt-6 text-xl font-display font-bold text-soil-900">
                {leader.name}
              </h3>
              <p className="mt-1 text-sm font-semibold text-peanut-600">
                {leader.role}
              </p>
              <p className="mt-3 text-sm text-soil-500 leading-relaxed max-w-xs mx-auto">
                {leader.description}
              </p>
              <button
                className="mt-4 inline-flex items-center gap-1.5 text-sm text-grove-600 hover:text-grove-700 transition-colors font-medium"
                aria-label={`${leader.name} LinkedIn`}
              >
                <Linkedin className="w-4 h-4" />
                Connect
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
