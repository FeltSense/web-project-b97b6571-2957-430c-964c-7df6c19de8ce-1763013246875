'use client';

import { Star } from 'lucide-react';

export default function Testimonials() {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      bio: 'Visionary leader with 15+ years in tech innovation',
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      bio: 'Expert in cloud architecture and AI solutions',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Security',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      bio: 'Cybersecurity specialist with government clearance',
    },
    {
      name: 'David Park',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      bio: 'Full-stack engineer passionate about clean code',
    },
  ];

  const testimonials = [
    {
      quote:
        'TechBusiness transformed our entire infrastructure. Their cloud solutions reduced our costs by 40% while improving performance dramatically.',
      author: 'Jennifer Martinez',
      position: 'CTO, GlobalCorp',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
      rating: 5,
    },
    {
      quote:
        'The team\'s expertise in cybersecurity gave us peace of mind. Their proactive approach prevented several potential breaches.',
      author: 'Robert Thompson',
      position: 'CEO, SecureFinance',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
      rating: 5,
    },
    {
      quote:
        'Outstanding custom development work. They delivered our platform ahead of schedule and under budget. Highly recommended!',
      author: 'Amanda Lee',
      position: 'Founder, StartupHub',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
      rating: 5,
    },
  ];

  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            OUR TEAM
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Meet The Experts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A talented team of professionals dedicated to delivering exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {team.map((member, index) => (
            <div
              key={index}
              className="group text-center"
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
        </div>

        <div className="relative">
          <div className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scrollbar-hide">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-none w-full md:w-96 snap-center"
              >
                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-xl h-full border border-blue-100">
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