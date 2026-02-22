'use client';

import { motion } from 'framer-motion';
import ProductCarousel from './ProductCarousel';

export default function ProductShowcase() {
  // Get image files dynamically
  const ornamapImages = [
    { src: '/images/ornamap/Image (1).jpeg', alt: 'OrnaMap Product Screenshot 1' },
    { src: '/images/ornamap/Image (2).jpeg', alt: 'OrnaMap Product Screenshot 2' },
    { src: '/images/ornamap/Image (3).jpeg', alt: 'OrnaMap Product Screenshot 3' },
    { src: '/images/ornamap/Image (4).jpeg', alt: 'OrnaMap Product Screenshot 4' },
    { src: '/images/ornamap/Image (5).jpeg', alt: 'OrnaMap Product Screenshot 5' },
    { src: '/images/ornamap/Image (6).jpeg', alt: 'OrnaMap Product Screenshot 6' },
    { src: '/images/ornamap/Image (7).jpeg', alt: 'OrnaMap Product Screenshot 7' },
    { src: '/images/ornamap/Image (8).jpeg', alt: 'OrnaMap Product Screenshot 8' },
    { src: '/images/ornamap/Image (9).jpeg', alt: 'OrnaMap Product Screenshot 9' },
    { src: '/images/ornamap/Image (15).jpeg', alt: 'OrnaMap Product Screenshot 10' },
    { src: '/images/ornamap/Screenshot 2026-02-23 at 00.00.11.png', alt: 'OrnaMap Screenshot' },
  ];

  const payzipImages = [
    { src: '/images/payzip/Image (10).jpeg', alt: 'Payzeep Product Screenshot 1' },
    { src: '/images/payzip/Image (11).jpeg', alt: 'Payzeep Product Screenshot 2' },
    { src: '/images/payzip/Image (12).jpeg', alt: 'Payzeep Product Screenshot 3' },
    { src: '/images/payzip/Image (13).jpeg', alt: 'Payzeep Product Screenshot 4' },
    { src: '/images/payzip/Image (14).jpeg', alt: 'Payzeep Product Screenshot 5' },
  ];

  const handchowImages = [
    { src: '/images/handchow/Image (17).jpeg', alt: 'Handchow Product Screenshot 1' },
    { src: '/images/handchow/Image (18).jpeg', alt: 'Handchow Product Screenshot 2' },
    { src: '/images/handchow/Image (19).jpeg', alt: 'Handchow Product Screenshot 3' },
  ];

  const products = [
    {
      company: 'OrnaMap',
      description: 'Mobility intelligence and transit platform for Lagos commuters. Led social media strategy, content creation, and user engagement campaigns.',
      images: ornamapImages,
      color: 'bg-gradient-to-br from-blue-600 to-cyan-500',
    },
    {
      company: 'Payzeep',
      description: 'Fintech platform providing payment solutions. Created content strategies, social media campaigns, and user education materials.',
      images: payzipImages,
      color: 'bg-gradient-to-br from-purple-600 to-pink-500',
    },
    {
      company: 'Handchow',
      description: 'Digital product with engaging social media presence. Developed content systems and brand storytelling frameworks.',
      images: handchowImages,
      color: 'bg-gradient-to-br from-orange-500 to-red-500',
    },
  ];

  return (
    <section
      id="products"
      className="py-20 bg-gradient-to-br from-beige-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Product Showcase
          </h2>
          <div className="w-24 h-1 bg-beige-700 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Social media content and campaigns created for leading digital products
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <ProductCarousel
                company={product.company}
                description={product.description}
                images={product.images}
                color={product.color}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
