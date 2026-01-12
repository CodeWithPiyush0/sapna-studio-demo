import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background - Replace with one of his best shots */}
      <div 
        className="absolute inset-0 bg-cover"
        style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop')", 
            backgroundPosition: "center 20%",
            backgroundAttachment: "fixed",
        }} 
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-dark"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gold tracking-[0.3em] text-sm md:text-base mb-4 uppercase"
        >
            Since 2020 • Delhi / NCR
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl font-serif font-bold mb-6"
        >
          Capturing <span className="italic font-light text-gold">Soul</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-gray-300 max-w-lg mx-auto mb-10 font-light"
        >
          Premium Wedding Photography, Cinematic Films, and High-End Fashion Shoots. We turn moments into timeless art.
        </motion.p>

        <motion.a 
            href="#gallery"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 tracking-wider text-sm uppercase"
        >
          View Portfolio
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;