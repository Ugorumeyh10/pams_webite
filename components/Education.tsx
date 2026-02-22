'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  return (
    <section
      id="education"
      className="pt-8 pb-6 bg-white"
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
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-beige-700 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-beige-50 p-8 rounded-xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-beige-700 p-3 rounded-lg">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Education</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  University of Ibadan
                </h4>
                <p className="text-gray-700 mb-1">
                  B.Ed Human Kinetics and Health Education
                </p>
                <p className="text-beige-700 font-medium">2014 – 2019</p>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-beige-50 p-8 rounded-xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-beige-700 p-3 rounded-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Certifications</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Google Digital Garage
                </h4>
                <p className="text-gray-700 mb-1">
                  Fundamentals of Digital Marketing
                </p>
                <p className="text-beige-700 font-medium">2023</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 bg-white p-8 rounded-xl shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Analytics & Research</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Google Analytics</li>
                <li>• Search Console</li>
                <li>• HubSpot</li>
                <li>• SEMrush</li>
                <li>• Ahrefs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Content & Campaign Tools</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Canva</li>
                <li>• CapCut</li>
                <li>• Notion</li>
                <li>• GPT Tools</li>
                <li>• Jira, Slack</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Ads & Channels</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Meta Ads</li>
                <li>• LinkedIn Ads</li>
                <li>• Google Ads</li>
                <li>• TikTok Ads</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">CRM & Email</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Mailchimp</li>
                <li>• Apollo</li>
                <li>• CustomerIO</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
