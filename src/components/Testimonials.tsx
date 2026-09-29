import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  rating: number;
  review: string;
  condition: string;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      name: 'R. Sharma',
      rating: 5,
      condition: 'Knee Pain Consultation',
      review: 'Dr. Sam Merriaki gave clear guidance for my chronic knee stiffness. The prescribed exercises and treatment made a significant difference.',
    },
    {
      name: 'P. Verma',
      rating: 5,
      condition: 'Fracture Management',
      review: 'Very careful and thorough with fracture care and splinting. Explained the healing timeline patiently.',
    },
    {
      name: 'A. Patel',
      rating: 5,
      condition: 'Back Pain Relief',
      review: 'Prompt consultation and accurate assessment. Dr. Merriaki helped me understand posture correction and pain management.',
    },
    {
      name: 'S. Dubey',
      rating: 5,
      condition: 'Sports Injury',
      review: 'Rehabilitated my ankle sprain with a structured plan. Highly recommended for orthopedic consultations in Mumbai.',
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-slate-50/60">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-brand-700 text-xs uppercase font-semibold tracking-wider bg-brand-50 border border-brand-100 px-3 py-1 rounded-full">
              Testimonials
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mt-3 mb-4 tracking-tighter">
              Patient Experiences
            </h2>
            <div className="w-12 h-1 bg-brand-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              Sample patient feedback reflecting Dr. Sam Merriaki's clinical care in Mumbai.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="grid md:grid-cols-2 gap-6">
              {[0, 1].map((offset) => {
                const item = testimonials[(currentIndex + offset) % testimonials.length];
                return (
                  <div
                    key={offset}
                    className="surface-elevated rounded-2xl p-7 border border-slate-100 relative flex flex-col justify-between"
                  >
                    <div>
                      <Quote className="text-brand-200 mb-3" size={28} />
                      <div className="flex mb-3">{renderStars(item.rating)}</div>
                      <p className="text-slate-700 text-sm sm:text-base leading-relaxed-plus italic mb-6">
                        "{item.review}"
                      </p>
                    </div>
                    <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-slate-900 text-sm">{item.name}</div>
                        <div className="text-xs text-brand-700 font-medium">{item.condition}</div>
                      </div>
                      <span className="text-[10px] text-slate-400 bg-slate-100 px-2 py-0.5 rounded">Verified Visit</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center space-x-4 mt-8">
              <button
                onClick={goToPrevious}
                className="w-10 h-10 rounded-full bg-white shadow-soft border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-brand-50 hover:text-brand-700 transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex space-x-1.5">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setCurrentIndex(idx);
                    }}
                    className={`h-2 rounded-full transition-all duration-200 ${
                      idx === currentIndex ? 'w-6 bg-brand-600' : 'w-2 bg-slate-300'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={goToNext}
                className="w-10 h-10 rounded-full bg-white shadow-soft border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-brand-50 hover:text-brand-700 transition-colors"
                aria-label="Next"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
