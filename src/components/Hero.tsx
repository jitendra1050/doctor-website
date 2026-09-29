import React from 'react';
import { Phone, Calendar, Users, Award, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '2+' },
    { icon: Users, label: 'Patients Treated', value: '500+' },
    { icon: Star, label: 'Specializations', value: '6' },
    { icon: Star, label: 'Patient Rating', value: '4.8/5' },
  ];

  const scrollToAppointment = () => {
    const element = document.querySelector('#appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 lg:pt-32 pb-16 bg-gradient-to-b from-brand-50/50 via-white to-slate-50 relative overflow-hidden">
      {/* Subtle radial background decorative element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-brand-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-brand-50 border border-brand-200/60 text-brand-800 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
              <span>MBBS • Certified Orthopedic Care</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-900 tracking-tighter leading-[1.15]">
              Dr. Sam Merriaki
            </h1>

            <p className="text-xl lg:text-2xl text-slate-700 font-medium tracking-tight">
              Experienced Orthopedist in Mumbai, India
            </p>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed-plus max-w-xl">
              Providing personalized bone, joint, and musculoskeletal care with a patient-first philosophy.
              Evidence-based treatments for fractures, arthritis, and sports injuries designed to restore your mobility.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={scrollToAppointment}
                className="bg-brand-600 hover:bg-brand-700 active:scale-[0.98] text-white px-7 py-3.5 rounded-xl font-semibold transition-all duration-200 shadow-soft-lg hover:shadow-soft-xl flex items-center justify-center space-x-2 focus:outline-none focus:ring-4 focus:ring-brand-500/20"
              >
                <Calendar size={18} />
                <span>Book an Appointment</span>
              </button>

              <a
                href="tel:+91XXXXXXXXXX"
                className="border-2 border-slate-200 hover:border-brand-600 hover:text-brand-700 text-slate-700 bg-white px-7 py-3.5 rounded-xl font-semibold transition-all duration-200 shadow-soft hover:shadow-elevated flex items-center justify-center space-x-2 focus:outline-none focus:ring-4 focus:ring-slate-500/20"
              >
                <Phone size={18} />
                <span>Call Clinic</span>
              </a>
            </div>
          </div>

          {/* Right Content - Doctor Image / Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full max-w-sm mx-auto">
              {/* Layered visual card */}
              <div className="surface-floating rounded-3xl p-6 border border-slate-100 bg-gradient-to-b from-white to-slate-50/50">
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-brand-100 to-brand-50 aspect-[4/5] flex items-center justify-center border border-brand-100/50">
                  <div className="text-center p-6">
                    <div className="w-36 h-36 mx-auto bg-white rounded-full flex items-center justify-center shadow-soft-lg mb-4 border border-brand-100">
                      <Users size={64} className="text-brand-600" />
                    </div>
                    <div className="font-display font-bold text-slate-900 text-xl">Dr. Sam Merriaki</div>
                    <div className="text-sm font-medium text-brand-700 mt-0.5">MBBS (Orthopedist)</div>
                    <div className="text-xs text-slate-500 mt-1">Mumbai, India</div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="mt-4 flex items-center justify-between p-3.5 bg-brand-50/80 rounded-xl border border-brand-100/80">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold shadow-soft">
                      <Award size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase font-semibold">Specialization</div>
                      <div className="text-sm font-bold text-slate-900">Orthopedic Surgery & Care</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-500">Location</div>
                    <div className="text-sm font-bold text-brand-700">Mumbai, India</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section with elevated cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-elevated border border-slate-100 hover:shadow-floating transition-shadow duration-300"
            >
              <stat.icon className="text-brand-600 mb-3" size={28} />
              <div className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-1 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
