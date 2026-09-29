import React from 'react';
import { MapPin, Clock, Phone, Mail, AlertCircle } from 'lucide-react';

const ClinicInfo: React.FC = () => {
  const openingHours = [
    { day: 'Monday', hours: '09:00 AM - 06:00 PM' },
    { day: 'Tuesday', hours: '09:00 AM - 06:00 PM' },
    { day: 'Wednesday', hours: '09:00 AM - 06:00 PM' },
    { day: 'Thursday', hours: '09:00 AM - 06:00 PM' },
    { day: 'Friday', hours: '09:00 AM - 06:00 PM' },
    { day: 'Saturday', hours: '09:00 AM - 02:00 PM' },
    { day: 'Sunday', hours: 'Closed (Emergency Only)' },
  ];

  const today = new Date().getDay();
  const dayIndex = today === 0 ? 6 : today - 1;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-brand-700 text-xs uppercase font-semibold tracking-wider bg-brand-50 border border-brand-100 px-3 py-1 rounded-full">
              Clinic Details
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mt-3 mb-4 tracking-tighter">
              Location & Hours
            </h2>
            <div className="w-12 h-1 bg-brand-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              Find our consultation clinic in Mumbai, Maharashtra.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left Contact & Hours (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Hours Card */}
              <div className="surface-elevated rounded-2xl p-6 border border-slate-100">
                <div className="flex items-center space-x-3 mb-4 pb-3 border-b border-slate-100">
                  <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center border border-brand-100">
                    <Clock className="text-brand-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900 text-lg">Consultation Timings</h3>
                    <p className="text-xs text-slate-500">Regular clinic working schedule</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {openingHours.map((schedule, index) => (
                    <div
                      key={index}
                      className={`flex justify-between items-center py-2 px-3 rounded-lg text-sm ${
                        index === dayIndex
                          ? 'bg-brand-50 border border-brand-200 text-brand-900 font-semibold'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span className="flex items-center">
                        {schedule.day}
                        {index === dayIndex && (
                          <span className="text-[10px] bg-brand-600 text-white px-2 py-0.5 rounded-full ml-2">Today</span>
                        )}
                      </span>
                      <span className={schedule.hours.includes('Closed') ? 'text-amber-700 font-medium' : 'text-slate-600'}>
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency Advisory */}
              <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-5 flex items-start space-x-3.5">
                <AlertCircle className="text-amber-700 flex-shrink-0 mt-0.5" size={20} />
                <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                  <strong>Emergency Advisory:</strong> For severe acute trauma or life-threatening emergencies, please proceed immediately to the nearest government/civil hospital emergency trauma center or dial 108.
                </div>
              </div>
            </div>

            {/* Right Location Details (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="surface-elevated rounded-2xl p-6 border border-slate-100 space-y-4">
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center border border-brand-100 flex-shrink-0">
                    <MapPin className="text-brand-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">Clinic Location</h4>
                    <p className="text-sm text-slate-600 mt-0.5">Mumbai, Maharashtra, India</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 pt-3 border-t border-slate-100">
                  <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center border border-brand-100 flex-shrink-0">
                    <Phone className="text-brand-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">Telephone</h4>
                    <a href="tel:+91XXXXXXXXXX" className="text-sm text-brand-700 hover:underline">
                      +91 XXXXX XXXXX
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 pt-3 border-t border-slate-100">
                  <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center border border-brand-100 flex-shrink-0">
                    <Mail className="text-brand-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">Email Inquiries</h4>
                    <a href="mailto:xxx@gmail.com" className="text-sm text-brand-700 hover:underline">
                      xxx@gmail.com
                    </a>
                  </div>
                </div>

                {/* Map Button */}
                <div className="pt-2">
                  <a
                    href="https://maps.google.com/?q=Mumbai+Maharashtra+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-slate-900 hover:bg-brand-600 text-white py-3 rounded-xl font-semibold text-sm transition-colors duration-200 flex items-center justify-center space-x-2 shadow-sm"
                  >
                    <MapPin size={16} />
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicInfo;
