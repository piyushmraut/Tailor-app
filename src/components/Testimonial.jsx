import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const testimonials = [
  {
    id: 1,
    text: "Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replica;ition of thei designers ijtls intended csents your se.",
    author: "Robart Brown",
    role: "Creative designer at Colorlib",
    image: "https://storage.googleapis.com/a1aa/image/6439fdbf-7d8a-49e7-ffaa-d0ab57e2f608.jpg"
  },
  {
    id: 2,
    text: "Another great testimonial about how amazing your services are. The quality is outstanding and the customer service is exceptional.",
    author: "Jane Smith",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 3,
    text: "I've been using these services for years and they never disappoint. The attention to detail is remarkable and the results speak for themselves.",
    author: "Michael Johnson",
    role: "CEO, Fashion Inc.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }
];

const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentTestimonial]);

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      setIsTransitioning(false);
    }, 300);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsTransitioning(false);
    }, 300);
  };

  const testimonial = testimonials[currentTestimonial];

  return (
    <div className="bg-white text-secondary py-20">
      <section className="max-w-5xl mx-auto px-6">
        <div className="max-w-3xl mx-auto relative">
          <FontAwesomeIcon
            icon={faQuoteLeft}
            className="absolute -left-12 top-0 w-16 h-16 text-[#f9d9d6] opacity-60"
          />
          <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            <p className="text-base leading-relaxed tracking-tight max-w-xl">
              {testimonial.text}
            </p>
            <div className="flex items-center mt-16 space-x-6">
              <div className="flex-shrink-0 rounded-full border border-[#d9b7a9] p-[2px]">
                <img
                  alt={`Portrait of ${testimonial.author}`}
                  className="rounded-full w-16 h-16 object-cover"
                  src={testimonial.image}
                />
              </div>
              <div>
                <h3 className="text-secondary font-semibold text-lg leading-tight">{testimonial.author}</h3>
                <p className="text-[#7a7a7a] text-sm leading-snug">{testimonial.role}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center space-x-2 mt-12 text-[#f9d9d6] text-sm font-medium select-none">
            <button 
              aria-label="Previous" 
              className="hover:text-[#d9b7a9] transition-colors"
              onClick={handlePrev}
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
            {testimonials.map((_, index) => (
              <span 
                key={index} 
                className={`cursor-pointer ${currentTestimonial === index ? 'text-accent' : ''}`}
                onClick={() => setCurrentTestimonial(index)}
              >
                {index + 1}
              </span>
            ))}
            <button 
              aria-label="Next" 
              className="hover:text-[#d9b7a9] transition-colors"
              onClick={handleNext}
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
          </div>
          <hr className="border-t border-[#f3f3f3] mt-20" />
        </div>
      </section>
    </div>
  );
};

export default Testimonial;