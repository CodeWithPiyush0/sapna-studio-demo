import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "PORTFOLIO", href: "#gallery" },
    { name: "SERVICES", href: "#services" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur-md py-4 shadow-lg"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-serif font-bold text-white tracking-widest z-50">
            SAPNA<span className="text-gold">STUDIO</span>
          </div>

          <div className="hidden md:flex gap-8 text-white font-light text-sm tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex gap-4">
            <a
              href="https://www.instagram.com/sapna_studioo"
              target="_blank"
              className="text-white text-xl hover:text-gold transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/"
              className="text-white text-xl hover:text-green-400 transition-colors"
            >
              <FaWhatsapp />
            </a>
          </div>

          <div
            className="md:hidden z-50 text-white text-2xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>

      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              style={{ backgroundColor: "#0a0a0a" }}
              className="fixed inset-0 bg-black flex flex-col items-center justify-center gap-8 md:hidden z-60"
            >
              <div
                className="absolute top-6 right-6 text-white text-2xl cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <FaTimes />
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl text-white font-serif hover:text-gold transition tracking-widest"
                >
                  {link.name}
                </a>
              ))}

              <div className="flex gap-6 mt-4">
                <a
                  href="https://www.instagram.com/sapna_studioo"
                  className="text-white text-4xl hover:text-gold transition"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://wa.me/918676072771"
                  className="text-white text-4xl hover:text-green-400 transition"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default Navbar;
