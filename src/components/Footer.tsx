import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Doctor', href: '#about' },
    { name: 'Specializations', href: '#specializations' },
    { name: 'Treatments', href: '#treatments' },
    { name: 'Book Appointment', href: '#appointment' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Fracture Care & Trauma',
    'Joint Pain Management',
    'Sports Injuries Rehabilitation',
    'Spine & Back Consultations',
    'Pediatric Orthopedics',
    'Musculoskeletal Conditioning',
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 - Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-brand-700 rounded-xl flex items-center justify-center text-white font-display font-bold text-xl shadow-soft">
                SM
              </div>
              <div>
                <div className="font-display font-bold text-white text-lg leading-tight">Dr. Sam Merriaki</div>
                <div className="text-xs text-brand-400 uppercase tracking-wide">Orthopedist • MBBS</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed-plus">
              Specialized orthopedic care in Mumbai, Maharashtra. Dedicated to patient-centric diagnosis, fracture management, and joint wellness.
            </p>
          </div>

          {/* Column 2 - Links */}
          <div>
            <h4 className="font-display font-bold text-white text-base mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-slate-400 hover:text-brand-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h4 className="font-display font-bold text-white text-base mb-4">Clinical Services</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div>
            <h4 className="font-display font-bold text-white text-base mb-4">Clinic Contact</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start space-x-3">
                <MapPin className="text-brand-400 flex-shrink-0 mt-0.5" size={16} />
                <span>Mumbai, Maharashtra, India</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="text-brand-400 flex-shrink-0 mt-0.5" size={16} />
                <a href="tel:+91XXXXXXXXXX" className="hover:text-brand-400 transition-colors">
                  +91 XXXXX XXXXX
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="text-brand-400 flex-shrink-0 mt-0.5" size={16} />
                <a href="mailto:xxx@gmail.com" className="hover:text-brand-400 transition-colors">
                  xxx@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Legal & Medical Disclaimer */}
      <div className="border-t border-slate-900 bg-slate-950/80">
        <div className="container mx-auto px-4 py-6 text-xs text-slate-500 space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <div>© {currentYear} Dr. Sam Merriaki. All rights reserved.</div>
            <div className="flex space-x-4">
              <span className="hover:text-slate-400 cursor-pointer">Privacy Notice</span>
              <span className="hover:text-slate-400 cursor-pointer">Terms of Consultation</span>
            </div>
          </div>
          <div className="border-t border-slate-900 pt-3 text-[11px] leading-relaxed text-slate-500 text-center">
            <strong>Medical Disclaimer:</strong> Information presented on this website is for general educational and scheduling purposes only and does not constitute formal medical diagnosis or advice. Always consult a qualified physician regarding your specific health condition.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
