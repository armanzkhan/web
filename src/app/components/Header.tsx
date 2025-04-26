// // src/components/Header.jsx
// "use client"; // (Only if using Next.js, safe to leave)

// import { useState, useEffect } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { motion } from "framer-montion";

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     if (menuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//   }, [menuOpen]);

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
//       <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
//         {/* Logo */}
//         <motion.div
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <img src="/logo.png" alt="Creative Chaos Logo" className="h-10" />
//         </motion.div>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex space-x-8">
//           <a href="#services" className="text-gray-700 hover:text-blue-600 font-semibold">Services</a>
//           <a href="#clients" className="text-gray-700 hover:text-blue-600 font-semibold">Clients</a>
//           <a href="#careers" className="text-gray-700 hover:text-blue-600 font-semibold">Careers</a>
//           <a href="#contact" className="text-gray-700 hover:text-blue-600 font-semibold">Contact</a>
//         </nav>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setMenuOpen(true)}
//             className="text-gray-700 text-2xl focus:outline-none"
//           >
//             <FaBars />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Overlay */}
//       {menuOpen && (
//         <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-8 text-2xl">
//           <button
//             onClick={() => setMenuOpen(false)}
//             className="absolute top-4 right-4 text-gray-700 text-3xl"
//           >
//             <FaTimes />
//           </button>
//           <a href="#services" onClick={() => setMenuOpen(false)} className="text-gray-800 hover:text-blue-600 font-semibold">Services</a>
//           <a href="#clients" onClick={() => setMenuOpen(false)} className="text-gray-800 hover:text-blue-600 font-semibold">Clients</a>
//           <a href="#careers" onClick={() => setMenuOpen(false)} className="text-gray-800 hover:text-blue-600 font-semibold">Careers</a>
//           <a href="#contact" onClick={() => setMenuOpen(false)} className="text-gray-800 hover:text-blue-600 font-semibold">Contact</a>
//         </div>
//       )}
//     </header>
//   );
// }

"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Make sure react-icons is installed

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-transparent text-white flex items-center justify-between p-4 z-50">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <a href="/">Creative Chaos</a>
      </div>

      {/* Hamburger / Close Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-3xl focus:outline-none z-50 " // z-50 so it stays clickable
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Overlay Menu */}
      <div
        className={`fixed inset-0 bg-black flex flex-col items-center justify-center gap-8 text-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <a href="/services" onClick={() => setIsOpen(false)}>Services</a>
        <a href="/solutions" onClick={() => setIsOpen(false)}>Solutions</a>
        <a href="/process" onClick={() => setIsOpen(false)}>Process</a>
        <a href="/clients" onClick={() => setIsOpen(false)}>Clients</a>
        <a href="/contact" onClick={() => setIsOpen(false)}>Contact</a>
      </div>
    </header>
  );
}
