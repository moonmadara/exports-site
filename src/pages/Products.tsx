import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface ProductData {
  to: string;
  title: string;
  tag: string;
  tagColor: string;
  desc: string;
  images: { src: string; alt: string }[];
  highlights: string[];
}

const products: ProductData[] = [
  {
    to: '/products/fresh-red-onion',
    title: 'Fresh Red Onion',
    tag: 'Fresh Produce',
    tagColor: 'bg-onion-50 text-onion-700 border-onion-200',
    desc: 'Sourced from Nashik, Maharashtra. Uniform shape, full maturity, export quality, and long shelf life. Available in sizes from 35mm to 65mm+.',
    images: [
      { src: 'https://images.pexels.com/photos/539703/pexels-photo-539703.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Fresh Red Onions' },
      { src: 'https://images.pexels.com/photos/326333/pexels-photo-326333.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Red onion harvest' },
      { src: 'https://images.pexels.com/photos/144432/pexels-photo-144432.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Onion variety' },
    ],
    highlights: ['99% Purity', 'Long Shelf Life', 'Fully Mature', '5 Size Grades'],
  },
  {
    to: '/products/onion-powder',
    title: 'Onion Powder',
    tag: 'Processed',
    tagColor: 'bg-cream-200 text-soil-700 border-cream-300',
    desc: 'Fine mesh texture, strong natural aroma, zero additives, low moisture, and long storage stability for food industries.',
    images: [
      { src: 'https://images.pexels.com/photos/28025270/pexels-photo-28025270.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Onion powder' },
      { src: 'https://images.pexels.com/photos/775912/pexels-photo-775912.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Spice processing' },
      { src: 'https://images.pexels.com/photos/4637/sunset-landscape-agriculture-nature.jpg?auto=compress&cs=tinysrgb&w=600', alt: 'Agricultural landscape' },
    ],
    highlights: ['80-120 Mesh', 'Moisture \u2264 6%', 'Zero Additives', 'Private Label Options'],
  },
  {
    to: '/products/green-bell-pepper',
    title: 'Green Bell Pepper',
    tag: 'Fresh Vegetables',
    tagColor: 'bg-grove-50 text-grove-700 border-grove-200',
    desc: 'Export-quality capsicum — firm, crisp, uniform bright green. Available in Small, Medium, Large, and Premium grades.',
    images: [
      { src: 'https://images.pexels.com/photos/1153690/pexels-photo-1153690.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Green bell peppers' },
      { src: 'https://images.pexels.com/photos/3733944/pexels-photo-3733944.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Bell pepper harvest' },
      { src: 'https://images.pexels.com/photos/209339/pexels-photo-209339.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Fresh vegetables' },
    ],
    highlights: ['Export Grade', 'Cold Chain Ready', '4 Size Grades', 'Firm & Crisp'],
  },
];

function ProductCard({ product }: { product: ProductData }) {
  const [imgIdx, setImgIdx] = useState(0);

  return (
    <Link
      to={product.to}
      className="group block bg-white rounded-2xl overflow-hidden border border-cream-200 hover:border-grove-300 shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <div className="relative h-56 overflow-hidden">
        {product.images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              i === imgIdx ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
        <span className={`absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm ${product.tagColor} bg-opacity-90`}>
          {product.tag}
        </span>
        {product.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
            {product.images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setImgIdx(i); }}
                aria-label={`Show image ${i + 1}`}
                className={`rounded-full transition-all ${i === imgIdx ? 'bg-white w-5 h-2' : 'bg-white/50 w-2 h-2 hover:bg-white/70'}`}
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
        <div className="mt-4 flex flex-wrap gap-2">
          {product.highlights.map((h) => (
            <span key={h} className="px-2.5 py-1 rounded-md bg-grove-50 text-xs font-medium text-grove-700">
              {h}
            </span>
          ))}
        </div>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-grove-600 group-hover:text-grove-700 transition-colors">
          View Full Details
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export default function Products() {
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
              Our Products
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-display font-bold text-balance">
              Product Portfolio
            </h1>
            <p className="mt-4 text-lg text-grove-200 max-w-2xl">
              Sattvika Overseas specializes in sourcing and exporting
              premium-quality agricultural goods from Maharashtra's most
              productive farming regions. Our expertise lies in identifying
              export-grade produce, implementing strict quality control, and
              delivering products that meet the expectations of international
              buyers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
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
    </>
  );
}
