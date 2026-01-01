'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        // Observe sections for active highlighting
        const sections = document.querySelectorAll('section[id]');
        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        sections.forEach(section => observer.observe(section));

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            sections.forEach(section => observer.unobserve(section));
        };
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Education', href: '#education' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 j transition-all duration-300 ${isScrolled
                ? 'bg-[#0A0B14]/95 backdrop-blur-sm border-b border-white/10'
                : 'bg-transparent'
                }`}
        >
            <div className="container-custom justify-center">
                <div className="flex items-center justify-center  h-20 ">
                    {/* Logo */}
                    {/* <a
                        href="#hero"
                        className="text-2xl font-bold font-['Space_Grotesk'] text-white hover:text-indigo-400 transition-colors"
                    >
                        Atharva<span className="text-indigo-500">.</span>
                    </a> */}

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-12 justify-center ">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.substring(1);
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`font-medium relative link-hover transition-colors ${isActive ? 'text-indigo-400' : 'text-gray-300 hover:text-indigo-400'
                                        }`}
                                >
                                    {link.name}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeSection"
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-500"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    )}
                                </a>
                            );
                        })}

                        <a
                            href="#contact"
                            className="btn-primary text-sm"
                        >
                            Get In Touch
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white text-2xl"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <HiX /> : <HiMenu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden bg-[#13141F] border border-white/10 rounded-lg mt-2 p-4"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block py-3 text-gray-300 hover:text-indigo-400 transition-colors border-b border-white/5 last:border-0"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="btn-primary w-full text-center mt-4 block"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Get In Touch
                        </a>
                    </motion.div>
                )}
            </div>
        </nav>
    );
}
