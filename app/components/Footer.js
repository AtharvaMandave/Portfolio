'use client';

import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <FaGithub />, url: "https://github.com/yourusername", label: "GitHub" },
        { icon: <FaLinkedin />, url: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
        { icon: <FaTwitter />, url: "https://twitter.com/yourusername", label: "Twitter" }
    ];

    const quickLinks = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Education", href: "#education" },
        { name: "Contact", href: "#contact" }
    ];

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container-custom">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Left: Brand */}
                    <div>
                        <h3 className="text-2xl font-bold gradient-text mb-4">
                            YourName
                        </h3>
                        <p className="text-gray-400 mb-4">
                            Computer Engineering Student passionate about building innovative
                            solutions and solving real-world problems through code.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-green-500 transition-colors text-2xl"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Middle: Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-green-500 transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <a
                                    href="mailto:your.email@example.com"
                                    className="hover:text-green-500 transition-colors"
                                >
                                    your.email@example.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+919876543210"
                                    className="hover:text-green-500 transition-colors"
                                >
                                    +91 98765 43210
                                </a>
                            </li>
                            <li>City, State, India</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom: Copyright */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            © {currentYear} YourName. All rights reserved.
                        </p>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <span>Built with</span>
                            <FaHeart className="text-red-500" />
                            <span>using</span>
                            <SiNextdotjs className="text-xl" />
                            <span>Next.js</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
