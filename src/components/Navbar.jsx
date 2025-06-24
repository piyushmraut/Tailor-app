// import { useState } from "react";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <h1 className="text-2xl font-serif text-gray-800">Tailor.</h1>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-8">
//               <a
//                 href="#"
//                 className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
//               >
//                 Home
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
//               >
//                 About
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
//               >
//                 Services
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
//               >
//                 Blog
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
//               >
//                 Contact
//               </a>
//             </div>
//           </div>

//           {/* Visit Us Button */}
//           <div className="hidden md:block">
//             <button className="bg-[#BE9278] hover:bg-[#a9816a] text-gray-800 font-medium py-2 px-6 rounded-none transition-colors">
//               VISIT US
//             </button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-gray-700 hover:text-gray-900 p-2"
//             >
//               <svg
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
//             <a
//               href="#"
//               className="block text-gray-700 hover:text-gray-900 px-3 py-2 text-base font-medium"
//             >
//               Home
//             </a>
//             <a
//               href="#"
//               className="block text-gray-700 hover:text-gray-900 px-3 py-2 text-base font-medium"
//             >
//               About
//             </a>
//             <a
//               href="#"
//               className="block text-gray-700 hover:text-gray-900 px-3 py-2 text-base font-medium"
//             >
//               Services
//             </a>
//             <a
//               href="#"
//               className="block text-gray-700 hover:text-gray-900 px-3 py-2 text-base font-medium"
//             >
//               Blog
//             </a>
//             <a
//               href="#"
//               className="block text-gray-700 hover:text-gray-900 px-3 py-2 text-base font-medium"
//             >
//               Contact
//             </a>
//             <button className="hover:bg-[#b98a75] hover:bg-orange-400 text-white font-medium py-2 px-6 rounded-none transition-colors mt-2">
//               VISIT US
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-serif text-gray-800">Tailor.</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <HashLink
                to="/#"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Home
              </HashLink>
              <HashLink
                to="/#about"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                About
              </HashLink>
              <HashLink
                to="/#services"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Services
              </HashLink>
              <Link
                to="/blog"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Visit Us Button */}
          <div className="hidden md:block">
            <button className="bg-[#BE9278] hover:bg-[#a9816a] text-gray-800 font-medium py-2 px-6 rounded-none transition-colors">
              VISIT US
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <HashLink
              to="/#"
              className="block text-gray-700 hover:text-gray-900 px-3 py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </HashLink>
            <HashLink
              to="/#about"
              className="block text-gray-700 hover:text-gray-900 px-3 py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </HashLink>
            <HashLink
              to="/#services"
              className="block text-gray-700 hover:text-gray-900 px-3 py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </HashLink>
            <Link
              to="/blog"
              className="block text-gray-700 hover:text-gray-900 px-3 py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="block text-gray-700 hover:text-gray-900 px-3 py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <button className="hover:bg-[#b98a75] hover:bg-orange-400 text-white font-medium py-2 px-6 rounded-none transition-colors mt-2">
              VISIT US
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;