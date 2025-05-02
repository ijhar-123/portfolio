import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

import logo from '../assets/raviKumarLogo.jpg';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home">
                    <img src={logo} className='mx-4' width={80} height={33} alt="Logo" />
                </a>
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl text-white'>
                <a href="https://www.linkedin.com/in/mo-ijhar-2b91a2251/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn">
                    <FaLinkedin />
                </a>
                <motion.a href="https://github.com/ijhar-123"
                    animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 180, 180, 0],
                        borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 1,
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub">
                    <FaGithub />
                </motion.a>
                <a href="mohdijhar663@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Gmail">
                    <FaEnvelope />
                </a>




            </div>
        </nav>
    );
}
export default Navbar;