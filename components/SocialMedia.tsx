'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Youtube, Linkedin, Music, ArrowRight } from 'lucide-react';

export default function SocialMedia() {
  const [selectedPlatform, setSelectedPlatform] = useState('all');

  const socialMediaHandles = [
    {
      platform: 'LinkedIn',
      icon: Linkedin,
      handle: 'Pamela Odunna',
      description: 'Professional networking and B2B content',
      engagement: 'Active',
      posts: 'Regular',
      color: 'bg-gradient-to-br from-blue-600 to-blue-800',
      image: '/api/placeholder/400/400',
    },
    {
      platform: 'Instagram',
      icon: Instagram,
      handle: 'Content Strategy',
      description: 'Visual storytelling and brand communication',
      engagement: 'High',
      posts: 'Strategic',
      color: 'bg-gradient-to-br from-purple-500 to-pink-500',
      image: '/api/placeholder/400/400',
    },
    {
      platform: 'Twitter/X',
      icon: Twitter,
      handle: 'Product Marketing',
      description: 'Thought leadership and product updates',
      engagement: 'Active',
      posts: 'Regular',
      color: 'bg-gradient-to-br from-blue-400 to-cyan-500',
      image: '/api/placeholder/400/400',
    },
    {
      platform: 'Facebook',
      icon: Facebook,
      handle: 'Campaign Management',
      description: 'Multi-channel campaigns and community building',
      engagement: 'High',
      posts: 'Strategic',
      color: 'bg-gradient-to-br from-blue-500 to-blue-700',
      image: '/api/placeholder/400/400',
    },
  ];

  const platforms = ['all', ...socialMediaHandles.map((s) => s.platform.toLowerCase())];

  const filteredHandles =
    selectedPlatform === 'all'
      ? socialMediaHandles
      : socialMediaHandles.filter(
          (s) => s.platform.toLowerCase() === selectedPlatform
        );

  return (
    <section
      id="social-media"
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
            Social Media & Content Work
          </h2>
          <div className="w-24 h-1 bg-beige-700 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Developed content systems and brand storytelling frameworks across multiple platforms
          </p>
        </motion.div>

        {/* Platform Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {platforms.map((platform) => (
            <button
              key={platform}
              onClick={() => setSelectedPlatform(platform)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedPlatform === platform
                  ? 'bg-beige-700 text-white'
                  : 'bg-beige-100 text-gray-700 hover:bg-beige-200'
              }`}
            >
              {platform.charAt(0).toUpperCase() + platform.slice(1)}
            </button>
          ))}
        </div>

        {/* Social Media Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHandles.map((handle, index) => {
            const IconComponent = handle.icon;
            return (
              <motion.div
                key={handle.platform}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow group"
              >
                {/* Image Header */}
                <div className={`relative h-48 ${handle.color} flex items-center justify-center`}>
                  <IconComponent className="w-20 h-20 text-white opacity-80" />
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-white font-semibold">{handle.followers}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${handle.color}`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{handle.platform}</h3>
                    <p className="text-gray-600 text-sm">{handle.handle}</p>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-4">
                  <p className="text-gray-600 text-sm leading-relaxed">{handle.description}</p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-beige-50 p-3 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Engagement</div>
                    <div className="text-lg font-bold text-beige-700">{handle.engagement}</div>
                  </div>
                  <div className="bg-beige-50 p-3 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Activity</div>
                    <div className="text-lg font-bold text-beige-700">{handle.posts}</div>
                  </div>
                </div>

                <button className="w-full flex items-center justify-center gap-2 bg-beige-700 text-white px-4 py-2 rounded-lg hover:bg-beige-800 transition-colors group-hover:gap-3">
                  View Profile
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
