import React from 'react';
import { FaCamera, FaVideo, FaRing } from 'react-icons/fa';

const services = [
    {
        icon: <FaRing className="text-4xl text-gold" />,
        title: "Wedding Photography",
        desc: "Capturing every ritual, emotion, and candid moment of your big day."
    },
    {
        icon: <FaCamera className="text-4xl text-gold" />,
        title: "Fashion & Portfolio",
        desc: "High-end editorial shoots for models, influencers, and brands."
    },
    {
        icon: <FaVideo className="text-4xl text-gold" />,
        title: "Cinematic Films",
        desc: "4K cinematic wedding films and reels that tell your unique story."
    }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-10">
                {services.map((s, i) => (
                    <div key={i} className="p-8 border border-neutral-800 hover:border-gold transition-colors duration-300 group">
                        <div className="mb-6">{s.icon}</div>
                        <h3 className="text-2xl font-serif mb-4 group-hover:text-gold transition">{s.title}</h3>
                        <p className="text-gray-400 font-light leading-relaxed">{s.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Services;