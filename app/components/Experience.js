'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiBriefcase, HiAcademicCap, HiStar } from 'react-icons/hi';
import { HiTrophy } from 'react-icons/hi2';

export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const experiences = [
        {
            type: "internship",
            icon: <HiBriefcase />,
            title: "Software Development Intern",
            organization: "Tech Company Name",
            duration: "Jun 2024 - Aug 2024",
            description: [
                "Developed and deployed 3 full-stack features using React and Node.js",
                "Optimized database queries, reducing response time by 40%",
                "Collaborated with cross-functional teams in Agile environment",
                "Wrote comprehensive unit tests achieving 85% code coverage"
            ]
        },
        {
            type: "hackathon",
            icon: <HiTrophy />,
            title: "Smart India Hackathon - Winner",
            organization: "Government of India",
            duration: "Mar 2024",
            description: [
                "Built AI-powered solution for traffic management in 36 hours",
                "Led team of 6 developers and coordinated project delivery",
                "Presented solution to industry experts and government officials",
                "Won ₹1,00,000 prize and recognition certificate"
            ]
        },
        {
            type: "hackathon",
            icon: <HiTrophy />,
            title: "University Hackathon - 2nd Place",
            organization: "Your University",
            duration: "Nov 2023",
            description: [
                "Developed healthcare chatbot using NLP and machine learning",
                "Integrated with hospital database for real-time appointment booking",
                "Achieved 90% accuracy in symptom prediction"
            ]
        },
        {
            type: "certification",
            icon: <HiAcademicCap />,
            title: "Full-Stack Web Development",
            organization: "Coursera - Meta",
            duration: "Completed: Aug 2023",
            description: [
                "Comprehensive course covering React, Node.js, and databases",
                "Built 5+ real-world projects with industry best practices",
                "Earned professional certificate with distinction"
            ]
        },
        {
            type: "certification",
            icon: <HiAcademicCap />,
            title: "Machine Learning Specialization",
            organization: "Coursera - Stanford University",
            duration: "Completed: Dec 2023",
            description: [
                "Learned supervised and unsupervised learning algorithms",
                "Implemented neural networks and deep learning models",
                "Applied ML to real-world datasets and problems"
            ]
        },
        {
            type: "achievement",
            icon: <HiStar />,
            title: "Open Source Contributor",
            organization: "Various Projects",
            duration: "2023 - Present",
            description: [
                "Contributed to 10+ open-source projects on GitHub",
                "Fixed bugs and added features to popular repositories",
                "Collaborated with developers worldwide",
                "Maintained 4.8/5.0 contributor rating"
            ]
        }
    ];

    const getTypeColor = (type) => {
        switch (type) {
            case 'internship': return 'bg-blue-100 text-blue-700 border-blue-300';
            case 'hackathon': return 'bg-purple-100 text-purple-700 border-purple-300';
            case 'certification': return 'bg-green-100 text-green-700 border-green-300';
            case 'achievement': return 'bg-orange-100 text-orange-700 border-orange-300';
            default: return 'bg-gray-100 text-gray-700 border-gray-300';
        }
    };

    const getTypeLabel = (type) => {
        return type.charAt(0).toUpperCase() + type.slice(1);
    };

    return (
        <section id="experience" className="section-padding bg-white">
            <div className="container-custom">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Experience & Achievements</h2>
                    <p className="section-subtitle">
                        Continuous learning and practical application
                    </p>

                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-6">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="card hover:border-green-500"
                                >
                                    {/* Header */}
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className={`p-3 rounded-lg ${getTypeColor(exp.type)}`}>
                                            <div className="text-2xl">
                                                {exp.icon}
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className={`text-xs font-semibold px-2 py-1 rounded-full border ${getTypeColor(exp.type)}`}>
                                                    {getTypeLabel(exp.type)}
                                                </span>
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-1">
                                                {exp.title}
                                            </h3>
                                            <p className="text-gray-700 font-medium text-sm mb-1">
                                                {exp.organization}
                                            </p>
                                            <p className="text-gray-500 text-sm">
                                                {exp.duration}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <ul className="space-y-2">
                                        {exp.description.map((item, itemIndex) => (
                                            <li key={itemIndex} className="text-gray-700 text-sm flex items-start">
                                                <span className="text-green-600 mr-2 mt-1">•</span>
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
