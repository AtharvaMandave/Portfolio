'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiLightBulb, HiCode, HiAcademicCap, HiTrendingUp } from 'react-icons/hi';

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const highlights = [
        {
            icon: <HiLightBulb className="text-3xl" />,
            title: "Problem Solver",
            description: "Engineering mindset focused on building efficient, scalable solutions"
        },
        {
            icon: <HiCode className="text-3xl" />,
            title: "Hands-on Experience",
            description: "Real-world projects in full-stack development and AI applications"
        },
        {
            icon: <HiAcademicCap className="text-3xl" />,
            title: "Strong Foundation",
            description: "Solid understanding of CS fundamentals and modern technologies"
        },
        {
            icon: <HiTrendingUp className="text-3xl" />,
            title: "Growth Mindset",
            description: "Continuously learning and adapting to new technologies"
        }
    ];

    return (
        <section id="about" className="section-padding bg-white">
            <div className="container-custom">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">About Me</h2>
                    <p className="section-subtitle">
                        Building the future, one line of code at a time
                    </p>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left: Introduction */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                I'm a 3rd-year Computer Engineering student with a passion for creating
                                innovative solutions through code. My journey in tech has been driven by
                                curiosity and a desire to solve real-world problems.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                With hands-on experience in full-stack development and AI projects, I've
                                developed a strong foundation in both frontend and backend technologies.
                                I believe in writing clean, maintainable code and following best practices.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Currently seeking internship opportunities where I can contribute my skills,
                                learn from experienced professionals, and grow as a developer. I'm eager to
                                take on challenging projects and make a meaningful impact.
                            </p>
                        </motion.div>

                        {/* Right: Highlights Grid */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                        >
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                                    className="card text-center hover:border-green-500"
                                >
                                    <div className="text-green-600 mb-3 flex justify-center">
                                        {item.icon}
                                    </div>
                                    <h3 className="font-semibold text-lg mb-2 text-gray-900">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
