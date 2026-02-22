'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { TrendingUp, Users, Heart, MessageCircle, Share2 } from 'lucide-react';

export default function CompanyAnalytics() {
  const [selectedCompany, setSelectedCompany] = useState('ornamap');

  // OrnaMap Data
  const ornamapData = {
    name: 'OrnaMap',
    color: '#3B82F6',
    gradient: 'from-blue-600 to-cyan-500',
    followerGrowth: [
      { month: 'Month 1', followers: 161 },
      { month: 'Month 2', followers: 245 },
      { month: 'Month 3', followers: 389 },
      { month: 'Month 4', followers: 512 },
      { month: 'Month 5', followers: 687 },
      { month: 'Month 6', followers: 856 },
      { month: 'Month 7', followers: 1088 },
    ],
    engagement: [
      { month: 'Month 1', engagement: 4.2, reach: 1200, impressions: 3500 },
      { month: 'Month 2', engagement: 5.8, reach: 2100, impressions: 5800 },
      { month: 'Month 3', engagement: 7.1, reach: 3200, impressions: 9200 },
      { month: 'Month 4', engagement: 8.5, reach: 4500, impressions: 13200 },
      { month: 'Month 5', engagement: 9.2, reach: 5800, impressions: 18500 },
      { month: 'Month 6', engagement: 10.5, reach: 7200, impressions: 24500 },
      { month: 'Month 7', engagement: 11.8, reach: 8900, impressions: 31200 },
    ],
    metrics: {
      startFollowers: 161,
      endFollowers: 1088,
      growth: '575%',
      totalGrowth: 927,
      avgEngagement: '8.4%',
      totalReach: '45.2K',
      totalImpressions: '105.3K',
    },
    platformDistribution: [
      { name: 'Instagram', value: 45, posts: 120 },
      { name: 'Twitter', value: 30, posts: 85 },
      { name: 'LinkedIn', value: 15, posts: 45 },
      { name: 'Facebook', value: 10, posts: 30 },
    ],
  };

  // Payzeep Data
  const payzeepData = {
    name: 'Payzeep',
    color: '#A855F7',
    gradient: 'from-purple-600 to-pink-500',
    followerGrowth: [
      { month: 'Month 1', followers: 251 },
      { month: 'Month 2', followers: 312 },
      { month: 'Month 3', followers: 398 },
      { month: 'Month 4', followers: 487 },
      { month: 'Month 5', followers: 589 },
      { month: 'Month 6', followers: 700 },
    ],
    engagement: [
      { month: 'Month 1', engagement: 3.8, reach: 1800, impressions: 4200 },
      { month: 'Month 2', engagement: 5.2, reach: 2500, impressions: 6800 },
      { month: 'Month 3', engagement: 6.5, reach: 3400, impressions: 9800 },
      { month: 'Month 4', engagement: 7.9, reach: 4200, impressions: 13200 },
      { month: 'Month 5', engagement: 9.1, reach: 5100, impressions: 17800 },
      { month: 'Month 6', engagement: 10.3, reach: 6200, impressions: 23500 },
    ],
    metrics: {
      startFollowers: 251,
      endFollowers: 700,
      growth: '179%',
      totalGrowth: 449,
      avgEngagement: '7.1%',
      totalReach: '32.2K',
      totalImpressions: '74.3K',
    },
    platformDistribution: [
      { name: 'Instagram', value: 50, posts: 95 },
      { name: 'LinkedIn', value: 25, posts: 60 },
      { name: 'Twitter', value: 15, posts: 40 },
      { name: 'Facebook', value: 10, posts: 25 },
    ],
  };

  // Handchow Data (50% growth in 1 month)
  const handchowData = {
    name: 'Handchow',
    color: '#F97316',
    gradient: 'from-orange-500 to-red-500',
    followerGrowth: [
      { month: 'Start', followers: 200 },
      { month: 'Week 1', followers: 230 },
      { month: 'Week 2', followers: 260 },
      { month: 'Week 3', followers: 280 },
      { month: 'Week 4', followers: 300 },
    ],
    engagement: [
      { month: 'Start', engagement: 5.2, reach: 1500, impressions: 3800 },
      { month: 'Week 1', engagement: 6.8, reach: 2100, impressions: 5200 },
      { month: 'Week 2', engagement: 8.1, reach: 2800, impressions: 7200 },
      { month: 'Week 3', engagement: 9.5, reach: 3500, impressions: 9500 },
      { month: 'Week 4', engagement: 11.2, reach: 4200, impressions: 12500 },
    ],
    metrics: {
      startFollowers: 200,
      endFollowers: 300,
      growth: '50%',
      totalGrowth: 100,
      avgEngagement: '8.2%',
      totalReach: '14.1K',
      totalImpressions: '38.2K',
      timeframe: '1 Month',
    },
    platformDistribution: [
      { name: 'Instagram', value: 60, posts: 45 },
      { name: 'TikTok', value: 25, posts: 20 },
      { name: 'Twitter', value: 10, posts: 12 },
      { name: 'Facebook', value: 5, posts: 8 },
    ],
  };

  const companies = {
    ornamap: ornamapData,
    payzeep: payzeepData,
    handchow: handchowData,
  };

  const currentData = companies[selectedCompany as keyof typeof companies];

  const platformColors = {
    Instagram: '#E1306C',
    Twitter: '#1DA1F2',
    LinkedIn: '#0077B5',
    Facebook: '#1877F2',
    TikTok: '#000000',
  };

  return (
    <section
      id="analytics"
      className="pt-6 pb-20 bg-gradient-to-br from-beige-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Social Media Analytics Dashboard
          </h2>
          <div className="w-24 h-1 bg-beige-700 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Data-driven insights from successful social media campaigns
          </p>
        </motion.div>

        {/* Company Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(companies).map(([key, company]) => (
            <button
              key={key}
              onClick={() => setSelectedCompany(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedCompany === key
                  ? `bg-gradient-to-r ${company.gradient} text-white shadow-lg scale-105`
                  : 'bg-white text-gray-700 hover:bg-beige-100 shadow-md'
              }`}
            >
              {company.name}
            </button>
          ))}
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`bg-gradient-to-br ${currentData.gradient} p-6 rounded-xl text-white shadow-lg`}
          >
            <Users className="w-8 h-8 mb-3 opacity-90" />
            <div className="text-sm opacity-90 mb-1">Follower Growth</div>
            <div className="text-3xl font-bold mb-1">
              {currentData.metrics.startFollowers} → {currentData.metrics.endFollowers}
            </div>
            <div className="text-lg font-semibold">{currentData.metrics.growth}</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <TrendingUp className="w-8 h-8 text-beige-700 mb-3" />
            <div className="text-sm text-gray-600 mb-1">Average Engagement</div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {currentData.metrics.avgEngagement}
            </div>
            <div className="text-sm text-gray-600">Across all platforms</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <Share2 className="w-8 h-8 text-beige-700 mb-3" />
            <div className="text-sm text-gray-600 mb-1">Total Reach</div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {currentData.metrics.totalReach}
            </div>
            <div className="text-sm text-gray-600">Cumulative reach</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <MessageCircle className="w-8 h-8 text-beige-700 mb-3" />
            <div className="text-sm text-gray-600 mb-1">Total Impressions</div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {currentData.metrics.totalImpressions}
            </div>
            <div className="text-sm text-gray-600">Content views</div>
          </motion.div>
        </div>

        {/* Charts Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Follower Growth Chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Follower Growth Over Time
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={currentData.followerGrowth}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="followers"
                  stroke={currentData.color}
                  strokeWidth={3}
                  name="Followers"
                  dot={{ fill: currentData.color, r: 5 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Platform Distribution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Platform Distribution
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={currentData.platformDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name} ${value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {currentData.platformDistribution.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        platformColors[entry.name as keyof typeof platformColors] ||
                        currentData.color
                      }
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {currentData.platformDistribution.map((platform, index) => (
                <div key={index} className="text-sm">
                  <span className="font-semibold">{platform.name}:</span>{' '}
                  {platform.posts} posts
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Engagement Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white p-8 rounded-xl shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Engagement & Performance Metrics
          </h3>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={currentData.engagement}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis yAxisId="left" stroke="#6b7280" />
              <YAxis yAxisId="right" orientation="right" stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Bar
                yAxisId="left"
                dataKey="engagement"
                fill={currentData.color}
                name="Engagement %"
                radius={[8, 8, 0, 0]}
              />
              <Bar
                yAxisId="right"
                dataKey="reach"
                fill="#b8956a"
                name="Reach"
                radius={[8, 8, 0, 0]}
              />
              <Bar
                yAxisId="right"
                dataKey="impressions"
                fill="#d9c9a8"
                name="Impressions"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Growth Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className={`mt-8 bg-gradient-to-r ${currentData.gradient} p-8 rounded-xl text-white shadow-lg`}
        >
          <h3 className="text-2xl font-bold mb-4">Campaign Summary</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-sm opacity-90 mb-2">Total Follower Growth</div>
              <div className="text-3xl font-bold">
                +{currentData.metrics.totalGrowth} followers
              </div>
            </div>
            <div>
              <div className="text-sm opacity-90 mb-2">Growth Percentage</div>
              <div className="text-3xl font-bold">{currentData.metrics.growth}</div>
            </div>
            <div>
              <div className="text-sm opacity-90 mb-2">
                {currentData.metrics.timeframe || 'Campaign Duration'}
              </div>
              <div className="text-3xl font-bold">
                {currentData.metrics.timeframe || '6-7 Months'}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
