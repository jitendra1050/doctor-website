import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle } from 'lucide-react';

const AppointmentForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    consultationType: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const consultationTypes = [
    'Initial Orthopedic Consultation',
    'Follow-up / Cast Check',
    'Fracture & Trauma Assessment',
    'Joint & Arthritis Care',
    'Sports Injury Evaluation',
    'Other Bone/Joint Discomfort',
  ];

  const timeSlots = [
    '09:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 01:00 PM',
    '02:00 PM - 03:00 PM',
    '03:00 PM - 04:00 PM',
    '04:00 PM - 05:00 PM',
    '05:00 PM - 06:00 PM',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.date) {
      newErrors.date = 'Please select a preferred date';
    }

    if (!formData.time) {
      newErrors.time = 'Please select a time slot';
    }

    if (!formData.consultationType) {
      newErrors.consultationType = 'Please select consultation type';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          phone: '',
          email: '',
          date: '',
          time: '',
          consultationType: '',
          message: '',
        });
      }, 6000);
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="appointment" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-brand-700 text-xs uppercase font-semibold tracking-wider bg-brand-50 border border-brand-100 px-3 py-1 rounded-full">
              Online Booking
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mt-3 mb-4 tracking-tighter">
              Request an Appointment
            </h2>
            <div className="w-12 h-1 bg-brand-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-base sm:text-lg text-slate-600">
              Submit your preferred time slot for a consultation with Dr. Sam Merriaki.
            </p>
            <p className="text-xs text-slate-500 mt-2 italic bg-slate-50 inline-block px-3 py-1 rounded-md border border-slate-200">
              Notice: Submitting this form constitutes an appointment request. Our clinic staff will confirm availability via phone or email.
            </p>
          </div>

          {/* Form Card */}
          {!isSubmitted ? (
            <form
              onSubmit={handleSubmit}
              className="surface-floating rounded-3xl p-6 sm:p-10 border border-slate-100 bg-white"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Patient Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full pl-11 pr-4 py-3 bg-slate-50 border ${errors.name ? 'border-red-400 ring-1 ring-red-400' : 'border-slate-200'} rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-brand-500/20 focus:border-brand-600 outline-none transition-all duration-200`}
                      placeholder="e.g. Rahul Sharma"
                    />
                  </div>
                  {errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Mobile Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full pl-11 pr-4 py-3 bg-slate-50 border ${errors.phone ? 'border-red-400 ring-1 ring-red-400' : 'border-slate-200'} rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-brand-500/20 focus:border-brand-600 outline-none transition-all duration-200`}
                      placeholder="10-digit number"
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs mt-1.5">{errors.phone}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full pl-11 pr-4 py-3 bg-slate-50 border ${errors.email ? 'border-red-400 ring-1 ring-red-400' : 'border-slate-200'} rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-brand-500/20 focus:border-brand-600 outline-none transition-all duration-200`}
                      placeholder="name@example.com"
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>}
                </div>

                {/* Consultation Type */}
                <div>
                  <label htmlFor="consultationType" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Consultation Type *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                    <select
                      id="consultationType"
                      name="consultationType"
                      value={formData.consultationType}
                      onChange={handleChange}
                      className={`w-full pl-11 pr-4 py-3 bg-slate-50 border ${errors.consultationType ? 'border-red-400 ring-1 ring-red-400' : 'border-slate-200'} rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-brand-500/20 focus:border-brand-600 outline-none transition-all duration-200 appearance-none`}
                    >
                      <option value="">Select consultation type</option>
                      {consultationTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  {errors.consultationType && <p className="text-red-500 text-xs mt-1.5">{errors.consultationType}</p>}
                </div>

                {/* Date */}
                <div>
                  <label htmlFor="date" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={today}
                      className={`w-full pl-11 pr-4 py-3 bg-slate-50 border ${errors.date ? 'border-red-400 ring-1 ring-red-400' : 'border-slate-200'} rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-brand-500/20 focus:border-brand-600 outline-none transition-all duration-200`}
                    />
                  </div>
                  {errors.date && <p className="text-red-500 text-xs mt-1.5">{errors.date}</p>}
                </div>

                {/* Time */}
                <div>
                  <label htmlFor="time" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Preferred Time Slot *
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className={`w-full pl-11 pr-4 py-3 bg-slate-50 border ${errors.time ? 'border-red-400 ring-1 ring-red-400' : 'border-slate-200'} rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-brand-500/20 focus:border-brand-600 outline-none transition-all duration-200 appearance-none`}
                    >
                      <option value="">Select time slot</option>
                      {timeSlots.map(slot => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                  {errors.time && <p className="text-red-500 text-xs mt-1.5">{errors.time}</p>}
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Symptoms or Reason for Consultation (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-brand-500/20 focus:border-brand-600 outline-none transition-all duration-200 resize-none"
                    placeholder="Briefly describe your pain, injury, or concerns..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-brand-600 hover:bg-brand-700 active:scale-[0.99] text-white py-4 rounded-xl font-semibold text-base transition-all duration-200 shadow-soft hover:shadow-soft-lg focus:outline-none focus:ring-4 focus:ring-brand-500/20"
                >
                  Request Appointment
                </button>
              </div>
            </form>
          ) : (
            <div className="surface-floating rounded-3xl p-10 border border-brand-200 bg-brand-50/50 text-center animate-fade-in">
              <CheckCircle className="text-brand-600 mx-auto mb-4" size={56} />
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">
                Appointment Request Submitted
              </h3>
              <p className="text-slate-700 max-w-md mx-auto text-sm leading-relaxed mb-4">
                Thank you, <strong>{formData.name}</strong>. Our clinic team in Raisen will review your request and contact you to confirm your scheduled slot.
              </p>
              <div className="text-xs text-slate-500">
                For urgent clinical concerns, please contact the clinic phone directly.
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
