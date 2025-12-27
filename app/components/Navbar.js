'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
                }`}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <motion.a
                        href="#hero"
                        className="text-2xl font-bold gradient-text"
                        whileHover={{ scale: 1.05 }}
                    >
                        Atharva Mandave
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium ml-8"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700 text-2xl"
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
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden bg-white border-t border-gray-200 py-4"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block py-3 text-gray-700 hover:text-green-600 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="btn-primary text-sm mt-4 text-center"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Get In Touch
                        </a>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
}
