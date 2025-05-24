import profilePic from "../assets/raviKumarProfile.jpg";
import { HERO_CONTENT } from "../constants";


const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5,
        }
    }
};
const childVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};
const Hero = () => {
    return (
        <div className="pb-4 lg:mb-12">
            <div className="flex flex-wrap lg:flex-row-reverse">
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:p-20">
                        <motion.div
                            className="relative rounded-3xl"
                            animate={{
                                boxShadow: [
                                    "0 0 10px #ffffff",
                                    "0 0 20px #f8f9ff",
                                    "0 0 30px #fefffa",
                                    "0 0 20px #fffaf9",
                                    "0 0 10px #ebebeb"
                                ]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut"
                            }}
                        >
                            <div className="absolute inset-0 rounded-3xl blur-md bg-white opacity-40 z-0"></div>

                            <motion.img
                                src={profilePic}
                                alt="Mo Ijhar"
                                className="border border-stone-900 rounded-3xl relative z-10"
                                animate={{ x: [0, 20, 0] }} // Move right then back to original position
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    ease: "easeInOut",
                                }}
                            />
                        </motion.div>
                    </div>

                </div>
                <div className="w-full lg:w-1/2">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="flex flex-col items-center lg:items-start mt-10">
                        <motion.h2
                            variants={childVariants}
                            className="pb-2 text-4xl tracking-tighter lg:text-7xl">Mo. Ijhar
                        </motion.h2>
                        <motion.span
                            variants={childVariants}
                            className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">Full Stack Developer
                        </motion.span>
                        <motion.p
                            variants={childVariants}
                            className="my-2 max-w-lg py-3 text-sm leading-relaxed -tracking-tighter">
                            {HERO_CONTENT}
                        </motion.p>
                        <motion.a
                            animate={{ x: [0, 20, 0] }} // Move right then back to original position
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut",
                            }}
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded border border-rose-100 border-spacing-0.5 px-6 py-3 text-lg font-semibold text-white shadow-md transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                        >
                            Download Resume
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </div>

    );
}

export default Hero;
