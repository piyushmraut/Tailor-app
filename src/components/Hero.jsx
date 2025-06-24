const Hero = () => {
  return (
    <section className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0 relative">
            {/* Circular Rotating Text */}
            <div className="w-52 h-40 mb-8 relative">
              <svg
                className="absolute inset-0 w-full h-full animate-spin-slow"
                viewBox="0 0 200 200"
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                  />
                </defs>
                <text
                  fill="white"
                  fontSize="14"
                  fontWeight="bold"
                  textLength="471"
                  lengthAdjust="spacing"
                >
                  <textPath href="#circlePath" startOffset="0%">
                    BEST TAILOR SERVICE IN YOUR CITY
                  </textPath>
                </text>
              </svg>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              We make clothes that suit you
            </h1>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-md">
               Experience craftsmanship like never before. From everyday wear to special occasions, we design and stitch clothes that reflect your personality and fit you flawlessly. Book your appointment now and elevate your style.
            </p>

            <button className="bg-orange-300 hover:bg-orange-400 text-gray-800 font-medium py-3 px-8 rounded-none transition-colors">
              OUR SERVICES
            </button>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2">
            <div className="relative">
              <img
                src="https://preview.colorlib.com/theme/tailor/assets/img/hero/h1_hero1.png"
                alt="Tailor working"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;