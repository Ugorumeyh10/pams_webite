'use client';

import Image from 'next/image';
import { ArrowDown, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-beige-50 via-white to-beige-100 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight"
            >
              PAMELA ODUNNA
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6"
            >
              Social Media & Content Specialist
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl leading-relaxed"
            >
              Building structured, high-performing content systems for founder-led brands.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col gap-2 text-gray-600 mb-8"
            >
              <p>Lagos, Nigeria</p>
              <a href="mailto:pamelanazam@gmail.com" className="hover:text-beige-700 transition-colors">
                pamelanazam@gmail.com
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <a
                href="https://www.linkedin.com/in/pamelaodunna"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-beige-700 text-white px-6 py-3 rounded-lg hover:bg-beige-800 transition-colors"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
              >
                <Mail size={20} />
                Get in Touch
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 bg-beige-200 rounded-full blur-3xl opacity-50"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-beige-300 shadow-2xl">
                <Image
                  src="/Image.jpeg"
                  alt="Pamela Odunna"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex justify-center mt-12"
        >
          <a
            href="#about"
            className="animate-bounce text-beige-700 hover:text-beige-800"
          >
            <ArrowDown size={32} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
