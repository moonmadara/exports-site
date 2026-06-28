import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  MapPin,
  ShieldCheck,
  DollarSign,
  TrendingUp,
  Users,
  FileCheck,
  MessageCircle,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { type ReactNode } from 'react';

const WHATSAPP_NUMBER = '919372956041';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const heroImages = [
  {
    src: '/images/carousel/Home1.jpeg',
    alt: 'Agricultural fields in Maharashtra',
  },
  {
    src: '/images/carousel/Home2.jpeg',
    alt: 'Fresh red onions',
  },
  {
    src: '/images/carousel/Home3.jpeg',
    alt: 'Fresh green bell peppers',
  },
  {
    src: '/images/carousel/Home4.jpeg',
    alt: 'Agricultural produce',
  },
];

interface Highlight {
  icon: ReactNode;
  title: string;
  description: string;
}

const highlights: Highlight[] = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Direct Farmer Sourcing',
    description: 'Procured directly from primary agricultural regions, eliminating middlemen.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Export-Grade Quality Control',
    description: 'Rigorous inspection, sorting, and grading at every stage — from farm to dispatch.',
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: 'Competitive Pricing',
    description: 'Direct farmer relationships deliver premium quality at competitive rates.',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Consistent & Reliable Supply',
    description: 'Year-round availability backed by robust procurement networks across Maharashtra.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Long-Term Partnerships',
    description: 'We strive to become a reliable sourcing partner, not just a supplier.',
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: 'Complete Export Documentation',
    description: 'Full compliance with phytosanitary, origin, and fumigation certifications.',
  },
];

const buyerBenefits = [
  'Consistent quality',
  'Competitive pricing',
  'Export documentation support',
  'Traceable sourcing',
  'Reliable supply volumes',
  'Flexible order quantities',
  'Private labeling options',
  'Customized packaging',
  'Timely communication',
  'Pre-shipment quality verification',
];

export default function Home() {
  const [heroIdx, setHeroIdx] = useState(0);

  const heroPrev = useCallback(
    () => setHeroIdx((i) => (i === 0 ? heroImages.length - 1 : i - 1)),
    [heroImages.length],
  );
  const heroNext = useCallback(
    () => setHeroIdx((i) => (i === heroImages.length - 1 ? 0 : i + 1)),
    [heroImages.length],
  );

  useEffect(() => {
    const timer = setInterval(heroNext, 5000);
    return () => clearInterval(timer);
  }, [heroNext]);

  return (
    <>
      {/* Hero with Carousel */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {heroImages.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              i === heroIdx ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${img.src})` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-soil-950/85 via-grove-950/75 to-soil-950/60" />
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
                Premium Agricultural Exports
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] text-balance"
            >
              Welcome to{' '}
              <span className="text-onion-400">Sattvika Overseas</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-6 text-lg sm:text-xl text-cream-300 leading-relaxed max-w-xl"
            >
              Delivering India's Agricultural Excellence to Global Markets.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-onion-500 text-white font-semibold hover:bg-onion-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Explore Our Products
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#25D366] text-white font-semibold hover:bg-[#1ebe57] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-cream-400/30 text-cream-200 font-semibold hover:bg-white/10 hover:border-cream-400/50 transition-all backdrop-blur-sm"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Hero Carousel Controls */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
          <button
            onClick={heroPrev}
            aria-label="Previous slide"
            className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/25 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-2">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setHeroIdx(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`rounded-full transition-all ${
                  i === heroIdx
                    ? 'bg-white w-7 h-2'
                    : 'bg-white/40 w-2 h-2 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
          <button
            onClick={heroNext}
            aria-label="Next slide"
            className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/25 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-soil-900 text-balance">
              Connecting Global Markets with Premium Indian Agriculture
            </h2>
            <p className="mt-6 text-soil-600 leading-relaxed text-lg">
              At Sattvika Overseas, we are committed to connecting global
              markets with premium-quality agricultural products sourced from
              the fertile farming regions of Maharashtra, India. Our mission is
              to deliver naturally grown, carefully selected, and export-grade
              agricultural commodities that meet international standards of
              quality, freshness, food safety, and reliability.
            </p>
            <p className="mt-4 text-soil-600 leading-relaxed">
              With a strong focus on customer satisfaction, ethical sourcing,
              and long-term partnerships, every shipment reflects our commitment
              through a supply chain built on quality, transparency,
              consistency, and trust directly with farmers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Buyers Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="text-grove-600 text-sm font-semibold uppercase tracking-wider">
              Why Buyers Choose Us
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-soil-900 text-balance">
              Built on Quality, Driven by Trust
            </h2>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-cream-50 rounded-2xl p-6 border border-cream-200 hover:border-grove-300 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-grove-50 text-grove-600 flex items-center justify-center group-hover:bg-grove-100 transition-colors">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-lg font-display font-bold text-soil-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-soil-500 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-cream-100">
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
              Premium Agricultural Products
            </h2>
            <p className="mt-4 text-soil-500 text-lg">
              We specialize in sourcing and exporting premium-quality
              agricultural goods from Maharashtra's most productive farming
              regions.
            </p>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                to: '/products/fresh-red-onion',
                title: 'Fresh Red Onion',
                tag: 'Fresh Produce',
                desc: 'Sourced from Nashik, Maharashtra. Uniform shape, full maturity, export quality, and long shelf life.',
                images: [
                  { src: 'https://images.pexels.com/photos/539703/pexels-photo-539703.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Fresh Red Onions' },
                  { src: 'https://images.pexels.com/photos/326333/pexels-photo-326333.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Red onion harvest' },
                  { src: 'https://images.pexels.com/photos/144432/pexels-photo-144432.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Onion variety' },
                ],
              },
              {
                to: '/products/onion-powder',
                title: 'Onion Powder',
                tag: 'Processed',
                desc: 'Fine mesh texture, strong aroma, zero additives, low moisture, and long storage stability for food industries.',
                images: [
                  { src: 'https://images.pexels.com/photos/28025270/pexels-photo-28025270.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Onion powder' },
                  { src: 'https://images.pexels.com/photos/4637/sunset-landscape-agriculture-nature.jpg?auto=compress&cs=tinysrgb&w=600', alt: 'Agricultural landscape' },
                  { src: 'https://images.pexels.com/photos/775912/pexels-photo-775912.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Spice processing' },
                ],
              },
              {
                to: '/products/green-bell-pepper',
                title: 'Green Bell Pepper',
                tag: 'Fresh Vegetables',
                desc: 'Export-quality capsicum — firm, crisp, uniform bright green, available in multiple size grades.',
                images: [
                  { src: 'https://images.pexels.com/photos/1153690/pexels-photo-1153690.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Green bell peppers' },
                  { src: 'https://images.pexels.com/photos/3733944/pexels-photo-3733944.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Bell pepper harvest' },
                  { src: 'https://images.pexels.com/photos/209339/pexels-photo-209339.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Fresh vegetables' },
                ],
              },
            ].map((product, i) => (
              <motion.div
                key={product.to}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Buyers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <span className="text-grove-600 text-sm font-semibold uppercase tracking-wider">
              What We Offer
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-soil-900 text-balance">
              Information Buyers Need
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-12 max-w-3xl mx-auto bg-cream-50 rounded-2xl p-8 border border-cream-200"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {buyerBenefits.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-grove-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-soil-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-grove-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-display font-bold text-white text-balance">
              Together, We Grow Global Partnerships
            </h2>
            <p className="mt-4 text-grove-200 text-lg max-w-2xl mx-auto">
              Ready to source premium agricultural products from Maharashtra?
              Get in touch with us today.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-grove-800 font-semibold hover:bg-cream-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#25D366] text-white font-semibold hover:bg-[#1ebe57] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
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

/* Inline product card with mini carousel */
import { useState as useCardState } from 'react';

function ProductCard({
  product,
}: {
  product: {
    to: string;
    title: string;
    tag: string;
    desc: string;
    images: { src: string; alt: string }[];
  };
}) {
  const [idx, setIdx] = useCardState(0);
  const total = product.images.length;

  return (
    <Link
      to={product.to}
      className="group block bg-white rounded-2xl overflow-hidden border border-cream-200 hover:border-grove-300 shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <div
        className="relative h-52 overflow-hidden"
        onMouseEnter={() => {}}
      >
        {product.images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              i === idx ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
        <span className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-white/90 text-xs font-semibold backdrop-blur-sm">
          {product.tag}
        </span>
        {total > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
            {product.images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIdx(i);
                }}
                aria-label={`Show image ${i + 1}`}
                className={`rounded-full transition-all ${
                  i === idx
                    ? 'bg-white w-5 h-2'
                    : 'bg-white/50 w-2 h-2 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-display font-bold text-soil-900 group-hover:text-grove-700 transition-colors">
          {product.title}
        </h3>
        <p className="mt-2 text-sm text-soil-500 leading-relaxed">
          {product.desc}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-grove-600 group-hover:text-grove-700 transition-colors">
          View Details
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
