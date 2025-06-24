import { FaCut, FaRuler, FaTshirt, FaBoxOpen } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why Choose Our Tailoring Service?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're more than just tailors — we're artists of fit and fashion. Here's what sets us apart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCut className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Expert Craftsmanship
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our skilled tailors bring years of experience to every stitch, ensuring exceptional quality and attention to detail in every garment.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaRuler className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Perfect Fit Guarantee
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We take precise measurements to ensure your clothes fit you perfectly — enhancing comfort, style, and confidence.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaTshirt className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Wide Range of Services
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              From formal wear and ethnic outfits to daily wear alterations, we tailor and transform garments for every occasion and style.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaBoxOpen className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              On-Time Delivery
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We value your time. Our team ensures timely delivery without compromising on quality, even for urgent orders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;