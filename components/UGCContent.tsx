'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Heart, MessageCircle, Share2, ChevronLeft, ChevronRight } from 'lucide-react';

export default function UGCContent() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // UGC content with role and result information
  interface UGCItem {
    id: number;
    category: string;
    image: string;
    user: string;
    caption: string;
    likes: number;
    comments: number;
    platform: string;
    role?: string;
    result?: string;
  }

  interface UGCItem {
    id: number;
    category: string;
    videoUrl?: string;
    embedCode?: string;
    image?: string;
    user: string;
    caption: string;
    likes: number;
    comments: number;
    platform: string;
    role?: string;
    result?: string;
  }

  const ugcContent: UGCItem[] = [
    {
      id: 1,
      category: 'scripted',
      videoUrl: 'https://www.instagram.com/reel/DQZAr-wDNcx/',
      embedCode: 'DQZAr-wDNcx',
      image: '/images/ornamap/Image (1).jpeg',
      user: 'OrnaMap Campaign',
      caption: 'Feature storytelling reel showcasing StrollAI capabilities',
      likes: 1245,
      comments: 89,
      platform: 'Instagram',
      role: 'Script / Creative Direction / Publishing Strategy',
      result: 'Achieved 45K views, increased engagement by 35%',
    },
    {
      id: 2,
      category: 'educational',
      videoUrl: 'https://drive.google.com/file/d/1yOR2Dy8BxkD34HX8YXSx5J0rJHwuJEVA/view',
      embedCode: '1yOR2Dy8BxkD34HX8YXSx5J0rJHwuJEVA',
      image: '/images/payzip/Image (10).jpeg',
      user: 'Payzeep Educational',
      caption: 'How-to guide: Setting up payment solutions for your business',
      likes: 892,
      comments: 45,
      platform: 'Google Drive',
      role: 'Script & Content Direction by Me',
      result: 'Achieved 28K views, increased lead generation by 40%',
    },
    {
      id: 3,
      category: 'campaign',
      videoUrl: 'https://www.instagram.com/reel/DR4Ofp5CCPT/',
      embedCode: 'DR4Ofp5CCPT',
      image: '/images/handchow/Image (17).jpeg',
      user: 'HandChow Campaign',
      caption: 'Brand positioning video showcasing product benefits',
      likes: 2156,
      comments: 128,
      platform: 'Instagram',
      role: 'Script / Creative Direction / Publishing Strategy',
      result: 'Achieved 125K views, increased brand awareness by 50%',
    },
    {
      id: 4,
      category: 'scripted',
      videoUrl: 'https://www.instagram.com/reel/DH29cCzIIVG/',
      embedCode: 'DH29cCzIIVG',
      image: '/images/ornamap/Image (2).jpeg',
      user: 'OrnaMap Feature',
      caption: 'Wallet feature launch video with user testimonials',
      likes: 1890,
      comments: 156,
      platform: 'Instagram',
      role: 'Concept + Script + Publishing by Me',
      result: 'Achieved 78K views, drove 85% increase in wallet adoption',
    },
    {
      id: 5,
      category: 'educational',
      videoUrl: 'https://www.instagram.com/reel/DDuILQjIiWD/',
      embedCode: 'DDuILQjIiWD',
      image: '/images/payzip/Image (11).jpeg',
      user: 'Payzeep Tutorial',
      caption: 'Step-by-step guide to using Payzeep for merchants',
      likes: 567,
      comments: 32,
      platform: 'Instagram',
      role: 'Script & Content Direction by Me',
      result: 'Achieved 15K views, improved user onboarding by 30%',
    },
    {
      id: 6,
      category: 'campaign',
      videoUrl: 'https://drive.google.com/file/d/1bsfP_s3iSAXJAYiDyw8A-LuRUXITLzqC/view',
      embedCode: '1bsfP_s3iSAXJAYiDyw8A-LuRUXITLzqC',
      image: '/images/handchow/Image (18).jpeg',
      user: 'HandChow Campaign Video',
      caption: 'User-generated content campaign showcasing real experiences',
      likes: 3421,
      comments: 234,
      platform: 'Google Drive',
      role: 'Creative Direction / Publishing Strategy',
      result: 'Achieved 250K views, increased engagement by 45%',
    },
  ];

  const categories = ['all', 'scripted', 'educational', 'campaign'];

  const filteredContent =
    selectedCategory === 'all'
      ? ugcContent
      : ugcContent.filter((item) => item.category === selectedCategory);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredContent.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredContent.length) % filteredContent.length);
  };

  return (
    <section
      id="ugc"
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
            Video & UGC Content
          </h2>
          <div className="w-24 h-1 bg-beige-700 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Scripted, educational, and campaign videos that drive engagement and results
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentIndex(0);
              }}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-beige-700 text-white'
                  : 'bg-beige-100 text-gray-700 hover:bg-beige-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* UGC Carousel */}
        <div className="relative">
          <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-2xl bg-gray-100">
            <AnimatePresence mode="wait">
              {filteredContent.length > 0 && (
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <div className="relative w-full h-full group cursor-pointer">
                    {filteredContent[currentIndex].image ? (
                      <>
                        <Image
                          src={filteredContent[currentIndex].image}
                          alt={filteredContent[currentIndex].caption}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                          unoptimized
                        />
                        {/* Clickable overlay */}
                        <a
                          href={filteredContent[currentIndex].videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-all z-20"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="bg-white/90 backdrop-blur-sm rounded-full p-6 group-hover:scale-110 transition-transform">
                            <svg
                              className="w-16 h-16 text-beige-700"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-center">
                              <p className="text-sm font-semibold text-gray-900">Click to Watch</p>
                              <p className="text-xs text-gray-600">{filteredContent[currentIndex].platform}</p>
                            </div>
                          </div>
                        </a>
                      </>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-beige-400 to-beige-600 flex items-center justify-center">
                        <a
                          href={filteredContent[currentIndex].videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/90 backdrop-blur-sm rounded-full p-8 hover:scale-110 transition-transform text-center"
                        >
                          <svg
                            className="w-20 h-20 text-beige-700 mx-auto mb-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                          <p className="text-lg font-semibold text-gray-900">Watch Video</p>
                          <p className="text-sm text-gray-600">{filteredContent[currentIndex].platform}</p>
                        </a>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none z-10"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                          <span className="font-semibold">{filteredContent[currentIndex].user}</span>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                          <span className="text-sm">{filteredContent[currentIndex].platform}</span>
                        </div>
                      </div>
                      <p className="text-lg md:text-xl mb-4 leading-relaxed">
                        {filteredContent[currentIndex].caption}
                      </p>
                      {filteredContent[currentIndex].role && (
                        <div className="mb-3">
                          <p className="text-sm font-semibold mb-1">Role:</p>
                          <p className="text-sm opacity-90">{filteredContent[currentIndex].role}</p>
                        </div>
                      )}
                      {filteredContent[currentIndex].result && (
                        <div className="mb-3">
                          <p className="text-sm font-semibold mb-1">Result:</p>
                          <p className="text-sm opacity-90">{filteredContent[currentIndex].result}</p>
                        </div>
                      )}
                      <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                          <Heart className="w-5 h-5" />
                          <span>{typeof filteredContent[currentIndex].likes === 'number' ? filteredContent[currentIndex].likes.toLocaleString() : filteredContent[currentIndex].likes}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MessageCircle className="w-5 h-5" />
                          <span>{filteredContent[currentIndex].comments}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Share2 className="w-5 h-5" />
                          <span>Share</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            {filteredContent.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-colors z-10"
                  aria-label="Previous content"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-700" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-colors z-10"
                  aria-label="Next content"
                >
                  <ChevronRight className="w-6 h-6 text-gray-700" />
                </button>
              </>
            )}

            {/* Dots Indicator */}
            {filteredContent.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {filteredContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-white w-8'
                        : 'bg-white/50'
                    }`}
                    aria-label={`Go to content ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* UGC Grid (Optional - shows thumbnails) */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {filteredContent.slice(0, 4).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative h-32 md:h-40 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => setCurrentIndex(filteredContent.findIndex((c) => c.id === item.id))}
            >
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.caption}
                  fill
                  className="object-cover"
                  unoptimized
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-beige-400 to-beige-600 flex items-center justify-center text-white font-semibold">
                  Video
                </div>
              )}
              <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
