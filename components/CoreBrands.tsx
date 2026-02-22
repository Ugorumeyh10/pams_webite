'use client';

import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Linkedin, Music, Youtube, TrendingUp, Users, Target } from 'lucide-react';

export default function CoreBrands() {
  const brands = [
    {
      rank: 1,
      name: 'OrnaMap',
      highlight: true,
      platforms: ['Instagram', 'Facebook', 'Twitter', 'TikTok', 'LinkedIn', 'YouTube'],
      role: 'Product Marketing & Social Growth Lead',
      responsibilities: [
        'Orchestrated comprehensive social media management across Instagram, Facebook, Twitter, TikTok, LinkedIn, and YouTube — ensuring consistent brand voice and strategic content delivery',
        'Designed and executed multi-channel campaign strategies that amplified brand messaging and drove measurable engagement across all touchpoints',
        'Established robust content frameworks and defined reputable content pillars that became the foundation for scalable, high-performing content systems',
        'Crafted compelling feature storytelling campaigns that transformed complex product capabilities into relatable, user-centric narratives',
        'Led end-to-end content strategy and publishing operations, from ideation and creative direction to scheduling and performance optimization',
        'Implemented data-driven optimization strategies that continuously improved cross-platform engagement, reach, and conversion metrics',
        'Built strategic content distribution workflows that maximized content impact while maintaining brand consistency across diverse audience segments',
      ],
      results: [
        '50%+ increase in impressions',
        '25% improvement in user retention',
        '85% increase in wallet feature adoption',
      ],
      color: 'from-blue-600 to-cyan-500',
    },
    {
      rank: 2,
      name: 'Payzeep',
      highlight: false,
      platforms: ['Instagram', 'Facebook', 'Twitter', 'LinkedIn', 'YouTube', 'TikTok'],
      role: 'Social Media & Content Specialist',
      responsibilities: [
        'Masterfully managed comprehensive social media presence across Instagram, Facebook, Twitter, LinkedIn, YouTube, and TikTok — creating a unified brand experience that resonated with diverse audiences',
        'Conceptualized and launched powerful multi-channel campaigns that synchronized messaging across platforms, amplifying reach and driving cohesive brand storytelling',
        'Architected strategic content frameworks and established reputable content pillars that transformed brand voice into a structured, scalable content ecosystem',
        'Developed sophisticated fintech-specific content strategies that demystified complex financial concepts and positioned Payzeep as an accessible, trustworthy payment solution',
        'Continuously optimized cross-platform engagement through strategic content experimentation, A/B testing, and data-driven insights that elevated performance metrics',
        'Built and maintained content calendars that balanced educational content, product announcements, and community engagement — ensuring consistent, high-quality output',
        'Leveraged analytics and performance data to refine content strategies, identify growth opportunities, and maximize ROI across all social media channels',
      ],
      results: [
        '50%+ increase in impressions',
        '20–25% follower growth',
        'Strengthened fintech messaging clarity',
      ],
      color: 'from-purple-600 to-pink-500',
    },
    {
      rank: 3,
      name: 'RillaHost',
      highlight: false,
      platforms: ['Instagram', 'Facebook', 'Twitter'],
      results: [
        '50% increase in website traffic',
        '25% increase in conversions',
        '30% engagement growth',
      ],
      color: 'from-green-600 to-emerald-500',
    },
    {
      rank: 4,
      name: 'JM Aesthetics',
      highlight: false,
      platforms: ['Instagram'],
      note: 'Founder-Led Brand',
      results: [
        '85% increase in appointment conversions via DMs',
        '30% engagement growth',
        'Content-led sales strategy',
      ],
      color: 'from-pink-500 to-rose-500',
    },
    {
      rank: 5,
      name: 'HandChow',
      highlight: false,
      platforms: ['Instagram', 'Twitter'],
      focus: [
        'Scripted and directed video content',
        'Increased engagement & brand positioning',
      ],
      color: 'from-orange-500 to-red-500',
    },
    {
      rank: 6,
      name: 'AWLA',
      highlight: false,
      platforms: ['Instagram', 'Facebook', 'Twitter'],
      note: 'NGO',
      results: [
        '20% increase in engagement',
        'Community-focused content strategy',
      ],
      color: 'from-indigo-600 to-purple-500',
    },
  ];

  const platformIcons: { [key: string]: any } = {
    Instagram: Instagram,
    Facebook: Facebook,
    Twitter: Twitter,
    LinkedIn: Linkedin,
    TikTok: Music,
    YouTube: Youtube || Music, // Fallback to Music icon if Youtube not available
  };

  return (
    <section
      id="brands"
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
            Selected Brands & Results
          </h2>
          <div className="w-24 h-1 bg-beige-700 mx-auto mb-8"></div>
        </motion.div>

        <div className="space-y-12">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`${
                brand.highlight
                  ? `bg-gradient-to-br ${brand.color} text-white p-8 rounded-2xl shadow-xl`
                  : 'bg-beige-50 p-8 rounded-xl shadow-lg'
              }`}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl font-bold">{brand.rank}️⃣</span>
                    <h3 className="text-3xl font-bold">{brand.name}</h3>
                    {brand.note && (
                      <span className={`text-sm px-3 py-1 rounded-full ${
                        brand.highlight ? 'bg-white/20' : 'bg-beige-200'
                      }`}>
                        {brand.note}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {brand.platforms.map((platform) => {
                      const Icon = platformIcons[platform];
                      return (
                        <div
                          key={platform}
                          className={`flex items-center gap-2 px-3 py-1 rounded-full ${
                            brand.highlight
                              ? 'bg-white/20 backdrop-blur-sm'
                              : 'bg-white'
                          }`}
                        >
                          {Icon && <Icon className="w-4 h-4" />}
                          <span className="text-sm font-medium">{platform}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {brand.role && (
                <div className="mb-6">
                  <h4 className={`text-lg font-semibold mb-3 ${
                    brand.highlight ? 'text-white' : 'text-gray-900'
                  }`}>
                    Role: {brand.role}
                  </h4>
                  {brand.responsibilities && (
                    <div className="space-y-2">
                      <p className={`font-medium mb-2 ${
                        brand.highlight ? 'text-white/90' : 'text-gray-700'
                      }`}>
                        Key Responsibilities:
                      </p>
                      <ul className="space-y-2">
                        {brand.responsibilities.map((resp, i) => (
                          <li key={i} className={`flex items-start ${
                            brand.highlight ? 'text-white/90' : 'text-gray-700'
                          }`}>
                            <span className="mr-2">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {brand.results && (
                <div className="mb-4">
                  <h4 className={`text-lg font-semibold mb-3 ${
                    brand.highlight ? 'text-white' : 'text-gray-900'
                  }`}>
                    Results:
                  </h4>
                  <ul className="space-y-2">
                    {brand.results.map((result, i) => (
                      <li key={i} className={`flex items-start ${
                        brand.highlight ? 'text-white/90' : 'text-gray-700'
                      }`}>
                        <span className="mr-2">•</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {brand.focus && (
                <div>
                  <h4 className={`text-lg font-semibold mb-3 ${
                    brand.highlight ? 'text-white' : 'text-gray-900'
                  }`}>
                    Focus:
                  </h4>
                  <ul className="space-y-2">
                    {brand.focus.map((item, i) => (
                      <li key={i} className={`flex items-start ${
                        brand.highlight ? 'text-white/90' : 'text-gray-700'
                      }`}>
                        <span className="mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
