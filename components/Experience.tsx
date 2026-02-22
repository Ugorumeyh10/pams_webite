'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'Payzeep',
      role: 'Product Marketing & Growth Strategist',
      period: 'April 2025 - Present',
      location: 'Lagos, Nigeria',
      description:
        'Payzeep is a fintech platform providing payment solutions for businesses and individuals. Created social media content, managed brand presence, and developed content strategies across multiple channels.',
      achievements: [
        'Developed social media content and user education materials across all platforms',
        'Created engaging content that simplified complex fintech features for users',
        'Managed social media campaigns that strengthened Payzeep\'s market positioning',
        'Built content systems ensuring consistent brand messaging and voice',
      ],
    },
    {
      company: 'OrnaMap',
      role: 'Product Marketing & Growth Strategist',
      period: 'Sept 2023 - April 2025',
      location: 'Lagos, Nigeria',
      description:
        'OrnaMap is a mobility intelligence and transit platform for Lagos commuters. Managed social media presence, created content for product launches, and developed community engagement strategies.',
      achievements: [
        'Created social media content and campaigns for StrollAI launch, driving strong user engagement',
        'Developed content strategy for OrnaMap Wallet campaign, contributing to 85% increase in usage',
        'Improved user retention by 25% through engaging social media content and community building',
        'Produced consistent brand messaging and visual content across all social media channels',
      ],
    },
    {
      company: 'RillaHost',
      role: 'Growth Lead',
      period: 'August 2022 – Sept 2023',
      location: 'Lagos, Nigeria',
      description:
        'Led social media strategy, content creation, and multi-channel campaigns for the hosting platform. Created engaging content that clarified service offerings and built brand awareness.',
      achievements: [
        'Increased site traffic by 50% and conversions by 20% through strategic social media campaigns',
        'Created compelling social media content that improved B2B understanding of services',
        'Developed content workflows and social media posting schedules for consistent engagement',
        'Built social media presence that improved brand positioning and customer onboarding',
      ],
    },
    {
      company: 'JekaConnect',
      role: 'Go-To-Market Associate',
      period: 'Jan 2022 – August 2022',
      location: 'Lagos, Nigeria',
      description:
        'Led social media and content strategy for the launch of a new digital product. Created engaging content, managed brand presence, and developed multi-channel campaigns.',
      achievements: [
        'Achieved 20% market share in first six months through strategic social media campaigns',
        'Created multi-channel social media content that converted half of targeted leads',
        'Developed brand storytelling and content that strengthened product differentiation',
        'Managed social media presence and community engagement across all platforms',
      ],
    },
    {
      company: 'Access Bank',
      role: 'Customer Support (Inbound Marketing)',
      period: 'Jan 2021 - Dec 2021',
      location: 'Lagos, Nigeria',
      description:
        'Delivered digital customer support and managed social media customer interactions. Created content for customer education and supported inbound marketing communication.',
      achievements: [
        'Improved customer satisfaction through responsive social media customer support',
        'Created educational content that helped users understand products and services',
        'Supported inbound marketing communication and social media engagement',
      ],
    },
    {
      company: 'AWLA Nigeria',
      role: 'Social Media Manager & Content Strategist',
      period: 'Nov 2019 – Dec 2020',
      location: 'Lagos, Nigeria',
      description:
        'Managed social media accounts and developed comprehensive content strategies. Created engaging content that built community and increased brand awareness.',
      achievements: [
        'Developed content systems that increased engagement and consistency across all platforms',
        'Built brand storytelling frameworks and visual content guidelines for social channels',
        'Strengthened community engagement and awareness through relatable, authentic communication',
        'Created viral content that reached millions of impressions',
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="pb-6 pt-20 bg-white"
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
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-beige-700 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building brands and driving growth across diverse industries
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-beige-200 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-beige-700 rounded-full border-4 border-white transform md:-translate-x-1/2 z-10"></div>

                {/* Content */}
                <div
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div className="bg-beige-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-beige-700 p-3 rounded-lg">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                          {exp.role}
                        </h3>
                        <h4 className="text-xl text-beige-700 font-semibold mb-2">
                          {exp.company}
                        </h4>
                        <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="mt-4">
                      <h5 className="font-semibold text-gray-900 mb-2">
                        Key Achievements:
                      </h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
