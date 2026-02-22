'use client';

import { motion } from 'framer-motion';
import {
  BarChart3,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Target,
  TrendingUp,
  Users,
  Megaphone,
  Palette,
  Camera,
  Code,
} from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Social Media Management',
      icon: Users,
      skills: [
        { name: 'Social Media Strategy', level: 95 },
        { name: 'Community Management', level: 92 },
        { name: 'Content Planning', level: 94 },
        { name: 'Brand Storytelling', level: 93 },
        { name: 'Engagement Optimization', level: 91 },
        { name: 'Multi-platform Management', level: 90 },
      ],
    },
    {
      title: 'Content Creation',
      icon: Megaphone,
      skills: [
        { name: 'Content Strategy', level: 94 },
        { name: 'Copywriting', level: 92 },
        { name: 'Visual Content Design', level: 89 },
        { name: 'Video Content', level: 85 },
        { name: 'Creative Direction', level: 90 },
        { name: 'Content Systems', level: 93 },
      ],
    },
    {
      title: 'Analytics & Performance',
      icon: BarChart3,
      skills: [
        { name: 'Social Media Analytics', level: 90 },
        { name: 'Performance Tracking', level: 88 },
        { name: 'Engagement Metrics', level: 91 },
        { name: 'ROI Analysis', level: 87 },
        { name: 'Data-Driven Optimization', level: 89 },
        { name: 'Campaign Reporting', level: 86 },
      ],
    },
    {
      title: 'Growth & Campaigns',
      icon: TrendingUp,
      skills: [
        { name: 'Multi-channel Campaigns', level: 91 },
        { name: 'User Acquisition', level: 90 },
        { name: 'Brand Awareness', level: 92 },
        { name: 'Influencer Partnerships', level: 85 },
        { name: 'Viral Content Creation', level: 88 },
        { name: 'Community Building', level: 93 },
      ],
    },
  ];

  return (
    <section
      id="skills"
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
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-beige-700 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive skill set spanning digital marketing, analytics, and
            growth strategy
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-beige-100 p-3 rounded-lg">
                  <category.icon className="w-8 h-8 text-beige-700" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-beige-700 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-beige-100 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          duration: 1,
                        }}
                        className="bg-beige-700 h-3 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
