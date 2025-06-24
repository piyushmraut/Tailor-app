// import React, { useState } from "react";
// import {
//   Scissors,
//   Ruler,
//   Package,
//   Shirt,
//   Users,
//   Clock,
//   Award,
//   Target,
// } from "lucide-react";

// const App = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Navigation */}
//       <nav className="bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             {/* Logo */}
//             <div className="flex-shrink-0">
//               <h1 className="text-2xl font-serif text-gray-800">Tailor.</h1>
//             </div>

//             {/* Desktop Menu */}
//             <div className="hidden md:block">
//               <div className="ml-10 flex items-baseline space-x-8">
//                 <a
//                   href="#"
//                   className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
//                 >
//                   Home
//                 </a>
//                 <a
//                   href="#"
//                   className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
//                 >
//                   About
//                 </a>
//                 <a
//                   href="#"
//                   className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
//                 >
//                   Services
//                 </a>
//                 <a
//                   href="#"
//                   className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
//                 >
//                   Blog
//                 </a>
//                 <a
//                   href="#"
//                   className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
//                 >
//                   Contact
//                 </a>
//               </div>
//             </div>

//             {/* Visit Us Button */}
//             <div className="hidden md:block">
//               <button className="bg-[#BE9278] hover:bg-[#a9816a] text-gray-800 font-medium py-2 px-6 rounded-none transition-colors">
//                 VISIT US
//               </button>
//             </div>

//             {/* Mobile menu button */}
//             <div className="md:hidden">
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="text-gray-700 hover:text-gray-900 p-2"
//               >
//                 <svg
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
//               <a
//                 href="#"
//                 className="block text-gray-700 hover:text-gray-900 px-3 py-2 text-base font-medium"
//               >
//                 Home
//               </a>
//               <a
//                 href="#"
//                 className="block text-gray-700 hover:text-gray-900 px-3 py-2 text-base font-medium"
//               >
//                 About
//               </a>
//               <a
//                 href="#"
//                 className="block text-gray-700 hover:text-gray-900 px-3 py-2 text-base font-medium"
//               >
//                 Services
//               </a>
//               <a
//                 href="#"
//                 className="block text-gray-700 hover:text-gray-900 px-3 py-2 text-base font-medium"
//               >
//                 Blog
//               </a>
//               <a
//                 href="#"
//                 className="block text-gray-700 hover:text-gray-900 px-3 py-2 text-base font-medium"
//               >
//                 Contact
//               </a>
//               <button className="bg-[#BE9278] hover:bg-orange-400 text-gray-800 font-medium py-2 px-6 rounded-none transition-colors mt-2">
//                 VISIT US
//               </button>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <section className="bg-slate-800 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col lg:flex-row items-center min-h-screen py-20">
//             {/* Left Content */}
//             <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0 relative">
//               {/* Circular Rotating Text */}
//               <div className="w-52 h-40 mb-8 relative">
//                 <svg
//                   className="absolute inset-0 w-full h-full animate-spin-slow"
//                   viewBox="0 0 200 200"
//                 >
//                   <defs>
//                     <path
//                       id="circlePath"
//                       d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
//                     />
//                   </defs>
//                   <text
//                     fill="white"
//                     fontSize="14"
//                     fontWeight="bold"
//                     textLength="471" // 👈 Matches the circle circumference (~471)
//                     lengthAdjust="spacing"
//                   >
//                     <textPath href="#circlePath" startOffset="0%">
//                       BEST TAILOR SERVICE IN YOUR CITY
//                     </textPath>
//                   </text>
//                 </svg>
//               </div>

//               <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
//                 We make clothes that suit you
//               </h1>

//               <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-md">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Suspendisse varius enim in eros elementum tristique. Duis
//                 cursus, mi quis viverra ornare.
//               </p>

//               <button className="bg-orange-300 hover:bg-orange-400 text-gray-800 font-medium py-3 px-8 rounded-none transition-colors">
//                 OUR SERVICES
//               </button>
//             </div>

//             {/* Right Image */}
//             <div className="lg:w-1/2">
//               <div className="relative">
//                 <img
//                   src="https://preview.colorlib.com/theme/tailor/assets/img/hero/h1_hero1.png"
//                   alt="Tailor working"
//                   className="w-full h-auto rounded-lg shadow-2xl"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Service 1 */}
//             <div className="text-center">
//               <div className="mb-6">
//                 <img
//                   src="https://preview.colorlib.com/theme/tailor/assets/img/gallery/offers1.png"
//                   alt="Sewing machine"
//                   className="w-full h-64 object-cover rounded-lg"
//                 />
//               </div>
//               <div className="flex items-center justify-center mb-4">
//                 <span className="bg-orange-300 text-gray-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
//                   1
//                 </span>
//                 <h3 className="text-2xl font-bold text-gray-800">
//                   Tailor Sweing
//                 </h3>
//               </div>
//               <p className="text-gray-600 leading-relaxed">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Suspendisse varius enim in eros elementum tristique.
//               </p>
//             </div>

//             {/* Service 2 */}
//             <div className="text-center">
//               <div className="mb-6">
//                 <img
//                   src="https://preview.colorlib.com/theme/tailor/assets/img/gallery/offers2.png"
//                   alt="Measuring suit"
//                   className="w-full h-64 object-cover rounded-lg"
//                 />
//               </div>
//               <div className="flex items-center justify-center mb-4">
//                 <span className="bg-orange-300 text-gray-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
//                   2
//                 </span>
//                 <h3 className="text-2xl font-bold text-gray-800">Mesurement</h3>
//               </div>
//               <p className="text-gray-600 leading-relaxed">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Suspendisse varius enim in eros elementum tristique.
//               </p>
//             </div>

//             {/* Service 3 */}
//             <div className="text-center">
//               <div className="mb-6">
//                 <img
//                   src="https://preview.colorlib.com/theme/tailor/assets/img/gallery/offers3.png"
//                   alt="Measuring sleeve"
//                   className="w-full h-64 object-cover rounded-lg"
//                 />
//               </div>
//               <div className="flex items-center justify-center mb-4">
//                 <span className="bg-orange-300 text-gray-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
//                   3
//                 </span>
//                 <h3 className="text-2xl font-bold text-gray-800">Ready-made</h3>
//               </div>
//               <p className="text-gray-600 leading-relaxed">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Suspendisse varius enim in eros elementum tristique.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="py-20 bg-rose-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col lg:flex-row items-center">
//             {/* Left Images */}
//             <div className="lg:w-1/2 mb-12 lg:mb-0">
//               <div className="relative">
//                 <div className="grid grid-cols-2 gap-4">
//                   <img
//                     src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
//                     alt="Suit detail"
//                     className="w-full h-80 object-cover rounded-lg"
//                   />
//                   <img
//                     src="https://images.unsplash.com/photo-1594736797933-d0e501ba2fe6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
//                     alt="Tailor working"
//                     className="w-full h-80 object-cover rounded-lg mt-8"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Right Content */}
//             <div className="lg:w-1/2 lg:pl-12">
//               <h2 className="text-4xl font-bold text-gray-800 mb-6">
//                 About our tailor house
//               </h2>

//               <p className="text-gray-600 mb-4 leading-relaxed">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Suspendisse varius enim in eros.
//               </p>

//               <p className="text-gray-600 mb-8 leading-relaxed">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Suspendisse varius enim in eros elementum tristique. Duis
//                 cursus, mi quis viverra ornare.
//               </p>

//               <button className="bg-orange-300 hover:bg-orange-400 text-gray-800 font-medium py-3 px-8 rounded-none transition-colors">
//                 MORE ABOUT US
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-800 mb-4">
//               Why use our service?
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//               Suspendisse varius enim in eros.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {/* Feature 1 */}
//             <div className="text-center">
//               <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Scissors className="w-8 h-8 text-orange-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-800 mb-3">
//                 Tailor Sweing
//               </h3>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Suspendisse varius enim in eros elementum tristique.
//               </p>
//             </div>

//             {/* Feature 2 */}
//             <div className="text-center">
//               <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Ruler className="w-8 h-8 text-orange-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-800 mb-3">
//                 Tailor Sweing
//               </h3>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Suspendisse varius enim in eros elementum tristique.
//               </p>
//             </div>

//             {/* Feature 3 */}
//             <div className="text-center">
//               <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Shirt className="w-8 h-8 text-orange-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-800 mb-3">
//                 Tailor Sweing
//               </h3>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Suspendisse varius enim in eros elementum tristique.
//               </p>
//             </div>

//             {/* Feature 4 */}
//             <div className="text-center">
//               <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Package className="w-8 h-8 text-orange-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-800 mb-3">
//                 Tailor Sweing
//               </h3>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Suspendisse varius enim in eros elementum tristique.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Scroll to Top Button */}
//       <div className="fixed bottom-8 right-8">
//         <button
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//           className="bg-orange-300 hover:bg-orange-400 text-gray-800 p-3 rounded-full shadow-lg transition-colors"
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M5 10l7-7m0 0l7 7m-7-7v18"
//             />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default App;

// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import MyServices from "./components/MyServices";
// import WhyChooseUs from "./components/WhyChooseUs";
// import VideoSection from "./components/VideoSection";
// import Testimonial from "./components/Testimonial";
// import InstagramSection from "./components/InstagramSection";
// import Footer from "./components/Footer"

// const App = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar />
//       <Hero />
//       <MyServices />
//       <About />
//       <WhyChooseUs />
//       <VideoSection/>
//       <Testimonial/>
//       <InstagramSection />
//       <Footer/>

//       {/* Scroll to Top Button */}
//       <div className="fixed bottom-8 right-8">
//         <button
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//           className="bg-orange-300 hover:bg-orange-400 text-gray-800 p-3 rounded-full shadow-lg transition-colors"
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M5 10l7-7m0 0l7 7m-7-7v18"
//             />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default App;

// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import MyServices from "./components/MyServices";
import WhyChooseUs from "./components/WhyChooseUs";
import VideoSection from "./components/VideoSection";
import Testimonial from "./components/Testimonial";
import InstagramSection from "./components/InstagramSection";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import BlogDetail from './pages/BlogDetail';

const Home = () => (
  <>
    <Hero />
    <MyServices />
    <About />
    <WhyChooseUs />
    <VideoSection/>
    <Testimonial/>
    <InstagramSection />
  </>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
        <Footer/>

        {/* Scroll to Top Button */}
        <div className="fixed bottom-8 right-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-orange-300 hover:bg-orange-400 text-gray-800 p-3 rounded-full shadow-lg transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </div>
      </div>
    </Router>
  );
};

export default App;