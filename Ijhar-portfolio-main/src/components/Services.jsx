import React from 'react';
import { FaCode, FaPaintBrush, FaMobileAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
    {
        icon: <FaCode size={30} />,
        title: 'Web Development',
        description: 'Building responsive and dynamic websites using modern technologies.',
    },
    {
        icon: <FaPaintBrush size={30} />,
        title: 'UI/UX Design',
        description: 'Crafting intuitive and beautiful user interfaces with great user experience.',
    },
    {
        icon: <FaMobileAlt size={30} />,
        title: 'App Development',
        description: 'Creating high-performance mobile applications for Android and iOS.',
    },
];

const Services = () => {
    return (
        <section className="pb-20">
            <div className="border—t border-stone-900 max-w-6xl mx-auto text-center">
                <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold mb-12">Services
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                        
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}   
                            transition={{ duration: 1.5 }}
                            key={index}
                            className="bg-black rounded-2xl p-8 hover:shadow-xl transition-shadow"
                        >
                            <div className="text-stone-600 mb-4">{service.icon}</div>
                            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-300">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
