'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { HiLightningBolt, HiChip } from 'react-icons/hi';

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const projects = [
        {
            name: "ARPS - AI Research Paper Studio",
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
            name: "Weather Forecasting Dashboard",
            problem: "Users need accurate, visually appealing weather data with historical trends and predictions.",
            techStack: ["React", "Chart.js", "OpenWeather API", "Tailwind CSS"],
            features: [
                "7-day weather forecast",
                "Historical weather data visualization",
                "Location-based auto-detection",
                "Interactive charts and graphs",
                "Responsive and accessible design"
            ],
            impact: "50,000+ API calls handled monthly with 99.9% uptime",
            learning: "Mastered API integration, data visualization, and performance optimization",
            github: "https://github.com/yourusername/weather-dashboard",
            demo: "https://weather-dashboard-demo.vercel.app",
            highlight: false,
            icon: null
        }
    ];

    return (
        <section id="projects" className="section-padding bg-white">
            <div className="container-custom">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">
                        Real-world applications solving meaningful problems
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`card ${project.highlight ? 'border-2 border-green-500 shadow-lg' : ''}`}
                            >
                                {/* Project Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        {project.icon && (
                                            <div className="text-3xl text-green-600">
                                                {project.icon}
                                            </div>
                                        )}
                                        <h3 className="text-2xl font-bold text-gray-900">
                                            {project.name}
                                        </h3>
                                    </div>
                                    {project.highlight && (
                                        <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                                            Featured
                                        </span>
                                    )}
                                </div>

                                {/* Problem Statement */}
                                <div className="mb-4">
                                    <h4 className="font-semibold text-gray-900 mb-2">Problem Statement</h4>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        {project.problem}
                                    </p>
                                </div>

                                {/* Tech Stack */}
                                <div className="mb-4">
                                    <h4 className="font-semibold text-gray-900 mb-2">Tech Stack</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="bg-green-50 text-green-700 text-xs font-medium px-3 py-1 rounded-full border border-green-200"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Key Features */}
                                <div className="mb-4">
                                    <h4 className="font-semibold text-gray-900 mb-2">Key Features</h4>
                                    <ul className="space-y-1">
                                        {project.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="text-gray-700 text-sm flex items-start">
                                                <span className="text-green-600 mr-2">✓</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Impact */}
                                <div className="mb-4 bg-green-50 p-3 rounded-lg border border-green-200">
                                    <h4 className="font-semibold text-green-900 mb-1 text-sm">Impact</h4>
                                    <p className="text-green-800 text-sm">{project.impact}</p>
                                </div>

                                {/* Learning */}
                                <div className="mb-6 bg-blue-50 p-3 rounded-lg border border-blue-200">
                                    <h4 className="font-semibold text-blue-900 mb-1 text-sm">Learning Outcome</h4>
                                    <p className="text-blue-800 text-sm">{project.learning}</p>
                                </div>

                                {/* Links */}
                                <div className="flex gap-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors font-medium"
                                    >
                                        <FaGithub className="text-xl" />
                                        <span>Code</span>
                                    </a>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors font-medium"
                                    >
                                        <FaExternalLinkAlt className="text-lg" />
                                        <span>Live Demo</span>
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
