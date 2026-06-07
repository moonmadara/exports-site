import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/2589457/pexels-photo-2589457.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-soil-950/80 via-grove-950/70 to-soil-950/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-soil-950/40 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-grove-600/20 border border-grove-400/30 text-grove-300 text-sm font-medium backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-grove-400 animate-pulse" />
              Trusted Since 1958
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] text-balance"
          >
            Premium Groundnut Exporters in{' '}
            <span className="text-peanut-400">India.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-6 text-lg sm:text-xl text-cream-300 leading-relaxed max-w-xl"
          >
            Delivering bulk, high-quality peanuts and peanut-derived products
            globally, backed by 65+ years of farming expertise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-peanut-500 text-white font-semibold hover:bg-peanut-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Explore Products
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-cream-400/30 text-cream-200 font-semibold hover:bg-white/10 hover:border-cream-400/50 transition-all backdrop-blur-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Chat with Us
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-cream-400/40 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-3 rounded-full bg-cream-400/60" />
        </motion.div>
      </div>
    </section>
  );
}
