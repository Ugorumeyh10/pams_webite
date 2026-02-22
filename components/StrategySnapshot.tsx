'use client';

import { motion } from 'framer-motion';
import { FileText, Calendar, Target, BarChart3 } from 'lucide-react';

export default function StrategySnapshot() {
  const strategyItems = [
    {
      title: '2026 Social Media Strategy Framework',
      description: 'Built structured content pillars, publishing cadence, and performance tracking plan.',
      icon: FileText,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Content Calendar System',
      description: 'Developed comprehensive content planning framework with multi-platform scheduling and theme mapping.',
      icon: Calendar,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Content Pillars Framework',
      description: 'Established brand voice guidelines and content categorization system for consistent messaging.',
      icon: Target,
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Performance Tracking Dashboard',
      description: 'Created analytics framework for measuring engagement, reach, and conversion metrics across platforms.',
      icon: BarChart3,
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section
      id="strategy"
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
            Strategy Snapshot
          </h2>
          <div className="w-24 h-1 bg-beige-700 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Frameworks and systems I've built to structure content strategy and drive results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {strategyItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className={`bg-gradient-to-br ${item.color} p-4 rounded-lg w-fit mb-4`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-12 bg-white p-8 rounded-xl shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Strategy Approach
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Content Planning</h4>
              <p className="text-gray-600 text-sm">
                Structured content calendars with theme mapping, publishing cadence, and multi-platform distribution strategies.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Performance Optimization</h4>
              <p className="text-gray-600 text-sm">
                Data-driven approach to content optimization, A/B testing, and continuous improvement based on engagement metrics.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Brand Voice</h4>
              <p className="text-gray-600 text-sm">
                Developing and maintaining consistent brand voice across all platforms while preserving founder personality.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
