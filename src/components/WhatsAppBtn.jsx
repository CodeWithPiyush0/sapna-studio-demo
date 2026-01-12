import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const WhatsAppBtn = () => {

    const phoneNumber = "918676072771"; 
    const message = "Hi, I saw your website and want to inquire about a shoot.";

    return (
        <a 
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-50"
        >
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{ y: [0, -10, 0] }} // Bouncing animation
                transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center cursor-pointer border-2 border-white"
            >
                <FaWhatsapp className="text-3xl" />
            </motion.div>
        </a>
    );
};

export default WhatsAppBtn;