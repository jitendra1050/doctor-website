import React from 'react';
import { GraduationCap, Award, Briefcase, Heart } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Qualification',
      description: 'MBBS with specialized orthopedic clinical training',
    },
    {
      icon: Briefcase,
      title: 'Experience',
      description: '2+ years of dedicated orthopedic medical practice',
    },
    {
      icon: Award,
      title: 'Clinical Focus',
      description: 'Bone fractures, joint care & musculoskeletal rehabilitation',
    },
    {
      icon: Heart,
      title: 'Care Philosophy',
      description: 'Patient-first, evidence-based, compassionate care',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-brand-700 text-xs uppercase font-semibold tracking-wider bg-brand-50 border border-brand-100 px-3 py-1 rounded-full">
              About Doctor
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mt-3 mb-4 tracking-tighter">
              Meet Dr. Sam Merriaki
            </h2>
            <div className="w-12 h-1 bg-brand-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed-plus">
              Committed to providing high-quality, compassionate orthopedic healthcare to patients in Mumbai and surrounding areas.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left - Visual Card */}
            <div className="lg:col-span-5">
              <div className="surface-floating rounded-3xl p-6 border border-slate-100 bg-gradient-to-b from-brand-50/40 to-white">
                <div className="bg-white rounded-2xl p-8 text-center border border-slate-100 shadow-soft">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-brand-100 to-brand-50 rounded-full flex items-center justify-center mb-4 border border-brand-100">
                    <GraduationCap size={56} className="text-brand-700" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-slate-900 mb-1">Dr. Sam Merriaki</h3>
                  <p className="text-brand-700 font-semibold text-sm mb-4">MBBS, Orthopedist</p>
                  <div className="text-xs text-slate-500 border-t border-slate-100 pt-3 space-y-1">
                    <div>📍 Mumbai, Maharashtra</div>
                    <div>🏥 Private Practice Consultation</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-4 tracking-tight">
                  Dedicated Orthopedic Specialist in Mumbai
                </h3>
                <p className="text-slate-600 leading-relaxed-plus mb-4 text-base">
                  Dr. Sam Merriaki is a medical professional specializing in orthopedic care, holding an
                  <strong> MBBS</strong> degree with over 2 years of focused clinical experience. Based in Mumbai,
                  Maharashtra, Dr. Merriaki brings a careful, attentive approach to diagnosing and treating
                  musculoskeletal disorders.
                </p>
                <p className="text-slate-600 leading-relaxed-plus mb-4 text-base">
                  The clinical practice centers on tailored recovery protocols—combining accurate diagnosis,
                  modern conservative treatments, and surgical options when indicated. Dr. Merriaki places paramount
                  importance on explaining conditions clearly so that patients feel empowered and confident throughout
                  their healing process.
                </p>
              </div>

              {/* Highlights 2x2 Grid */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="bg-slate-50/80 rounded-xl p-4 border border-slate-100 hover:border-brand-200 transition-colors duration-200"
                  >
                    <item.icon className="text-brand-600 mb-2" size={24} />
                    <h4 className="font-semibold text-slate-900 text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
