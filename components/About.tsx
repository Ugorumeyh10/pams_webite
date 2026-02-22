'use client';

import { motion } from 'framer-motion';
import { Target, TrendingUp, Users, Award } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Target, label: 'Years Experience', value: '4+' },
    { icon: TrendingUp, label: 'Wallet Usage Growth', value: '85%' },
    { icon: Users, label: 'User Retention Increase', value: '25%' },
    { icon: Award, label: 'Market Share Achieved', value: '20%' },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-white"
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-beige-700 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-semibold text-gray-900 mb-6">
              Professional Summary
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I am a Social Media & Content Specialist with over 4 years of experience managing and scaling digital presence for founder-led brands, SaaS products, NGOs, and DTC businesses.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I have led content strategy, publishing, community management, and performance optimization across Instagram, Facebook, TikTok, LinkedIn, and YouTube — driving measurable results including:
            </p>
            <ul className="space-y-3 text-lg text-gray-700 mb-6">
              <li className="flex items-start">
                <span className="text-beige-700 mr-3">•</span>
                <span>50%+ increase in impressions</span>
              </li>
              <li className="flex items-start">
                <span className="text-beige-700 mr-3">•</span>
                <span>25%+ improvement in retention</span>
              </li>
              <li className="flex items-start">
                <span className="text-beige-700 mr-3">•</span>
                <span>85% conversion growth for product launches</span>
              </li>
              <li className="flex items-start">
                <span className="text-beige-700 mr-3">•</span>
                <span>30–50% increase in engagement and website traffic</span>
              </li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              I specialize in turning brand voice and founder personality into structured, scalable content systems that drive growth and monetization.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-beige-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                <stat.icon className="w-12 h-12 text-beige-700 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
