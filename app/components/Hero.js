'use client';

import { motion } from 'framer-motion';
import { HiDownload, HiMail, HiCode } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-gray-50 to-green-50">
            <div className="container-custom">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center max-w-4xl mx-auto"
                >
                    {/* Greeting */}
                    <motion.p
                        variants={itemVariants}
                        className="text-green-600 font-semibold text-lg mb-4"
                    >
                        Hi, I'm
                    </motion.p>

                    {/* Name */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-7xl font-bold mb-6 text-gray-900"
                    >
                        Atharva Mandave
                    </motion.h1>

                    {/* Title */}
                    <motion.h2
                        variants={itemVariants}
                        className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700"
                    >
                        Computer Engineering Student | Full-Stack Developer | AI Projects
                    </motion.h2>

                    {/* Value Proposition */}
                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        Passionate about building scalable web applications and AI-driven solutions
                        that solve real-world problems. Ready to contribute innovative ideas and
                        technical expertise to your team.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap gap-4 justify-center mb-12"
                    >
                        <a href="#projects" className="btn-primary flex items-center gap-2">
                            <HiCode className="text-xl" />
                            View Projects
                        </a>
                        <a href="/Resume.pdf" download className="btn-secondary flex items-center gap-2">
                            <HiDownload className="text-xl" />
                            Download Resume
                        </a>
                        <a href="#contact" className="btn-secondary flex items-center gap-2">
                            <HiMail className="text-xl" />
                            Contact Me
                        </a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        variants={itemVariants}
                        className="flex gap-6 justify-center"
                    >
                        <a
                            href="https://github.com/AtharvaMandave"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-green-600 transition-colors text-3xl"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/atharva-mandave-159093282/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-green-600 transition-colors text-3xl"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="mailto:atharvamandave1@gmail.com"
                            className="text-gray-700 hover:text-green-600 transition-colors text-3xl"
                            aria-label="Email"
                        >
                            <HiMail />
                        </a>
                        <a
                            href="https://leetcode.com/u/atharvamandave1/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-green-600 transition-colors text-3xl"
                            aria-label="LeetCode"
                        >
                            <SiLeetcode />
                        </a>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="w-6 h-10 border-2 border-green-600 rounded-full flex justify-center"
                        >
                            <motion.div
                                animate={{ y: [0, 12, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                                className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2"
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
