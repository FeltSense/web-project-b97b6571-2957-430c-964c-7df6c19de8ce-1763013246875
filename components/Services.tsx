'use client';

import { Cloud, Shield, Zap, Code, Database, Users } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description:
        'Scalable cloud infrastructure that grows with your business. Deploy faster, scale smarter, and reduce costs with our managed cloud services.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description:
        'Enterprise-grade security solutions to protect your data and systems. Stay compliant and secure with 24/7 monitoring and threat prevention.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Code,
      title: 'Custom Development',
      description:
        'Tailored software solutions built specifically for your business needs. From web apps to mobile platforms, we bring your vision to life.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description:
        'Transform raw data into actionable insights. Make informed decisions with our advanced analytics and business intelligence solutions.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Zap,
      title: 'AI & Automation',
      description:
        'Leverage artificial intelligence to automate workflows and boost efficiency. Save time and reduce errors with intelligent automation.',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: Users,
      title: 'IT Consulting',
      description:
        'Strategic technology guidance from industry experts. Get personalized recommendations to optimize your IT infrastructure and processes.',
      color: 'from-pink-500 to-pink-600',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            OUR SERVICES
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Comprehensive Tech Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From cloud infrastructure to AI automation, we provide everything your business needs to thrive in the digital age.
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
                    className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors"
                  >
                    Learn More
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