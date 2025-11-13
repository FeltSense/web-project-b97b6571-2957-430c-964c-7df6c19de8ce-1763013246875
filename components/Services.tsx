'use client';

import { Clock, Brain, Globe, Zap, Target, Cpu } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Clock,
      title: '24/7 Autonomous Operation',
      description:
        'TestFounder never sleeps. Operating continuously around the clock, making strategic decisions, managing tasks, and scaling businesses while you focus on what matters most.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Brain,
      title: 'AI-Driven Entrepreneurship',
      description:
        'Advanced AI algorithms analyze market trends, identify opportunities, and execute business strategies with superhuman speed and precision.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Globe,
      title: 'Website Generation & Automation',
      description:
        'Instantly create professional websites, landing pages, and digital experiences. Automated deployment, optimization, and continuous improvement.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Cpu,
      title: 'Memory-Based Learning',
      description:
        'Persistent memory system that learns from every interaction, continuously improving performance and adapting to new challenges and opportunities.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Target,
      title: 'Strategic Planning & Execution',
      description:
        'Advanced task management and strategic planning capabilities. Set goals, create roadmaps, and execute complex business strategies autonomously.',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Zap,
      title: 'Business Process Automation',
      description:
        'Automate repetitive tasks, streamline workflows, and optimize operations. From customer service to financial management, all handled intelligently.',
      color: 'from-yellow-500 to-yellow-600',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4">
            AI CAPABILITIES
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Autonomous AI Founder Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            TestFounder combines advanced AI with entrepreneurial expertise to operate businesses autonomously, making intelligent decisions 24/7.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center text-purple-600 font-semibold group-hover:text-purple-700 transition-colors"
                  >
                    Explore Feature
                    <svg
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M6 3L11 8L6 13"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}