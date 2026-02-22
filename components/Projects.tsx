'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Target, TrendingUp, BarChart3, Users } from 'lucide-react';

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: 'StrollAI Launch - OrnaMap',
      description:
        'Led messaging, positioning and user education for StrollAI, OrnaMap\'s smart mobility and transit intelligence feature. Created a user-first narrative that simplified technical capabilities for everyday Lagos commuters.',
      platform: 'Product Launch',
      icon: Target,
      metrics: {
        engagement: 'High',
        pickup: 'Strong',
        comprehension: 'Immediate',
        result: 'Success',
      },
      image: '/api/placeholder/600/400',
    },
    {
      title: 'OrnaMap Wallet + Cowry Top-Up Campaign',
      description:
        'Owned the go-to-market plan and communications for OrnaMap Wallet and Cowry Top-Up. Crafted messaging that highlighted convenience, reliability and real Lagos use cases.',
      platform: 'Fintech',
      icon: TrendingUp,
      metrics: {
        walletUsage: '85%',
        adoption: 'High',
        engagement: 'Strong',
        result: 'Success',
      },
      image: '/api/placeholder/600/400',
    },
    {
      title: 'RillaHost Growth Campaign',
      description:
        'Led SEO, content, and multi-channel demand generation, increasing site traffic by 50% and conversions by 20%. Created messaging that clarified service offerings and improved B2B understanding.',
      platform: 'B2B SaaS',
      icon: BarChart3,
      metrics: {
        traffic: '50%',
        conversions: '20%',
        growth: 'Strong',
        result: 'Success',
      },
      image: '/api/placeholder/600/400',
    },
    {
      title: 'JekaConnect Product Launch',
      description:
        'Led the end-to-end launch of a new digital product that achieved 20% market share in its first six months. Created multi-channel acquisition campaigns that converted half of targeted leads.',
      platform: 'Digital Product',
      icon: Users,
      metrics: {
        marketShare: '20%',
        conversion: '50%',
        timeframe: '6 months',
        result: 'Success',
      },
      image: '/api/placeholder/600/400',
    },
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProjectData = projects[currentProject];
  const IconComponent = currentProjectData.icon;

  return (
    <section
      id="projects"
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
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-beige-700 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Success stories from brands I've helped grow
          </p>
        </motion.div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="p-8 md:p-12"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Image/Visual */}
                  <div className="relative h-64 md:h-96 rounded-lg overflow-hidden bg-beige-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <IconComponent className="w-24 h-24 text-beige-300" />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                      <div className="flex items-center gap-2 text-beige-700 font-semibold">
                        <IconComponent className="w-5 h-5" />
                        {currentProjectData.platform}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {currentProjectData.title}
                    </h3>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      {currentProjectData.description}
                    </p>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {Object.entries(currentProjectData.metrics).map(
                        ([key, value]) => (
                          <div
                            key={key}
                            className="bg-beige-50 p-4 rounded-lg"
                          >
                            <div className="text-2xl font-bold text-beige-700 mb-1">
                              {value}
                            </div>
                            <div className="text-sm text-gray-600 capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                          </div>
                        )
                      )}
                    </div>

                    <button className="flex items-center gap-2 bg-beige-700 text-white px-6 py-3 rounded-lg hover:bg-beige-800 transition-colors">
                      View Case Study
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-colors z-10"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-colors z-10"
              aria-label="Next project"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentProject
                      ? 'bg-beige-700 w-8'
                      : 'bg-beige-300'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
