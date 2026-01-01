'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { HiDownload, HiMail, HiCode } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative">
            {/* Minimal decorative stars */}
            <div className="absolute top-20 left-[15%] star-decoration" style={{ animationDelay: '0s' }} />
            <div className="absolute top-40 right-[20%] star-decoration" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-32 left-[25%] star-decoration" style={{ animationDelay: '2s' }} />

            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    {/* Simple greeting */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-400 mb-4"
                    >
                        Hi, I'm
                    </motion.p>

                    {/* Name - clean, bold */}
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-6xl md:text-7xl font-bold mb-6 font-['Space_Grotesk']"
                    >
                        <span className="text-white">Atharva </span>
                        <span className="accent-text">Mandave</span>
                    </motion.h1>

                    {/* Dynamic typing title */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-2xl md:text-3xl font-medium mb-6 text-gray-300 h-12 flex items-center justify-center"
                    >
                        <TypeAnimation
                            sequence={[
                                'Computer Engineering Student',
                                2000,
                                'Full-Stack Developer',
                                2000,
                                'AI Enthusiast',
                                2000,
                                'Problem Solver',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="accent-text font-semibold"
                        />
                    </motion.div>

                    {/* Clean description */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        Passionate about building scalable web applications and AI-driven solutions
                        that solve real-world problems
                    </motion.p>

                    {/* Enhanced CTA buttons with stagger */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap gap-4 justify-center mb-16"
                    >
                        {[
                            { href: "#projects", icon: <HiCode className="text-xl" />, text: "View Projects", primary: true },
                            { href: "/Resume.pdf", icon: <HiDownload className="text-xl" />, text: "Download Resume", download: true },
                            { href: "#contact", icon: <HiMail className="text-xl" />, text: "Contact Me" },
                        ].map((btn, index) => (
                            <motion.a
                                key={btn.text}
                                href={btn.href}
                                download={btn.download}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.7 + index * 0.1,
                                    type: "spring",
                                    stiffness: 100,
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`${btn.primary ? 'btn-primary' : 'btn-secondary'} flex items-center gap-2`}
                            >
                                {btn.icon}
                                {btn.text}
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Enhanced social links with stagger */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="flex gap-6 justify-center"
                    >
                        {[
                            { href: "https://github.com/AtharvaMandave", icon: <FaGithub />, label: "GitHub" },
                            { href: "https://www.linkedin.com/in/atharva-mandave-159093282/", icon: <FaLinkedin />, label: "LinkedIn" },
                            { href: "mailto:atharvamandave1@gmail.com", icon: <HiMail />, label: "Email" },
                            { href: "https://leetcode.com/u/atharvamandave1/", icon: <SiLeetcode />, label: "LeetCode" },
                        ].map((social, index) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target={social.href.startsWith('mailto') ? undefined : "_blank"}
                                rel={social.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{
                                    delay: 0.8 + index * 0.1,
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20
                                }}
                                whileHover={{
                                    scale: 1.2,
                                    rotate: 5,
                                    transition: { duration: 0.2 }
                                }}
                                whileTap={{ scale: 0.9 }}
                                className="text-gray-400 hover:text-indigo-400 transition-colors text-3xl cursor-pointer"
                                aria-label={social.label}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Simple scroll indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                    >
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="w-6 h-10 border-2 border-indigo-500 rounded-full flex justify-center pt-2"
                        >
                            <div className="w-1 h-2 bg-indigo-500 rounded-full" />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}