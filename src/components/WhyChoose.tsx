import React from 'react';
import { Award, Heart, Clock, MapPin, Users, Shield } from 'lucide-react';

const WhyChoose: React.FC = () => {
  const reasons = [
    {
      icon: Award,
      title: 'Qualified Professional',
      description: 'MBBS qualification with dedicated clinical focus on modern orthopedic principles.',
    },
    {
      icon: Heart,
      title: 'Patient-Centric Approach',
      description: 'Clear explanations and empathetic consultations prioritizing your comfort.',
    },
    {
      icon: Shield,
      title: 'Evidence-Based Methods',
      description: 'Up-to-date diagnostic protocols aligned with current medical recommendations.',
    },
    {
      icon: Users,
      title: 'Personalized Plans',
      description: 'Care routines tailored to your age, mobility goals, and lifestyle requirements.',
    },
    {
      icon: Clock,
      title: 'Prompt Consultations',
      description: 'Streamlined appointment booking to minimize waiting room delays.',
    },
    {
      icon: MapPin,
      title: 'Local to Raisen',
      description: 'Conveniently accessible orthopedic clinic for residents of Mumbai, India.',
    },
  ];

  return (
    <section className="py-20 bg-slate-50/60">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-brand-700 text-xs uppercase font-semibold tracking-wider bg-brand-50 border border-brand-100 px-3 py-1 rounded-full">
              Why Choose Us
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mt-3 mb-4 tracking-tighter">
              Care Built Around Your Recovery
            </h2>
            <div className="w-12 h-1 bg-brand-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed-plus">
              Our clinic focuses on attentive, trustworthy medical consultations for every orthopedic patient.
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="surface-elevated rounded-2xl p-6 border border-slate-100 hover:shadow-floating transition-all duration-300"
              >
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-4 border border-brand-100">
                  <reason.icon className="text-brand-600" size={24} />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed-plus">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
