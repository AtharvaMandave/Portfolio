'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { labAudio } from './LabSoundSystem';
import { 
  HiOutlineTerminal, 
  HiOutlineAcademicCap, 
  HiOutlineChip, 
  HiOutlineDocumentText,
  HiOutlineSparkles,
  HiOutlineCode
} from 'react-icons/hi';

export default function WorkspaceRoom() {
  const [activeTab, setActiveTab] = useState('bio');

  const kineticWords = [
    { text: "I BUILD", highlight: false, align: "text-left" },
    { text: "DIGITAL SYSTEMS", highlight: true, align: "text-center md:text-left" },
    { text: "THAT SOLVE", highlight: false, align: "text-center md:text-right" },
    { text: "REAL PROBLEMS.", highlight: true, align: "text-right" },
  ];

  const handleTabChange = (tab) => {
    labAudio.playSwitchToggle();
    setActiveTab(tab);
  };

  return (
    <section id="workspace" className="relative min-h-screen pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto flex flex-col justify-center">
      {/* Room Badge Header */}
      <div className="flex items-center gap-3 mb-8">
        <span className="text-xs font-mono px-2.5 py-1 bg-[#161614] border border-[#2e2e2a] text-[#B7FF4A] rounded">
          ROOM 01 // WORKSPACE
        </span>
        <div className="h-[1px] flex-1 bg-[#222220]" />
        <span className="text-xs font-mono text-[#6E6E68] hidden sm:inline">
          LATENCY: 12ms // MEMORY: NOMINAL
        </span>
      </div>

      {/* Kinetic Typography Manifesto */}
      <div className="mb-16 select-none">
        <div className="flex flex-col space-y-2 md:space-y-4">
          {kineticWords.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              whileHover={{ x: idx % 2 === 0 ? 8 : -8 }}
              className={`editorial-hero-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight transition-transform ${item.align}`}
            >
              {item.highlight ? (
                <span className="text-[#B7FF4A] glow-green font-extrabold">{item.text}</span>
              ) : (
                <span className="text-[#E8E2D3] opacity-90">{item.text}</span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Editorial Sub-Introduction */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 text-base sm:text-lg md:text-xl text-[#A09E96] max-w-3xl leading-relaxed font-sans"
        >
          Computer Science student and engineer focused on{' '}
          <span className="text-[#E8E2D3] font-medium border-b border-[#B7FF4A]/50">full-stack production systems</span>,{' '}
          <span className="text-[#B7FF4A] font-medium">autonomous AI reasoning</span>, and high-performance interactive architectures.
        </motion.p>
      </div>

      {/* The Developer's Desk — Interactive Terminal / Workstation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-[#121212] border border-[#282826] rounded-xl p-5 md:p-8 relative shadow-panel-depth tech-bracket"
      >
        {/* Workstation Top Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#222220] pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#3a3a38]" />
              <span className="w-3 h-3 rounded-full bg-[#3a3a38]" />
              <span className="w-3 h-3 rounded-full bg-[#B7FF4A]" />
            </div>
            <span className="text-xs font-mono text-[#E8E2D3] font-semibold">
              ATHARVA_DESK // DEV_TERMINAL
            </span>
          </div>

          {/* Interactive Workstation Tabs */}
          <div className="flex flex-wrap gap-1 md:gap-2">
            {[
              { id: 'bio', label: '01_BIO', icon: <HiOutlineTerminal /> },
              { id: 'cs', label: '02_CS_CORE', icon: <HiOutlineAcademicCap /> },
              { id: 'stack', label: '03_DEV_SPECS', icon: <HiOutlineChip /> },
              { id: 'dossier', label: '04_RESUME', icon: <HiOutlineDocumentText /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                onMouseEnter={() => labAudio.playUiHover()}
                data-cursor={`TAB ${tab.label}`}
                className={`px-3 py-1.5 text-xs font-mono rounded flex items-center gap-1.5 transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#B7FF4A] text-[#090909] font-bold shadow-acid-glow-sm'
                    : 'bg-[#181816] text-[#A09E96] hover:text-[#E8E2D3] border border-[#2a2a26]'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Display Area */}
        <div className="min-h-[240px]">
          {activeTab === 'bio' && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="grid md:grid-cols-3 gap-6 items-start"
            >
              <div className="md:col-span-2 space-y-4 text-sm text-[#A09E96] leading-relaxed">
                <p className="text-base text-[#E8E2D3] font-mono font-medium">
                  <span className="text-[#B7FF4A]">❯</span> ATHARVA MANDAVE // 3RD-YEAR COMPUTER ENGINEERING
                </p>
                <p>
                  I approach software engineering with a curious and rigorous experimental mindset. Rather than simply writing code, I build comprehensive systems that bridge complex backend architectures with intelligent AI models and high-utility interfaces.
                </p>
                <p>
                  My laboratory work spans automated academic research engines, deep learning computer vision classifiers, AST-driven code quality review systems, and real-time distributed queues.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
                  <span className="px-2.5 py-1 bg-[#181816] border border-[#2c2c28] text-[#B7FF4A]">
                    FOCUS: AI SYSTEMS & FULL-STACK
                  </span>
                  <span className="px-2.5 py-1 bg-[#181816] border border-[#2c2c28] text-[#D98B3A]">
                    LOCATION: PUNE, MAHARASHTRA
                  </span>
                  <span className="px-2.5 py-1 bg-[#181816] border border-[#2c2c28] text-[#E8E2D3]">
                    AVAILABILITY: INTERNSHIPS 2026
                  </span>
                </div>
              </div>

              {/* Desk Telemetry Panel */}
              <div className="bg-[#181816] border border-[#2a2a28] p-4 rounded text-xs font-mono space-y-3">
                <div className="text-[#6E6E68] border-b border-[#242422] pb-2 font-bold flex items-center justify-between">
                  <span>SYSTEM METRICS</span>
                  <span className="text-[#B7FF4A]">LIVE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6E6E68]">PROBLEMS SOLVED:</span>
                  <span className="text-[#E8E2D3] font-bold">340+ LEETCODE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6E6E68]">HACKATHONS:</span>
                  <span className="text-[#B7FF4A] font-bold">SIH QUALIFIER &apos;25</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6E6E68]">PRIMARY ENGINE:</span>
                  <span className="text-[#E8E2D3]">NEXT.JS & PYTHON</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6E6E68]">CODE DISCIPLINE:</span>
                  <span className="text-[#D98B3A]">CLEAN / SCALABLE</span>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'cs' && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
            >
              {[
                { title: "DATA STRUCTURES & ALGORITHMS", desc: "340+ LeetCode problems solved. Deep proficiency in trees, dynamic programming, graphs, heaps, and asymptotic analysis." },
                { title: "SYSTEMS & ARCHITECTURE", desc: "Monolithic to micro-service patterns, WebSocket state sync, REST/GraphQL design, and database indexing strategies." },
                { title: "OBJECT-ORIENTED PRINCIPLES", desc: "Solid grasp of SOLID, design patterns (Factory, Observer, Singleton), clean abstraction, and maintainable encapsulation in Java & TypeScript." },
                { title: "DATABASE MANAGEMENT", desc: "Schema design, relational normalization (PostgreSQL, MySQL, IBM DB2) and high-throughput document stores (MongoDB)." },
                { title: "OPERATING SYSTEMS & NETWORKING", desc: "Concurrency, memory management, threads, TCP/IP, OSI model, and Cisco CCNA certified network topologies." },
                { title: "AI & COMPUTATION", desc: "AST syntax parsing, vector embeddings, transfer learning, fine-tuning, and LLM orchestration." },
              ].map((item, idx) => (
                <div key={idx} className="bg-[#181816] border border-[#2a2a28] p-4 rounded hover:border-[#B7FF4A]/40 transition-colors">
                  <div className="text-xs font-mono text-[#B7FF4A] font-bold mb-1.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-[#B7FF4A] rounded-full" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-[#A09E96] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'stack' && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4 text-xs font-mono"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-[#181816] border border-[#2a2a28] p-4 rounded space-y-2">
                  <div className="text-[#B7FF4A] font-bold border-b border-[#262624] pb-1.5 flex items-center gap-2">
                    <HiOutlineCode className="text-sm" />
                    <span>FRONTEND & CLIENT RUNTIMES</span>
                  </div>
                  <p className="text-[#A09E96]">Next.js 16, React 19, Tailwind CSS, Three.js / WebGL, HTML5 Canvas, Framer Motion, TipTap RTE, Streamlit.</p>
                </div>

                <div className="bg-[#181816] border border-[#2a2a28] p-4 rounded space-y-2">
                  <div className="text-[#D98B3A] font-bold border-b border-[#262624] pb-1.5 flex items-center gap-2">
                    <HiOutlineChip className="text-sm" />
                    <span>BACKEND & DISTRIBUTED SYSTEMS</span>
                  </div>
                  <p className="text-[#A09E96]">Node.js, Express.js, Python (FastAPI, Flask), Socket.io, Babel AST Parser, Multer, REST APIs.</p>
                </div>

                <div className="bg-[#181816] border border-[#2a2a28] p-4 rounded space-y-2">
                  <div className="text-[#B7FF4A] font-bold border-b border-[#262624] pb-1.5 flex items-center gap-2">
                    <HiOutlineSparkles className="text-sm" />
                    <span>AI, ML & DATA ENGINE</span>
                  </div>
                  <p className="text-[#A09E96]">TensorFlow, Keras, MobileNetV2, OpenCV, Google Gemini 2.0 Flash, GROQ API, Pandas, NumPy, Scikit-learn.</p>
                </div>

                <div className="bg-[#181816] border border-[#2a2a28] p-4 rounded space-y-2">
                  <div className="text-[#E8E2D3] font-bold border-b border-[#262624] pb-1.5 flex items-center gap-2">
                    <HiOutlineTerminal className="text-sm" />
                    <span>DATABASES & TOOLING MATRIX</span>
                  </div>
                  <p className="text-[#A09E96]">MongoDB, PostgreSQL, MySQL, IBM DB2, Git, GitHub Actions, Postman, Linux CLI, VS Code.</p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'dossier' && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-[#181816] border border-[#2a2a28] p-6 rounded text-center space-y-4"
            >
              <div className="inline-block p-3 bg-[#B7FF4A]/10 text-[#B7FF4A] border border-[#B7FF4A]/30 rounded-full text-2xl">
                <HiOutlineDocumentText />
              </div>
              <h3 className="text-base font-mono font-bold text-[#E8E2D3]">ATHARVA MANDAVE // OFFICIAL DOSSIER</h3>
              <p className="text-xs text-[#A09E96] max-w-lg mx-auto leading-relaxed">
                Comprehensive curriculum vitae documenting academic credentials, software engineering portfolio, SIH national qualifications, and technical certifications.
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <a
                  href="/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => labAudio.playSwitchToggle()}
                  data-cursor="DOWNLOAD PDF"
                  className="px-5 py-2 bg-[#B7FF4A] text-[#090909] font-mono font-bold text-xs rounded hover:bg-[#d4ff80] transition-all flex items-center gap-2 shadow-acid-glow-sm"
                >
                  <span>VIEW / DOWNLOAD RESUME PDF</span>
                  <span>↗</span>
                </a>
                <a
                  href="#transmission"
                  onClick={() => labAudio.playSwitchToggle()}
                  data-cursor="CONTACT"
                  className="px-5 py-2 bg-transparent text-[#E8E2D3] font-mono text-xs border border-[#3a3a36] hover:border-[#B7FF4A] rounded transition-all"
                >
                  TRANSMIT MESSAGE →
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
