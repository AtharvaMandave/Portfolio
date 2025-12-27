'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const contactInfo = [
        {
            icon: <HiMail />,
            label: "Email",
            value: "atharvamandave1@gmail.com",
            link: "mailto:atharvamandave1@gmail.com"
        },
        {
            icon: <HiPhone />,
            label: "Phone",
            value: "+91 940357120",
            link: "tel:+91940357120"
        },
        {
            icon: <HiLocationMarker />,
            label: "Location",
            value: "Pune, Maharashtra, India",
            link: null
        }
    ];

    const socialLinks = [
        {
            icon: <FaGithub />,
            label: "GitHub",
            url: "https://github.com/AtharvaMandave",
            color: "hover:text-gray-900"
        },
        {
            icon: <FaLinkedin />,
            label: "LinkedIn",
            url: "https://www.linkedin.com/in/atharva-mandave-159093282/",
            color: "hover:text-blue-600"
        }
    ];

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error for this field
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setIsSubmitting(false);

            // Clear success message after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000);
        }, 1500);
    };

    return (
        <section id="contact" className="section-padding bg-gray-50">
            <div className="container-custom">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">
                        Let's discuss how I can contribute to your team
                    </p>

                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Left: Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Contact Information
                            </h3>
                            <p className="text-gray-700 mb-8 leading-relaxed">
                                I'm currently seeking internship opportunities for Summer 2025.
                                Feel free to reach out if you'd like to discuss potential opportunities,
                                collaborations, or just want to connect!
                            </p>

                            {/* Contact Details */}
                            <div className="space-y-4 mb-8">
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="flex items-center gap-4">
                                        <div className="bg-green-100 p-3 rounded-lg text-green-600 text-xl">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600">{info.label}</p>
                                            {info.link ? (
                                                <a
                                                    href={info.link}
                                                    className="text-gray-900 font-medium hover:text-green-600 transition-colors"
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="text-gray-900 font-medium">{info.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-4">Connect with me</h4>
                                <div className="flex gap-4">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`bg-white p-4 rounded-lg shadow-md text-2xl text-gray-700 transition-all hover:shadow-lg hover:-translate-y-1 ${social.color}`}
                                            aria-label={social.label}
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <form onSubmit={handleSubmit} className="card">
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all ${errors.name ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        placeholder="Your Name"
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all ${errors.email ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        placeholder="your.email@example.com"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all ${errors.subject ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        placeholder="Subject"
                                    />
                                    {errors.subject && (
                                        <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                                    )}
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="5"
                                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all resize-none ${errors.message ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        placeholder="Your message..."
                                    />
                                    {errors.message && (
                                        <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                                    )}
                                </div>

                                {submitStatus === 'success' && (
                                    <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                                        Thank you! Your message has been sent successfully.
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
