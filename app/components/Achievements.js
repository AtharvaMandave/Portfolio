'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiAcademicCap, HiStar } from 'react-icons/hi';
import { HiTrophy } from 'react-icons/hi2';
import { SiLeetcode } from 'react-icons/si';

export default function Achievements() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const achievements = [
        {
            type: "hackathon",
            icon: <HiTrophy />,
            title: "Smart India Hackathon - National Level Qualifier",
            organization: "Government of India",
            duration: "Oct 2025",
            description: [
                "Multilingual QR-Based Platform: Built a portable digital health record system for migrant workers in Kerala featuring a QR-based ID and a multilingual UI (Malayalam, Hindi, English).",
                "Offline-First HealthTech Stack: Developed using React.js, Node.js, and PostgreSQL, utilizing a Progressive Web App (PWA) architecture for reliable operation in rural, low-connectivity areas.",
                "Secure Consent-Led Data: Implemented a consent-first sharing model compliant with FHIR standards, allowing workers to control medical history access via OTP-based authentication.",
            ]
        },
        {
            type: "hackathon",
            icon: <HiTrophy />,
            title: "Innohack 2.0 - Finalist",
            organization: "Innohack",
            duration: "July 2025",
            description: [
                "Multi-Modal AI Debugging: Built a platform using Gemini API and Web Speech API for voice-activated and vision-based code analysis.",
                "Predictive Logic Analysis: Developed AI-driven tools to proactively detect performance bottlenecks, security risks, and logical errors before execution.",
                "Gamified Coding Platform: Integrated Socket.io to power a real-time challenge engine with XP-based leaderboards and live feedback.",
                "Resilient System Design: Optimized Next.js and Node.js backend with robust JSON parsing and fallback systems for reliable AI response handling."
            ]
        },
        {
            type: "certification",
            icon: <HiAcademicCap />,
            title: "Complete AI Machine Learning & Data Science",
            organization: "Udemy",
            duration: "Completed: June 2025",
            description: [
                "Comprehensive course covering React, Node.js, and databases",
                "Built 5+ real-world projects with industry best practices",
                "Earned professional certificate with distinction"
            ]
        },
        {
            type: "certification",
            icon: <HiAcademicCap />,
            title: "Data Structures and Algorithms in Java",
            organization: "Infosys Springboard",
            duration: "Completed: Dec 2024",
            description: [
                "Gained proficiency in advanced Java programming and Object-Oriented (OOP) principles.",
                "Implemented core data structures including Linked Lists, Trees, Heaps, and Graphs.",
                "Mastered algorithmic techniques such as Recursion, Dynamic Programming, and Sorting/Searching to optimize code performance."
            ]
        },
        {
            type: "certification",
            icon: <HiAcademicCap />,
            title: "CCNA: Introduction to Networks",
            organization: "Cisco Networking Academy",
            duration: "Completed: Nov 2025",
            description: [
                "Learned foundational networking concepts, including IPv4/IPv6 addressing and subnetting.",
                "Configured and secured connectivity between switches, routers, and end devices.",
                "Gained hands-on experience with Cisco Packet Tracer to simulate and troubleshoot local area networks (LANs)."
            ]
        },
        {
            type: "achievement",
            icon: <SiLeetcode />,
            title: "LeetCode Profile",
            organization: "Competitive Programming",
            duration: "Active",
            link: "https://leetcode.com/u/atharvamandave1/",
            description: [
                "Problems Solved: 340+ (180 Easy, 150+ Medium)",
                "Consistency: 200+ Active Days in 2025 with a 62-day Max Streak",
                "Actively participating in coding contests and challenges",
                "Focusing on optimizing time and space complexity in solutions"
            ]
        }
    ];

    const getTypeColor = (type) => {
        switch (type) {
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
        <section id="achievements" className="section-padding relative">
            <div className="container-custom">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">
                        Achievements <span className="accent-text">& Certifications</span>
                    </h2>
                    <p className="section-subtitle">
                        Recognition and continuous learning milestones
                    </p>

                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-6">
                            {achievements.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="card-pro flex flex-col h-full"
                                >
                                    {/* Header */}
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="p-3 rounded-lg bg-indigo-500/20 border border-indigo-500/30">
                                            <div className="text-2xl text-indigo-400">
                                                {item.icon}
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-xs font-semibold px-2 py-1 rounded-full border bg-indigo-500/20 text-indigo-400 border-indigo-500/30">
                                                    {getTypeLabel(item.type)}
                                                </span>
                                            </div>
                                            <h3 className="text-lg font-bold text-white mb-1 font-['Space_Grotesk']">
                                                {item.title}
                                            </h3>
                                            <p className="text-indigo-400 font-medium text-sm mb-1">
                                                {item.organization}
                                            </p>
                                            <p className="text-gray-400 text-sm">
                                                {item.duration}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <ul className="space-y-2 mb-4 flex-grow">
                                        {item.description.map((desc, descIndex) => (
                                            <li key={descIndex} className="text-gray-300 text-sm flex items-start">
                                                <span className="text-indigo-400 mr-2 mt-1">•</span>
                                                <span>{desc}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Link */}
                                    {item.link && (
                                        <div className="mt-auto pt-2 border-t border-gray-100">
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-indigo-400 hover:text-indigo-300 font-medium text-sm flex items-center gap-1 transition-colors"
                                            >
                                                View Profile ↗
                                            </a>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
