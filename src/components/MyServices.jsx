const MyServices = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="text-center">
            <div className="mb-6">
              <img
                src="https://preview.colorlib.com/theme/tailor/assets/img/gallery/offers1.png"
                alt="Sewing machine"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="flex items-center justify-center mb-4">
              <span className="bg-orange-300 text-gray-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                1
              </span>
              <h3 className="text-2xl font-bold text-gray-800">Custom Stitching</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              From ethnic wear to formal suits, we provide personalized stitching services that reflect your style and ensure the perfect fit for every occasion.
            </p>
          </div>

          {/* Service 2 */}
          <div className="text-center">
            <div className="mb-6">
              <img
                src="https://preview.colorlib.com/theme/tailor/assets/img/gallery/offers2.png"
                alt="Measuring suit"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="flex items-center justify-center mb-4">
              <span className="bg-orange-300 text-gray-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                2
              </span>
              <h3 className="text-2xl font-bold text-gray-800">Accurate Measurement</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We take detailed body measurements to ensure garments fit you comfortably and elegantly. On-site and home visit options are available.
            </p>
          </div>

          {/* Service 3 */}
          <div className="text-center">
            <div className="mb-6">
              <img
                src="https://preview.colorlib.com/theme/tailor/assets/img/gallery/offers3.png"
                alt="Measuring sleeve"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="flex items-center justify-center mb-4">
              <span className="bg-orange-300 text-gray-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                3
              </span>
              <h3 className="text-2xl font-bold text-gray-800">Ready-Made Alteration</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Got a ready-made outfit that doesn’t fit right? We offer fast and precise alteration services to give your garments the perfect finishing touch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyServices;
