import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface Product {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;
}

const products: Product[] = [
  {
    title: 'Bold / Runner Peanuts',
    subtitle: 'Premium snacking quality',
    description:
      'Large, uniform kernels with rich flavor — the gold standard for confectionery and premium snack manufacturing.',
    image:
      'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Best Seller',
  },
  {
    title: 'Java / Spanish Peanuts',
    subtitle: 'High oil content',
    description:
      'Round, small kernels prized for their exceptional oil yield and robust, nutty taste — ideal for crushing and oil extraction.',
    image:
      'https://images.pexels.com/photos/1638288/pexels-photo-1638288.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'High Yield',
  },
  {
    title: 'Cold-Pressed Peanut Oil',
    subtitle: 'Natural & unrefined',
    description:
      'Retains maximum nutrients and the distinct aroma of premium groundnuts — perfect for health-conscious culinary markets.',
    image:
      'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Organic',
  },
  {
    title: 'All-Natural Peanut Butter',
    subtitle: 'No additives, pure taste',
    description:
      'Stone-ground from select kernels with zero preservatives — a creamy, protein-rich spread for global retail and private label.',
    image:
      'https://images.pexels.com/photos/1099684/pexels-photo-1099684.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Retail Ready',
  },
  {
    title: 'Blanched & Red Skin Peanuts',
    subtitle: 'Processed to perfection',
    description:
      'Precision-blanched for a clean, uniform appearance or red-skin retained for whole-food markets and specialty applications.',
    image:
      'https://images.pexels.com/photos/144432/pexels-photo-144432.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Specialty',
  },
  {
    title: 'Specialty Varieties',
    subtitle: 'G20, Girnar-4, Organic',
    description:
      'Curated cultivars tailored for niche markets — higher protein, unique flavor profiles, and certified organic options.',
    image:
      'https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Premium',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Products() {
  return (
    <section id="products" className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-grove-600 text-sm font-semibold uppercase tracking-wider">
            Our Products
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-soil-900 text-balance">
            From Farm to Global Markets
          </h2>
          <p className="mt-4 text-soil-500 text-lg">
            Every product reflects decades of agricultural mastery and
            state-of-the-art processing — ensuring consistency, purity, and
            flavor.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.title}
              variants={cardVariants}
              className="group bg-white rounded-2xl overflow-hidden border border-cream-200 hover:border-grove-300 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 text-xs font-semibold text-grove-700 backdrop-blur-sm">
                  {product.tag}
                </span>
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold text-peanut-600 uppercase tracking-wider">
                  {product.subtitle}
                </p>
                <h3 className="mt-1 text-lg font-display font-bold text-soil-900 group-hover:text-grove-700 transition-colors">
                  {product.title}
                </h3>
                <p className="mt-2 text-sm text-soil-500 leading-relaxed">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-grove-600 group-hover:text-grove-700 transition-colors">
                  Learn more
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
