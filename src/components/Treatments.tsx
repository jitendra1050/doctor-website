import React from 'react';
import { Clock, FileText, Activity, UserCheck, Calendar, Stethoscope } from 'lucide-react';

const Treatments: React.FC = () => {
  const treatments = [
    {
      icon: Stethoscope,
      title: 'Initial Consultation',
      description: 'Complete physical evaluation, clinical history review, and preliminary treatment roadmapping.',
      duration: '30-45 mins',
      action: 'Book Now',
    },
    {
      icon: Activity,
      title: 'Diagnostic Review & Imaging',
      description: 'Assessment of X-rays, MRI scans, and lab reports for precise musculoskeletal diagnosis.',
      duration: 'As needed',
      action: 'Schedule',
    },
    {
      icon: FileText,
      title: 'Custom Care Planning',
      description: 'Step-by-step recovery plans covering medical management, exercise guidelines, and milestones.',
      duration: '20-30 mins',
      action: 'Inquire',
    },
    {
      icon: UserCheck,
      title: 'Follow-up Consultation',
      description: 'Progress evaluation, plaster/cast removal assessment, and treatment recalibration.',
      duration: '15-20 mins',
      action: 'Book Now',
    },
    {
      icon: Calendar,
      title: 'Joint Health Screening',
      description: 'Preventive screening for bone density, posture alignment, and early osteoarthritic changes.',
      duration: '30 mins',
      action: 'Schedule',
    },
    {
      icon: Clock,
      title: 'Urgent Trauma Evaluation',
      description: 'Prompt clinical evaluation of acute sprains, sudden joint swelling, or suspected fractures.',
      duration: 'Immediate',
      action: 'Contact',
    },
  ];

  const scrollToAppointment = () => {
    const element = document.querySelector('#appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="treatments" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-brand-700 text-xs uppercase font-semibold tracking-wider bg-brand-50 border border-brand-100 px-3 py-1 rounded-full">
              Services
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mt-3 mb-4 tracking-tighter">
              Treatments & Services
            </h2>
            <div className="w-12 h-1 bg-brand-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed-plus">
              Transparent, patient-oriented medical consultations designed for optimal orthopedic health.
            </p>
          </div>

          {/* Treatments Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((treatment, index) => (
              <div
                key={index}
                className="surface-elevated rounded-2xl p-6 border border-slate-100 hover:shadow-floating hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 bg-brand-50 rounded-xl flex items-center justify-center border border-brand-100/60">
                      <treatment.icon className="text-brand-600" size={22} />
                    </div>
                    <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                      {treatment.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-slate-900 mb-2">
                    {treatment.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed-plus mb-6">
                    {treatment.description}
                  </p>
                </div>

                <button
                  onClick={scrollToAppointment}
                  className="w-full bg-slate-900 hover:bg-brand-600 text-white py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                >
                  {treatment.action}
                </button>
              </div>
            ))}
          </div>

          {/* Bottom Banner */}
          <div className="mt-14 bg-gradient-to-r from-brand-700 to-brand-900 rounded-2xl p-8 sm:p-10 text-white shadow-soft-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-display font-bold mb-2">Need a tailored medical opinion?</h3>
              <p className="text-brand-100 text-sm sm:text-base max-w-xl">
                Consult with Dr. Sam Merriaki to diagnose your bone or joint discomfort and establish a clear recovery path.
              </p>
            </div>
            <button
              onClick={scrollToAppointment}
              className="bg-white hover:bg-brand-50 text-brand-900 px-6 py-3.5 rounded-xl font-semibold text-sm whitespace-nowrap shadow-soft transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Treatments;
