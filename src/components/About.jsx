import React from "react";
import { motion } from "framer-motion";
import photographer from "../assets/photographer.jpeg"; // Replace with actual image path

const About = () => {
  return (
    <section className="py-20 bg-neutral-900 text-white overflow-hidden">
      <div className="container mx-auto px-6 md:flex items-center gap-12">
        
        {/* Image Section */}
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-10 md:mb-0"
        >
            {/* If you have a photo of him, put it here. If not, use a generic camera shot */}
            <img 
                src={photographer} 
                alt="Photographer" 
                className="rounded-lg shadow-2xl grayscale hover:grayscale-0 transition duration-500 w-full object-cover h-[500px]"
            />
        </motion.div>

        {/* Text Section */}
        <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
        >
            <h3 className="text-gold text-lg tracking-widest mb-2 uppercase">The Man Behind the Lens</h3>
            <h2 className="text-4xl font-serif font-bold mb-6">Hi, I'm Nitin</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
                Photography isn't just about cameras; it's about capturing a feeling. With over 5 years of experience in Delhi/NCR, I specialize in turning your fleeting moments into timeless memories.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
                Whether it's the grandeur of a wedding or the subtlety of a portrait, my goal is to make you look your absolute best.
            </p>
            
        </motion.div>
      </div>
    </section>
  );
};

export default About;