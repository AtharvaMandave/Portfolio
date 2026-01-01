'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { HiLightningBolt, HiChip, HiChevronDown, HiChevronUp } from 'react-icons/hi';

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [expandedProjects, setExpandedProjects] = useState({});

    const toggleExpand = (index) => {
        setExpandedProjects(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const projects = [
        {
            name: "ARPS - AI Research Paper Studio",
            image: "/p1.png",
            imageAlt: "AI Research Paper Studio interface screenshot",
            problem: "Researchers and students struggle with formatting, structuring, and ensuring quality in academic papers, spending hours on manual formatting and plagiarism checks.",
            techStack: ["Next.js 15", "Python", "FastAPI", "GROQ API", "MongoDB", "Socket.io", "TipTap Editor"],
            features: [
                "AI-powered complete paper generation from topics",
                "Automatic IEEE-compliant structure and formatting",
                "Real-time collaborative editing with multi-user support",
                "Plagiarism detection and grammar correction",
                "Academic tone conversion and reference management",
                "Version history and live preview"
            ],
            impact: "Automates 80% of paper formatting work and reduces plagiarism by intelligent content restructuring",
            learning: "Mastered full-stack AI integration, real-time collaboration with WebSockets, and complex document processing pipelines",
            github: "https://github.com/AtharvaMandave/Ai-Research-Paper",
            demo: "https://ai-research-paper.vercel.app/",
            highlight: true,
            icon: <HiChip />
        },
        {
            "name": "Garbage Classification & Recycling Assistant",
            "image": "/p2.png",
            "imageAlt": "Garbage classification app showing waste detection",
            "problem": "Waste segregation is inconsistent due to lack of awareness on recyclable vs non-recyclable materials, leading to inefficiencies in recycling systems and increased environmental pollution.",
            "techStack": [
                "Python",
                "TensorFlow",
                "Keras",
                "MobileNetV2 (Transfer Learning)",
                "Streamlit",
                "PIL",
                "NumPy",
                "OpenCV"
            ],
            "features": [
                "Real-time garbage classification using camera or uploaded images",
                "Deep learning model trained on 12 waste categories with fine-tuning",
                "Recyclable vs Non-recyclable detection with confidence score",
                "Data augmentation, transfer learning, and model optimization with MobileNetV2",
                "End-to-end ML pipeline for dataset splitting, training, validation, and testing",
                "Cached model loading for faster inference performance in Streamlit",
                "Simple UI that supports live image capture and drag-and-drop uploads"
            ],
            "impact": "Improves waste segregation accuracy, promotes awareness of recyclable materials, and supports sustainable waste management practices with real-time AI identification.",
            "learning": "Developed experience in transfer learning, model fine-tuning, TensorFlow workflows, image preprocessing, handling ML inference in production, and building deployable AI apps.",
            "github": "https://github.com/AtharvaMandave/Recycleable-Items",
            "demo": null,
            "highlight": true,
            "icon": "♻️"
        },
        {
            name: "AI-Based Code Quality Auditor & Architecture Reviewer",
            image: "/p3.png",
            imageAlt: "AI Code Quality Auditor dashboard showing analysis results",
            problem: "Developers lack automated, intelligent tools that can deeply understand entire codebases, identify quality, security, performance, and architecture issues, and provide actionable refactoring suggestions like a senior engineer.",
            techStack: [
                "Next.js 16",
                "React 19",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Google Gemini 2.0 Flash",
                "Babel AST",
                "Tailwind CSS",
                "Puppeteer"
            ],
            features: [
                "Hybrid static AST analysis and AI-based reasoning for full codebase understanding",
                "Industry-standard chunking strategy (500–1500 LOC with overlap)",
                "Detection of code quality, security, performance, and architecture issues",
                "AI-powered auto-refactoring with before/after code comparison",
                "Dependency graph-based architecture analysis and SOLID violation detection",
                "Developer scoring system (0–100) across multiple quality dimensions",
                "Interactive dashboard with charts, diffs, and architecture diagrams",
                "Automated professional PDF audit report generation"
            ],
            impact: "Helps developers and teams perform senior-level code reviews automatically, reduce technical debt, improve code quality, and enforce architectural best practices at scale.",
            learning: "Gained deep expertise in AST parsing, static analysis, AI-assisted code reasoning, scalable backend orchestration, system architecture analysis, and building production-grade developer tools.",
            github: "https://github.com/AtharvaMandave/AICODEREVIEW",
            demo: "https://aicodereview-7qn9ddraq-atharvamandaves-projects.vercel.app/",
            highlight: true,
            icon: <HiLightningBolt />
        }
        ,
        {
            name: "Hospital Patient Visit Tracking & Real-Time Queue Management System",
            image: "/p4.png",
            imageAlt: "Hospital queue management system interface",
            problem: "Hospitals struggle with duplicate patient records, inefficient visit tracking, and lack of real-time visibility of patient queues across departments.",
            techStack: [
                "React",
                "Vite",
                "Tailwind CSS",
                "Node.js",
                "Express.js",
                "Socket.io",
                "IBM DB2",
                "Multer",
                "CSV Parser"
            ],
            features: [
                "Aadhar-based patient deduplication to avoid duplicate records",
                "Bulk upload of patient visit data using CSV/TXT files",
                "Automatic department visit history tracking for each patient",
                "Real-time queue board with live updates using Socket.io",
                "Department-wise patient queues with status flow (WAITING → IN_PROGRESS → DONE)",
                "Admin/doctor dashboard to call next patient and complete visits",
                "Public-facing live display board for waiting areas",
                "Patient search by 12-digit Aadhar number",
                "Responsive and modern UI built with Tailwind CSS"
            ],
            impact: "Reduced duplicate patient entries, improved visit traceability, and enabled real-time queue visibility for hospital staff and patients.",
            learning: "Gained hands-on experience with real-time systems using WebSockets, database-driven deduplication logic, file processing, and building scalable full-stack applications.",
            github: "https://github.com/AtharvaMandave/HospitalMangement",
            demo: null,
            highlight: true,
            icon: null
        }
        ,
        {
            name: "AI-Powered Debugging & Coding Challenge Platform",
            problem: "Developers often struggle with slow debugging cycles, unclear error explanations, and lack of proactive bug detection, especially when working with complex logic or learning new concepts.",
            techStack: [
                "React",
                "Next.js",
                "Node.js",
                "Express.js",
                "Socket.io",
                "MongoDB",
                "Gemini API",
                "Web Speech API",
                "Tailwind CSS"
            ],
            features: [
                "Voice-based debugging allowing developers to analyze code using natural voice commands",
                "Screenshot-based code debugging using AI vision to extract and analyze code from images",
                "Natural language code queries such as performance analysis, bug detection, and complexity explanation",
                "Predictive debugging to identify potential bugs, performance bottlenecks, and security risks before runtime",
                "Step-by-step AI debugger with bounds checking, loop validation, and logical error detection",
                "AI-powered coding challenge game with multiple modes, difficulty levels, and language support",
                "Real-time feedback, hints, XP-based ranking system, and leaderboard",
                "Robust fallback system for AI failures ensuring uninterrupted user experience",
                "Improved JSON parsing and validation for handling malformed AI responses safely"
            ],
            impact: "Improved developer productivity by reducing debugging time, enhanced learning through interactive challenges, and enabled proactive detection of logical and performance issues.",
            learning: "Gained deep experience in AI integration, WebSocket-based real-time systems, prompt engineering, resilient API design, JSON parsing strategies, and building developer-focused tools.",
            github: "https://github.com/AtharvaMandave/AI-Code-Debuger",
            demo: null,
            highlight: true,
            icon: null
        },
        {
            "name": "Productivity AI System",
            "problem": "Users struggle to measure digital productivity accurately across browsers and desktop applications, leading to poor time management, decreased focus, and unoptimized work patterns.",
            "techStack": [
                "Node.js",
                "Express.js",
                "FastAPI",
                "MongoDB",
                "Next.js",
                "Chrome Extension",
                "Desktop App (Activity Tracker)",
                "Machine Learning (Insights + Pattern Analysis)"
            ],
            "features": [
                "Chrome extension + desktop tracker for real-time activity monitoring",
                "Centralized backend API for activity aggregation, storage, and reporting",
                "AI engine for productivity scoring, habit analysis, and focus insights",
                "Behavior-based predictions for distraction patterns and performance drops",
                "Next.js dashboard for visual analytics, reports, user settings, and trends",
                "Time-distribution graphs, focus score, productivity heatmaps, and reports",
                "Modular architecture supporting multi-device monitoring and scaling"
            ],
            "architecture": {
                "dataSources": ["Chrome Extension", "Desktop Activity Tracker"],
                "backend": "Node.js API for logging, aggregation, and statistics",
                "aiEngine": "FastAPI for productivity models, suggestions, insights",
                "database": "MongoDB for activities, users, and analytics",
                "frontend": "Next.js dashboard for reports and visualization"
            },
            "impact": "Enhanced digital productivity with AI-driven insights, reduced distraction patterns through early detection, and improved personal work efficiency with real-time analytics.",
            "learning": "Hands-on experience with distributed system design, multi-source tracking, AI-based insight generation, API architecture, and real-time behavioral analytics.",
            "github": "https://github.com/AtharvaMandave/Personal-tracker",
            "demo": null,
            "highlight": true,
            "icon": "⚙️"
        }
        ,
        {
            "name": "Taste-Buddies",
            "image": "/p6.png",
            "imageAlt": "Taste Buddies food review platform interface",
            "icon": "🍕",
            "highlight": true,
            "problem": "Food enthusiasts often find it difficult to discover authentic dining experiences and share reliable reviews within a dedicated, community-driven social circle, leading to 'review fatigue' on generic platforms.",
            "techStack": [
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Tailwind CSS",
                "Firebase/JWT (Authentication)",
                "Google Maps API (Location Services)"
            ],
            "features": [
                "Social discovery engine for trending restaurants and hidden culinary gems",
                "Personalized user food journals to track dining history and favorite spots",
                "Interactive review system with high-fidelity image uploads and ratings",
                "Community feed for real-time updates from followed foodies and local trends",
                "Map-based exploration for visual discovery of nearby dining options",
                "Responsive UI/UX optimized for mobile-first food blogging and on-the-go searches",
                "Secure user authentication and profile management for a personalized experience"
            ],
            "architecture": {
                "frontend": "React.js/Next.js SPA with Tailwind CSS for high-performance visual rendering",
                "backend": "Node.js & Express RESTful API managing business logic and social interactions",
                "database": "MongoDB for flexible document storage of menus, reviews, and user metadata",
                "auth": "Firebase or JWT-based secure session handling and user verification",
                "integrations": "Cloudinary/AWS S3 for image hosting and Google Maps for spatial data"
            },
            "impact": "Empowers users to transform their dining habits into a social experience, increasing local business visibility and fostering a trusted community of reviewers.",
            "learning": "Deep dive into building CRUD-heavy social platforms, managing complex NoSQL relationships (users vs. reviews), and implementing geo-spatial data visualization.",
            "github": "https://github.com/AtharvaMandave/Taste-Buddies",
            "demo": null
        },
        {
            "name": "SMEe - Multi-tenant Website Builder",
            "icon": "⚙️",
            "highlight": true,
            "problem": "Small and Medium Enterprises (SMEs) often lack the technical expertise or budget to build professional websites, resulting in a poor digital presence and lost business opportunities.",
            "techStack": [
                "Next.js 15",
                "React 19",
                "Tailwind CSS",
                "Node.js",
                "MongoDB & Mongoose",
                "Clerk (Auth)",
                "Vercel"
            ],
            "features": [
                "Multi-tenant architecture ensuring strict data isolation between different business entities",
                "Dynamic No-Code website generator with industry-specific professional templates",
                "Real-time preview engine allowing users to visualize changes across mobile and desktop modes",
                "One-click deployment system for instant publishing to business-specific subdirectories",
                "Comprehensive business metadata management (Socials, Contact, Industry categorization)",
                "Secure User Authentication and Role-Based Access Control (RBAC) powered by Clerk",
                "Scalable API layer for CRUD operations on company profiles and template seeding"
            ],
            "architecture": {
                "dataSources": ["User Input Forms", "Industry-specific Templates"],
                "backend": "Node.js with Next.js API Routes for multi-tenant logic and activity logging",
                "frontend": "Next.js 15 App Router for dashboard, live previews, and dynamic site rendering",
                "database": "MongoDB for persistent storage of tenant configurations and template schemas",
                "auth": "Clerk for seamless identity management and secure tenant onboarding"
            },
            "impact": "Democratizes web presence for SMEs by providing a low-cost, high-speed alternative to traditional web agencies, enabling instant digital transformation.",
            "learning": "Mastered complex multi-tenant routing patterns in Next.js, implementing secure NoSQL data modeling for SaaS, and integrating third-party auth providers at scale.",
            "github": "https://github.com/AtharvaMandave/SME",
            "demo": null
        }
    ];

    return (
        <section id="projects" className="section-padding relative">
            <div className="container-custom">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">
                        Featured <span className="accent-text">Projects</span>
                    </h2>
                    <p className="section-subtitle">
                        Real-world applications solving meaningful problems
                    </p>

                    <div className="space-y-8">
                        {projects.map((project, index) => {
                            const isExpanded = expandedProjects[index];
                            const isFeatured = project.highlight;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`card-pro group overflow-hidden ${isFeatured ? 'border-2 border-indigo-500/40' : ''
                                        }`}
                                >
                                    {/* Featured Ribbon */}
                                    {isFeatured && (
                                        <div className="absolute top-4 right-4 z-10">
                                            <motion.div
                                                initial={{ scale: 0, rotate: -180 }}
                                                animate={{ scale: 1, rotate: 0 }}
                                                transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                                                className="px-4 py-1.5 bg-indigo-500 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1"
                                            >
                                                <HiLightningBolt className="text-sm" />
                                                FEATURED
                                            </motion.div>
                                        </div>
                                    )}

                                    <div className={`grid ${isFeatured ? 'md:grid-cols-5' : 'md:grid-cols-3'} gap-6`}>
                                        {/* Project Mockup/Image */}
                                        <div className={`${isFeatured ? 'md:col-span-2' : 'md:col-span-1'} relative group/img`}>
                                            <motion.div
                                                whileHover={{ scale: 1.02 }}
                                                className="relative h-48 md:h-full min-h-[200px] rounded-lg overflow-hidden"
                                            >
                                                {/* Actual Project Image or Gradient Fallback */}
                                                {project.image ? (
                                                    <>
                                                        <img
                                                            src={project.image}
                                                            alt={project.imageAlt || project.name}
                                                            className="absolute inset-0 w-full h-full object-cover"
                                                        />
                                                        {/* Dark overlay for better text contrast */}
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                                                    </>
                                                ) : (
                                                    <>
                                                        {/* Fallback Gradient Mockup */}
                                                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 opacity-80"></div>
                                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>

                                                        {/* Project Icon Overlay */}
                                                        <div className="absolute inset-0 flex items-center justify-center">
                                                            <motion.div
                                                                whileHover={{ rotate: 360 }}
                                                                transition={{ duration: 0.6 }}
                                                                className="text-white/40 text-6xl"
                                                            >
                                                                {project.icon || '📱'}
                                                            </motion.div>
                                                        </div>
                                                    </>
                                                )}

                                                {/* Hover Overlay */}
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    whileHover={{ opacity: 1 }}
                                                    className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center gap-4"
                                                >
                                                    {project.github && (
                                                        <motion.a
                                                            whileHover={{ scale: 1.1 }}
                                                            whileTap={{ scale: 0.95 }}
                                                            href={project.github}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors"
                                                            onClick={(e) => e.stopPropagation()}
                                                        >
                                                            <FaGithub className="text-xl" />
                                                        </motion.a>
                                                    )}
                                                    {project.demo && (
                                                        <motion.a
                                                            whileHover={{ scale: 1.1 }}
                                                            whileTap={{ scale: 0.95 }}
                                                            href={project.demo}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors"
                                                            onClick={(e) => e.stopPropagation()}
                                                        >
                                                            <FaExternalLinkAlt className="text-lg" />
                                                        </motion.a>
                                                    )}
                                                </motion.div>
                                            </motion.div>
                                        </div>

                                        {/* Project Content */}
                                        <div className={`${isFeatured ? 'md:col-span-3' : 'md:col-span-2'}`}>
                                            {/* Header */}
                                            <div className="mb-4">
                                                <h3 className="text-2xl font-bold text-white mb-2 font-['Space_Grotesk'] group-hover:text-indigo-400 transition-colors">
                                                    {project.name}
                                                </h3>

                                                {/* Tech Stack Pills */}
                                                <div className="flex flex-wrap gap-2 mb-3">
                                                    {project.techStack.slice(0, isFeatured ? 8 : 6).map((tech, techIndex) => (
                                                        <motion.span
                                                            key={techIndex}
                                                            initial={{ scale: 0 }}
                                                            animate={{ scale: 1 }}
                                                            transition={{ delay: 0.4 + techIndex * 0.05 }}
                                                            whileHover={{ scale: 1.05, y: -2 }}
                                                            className="tag text-xs"
                                                        >
                                                            {tech}
                                                        </motion.span>
                                                    ))}
                                                    {project.techStack.length > (isFeatured ? 8 : 6) && (
                                                        <span className="tag text-xs opacity-60">
                                                            +{project.techStack.length - (isFeatured ? 8 : 6)}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Problem Statement */}
                                            <div className="mb-4">
                                                <h4 className="text-sm font-semibold text-indigo-400 mb-2 flex items-center gap-2">
                                                    <span className="w-1 h-4 bg-indigo-500 rounded"></span>
                                                    Problem
                                                </h4>
                                                <p className="text-gray-300 text-sm leading-relaxed">
                                                    {project.problem}
                                                </p>
                                            </div>

                                            {/* Key Features - Always show 3 */}
                                            <div className="mb-4">
                                                <h4 className="text-sm font-semibold text-indigo-400 mb-2 flex items-center gap-2">
                                                    <span className="w-1 h-4 bg-indigo-500 rounded"></span>
                                                    Key Features
                                                </h4>
                                                <ul className="space-y-1.5">
                                                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                                                        <li key={featureIndex} className="text-gray-300 text-sm flex items-start">
                                                            <span className="text-indigo-400 mr-2 mt-0.5">▸</span>
                                                            <span>{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Expandable Content */}
                                            <AnimatePresence>
                                                {isExpanded && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="overflow-hidden"
                                                    >
                                                        {/* Remaining Features */}
                                                        {project.features.length > 3 && (
                                                            <div className="mb-4">
                                                                <ul className="space-y-1.5">
                                                                    {project.features.slice(3).map((feature, featureIndex) => (
                                                                        <li key={featureIndex + 3} className="text-gray-300 text-sm flex items-start">
                                                                            <span className="text-indigo-400 mr-2 mt-0.5">▸</span>
                                                                            <span>{feature}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )}

                                                        {/* All Tech Stack */}
                                                        {project.techStack.length > (isFeatured ? 8 : 6) && (
                                                            <div className="mb-4">
                                                                <h4 className="text-sm font-semibold text-indigo-400 mb-2">Full Tech Stack</h4>
                                                                <div className="flex flex-wrap gap-2">
                                                                    {project.techStack.map((tech, techIndex) => (
                                                                        <span key={techIndex} className="tag text-xs">
                                                                            {tech}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* Learning */}
                                                        {project.learning && (
                                                            <div className="mb-4 p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                                                                <h4 className="text-sm font-semibold text-purple-400 mb-2">What I Learned</h4>
                                                                <p className="text-gray-300 text-sm">{project.learning}</p>
                                                            </div>
                                                        )}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>

                                            {/* Impact Box */}
                                            <div className="mb-4 p-3 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
                                                <h4 className="text-xs font-semibold text-indigo-300 mb-1 flex items-center gap-1">
                                                    <HiLightningBolt className="text-sm" />
                                                    Impact
                                                </h4>
                                                <p className="text-gray-300 text-sm">{project.impact}</p>
                                            </div>

                                            {/* Footer Actions */}
                                            <div className="flex items-center justify-between pt-2 border-t border-white/10">
                                                <div className="flex gap-4">
                                                    {project.github && (
                                                        <motion.a
                                                            whileHover={{ x: 3 }}
                                                            href={project.github}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-gray-400 hover:text-indigo-400 transition-colors font-medium flex items-center gap-2 text-sm"
                                                        >
                                                            <FaGithub className="text-lg" />
                                                            <span>View Code</span>
                                                        </motion.a>
                                                    )}
                                                    {project.demo && (
                                                        <motion.a
                                                            whileHover={{ x: 3 }}
                                                            href={project.demo}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-gray-400 hover:text-indigo-400 transition-colors font-medium flex items-center gap-2 text-sm"
                                                        >
                                                            <FaExternalLinkAlt className="text-base" />
                                                            <span>Live Demo</span>
                                                        </motion.a>
                                                    )}
                                                </div>

                                                {/* View More Button */}
                                                {(project.features.length > 3 || project.learning) && (
                                                    <motion.button
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        onClick={() => toggleExpand(index)}
                                                        className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1 text-sm transition-colors"
                                                    >
                                                        {isExpanded ? (
                                                            <>
                                                                <span>View Less</span>
                                                                <HiChevronUp className="text-lg" />
                                                            </>
                                                        ) : (
                                                            <>
                                                                <span>View More</span>
                                                                <HiChevronDown className="text-lg" />
                                                            </>
                                                        )}
                                                    </motion.button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
