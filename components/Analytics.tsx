'use client';

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

export default function Analytics() {
  const campaignPerformance = [
    { month: 'Q1 2022', impressions: 100000, engagement: 5000, conversions: 200 },
    { month: 'Q2 2022', impressions: 120000, engagement: 6500, conversions: 280 },
    { month: 'Q3 2022', impressions: 140000, engagement: 8000, conversions: 350 },
    { month: 'Q4 2022', impressions: 160000, engagement: 9500, conversions: 420 },
    { month: 'Q1 2023', impressions: 180000, engagement: 11000, conversions: 500 },
    { month: 'Q2 2023', impressions: 200000, engagement: 12500, conversions: 580 },
  ];

  const platformDistribution = [
    { name: 'Product Marketing', value: 40, color: '#b8956a' },
    { name: 'Content Strategy', value: 25, color: '#8b6a4b' },
    { name: 'Growth Campaigns', value: 20, color: '#d9c9a8' },
    { name: 'Analytics & Research', value: 10, color: '#c4a97d' },
    { name: 'Lifecycle Marketing', value: 5, color: '#a8825a' },
  ];

  const roiData = [
    { campaign: 'StrollAI Launch', roi: 85, revenue: 0 },
    { campaign: 'Wallet Campaign', roi: 85, revenue: 0 },
    { campaign: 'RillaHost Growth', roi: 50, revenue: 0 },
    { campaign: 'JekaConnect Launch', roi: 20, revenue: 0 },
  ];

  const engagementMetrics = [
    { metric: 'Wallet Usage Growth', value: '85%', change: 'OrnaMap Campaign', trend: 'up' },
    { metric: 'User Retention Increase', value: '25%', change: 'Lifecycle Messaging', trend: 'up' },
    { metric: 'Site Traffic Growth', value: '50%', change: 'RillaHost Campaign', trend: 'up' },
    { metric: 'Conversion Increase', value: '20%', change: 'Demand Generation', trend: 'up' },
  ];

  return (
    <section
      id="analytics"
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
            Data & Analytics
          </h2>
          <div className="w-24 h-1 bg-beige-700 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Data-driven insights from successful marketing campaigns
          </p>
        </motion.div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {engagementMetrics.map((metric, index) => (
            <motion.div
              key={metric.metric}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="text-gray-600 text-sm mb-2">{metric.metric}</div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {metric.value}
              </div>
              <div
                className={`text-sm font-semibold ${
                  metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {metric.change} from last period
              </div>
            </motion.div>
          ))}
        </div>

        {/* Campaign Performance Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 rounded-xl shadow-lg mb-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Campaign Performance Over Time
          </h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={campaignPerformance}>
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
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="impressions"
                stroke="#b8956a"
                strokeWidth={3}
                name="Impressions"
                dot={{ fill: '#b8956a', r: 5 }}
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="engagement"
                stroke="#8b6a4b"
                strokeWidth={3}
                name="Engagement"
                dot={{ fill: '#8b6a4b', r: 5 }}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="conversions"
                stroke="#d9c9a8"
                strokeWidth={3}
                name="Conversions"
                dot={{ fill: '#d9c9a8', r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Platform Distribution */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Platform Distribution
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={platformDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {platformDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          {/* ROI Performance */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              ROI by Campaign
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={roiData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="campaign" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                  }}
                />
                <Legend />
                <Bar dataKey="roi" fill="#b8956a" name="ROI %" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
