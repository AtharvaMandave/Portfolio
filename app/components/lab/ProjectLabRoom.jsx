'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { labAudio } from './LabSoundSystem';
import { 
  HiOutlineDesktopComputer, 
  HiOutlineExternalLink, 
  HiOutlineCode, 
  HiOutlineArrowRight, 
  HiOutlineX,
  HiOutlineChip,
  HiOutlineShieldCheck
} from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

export default function ProjectLabRoom() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('ALL');

  const projects = [
    {
      id: "01",
      code: "PROJ_01_ARPS",
      title: "AI RESEARCH PAPER STUDIO",
      category: "AI & WEB SYSTEMS",
      summary: "End-to-end academic paper generation, IEEE formatting engine, and real-time multi-user collaborative research editor.",
      status: "PRODUCTION_READY",
      image: "/p1.png",
      problem: "Researchers and students struggle with fragmented workflows, complex IEEE/ACM citation formatting, and slow collaborative editing, resulting in countless hours lost in manual document restructuring.",
      architecture: [
        { step: "AUTHOR INPUT", desc: "Topic & Research Hypotheses Intake" },
        { step: "LLM PIPELINE", desc: "GROQ API + Fast Reasoning Synthesizer" },
        { step: "AST & FORMAT", desc: "Automated IEEE Structural Enforcement" },
        { step: "COLLAB ENGINE", desc: "Socket.io Real-Time Synchronization" },
        { step: "FINAL EXPORT", desc: "Instant PDF / LaTeX / Markdown Output" }
      ],
      techStack: ["Next.js 15", "Python", "FastAPI", "GROQ API", "MongoDB", "Socket.io", "TipTap Editor", "Tailwind CSS"],
      impact: "Automates 80% of formatting overhead and ensures strict academic compliance with real-time grammar and plagiarism checks.",
      learning: "Engineered scalable WebSocket sync pipelines, custom document AST transforms, and sub-second LLM inference streaming.",
      github: "https://github.com/AtharvaMandave/Ai-Research-Paper",
      demo: "https://ai-research-paper.vercel.app/"
    },
    {
      id: "02",
      code: "PROJ_02_CODE_AUDITOR",
      title: "AI CODE QUALITY & ARCHITECTURE AUDITOR",
      category: "DEVELOPER TOOLS",
      summary: "Hybrid static AST code analysis & LLM-driven architectural reviewer detecting security flaws, complexity leaks, and SOLID violations.",
      status: "OPERATIONAL",
      image: "/p3.png",
      problem: "Developers lack automated, senior-engineer grade code review tools that understand entire multi-file codebases, architecture drift, and deep semantic anti-patterns before merging.",
      architecture: [
        { step: "SOURCE INGESTION", desc: "Multi-file & Repository Chunking" },
        { step: "STATIC AST PARSE", desc: "Babel AST Abstract Syntax Traversal" },
        { step: "AI REASONING", desc: "Google Gemini 2.0 Flash Pattern Audit" },
        { step: "DIFF ENGINE", desc: "Automated Before/After Refactoring" },
        { step: "AUDIT DOSSIER", desc: "Automated PDF Report & Scorecard (0-100)" }
      ],
      techStack: ["Next.js 16", "React 19", "Node.js", "Express.js", "MongoDB", "Google Gemini 2.0 Flash", "Babel AST", "Puppeteer"],
      impact: "Eliminates manual review bottlenecks, surfaces architectural debt, and auto-generates concrete refactoring solutions.",
      learning: "Mastered AST syntax tree manipulation, structured prompt evaluation, multi-threaded static analysis, and programmatic PDF generation.",
      github: "https://github.com/AtharvaMandave/AICODEREVIEW",
      demo: "https://aicodereview-7qn9ddraq-atharvamandaves-projects.vercel.app/"
    },
    {
      id: "03",
      code: "PROJ_03_GARBAGE_CV",
      title: "GARBAGE CLASSIFIER & RECYCLING ASSISTANT",
      category: "MACHINE LEARNING",
      summary: "Real-time deep learning computer vision model identifying 12 waste categories with recyclable vs non-recyclable confidence metrics.",
      status: "DEPLOYED_MODEL",
      image: "/p7.png",
      problem: "Inconsistent waste segregation causes severe municipal recycling failures and environmental pollution due to human inability to accurately classify complex composite packaging.",
      architecture: [
        { step: "IMAGE CAPTURE", desc: "Camera Feed & Drag-and-Drop Intake" },
        { step: "CV PRE-PROCESS", desc: "OpenCV Normalization & Augmentation" },
        { step: "DEEP LEARNING", desc: "MobileNetV2 Transfer Learning Model" },
        { step: "CLASSIFICATION", desc: "12-Category Recyclability Scoring" },
        { step: "ACTION GUIDANCE", desc: "Instant Segregation Recommendation" }
      ],
      techStack: ["Python", "TensorFlow", "Keras", "MobileNetV2", "Streamlit", "OpenCV", "PIL", "NumPy"],
      impact: "Achieved high classification accuracy with low-latency inference on edge devices, fostering sustainable community waste management.",
      learning: "Implemented transfer learning pipelines, model quantization, data augmentation strategies, and production ML deployment in Streamlit.",
      github: "https://github.com/AtharvaMandave/Recycleable-Items",
      demo: null
    },
    {
      id: "04",
      code: "PROJ_04_HOSPITAL_QUEUE",
      title: "HOSPITAL PATIENT QUEUE & VISIT TRACKING",
      category: "ENTERPRISE SYSTEMS",
      summary: "Aadhar-deduplicated real-time outpatient visit tracker with multi-department live queue boards and live WebSocket broadcast.",
      status: "OPERATIONAL",
      image: "/p4.png",
      problem: "Hospitals suffer from duplicate patient medical records, lack of live queue visibility between departments, and chaotic OPD waiting areas.",
      architecture: [
        { step: "PATIENT INTAKE", desc: "Aadhar-based 12-digit Deduplication" },
        { step: "BATCH DISPATCH", desc: "Bulk CSV/TXT Hospital Import" },
        { step: "REALTIME QUEUE", desc: "Socket.io Department State Engine" },
        { step: "DOCTOR CONSOLE", desc: "WAITING → IN_PROGRESS → DONE Flow" },
        { step: "PUBLIC HUD", desc: "Zero-Latency Waiting Room Board" }
      ],
      techStack: ["React", "Vite", "Node.js", "Express.js", "Socket.io", "IBM DB2", "Tailwind CSS", "Multer"],
      impact: "Drastically cut patient registration duplication, streamlined doctor turnaround times, and offered 100% transparent queue tracking.",
      learning: "Designed resilient real-time WebSocket state machines, enterprise database schemas on IBM DB2, and high-concurrency ingestion pipelines.",
      github: "https://github.com/AtharvaMandave/HospitalMangement",
      demo: null
    },
    {
      id: "05",
      code: "PROJ_05_INNOHACK_AI",
      title: "AI MULTI-MODAL DEBUGGER & CODE LAB",
      category: "AI & WEB SYSTEMS",
      summary: "Voice and vision-enabled interactive debugging console with proactive logic analyzer and real-time XP gamification engine.",
      status: "FINALIST_AWARD",
      image: "/p5.png",
      problem: "Beginner and intermediate engineers struggle to pinpoint logic traps and silent runtime bugs using standard stack traces alone.",
      architecture: [
        { step: "MULTI-MODAL IN", desc: "Voice Input + Visual Code Analysis" },
        { step: "STATIC INFER", desc: "Predictive Logic Trap Detection" },
        { step: "AI RESOLUTION", desc: "Gemini Structured Explanations" },
        { step: "GAMIFICATION", desc: "Live XP Leaderboards via WebSockets" }
      ],
      techStack: ["Next.js", "Node.js", "Google Gemini API", "Web Speech API", "Socket.io", "Monaco Editor"],
      impact: "National Finalist at Innohack 2.0 for innovative AI-assisted pedagogy and multi-modal developer accessibility.",
      learning: "Built multi-modal streaming web speech connectors, structured AI fallback parsers, and gamified real-time challenge runners.",
      github: "https://github.com/AtharvaMandave",
      demo: null
    },
    {
      id: "06",
      code: "PROJ_06",
      title: "Multi Agent Research Assistant",
      category: "LangGraph & NLP",
      summary: "Search the most relevant documents from the internet regarding that topic generates topics subtopics and generates article with confidence score and contradictions in research if any.",
      image: "/p5.png",
      problem: "Beginner ",
      architecture: [
        { step: "MULTI-MODAL IN", desc: "Voice Input + Visual Code Analysis" },
        { step: "STATIC INFER", desc: "Predictive Logic Trap Detection" },
        { step: "AI RESOLUTION", desc: "Gemini Structured Explanations" },
        { step: "GAMIFICATION", desc: "Live XP Leaderboards via WebSockets" }
      ],
      techStack: ["Next.js", "Python", "lama 3.3 70b", "LangGraph", "PostGreSQL"],
      impact: "National Finalist at Innohack 2.0 for innovative AI-assisted pedagogy and multi-modal developer accessibility.",
      learning: "Built multi-modal streaming web speech connectors, structured AI fallback parsers, and gamified real-time challenge runners.",
      github: "https://github.com/AtharvaMandave",
      demo: null
    },
    {
  id: "07",
  code: "PROJ_07_TICKETBOOK",
  title: "TICKETBOOK — REAL-TIME TICKET BOOKING PLATFORM",
  category: "FULL-STACK & DISTRIBUTED SYSTEMS",
  summary: "High-concurrency ticket booking platform designed to handle thousands of simultaneous seat selections with atomic locking, automated waitlists, and real-time seat synchronization.",
  status: "COMPLETED",
  image: "/p71.png",
  problem: "Traditional ticket booking systems can suffer from double-booking, stale seat availability, and inconsistent states when many users attempt to reserve the same seats simultaneously.",
  architecture: [
    { step: "REQUEST", desc: "Fastify API + JWT Authentication + Zod Validation" },
    { step: "ATOMIC LOCK", desc: "Redis Lua Scripts for Race-Free Multi-Seat Reservations" },
    { step: "PERSISTENCE", desc: "PostgreSQL Transactions with Database-Level Validation" },
    { step: "ASYNC ENGINE", desc: "BullMQ Workers for Hold Expiry, Emails & Waitlist Automation" },
    { step: "REAL-TIME", desc: "Socket.IO Live Seat Map Synchronization" }
  ],
  techStack: [
    "React",
    "TypeScript",
    "Node.js",
    "Fastify",
    "PostgreSQL",
    "Redis",
    "BullMQ",
    "Socket.io",
    "Knex.js",
    "Zod",
    "JWT",
    "Docker"
  ],
  impact: "Built a production-oriented booking architecture that prevents double-booking through atomic Redis locks and PostgreSQL transaction safeguards while supporting real-time seat updates and automated waitlist processing.",
  learning: "Designed distributed concurrency control using Redis Lua scripts, implemented double-layer seat expiry with Redis TTL and BullMQ, built FIFO waitlist cascades, asynchronous email processing, QR ticket generation, and real-time WebSocket synchronization.",
  github: "[https://github.com/AtharvaMandave](https://github.com/AtharvaMandave)",
  demo: "https://ticket-booking-platform-sigma.vercel.app/"
}
  ];

  const handleOpenCaseStudy = (proj) => {
    labAudio.playCrtHum();
    setSelectedProject(proj);
  };

  const handleCloseCaseStudy = () => {
    labAudio.playSwitchToggle();
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="relative min-h-screen py-24 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Room Badge Header */}
      <div className="flex items-center gap-3 mb-8">
        <span className="text-xs font-mono px-2.5 py-1 bg-[#161614] border border-[#2e2e2a] text-[#B7FF4A] rounded">
          ROOM 02 // PROJECT LAB
        </span>
        <div className="h-[1px] flex-1 bg-[#222220]" />
        <span className="text-xs font-mono text-[#6E6E68] hidden sm:inline">
          DISPLAYS ONLINE: 05 // SYSTEM: READY
        </span>
      </div>

      {/* Section Title */}
      <div className="mb-12">
        <h2 className="editorial-hero-title text-4xl sm:text-5xl md:text-6xl text-[#E8E2D3]">
          ENGINEERING <span className="text-[#B7FF4A] glow-green">PROJECTS</span>
        </h2>
        <p className="mt-3 text-sm md:text-base text-[#A09E96] font-mono max-w-2xl">
          CRT monitor bank displaying core software platforms, AI reasoning engines, and production systems. Hover to inspect, click to expand full system architecture.
        </p>
      </div>

      {/* CRT Monitors Rack Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            onMouseEnter={() => labAudio.playUiHover()}
            onClick={() => handleOpenCaseStudy(proj)}
            data-cursor="VIEW SPEC"
            className="group bg-[#131313] border border-[#262624] hover:border-[#B7FF4A]/80 rounded-lg p-4 flex flex-col justify-between transition-all duration-300 shadow-panel-depth hover:shadow-acid-glow cursor-pointer relative tech-bracket"
          >
            {/* Top Monitor Bezel Header */}
            <div>
              <div className="flex items-center justify-between border-b border-[#222220] pb-3 mb-3 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B7FF4A] group-hover:animate-ping" />
                  <span className="text-[#6E6E68] group-hover:text-[#B7FF4A] transition-colors">
                    {proj.code}
                  </span>
                </div>
                <span className="text-[10px] text-[#D98B3A] border border-[#333330] px-1.5 py-0.5 rounded">
                  {proj.category}
                </span>
              </div>

              {/* CRT Screen Display Box */}
              <div className="relative aspect-video bg-[#0a0a0a] rounded border border-[#222220] overflow-hidden mb-4 crt-screen group-hover:border-[#B7FF4A]/40">
                {/* CRT Scanline Effect */}
                <div className="absolute inset-0 crt-overlay pointer-events-none opacity-60 group-hover:opacity-80" />
                
                {/* Image Preview */}
                <div 
                  className="w-full h-full bg-cover bg-center opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  style={{ backgroundImage: `url(${proj.image})` }}
                />

                {/* CRT Corner Calibration HUD */}
                <div className="absolute bottom-2 left-2 text-[9px] font-mono text-[#B7FF4A] bg-[#090909]/80 px-1.5 py-0.5 rounded">
                  SCAN: 60Hz // {proj.status}
                </div>
              </div>

              {/* Project Headline */}
              <h3 className="font-mono font-bold text-base text-[#E8E2D3] group-hover:text-[#B7FF4A] transition-colors leading-snug mb-2">
                {proj.title}
              </h3>
              <p className="text-xs text-[#A09E96] line-clamp-2 leading-relaxed mb-4">
                {proj.summary}
              </p>
            </div>

            {/* Bottom Tech Pills & Action Trigger */}
            <div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {proj.techStack.slice(0, 3).map((tech, tIdx) => (
                  <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 bg-[#181816] text-[#A09E96] border border-[#282826] rounded">
                    {tech}
                  </span>
                ))}
                {proj.techStack.length > 3 && (
                  <span className="text-[10px] font-mono px-1.5 py-0.5 text-[#6E6E68]">
                    +{proj.techStack.length - 3} MORE
                  </span>
                )}
              </div>

              <div className="border-t border-[#222220] pt-3 flex items-center justify-between text-xs font-mono text-[#B7FF4A]">
                <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  [ INSPECT SPECIFICATION ] →
                </span>
                <span className="text-[10px] text-[#6E6E68]">CLICK TO EXPAND</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Architectural Case Study Modal / Drawer */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#090909]/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-[#141414] border border-[#2e2e2a] max-w-4xl w-full rounded-xl p-6 md:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative tech-bracket"
            >
              {/* Close Button */}
              <button
                onClick={handleCloseCaseStudy}
                onMouseEnter={() => labAudio.playUiHover()}
                data-cursor="CLOSE"
                className="absolute top-5 right-5 p-2 bg-[#1a1a18] text-[#A09E96] hover:text-[#E8E2D3] hover:bg-[#252522] rounded-full transition-colors border border-[#333330]"
              >
                <HiOutlineX className="text-xl" />
              </button>

              {/* Header Bar */}
              <div className="border-b border-[#242422] pb-4 mb-6">
                <div className="flex items-center gap-2 text-xs font-mono text-[#B7FF4A] mb-1">
                  <span>SYSTEM SPECIFICATION</span>
                  <span>//</span>
                  <span>{selectedProject.code}</span>
                </div>
                <h3 className="editorial-hero-title text-2xl sm:text-4xl text-[#E8E2D3]">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Section 1: The Problem */}
              <div className="mb-6 bg-[#181816] p-4 rounded border border-[#262624]">
                <div className="text-xs font-mono text-[#D98B3A] font-bold mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#D98B3A] rounded-full" />
                  <span>THE PROBLEM STATEMENT</span>
                </div>
                <p className="text-sm text-[#E8E2D3] leading-relaxed">
                  {selectedProject.problem}
                </p>
              </div>

              {/* Section 2: The System Pipeline Flowchart */}
              <div className="mb-6 bg-[#181816] p-4 rounded border border-[#262624]">
                <div className="text-xs font-mono text-[#B7FF4A] font-bold mb-3 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#B7FF4A] rounded-full" />
                  <span>THE SYSTEM PIPELINE ARCHITECTURE</span>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-2">
                  {selectedProject.architecture.map((node, nIdx) => (
                    <div key={nIdx} className="bg-[#121212] p-2.5 rounded border border-[#222220] flex flex-col justify-between">
                      <div className="text-[11px] font-mono font-bold text-[#B7FF4A] mb-1 flex items-center justify-between">
                        <span>0{nIdx + 1}.</span>
                        <span>{node.step}</span>
                      </div>
                      <p className="text-[10px] text-[#A09E96] leading-tight">
                        {node.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 3: Technology Matrix */}
              <div className="mb-6">
                <div className="text-xs font-mono text-[#6E6E68] font-bold mb-2">
                  TECHNOLOGY RUNTIMES & FRAMEWORKS:
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 bg-[#181816] border border-[#2a2a28] text-xs font-mono text-[#E8E2D3] rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Section 4: Impact & Key Engineering Learnings */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-[#181816] p-4 rounded border border-[#262624]">
                  <div className="text-xs font-mono text-[#B7FF4A] font-bold mb-1">
                    ENGINEERING IMPACT:
                  </div>
                  <p className="text-xs text-[#A09E96] leading-relaxed">
                    {selectedProject.impact}
                  </p>
                </div>

                <div className="bg-[#181816] p-4 rounded border border-[#262624]">
                  <div className="text-xs font-mono text-[#E8E2D3] font-bold mb-1">
                    KEY ENGINEERING LEARNINGS:
                  </div>
                  <p className="text-xs text-[#A09E96] leading-relaxed">
                    {selectedProject.learning}
                  </p>
                </div>
              </div>

              {/* Section 5: Direct Source & Demo Links */}
              <div className="border-t border-[#242422] pt-4 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => labAudio.playSwitchToggle()}
                      data-cursor="GITHUB REPO"
                      className="px-4 py-2 bg-[#181816] hover:bg-[#222220] border border-[#333330] hover:border-[#B7FF4A] text-xs font-mono text-[#E8E2D3] rounded flex items-center gap-2 transition-colors"
                    >
                      <FaGithub className="text-sm" />
                      <span>SOURCE CODE</span>
                      <span>↗</span>
                    </a>
                  )}

                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => labAudio.playSwitchToggle()}
                      data-cursor="LIVE DEMO"
                      className="px-4 py-2 bg-[#B7FF4A] text-[#090909] hover:bg-[#d4ff80] text-xs font-mono font-bold rounded flex items-center gap-2 transition-colors shadow-acid-glow-sm"
                    >
                      <span>LAUNCH LIVE PLATFORM</span>
                      <span>↗</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={handleCloseCaseStudy}
                  onMouseEnter={() => labAudio.playUiHover()}
                  className="text-xs font-mono text-[#6E6E68] hover:text-[#E8E2D3] transition-colors"
                >
                  [ CLOSE SPECIFICATION ]
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
