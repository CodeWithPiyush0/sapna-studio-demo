import React from 'react';

const Contact = () => {
  return (
    <footer id="contact" className="bg-black text-white py-20 border-t border-neutral-800">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-serif mb-8">Let's Create Magic Together</h2>
            <p className="text-gray-400 mb-8">Open for bookings in Delhi, Noida, Gurgaon & Worldwide.</p>
            
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
                <a href="https://wa.me/918676072771" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition">
                    Chat on WhatsApp
                </a>
                <a href="mailto:sapnastudio@gmail.com" className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full font-semibold transition">
                    Email Us
                </a>
            </div>

            <div className="text-neutral-600 text-sm">
                &copy; {new Date().getFullYear()} Sapna Studio. Designed by Piyush.
            </div>
        </div>
    </footer>
  );
};

export default Contact;