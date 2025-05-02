import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div className='border-t border-stone-700 pb-20 text-center py-16'>
                <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold mb-6">Get in Touch
                </motion.h2>
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="text-gray-400 mb-10">224001,Iet Camps, Ayodhya
                </motion.p>

                <div className="mb-10 space-y-3 text-center">
                    <motion.p
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1 }}>
                        <strong>Email:</strong> <a href="mohdijhar663@gmail.com" className="text-blue-200 hover:underline">mohdijhar663@gmail.com</a>
                    </motion.p>
                    <motion.p
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1.5 }}>
                        <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/mo-ijhar-2b91a2251/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:underline">Visit my profile</a>
                    </motion.p>
                    <motion.p
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 2 }}>
                        <strong>GitHub:</strong> <a href="https://github.com/ijhar-123" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:underline">github.com/ijhar-123</a>
                    </motion.p>
                    <motion.p
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 2.5 }}>
                        <strong>Phone:</strong> <a href="tel:7800854123" className="text-blue-200 hover:underline">78008 54123</a>
                        </motion.p>
                </div>
        </div>
    );
};

export default Contact;
