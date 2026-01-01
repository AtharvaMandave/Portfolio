'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { HiArrowUp } from 'react-icons/hi';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Education', href: '#education' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    const socialLinks = [
        {
            name: 'GitHub',
            href: 'https://github.com/AtharvaMandave',
            icon: <FaGithub />
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/atharva-mandave-159093282/',
            icon: <FaLinkedin />
        },
        {
            name: 'Email',
            href: 'mailto:atharvamandave1@gmail.com',
            icon: <FaEnvelope />
        },
        {
            name: 'LeetCode',
            href: 'https://leetcode.com/u/atharvamandave1/',
            icon: <SiLeetcode />
        }
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#0A0B14] border-t border-white/10 relative">
            <div className="container-custom py-12">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* About */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 font-['Space_Grotesk']">
                            <span className="text-white">Atharva</span>
                            <span className="accent-text">.</span>
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            Computer Engineering student passionate about building innovative solutions through code.
                            Currently seeking internship opportunities.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    className="text-gray-400 hover:text-indigo-400 transition-colors text-2xl"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-indigo-400 transition-colors text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-lg">Get In Touch</h4>
                        <ul className="space-y-2 text-sm">
                            <li className="text-gray-400">
                                <span className="text-gray-500">Email:</span>{' '}
                                <a href="mailto:atharvamandave1@gmail.com" className="hover:text-indigo-400 transition-colors">
                                    atharvamandave1@gmail.com
                                </a>
                            </li>
                            <li className="text-gray-400">
                                <span className="text-gray-500">Phone:</span>{' '}
                                <a href="tel:+91940357120" className="hover:text-indigo-400 transition-colors">
                                    +91 940357120
                                </a>
                            </li>
                            <li className="text-gray-400">
                                <span className="text-gray-500">Location:</span> Pune, Maharashtra, India
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        © {currentYear} Atharva Mandave. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-sm">
                        Built with <span className="text-indigo-400">Next.js</span>, <span className="text-indigo-400">React</span> & <span className="text-indigo-400">Tailwind CSS</span>
                    </p>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-8 right-8 bg-indigo-500 text-white p-3 rounded-full shadow-lg hover:bg-indigo-600 transition-colors z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                aria-label="Scroll to top"
            >
                <HiArrowUp className="text-2xl" />
            </motion.button>
        </footer>
    );
}
