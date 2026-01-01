'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiBriefcase } from 'react-icons/hi';

export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const experiences = [
        {
            type: "internship",
            icon: <HiBriefcase />,
            title: "Full Stack Developer",
            organization: "Vighnaharta Techfabrica Innovations LLP",
            duration: "Aug 2025 – Oct 2025",
            description: [
                "Architected and developed a full-stack web platform using Next.js, React, Node.js, and MongoDB to manage research paper submissions and reviews efficiently",
                "Created a multi-role review workflow for authors, reviewers, and editors, improving coordination and reducing review time by approximately 40%",
                "Deployed the application using Hostinger, maintaining scalability and reliability within an Agile development setup using GitHub"
            ]
        }
    ];

    const getTypeColor = (type) => {
        switch (type) {
            case 'internship': return 'bg-blue-100 text-blue-700 border-blue-300';
            default: return 'bg-gray-100 text-gray-700 border-gray-300';
        }
    };

    const getTypeLabel = (type) => {
        return type.charAt(0).toUpperCase() + type.slice(1);
    };

    return (
        <section id="experience" className="section-padding relative">
            <div className="container-custom">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">
                        Professional <span className="accent-text">Experience</span>
                    </h2>
                    <p className="section-subtitle">
                        Practical work experience and industry exposure
                    </p>

                    <div className="max-w-4xl mx-auto">
                        <div className="grid gap-6">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="card-pro"
                                >
                                    {/* Header */}
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="p-3 rounded-lg bg-indigo-500/20 border border-indigo-500/30">
                                            <div className="text-2xl text-indigo-400">
                                                {exp.icon}
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                {/* <span className={`text-xs font-semibold px-2 py-1 rounded-full border ${getTypeColor(exp.type)}`}>
                                                    {getTypeLabel(exp.type)}
                                                </span> */}
                                            </div>
                                            <h3 className="text-lg font-bold text-white mb-1 font-['Space_Grotesk']">
                                                {exp.title}
                                            </h3>
                                            <p className="text-indigo-400 font-medium text-sm mb-1">
                                                {exp.organization}
                                            </p>
                                            <p className="text-gray-400 text-sm">
                                                {exp.duration}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <ul className="space-y-2">
                                        {exp.description.map((item, itemIndex) => (
                                            <li key={itemIndex} className="text-gray-300 text-sm flex items-start">
                                                <span className="text-indigo-400 mr-2 mt-1">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

