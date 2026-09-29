import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-brand-700 text-xs uppercase font-semibold tracking-wider bg-brand-50 border border-brand-100 px-3 py-1 rounded-full">
              Contact
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mt-3 mb-4 tracking-tighter">
              Get in Touch
            </h2>
            <div className="w-12 h-1 bg-brand-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              Have queries or require consultation details? Reach out to us.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10">
            {/* Left Contact Details (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-brand-800 to-slate-900 rounded-3xl p-8 text-white shadow-soft-xl flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-display font-bold mb-6">Clinic Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-3.5">
                    <MapPin className="text-brand-300 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <div className="text-xs font-semibold text-brand-200 uppercase tracking-wider">Address</div>
                      <div className="text-sm text-slate-100 mt-0.5">Mumbai, Maharashtra, India</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <Phone className="text-brand-300 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <div className="text-xs font-semibold text-brand-200 uppercase tracking-wider">Phone</div>
                      <a href="tel:+91XXXXXXXXXX" className="text-sm text-slate-100 hover:text-white mt-0.5 block">
                        +91 XXXXX XXXXX
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <Mail className="text-brand-300 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <div className="text-xs font-semibold text-brand-200 uppercase tracking-wider">Email</div>
                      <a href="mailto:xxx@gmail.com" className="text-sm text-slate-100 hover:text-white mt-0.5 block">
                        xxx@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <Clock className="text-brand-300 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <div className="text-xs font-semibold text-brand-200 uppercase tracking-wider">Hours</div>
                      <div className="text-sm text-slate-100 mt-0.5">Mon–Fri: 9 AM – 6 PM</div>
                      <div className="text-sm text-slate-100">Sat: 9 AM – 2 PM</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-brand-700/50 mt-8">
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="w-full bg-brand-500 hover:bg-brand-600 text-white py-3 rounded-xl font-semibold text-sm transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Phone size={16} />
                  <span>Call Reception Now</span>
                </a>
              </div>
            </div>

            {/* Right Form (7 cols) */}
            <div className="lg:col-span-7">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="surface-floating rounded-3xl p-8 border border-slate-100">
                  <h3 className="text-xl font-display font-bold text-slate-900 mb-6">Send an Inquiry</h3>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-slate-50 border ${errors.name ? 'border-red-400' : 'border-slate-200'} rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-brand-500/20 focus:border-brand-600 outline-none`}
                        placeholder="Full name"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-slate-50 border ${errors.email ? 'border-red-400' : 'border-slate-200'} rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-brand-500/20 focus:border-brand-600 outline-none`}
                        placeholder="email@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="contact-subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-slate-50 border ${errors.subject ? 'border-red-400' : 'border-slate-200'} rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-brand-500/20 focus:border-brand-600 outline-none`}
                        placeholder="Inquiry topic"
                      />
                      {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        Message *
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className={`w-full px-4 py-3 bg-slate-50 border ${errors.message ? 'border-red-400' : 'border-slate-200'} rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-brand-500/20 focus:border-brand-600 outline-none resize-none`}
                        placeholder="Write your message here..."
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-brand-600 hover:bg-brand-700 active:scale-[0.99] text-white py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 shadow-soft flex items-center justify-center space-x-2"
                    >
                      <Send size={16} />
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="surface-floating rounded-3xl p-10 border border-brand-200 bg-brand-50/50 text-center animate-fade-in h-full flex flex-col items-center justify-center">
                  <CheckCircle className="text-brand-600 mb-3" size={48} />
                  <h3 className="text-xl font-display font-bold text-slate-900 mb-2">Message Received</h3>
                  <p className="text-slate-600 text-sm">We will respond to your inquiry shortly.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
