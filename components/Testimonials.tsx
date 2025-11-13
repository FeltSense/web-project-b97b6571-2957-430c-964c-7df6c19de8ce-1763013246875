'use client';

import { Star } from 'lucide-react';

export default function Testimonials() {
  const aiFeatures = [
    {
      title: 'Autonomous Decision Making',
      description: 'Advanced neural networks process thousands of data points to make optimal business decisions without human intervention.',
      icon: '🧠',
      metric: '99.7% Accuracy',
    },
    {
      title: 'Continuous Learning',
      description: 'Memory-based learning system that improves performance with every interaction and business scenario.',
      icon: '📚',
      metric: '24/7 Learning',
    },
    {
      title: 'Strategic Planning',
      description: 'Long-term strategic planning capabilities with real-time adaptation to market changes and opportunities.',
      icon: '🎯',
      metric: '10x Faster Planning',
    },
    {
      title: 'Multi-Task Management',
      description: 'Simultaneously manage multiple business operations, from marketing to customer service to financial planning.',
      icon: '⚡',
      metric: '100+ Concurrent Tasks',
    },
  ];

  const testimonials = [
    {
      quote:
        'TestFounder revolutionized our business operations. It operates 24/7, making strategic decisions that increased our revenue by 300% in just 6 months.',
      author: 'Sarah Chen',
      position: 'CEO, TechStartup Inc',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
      rating: 5,
    },
    {
      quote:
        'The autonomous AI founder capabilities are incredible. TestFounder built and launched 3 profitable websites while I was sleeping. True 24/7 entrepreneurship.',
      author: 'Marcus Rodriguez',
      position: 'Serial Entrepreneur',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
      rating: 5,
    },
    {
      quote:
        'TestFounder\'s memory-based learning is game-changing. It remembers every customer interaction and continuously optimizes our business processes autonomously.',
      author: 'Emily Watson',
      position: 'Founder, AI Solutions Co',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
      rating: 5,
    },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4">
            AI FEATURES
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Advanced AI Capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            TestFounder combines cutting-edge AI technology with entrepreneurial intelligence to operate businesses autonomously.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {aiFeatures.map((feature, index) => (
            <div
              key={index}
              className="group text-center bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-6xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {feature.description}
              </p>
              <div className="inline-block px-4 py-2 bg-purple-600 text-white rounded-full text-sm font-bold">
                {feature.metric}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold mb-4">
            SUCCESS STORIES
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            What Entrepreneurs Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real results from businesses powered by TestFounder's autonomous AI capabilities.
          </p>
        </div>

        <div className="relative">
          <div className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scrollbar-hide">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-none w-full md:w-96 snap-center"
              >
                <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-xl h-full border border-purple-100">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-yellow-400 fill-yellow-400"
                        size={20}
                      />
                    ))}
                  </div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-14 h-14 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-bold text-gray-900">
                        {testimonial.author}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {testimonial.position}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}