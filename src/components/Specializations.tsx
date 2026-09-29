import React from 'react';
import { Bone, Activity, Heart, Stethoscope, Users, ArrowRight } from 'lucide-react';

const Specializations: React.FC = () => {
  const specializations = [
    {
      icon: Bone,
      title: 'Fracture Care & Trauma',
      description: 'Diagnosis, closed reduction, casting, splinting, and management of bone fractures and acute injuries.',
    },
    {
      icon: Activity,
      title: 'Joint Pain Management',
      description: 'Comprehensive evaluation and non-surgical/surgical management for knee, hip, and shoulder arthritis.',
    },
    {
      icon: Heart,
      title: 'Sports Injuries',
      description: 'Rehabilitation and treatment for ligament sprains, muscle strains, tendonitis, and athletic injuries.',
    },
    {
      icon: Stethoscope,
      title: 'Spine & Back Disorders',
      description: 'Conservative care and postural correction for chronic low back pain, sciatica, and neck stiffness.',
    },
    {
      icon: Users,
      title: 'Pediatric Orthopedics',
      description: 'Evaluation and care for developmental bone issues, growth plate concerns, and pediatric fractures.',
    },
    {
      icon: Bone,
      title: 'Musculoskeletal Rehabilitation',
      description: 'Post-operative recovery plans and preventive physical conditioning to restore joint range of motion.',
    },
  ];

  const scrollToAppointment = () => {
    const element = document.querySelector('#appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="specializations" className="py-20 bg-slate-50/60">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-brand-700 text-xs uppercase font-semibold tracking-wider bg-brand-50 border border-brand-100 px-3 py-1 rounded-full">
              Clinical Scope
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mt-3 mb-4 tracking-tighter">
              Areas of Specialization
            </h2>
            <div className="w-12 h-1 bg-brand-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed-plus">
              Focused orthopedic care addressing bone, joint, and tendon conditions with evidence-based methods.
            </p>
          </div>

          {/* Specializations Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializations.map((spec, index) => (
              <div
                key={index}
                className="surface-elevated rounded-2xl p-6 border border-slate-100 hover:shadow-floating hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              >
                <div className="w-12 h-12 bg-brand-50 border border-brand-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-600 transition-colors duration-200">
                  <spec.icon className="text-brand-600 group-hover:text-white transition-colors duration-200" size={24} />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-2.5">
                  {spec.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed-plus mb-6 flex-grow">
                  {spec.description}
                </p>
                <button
                  onClick={scrollToAppointment}
                  className="text-brand-700 hover:text-brand-800 font-semibold text-sm flex items-center space-x-1.5 self-start group/btn outline-none focus-visible:underline"
                >
                  <span>Book for this condition</span>
                  <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specializations;
