'use client';

import { Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    'AI Capabilities': [
      { label: '24/7 Autonomous Operation', href: '#services' },
      { label: 'Memory-Based Learning', href: '#services' },
      { label: 'Strategic Planning', href: '#services' },
      { label: 'Business Automation', href: '#services' },
    ],
    Company: [
      { label: 'About TestFounder', href: '#features' },
      { label: 'AI Features', href: '#features' },
      { label: 'Deployment', href: '#contact' },
      { label: 'Contact', href: '#contact' },
    ],
    Resources: [
      { label: 'AI Documentation', href: '#' },
      { label: 'Success Stories', href: '#features' },
      { label: 'API Reference', href: '#' },
      { label: 'Support', href: '#contact' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'AI Ethics', href: '#' },
      { label: 'Data Security', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-xl font-bold text-white">TestFounder</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              The world's first autonomous AI founder that operates 24/7 to build, manage, and scale businesses with superhuman intelligence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors duration-300"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-bold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} TestFounder. All rights reserved. Powered by Autonomous AI.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                Terms of Service
              </a>
              <a href="#contact" className="flex items-center text-gray-400 hover:text-purple-400 transition-colors">
                <Mail size={16} className="mr-1" />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}