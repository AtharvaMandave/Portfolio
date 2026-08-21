'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { labAudio } from './LabSoundSystem';
import { 
  HiOutlineSparkles, 
  HiOutlineChip, 
  HiOutlineEye, 
  HiOutlineLightningBolt,
  HiOutlineCode,
  HiOutlinePlay
} from 'react-icons/hi';
import { SiPython, SiTensorflow, SiPytorch } from 'react-icons/si';

export default function AICoreRoom() {
  const [activeModule, setActiveModule] = useState('agentic');
  const [simulationPrompt, setSimulationPrompt] = useState('Analyze Code Quality');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationLogs, setSimulationLogs] = useState([]);

  const aiModules = [
    {
      id: 'agentic',
      name: 'LANGGRAPH & AGENT WORKFLOWS',
      badge: 'MULTI-AGENT',
      icon: <HiOutlineLightningBolt className="text-xl text-[#B7FF4A]" />,
      summary: 'Cyclic graph reasoning, multi-agent orchestration, and structured tool-calling pipelines.',
      skills: ['Multi-Agent State Graphs', 'Tool Use & Function Calling', 'Human-in-the-Loop Validation', 'Structured Output Parsing'],
      metrics: 'SUB-SECOND REASONING // ZERO-SHOT & FEW-SHOT'
    },
    {
      id: 'llm',
      name: 'LLM REASONING & PROMPT ENGINEERING',
      badge: 'GENERATIVE AI',
      icon: <HiOutlineSparkles className="text-xl text-[#D98B3A]" />,
      summary: 'Prompt decomposition, retrieval augmented generation (RAG), and deterministic structured JSON outputs.',
      skills: ['Google Gemini 2.0 Flash', 'Groq Llama 3.3', 'FastAPI AI Streaming', 'Semantic Chunking'],
      metrics: 'PROMPT OPTIMIZATION // RAG PIPELINES'
    },
    {
      id: 'cv',
      name: 'COMPUTER VISION & CNNs',
      badge: 'VISION AI',
      icon: <HiOutlineEye className="text-xl text-[#B7FF4A]" />,
      summary: 'Deep neural networks for image classification, transfer learning, and real-time camera inference.',
      skills: ['MobileNetV2 Transfer Learning', 'OpenCV Pre-processing', 'Data Augmentation', 'Edge Optimization'],
      metrics: '12-CLASS CLASSIFICATION // 90%+ ACCURACY'
    },
    {
      id: 'ast',
      name: 'STATIC AST & CODE REASONING',
      badge: 'AST ENGINE',
      icon: <HiOutlineCode className="text-xl text-[#E8E2D3]" />,
      summary: 'Abstract Syntax Tree traversal combined with LLMs for deep architectural code quality audits.',
      skills: ['Babel AST Parser', 'Complexity Heuristics', 'SOLID Violation Audit', 'Automated Refactoring'],
      metrics: 'MULTI-FILE SCANNING // INSTANT DIFFS'
    },
    {
      id: 'dl',
      name: 'DEEP LEARNING & PYTHON CORE',
      badge: 'CORE ML',
      icon: <SiPython className="text-xl text-[#B7FF4A]" />,
      summary: 'End-to-end machine learning engineering from exploratory data analysis to production deployment.',
      skills: ['TensorFlow & Keras', 'PyTorch Foundations', 'NumPy & Pandas', 'Streamlit & Flask Serving'],
      metrics: 'MODEL TRAINING & OPTIMIZATION'
    }
  ];

  const handleModuleClick = (mod) => {
    labAudio.playCorePulse();
    setActiveModule(mod.id);
  };

  const runSimulation = (promptText) => {
    const query = promptText || simulationPrompt;
    setSimulationPrompt(query);
    setIsSimulating(true);
    setSimulationLogs([]);
    labAudio.playSwitchToggle();

    const steps = [
      "INGESTING PROMPT: " + query,
      "DISPATCHING TO AGENT GRAPH CONTROLLER...",
      "SPAWNING EVALUATOR AGENT & AST SCANNER...",
      "QUERYING GEMINI 2.0 FLASH WITH REASONING KERNEL...",
      "VALIDATING SYNTACTIC INVARIANTS & CONSTRAINTS...",
      "SYNTHESIS COMPLETE // CONFIDENCE SCORE: 0.98"
    ];

    steps.forEach((step, i) => {
      setTimeout(() => {
        labAudio.playKeyClick();
        setSimulationLogs(prev => [...prev, step]);
        if (i === steps.length - 1) {
          setIsSimulating(false);
          labAudio.playTransmissionSent();
        }
      }, (i + 1) * 350);
    });
  };

  const selectedData = aiModules.find(m => m.id === activeModule) || aiModules[0];

  return (
    <section id="ai-core" className="relative min-h-screen py-24 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Room Badge Header */}
      <div className="flex items-center gap-3 mb-8">
        <span className="text-xs font-mono px-2.5 py-1 bg-[#161614] border border-[#2e2e2a] text-[#B7FF4A] rounded">
          ROOM 03 // AI CORE LABORATORY
        </span>
        <div className="h-[1px] flex-1 bg-[#222220]" />
        <span className="text-xs font-mono text-[#6E6E68] hidden sm:inline">
          QUANTUM NEURAL ENGINE // STATUS: ACTIVE
        </span>
      </div>

      {/* Title */}
      <div className="mb-12">
        <h2 className="editorial-hero-title text-4xl sm:text-5xl md:text-6xl text-[#E8E2D3]">
          ARTIFICIAL <span className="text-[#B7FF4A] glow-green">INTELLIGENCE</span> CORE
        </h2>
        <p className="mt-3 text-sm md:text-base text-[#A09E96] font-mono max-w-2xl">
          The epicenter of autonomous reasoning systems, deep learning computer vision, and deterministic agent orchestration.
        </p>
      </div>

      {/* Main AI Core Layout */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left: Interactive 3D Floating AI Nucleus Visual */}
        <div className="lg:col-span-5 bg-[#121212] border border-[#262624] p-6 rounded-xl relative shadow-panel-depth overflow-hidden tech-bracket">
          <div className="text-xs font-mono text-[#6E6E68] mb-4 flex items-center justify-between border-b border-[#222220] pb-2">
            <span>AI_NUCLEUS_TELEMETRY</span>
            <span className="text-[#B7FF4A] animate-pulse">● PULSING</span>
          </div>

          {/* Floating Kinetic AI Core Centerpiece */}
          <div className="relative aspect-square max-h-80 mx-auto flex items-center justify-center my-4">
            {/* Outer Pulsing Orbital Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-[#B7FF4A]/30"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
              className="absolute inset-6 rounded-full border border-dashed border-[#D98B3A]/40"
            />
            <motion.div
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute inset-16 rounded-full bg-radial-gradient from-[#B7FF4A]/20 via-[#B7FF4A]/5 to-transparent blur-md pointer-events-none"
            />

            {/* Central Glowing Core Reactor */}
            <motion.button
              onClick={() => labAudio.playCorePulse()}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              data-cursor="PULSE CORE"
              className="relative z-10 w-28 h-28 bg-[#181816] border-2 border-[#B7FF4A] rounded-2xl flex flex-col items-center justify-center p-3 shadow-acid-glow cursor-pointer group"
            >
              <HiOutlineSparkles className="text-3xl text-[#B7FF4A] mb-1 group-hover:rotate-180 transition-transform duration-700" />
              <span className="text-[11px] font-mono font-bold text-[#E8E2D3] tracking-widest">AI CORE</span>
              <span className="text-[8px] font-mono text-[#B7FF4A]">v2.6_ACTIVE</span>
            </motion.button>
          </div>

          {/* Core Diagnostics Readout */}
          <div className="bg-[#181816] border border-[#242422] p-3 rounded text-xs font-mono space-y-1.5 mt-4">
            <div className="flex justify-between text-[#6E6E68]">
              <span>ORCHESTRATION:</span>
              <span className="text-[#E8E2D3]">LANGGRAPH / FASTAPI</span>
            </div>
            <div className="flex justify-between text-[#6E6E68]">
              <span>INFERENCE SPEED:</span>
              <span className="text-[#B7FF4A]">SUB-500ms GROQ/GEMINI</span>
            </div>
            <div className="flex justify-between text-[#6E6E68]">
              <span>KNOWLEDGE SCOPE:</span>
              <span className="text-[#D98B3A]">FULL-STACK & ML</span>
            </div>
          </div>
        </div>

        {/* Right: Interactive Intelligence Modules & Sandbox */}
        <div className="lg:col-span-7 space-y-6">
          {/* Module Selector Chips */}
          <div className="flex flex-wrap gap-2">
            {aiModules.map((mod) => {
              const isActive = activeModule === mod.id;
              return (
                <button
                  key={mod.id}
                  onClick={() => handleModuleClick(mod)}
                  onMouseEnter={() => labAudio.playUiHover()}
                  data-cursor={`INSPECT ${mod.badge}`}
                  className={`px-3 py-2 rounded text-xs font-mono flex items-center gap-2 border transition-all ${
                    isActive
                      ? 'bg-[#B7FF4A] text-[#090909] font-bold border-[#B7FF4A] shadow-acid-glow-sm'
                      : 'bg-[#141414] text-[#A09E96] border-[#282826] hover:border-[#B7FF4A]/50 hover:text-[#E8E2D3]'
                  }`}
                >
                  <span>{mod.icon}</span>
                  <span>{mod.badge}</span>
                </button>
              );
            })}
          </div>

          {/* Module Deep-Dive Inspector Card */}
          <motion.div
            key={selectedData.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#121212] border border-[#262624] p-6 rounded-xl relative shadow-panel-depth"
          >
            <div className="flex items-center justify-between border-b border-[#222220] pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[#B7FF4A] font-bold">{selectedData.name}</span>
              </div>
              <span className="text-[10px] font-mono text-[#D98B3A] border border-[#333330] px-2 py-0.5 rounded">
                {selectedData.metrics}
              </span>
            </div>

            <p className="text-sm text-[#E8E2D3] leading-relaxed mb-4">
              {selectedData.summary}
            </p>

            <div className="grid sm:grid-cols-2 gap-2 mb-4">
              {selectedData.skills.map((skill, sIdx) => (
                <div key={sIdx} className="bg-[#181816] p-2.5 rounded border border-[#222220] text-xs font-mono text-[#A09E96] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#B7FF4A] rounded-full" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Interactive AI Agent Reasoning Sandbox */}
          <div className="bg-[#121212] border border-[#262624] p-5 rounded-xl text-xs font-mono space-y-4">
            <div className="flex items-center justify-between border-b border-[#222220] pb-2 text-[#6E6E68]">
              <span className="text-[#E8E2D3] font-bold flex items-center gap-1.5">
                <HiOutlinePlay className="text-[#B7FF4A]" />
                LIVE MULTI-AGENT REASONING SIMULATOR
              </span>
              <span>TEST QUERY RUNNER</span>
            </div>

            {/* Prompt presets */}
            <div className="flex flex-wrap gap-2">
              {[
                "Analyze Code Quality & AST",
                "Synthesize Academic Hypothesis",
                "Classify Waste Material Sample",
                "Optimize Queue Dispatch Latency"
              ].map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => runSimulation(p)}
                  onMouseEnter={() => labAudio.playUiHover()}
                  data-cursor="RUN PRESET"
                  className="px-2.5 py-1 bg-[#181816] hover:bg-[#20201e] border border-[#282826] hover:border-[#B7FF4A] text-[#A09E96] hover:text-[#E8E2D3] rounded text-[11px] transition-colors"
                >
                  ❯ {p}
                </button>
              ))}
            </div>

            {/* Simulation Terminal Output */}
            <div className="bg-[#0a0a0a] border border-[#20201e] p-3 rounded min-h-[110px] space-y-1.5">
              {simulationLogs.length === 0 ? (
                <div className="text-[#555550] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#555550] rounded-full" />
                  <span>Select or click a preset above to trigger the simulated multi-agent reasoning trace.</span>
                </div>
              ) : (
                simulationLogs.map((log, lIdx) => (
                  <motion.div
                    key={lIdx}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`flex items-center gap-2 ${lIdx === simulationLogs.length - 1 ? 'text-[#B7FF4A] font-bold' : 'text-[#A09E96]'}`}
                  >
                    <span>❯</span>
                    <span>{log}</span>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
