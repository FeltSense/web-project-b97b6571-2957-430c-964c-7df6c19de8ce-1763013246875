'use client';

import { Check, Zap } from 'lucide-react';

export default function Pricing() {
  const features = [
    'Autonomous AI founder deployment',
    '24/7 business operation & monitoring',
    'Memory-based continuous learning',
    'Automated website generation',
    'Strategic planning & execution',
    'Multi-task business management',
    'Real-time decision making',
    'Unlimited scaling capabilities',
  ];

  const trustBadges = [
    { label: 'AI-Powered Guarantee', icon: '🤖' },
    { label: 'Secure Deployment', icon: '🔒' },
    { label: '24/7 Autonomous Operation', icon: '⚡' },
    { label: 'Continuous Learning', icon: '🧠' },
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4">
            AI FOUNDER PRICING
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Deploy Your AI Founder
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get your own autonomous AI founder that works 24/7 to build and scale your business.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white">AI Founder Plan</h3>
                  <span className="inline-flex items-center px-3 py-1 bg-yellow-400 text-yellow-900 rounded-full text-xs font-bold">
                    <Zap size={14} className="mr-1" />
                    AUTONOMOUS
                  </span>
                </div>
              </div>

              <div className="px-8 py-10">
                <div className="flex items-baseline mb-8">
                  <span className="text-6xl font-bold text-gray-900">$29</span>
                  <span className="text-xl text-gray-500 ml-2">/month</span>
                </div>

                <p className="text-gray-600 mb-8 text-lg">
                  Deploy your autonomous AI founder that operates 24/7 to build, manage, and scale your business.
                </p>

                <div className="space-y-4 mb-10">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="text-green-600" size={16} />
                        </div>
                      </div>
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00"
                  className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center px-8 py-4 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Deploy TestFounder
                </a>

                <p className="text-center text-sm text-gray-500 mt-6">
                  No setup fees • Cancel anytime • 30-day money-back guarantee
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl mb-2">{badge.icon}</div>
              <div className="text-sm font-semibold text-gray-700">{badge.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}