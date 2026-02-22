'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
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
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-beige-700 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's discuss how we can grow your brand together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your marketing team. Feel free to
              reach out through any of the channels below.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:pamelanazam@gmail.com"
                className="flex items-center gap-4 text-gray-700 hover:text-beige-700 transition-colors"
              >
                <div className="bg-beige-100 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-beige-700" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-gray-600">pamelanazam@gmail.com</div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/pamelaodunna"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-700 hover:text-beige-700 transition-colors"
              >
                <div className="bg-beige-100 p-3 rounded-lg">
                  <Linkedin className="w-6 h-6 text-beige-700" />
                </div>
                <div>
                  <div className="font-semibold">LinkedIn</div>
                  <div className="text-gray-600">linkedin.com/in/pamelaodunna</div>
                </div>
              </a>

              <div className="flex items-center gap-4 text-gray-700">
                <div className="bg-beige-100 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-beige-700" />
                </div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-gray-600">09017769530</div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-700">
                <div className="bg-beige-100 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-beige-700" />
                </div>
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-gray-600">Lagos, Nigeria</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-beige-700 focus:border-transparent outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-beige-700 focus:border-transparent outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-beige-700 focus:border-transparent outline-none transition-all"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-beige-700 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-beige-700 text-white px-6 py-3 rounded-lg hover:bg-beige-800 transition-colors font-semibold"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
