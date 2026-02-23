'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FileText, Download, Eye, Lightbulb, Target, TrendingUp } from 'lucide-react';

export default function ContentStrategy() {
  const strategyDocuments = [
    {
      id: 1,
      title: 'Content Strategy Framework',
      description: 'A comprehensive content strategy framework that transforms brand objectives into actionable content plans. This document establishes content pillars, defines target audience personas, and creates structured approaches to content creation that drive brand awareness, engagement, and product consideration through strategic digital media and marketing.',
      image: '/documents/Screen Shot 2026-02-23 at 1.59.43 AM.png',
      document: '/documents/Content Strategy Document.docx',
      insights: [
        'Defined strategic content pillars that showcase brand offerings and unique value propositions',
        'Developed target audience personas for Millennials, Gen Z, and digital-savvy professionals',
        'Established key messaging frameworks that communicate brand essence and product benefits',
        'Created content format strategies spanning social media, video, and long-form content',
      ],
    },
    {
      id: 2,
      title: 'Content Calendar & Planning System',
      description: 'A strategic content calendar system that orchestrates multi-platform content delivery, theme mapping, and campaign integration. This planning framework ensures cohesive storytelling across Instagram, TikTok, Twitter, and other channels while maintaining brand consistency and maximizing audience engagement.',
      image: '/documents/Screen Shot 2026-02-23 at 2.09.52 AM.png',
      document: '/documents/Content Strategy Document.docx',
      insights: [
        'Multi-platform content scheduling with coordinated theme-based planning',
        'Campaign integration timelines that align product launches with content delivery',
        'Content format diversification including snack hacks, flavor exploration, and pop culture connections',
        'Occasion-based content mapping for various consumption moments and events',
      ],
    },
    {
      id: 3,
      title: 'Complete Content Strategy Documentation',
      description: 'End-to-end content strategy documentation that encompasses brand voice guidelines, audience targeting, content pillar development, and strategic distribution approaches. This comprehensive framework serves as the blueprint for scalable, high-performing content operations that drive measurable business results.',
      image: '/documents/Screen Shot 2026-02-23 at 2.09.52 AM.png',
      document: '/documents/Content Strategy Document.docx',
      insights: [
        'Brand voice and messaging framework that captures brand personality and core values',
        'Target audience segmentation with detailed persona development for strategic targeting',
        'Content pillar strategy covering flavorful experiences, snack hacks, and pop culture connections',
        'Multi-format content approach including social posts, video tutorials, and long-form articles',
      ],
    },
  ];

  return (
    <section
      id="content-strategy"
      className="py-20 bg-gradient-to-br from-white to-beige-50"
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
            Content Strategy & Frameworks
          </h2>
          <div className="w-24 h-1 bg-beige-700 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic content frameworks and planning systems that transform brand voice into structured, scalable content operations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {strategyDocuments.map((doc, index) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow group"
            >
              {/* Document Preview */}
              <div className="relative h-64 bg-beige-100 overflow-hidden">
                <Image
                  src={doc.image}
                  alt={doc.title}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-beige-100 p-3 rounded-lg">
                    <FileText className="w-6 h-6 text-beige-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{doc.title}</h3>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                  {doc.description}
                </p>

                {/* Key Insights */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-beige-700" />
                    Key Components:
                  </h4>
                  <ul className="space-y-1">
                    {doc.insights.map((insight, i) => (
                      <li key={i} className="text-xs text-gray-600 flex items-start">
                        <span className="text-beige-700 mr-2">•</span>
                        <span>{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <a
                    href={doc.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-beige-700 text-white px-4 py-2 rounded-lg hover:bg-beige-800 transition-colors text-sm"
                  >
                    <Eye className="w-4 h-4" />
                    View
                  </a>
                  <a
                    href={doc.document}
                    download
                    className="flex-1 flex items-center justify-center gap-2 bg-beige-100 text-beige-700 px-4 py-2 rounded-lg hover:bg-beige-200 transition-colors text-sm"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Strategy Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-white p-8 rounded-xl shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Target className="w-8 h-8 text-beige-700" />
            Strategic Approach
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-beige-700" />
                Strategic Framework Development
              </h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                I architect comprehensive content strategy frameworks that transform brand objectives and founder personality into structured, scalable content systems. These strategic frameworks establish clear content pillars that resonate with target audiences, define publishing cadences that maintain consistent brand presence, and implement performance tracking methodologies that enable data-driven optimization.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Each framework is meticulously tailored to the unique needs of the brand, ensuring that content strategy seamlessly aligns with business objectives—whether that's enhancing brand awareness, driving product consideration, or engaging specific audience segments—while maintaining authentic brand voice and delivering measurable results.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-beige-700" />
                Strategic Implementation & Continuous Optimization
              </h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                Beyond framework creation, I execute these strategies through meticulously planned content calendars, seamless multi-platform coordination, and continuous optimization driven by performance analytics. This holistic approach ensures that strategic planning translates directly into measurable business outcomes—increased brand awareness, higher engagement rates, and enhanced product consideration.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The content systems I architect are engineered for scalability and adaptability, enabling brands to maintain consistency and quality as they grow while seamlessly evolving with changing audience preferences, platform algorithms, and market dynamics. This future-proof approach ensures long-term content success.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
