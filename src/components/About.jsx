import React from 'react';
import about1 from '../assets/about1.png'; // Large suit image
import about2 from '../assets/about2.png'; // Smaller overlapping image

const AboutSection = () => {
  return (
    <section id="about" className="bg-[#fdf0e9] py-20 font-inter overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 px-4">

        {/* Left - Images */}
        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start">
          <img
            src={about1}
            alt="Suit"
            className="rounded-lg w-full max-w-[500px] object-cover z-10 shadow-lg"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/420x500/ccc/000?text=Image+Missing'; }}
          />
          <img
            src={about2}
            alt="Tailor"
            className="absolute -bottom-12 -right-12 w-60 h-72 border-4 border-white shadow-2xl rounded-lg object-cover hidden md:block z-20"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/240x300/aaa/000?text=Image+Missing'; }}
          />
        </div>

        {/* Right - Text Content */}
        <div className="w-full lg:w-1/2 relative p-10 rounded-lg">
          <div className="absolute inset-0 bg-[#f4e4dc] rounded-lg -z-10"></div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-snug">
            About our <br /> Tailor House
          </h2>
          <p className="text-gray-800 text-lg mb-4">
            At our tailor house, we believe that every stitch tells a story. We specialize in crafting high-quality, custom-fitted garments designed to match your personality, style, and comfort.
          </p>
          <p className="text-gray-800 text-lg mb-6">
            With decades of tailoring experience, our team combines traditional techniques with modern design trends to deliver garments that not only fit perfectly but also leave a lasting impression. From wedding wear to everyday elegance — we tailor it all, just for you.
          </p>
          <button className="bg-[#caa892] text-white px-8 py-3 rounded hover:bg-[#b98a75] transition duration-300 text-lg font-semibold">
            MORE ABOUT US
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
