'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { labAudio } from './LabSoundSystem';
import { 
  HiOutlineBeaker, 
  HiOutlineDocumentText, 
  HiOutlinePlay, 
  HiOutlineCode,
  HiOutlineCheckCircle
} from 'react-icons/hi';

export default function ExperimentsArchiveRoom() {
  const [activeExp, setActiveExp] = useState(0);

  const experiments = [
    {
      id: "EXP_001",
      title: "QUANTUM PARTICLE DYNAMICS & GLSL SHADERS",
      date: "OCT 2025",
      classification: "GRAPHICS & MATH",
      status: "BENCHMARKED",
      hypothesis: "WebGL GLSL fragment shaders can simulate thousands of ambient particles with sub-1ms CPU overhead via GPU offloading.",
      findings: "GPU vertex shaders sustained a smooth 60 FPS across desktop and mobile devices by offloading per-particle trigonometry to the graphics pipeline.",
      codeSnippet: `// GLSL Fragment Shader Simulation
void main() {
  vec2 uv = gl_PointCoord - vec2(0.5);
  float dist = length(uv);
  if (dist > 0.5) discard;
  gl_FragColor = vec4(0.71, 1.0, 0.29, 1.0 - (dist * 2.0));
}`,
      tech: ["WebGL", "Three.js", "GLSL Shaders", "Trigonometry"]
    },
    {
      id: "EXP_002",
      title: "STATIC AST CYCLOMATIC COMPLEXITY PARSER",
      date: "AUG 2025",
      classification: "COMPILER & AST",
      status: "HYPOTHESIS_CONFIRMED",
      hypothesis: "Traversing Babel Abstract Syntax Trees enables deterministic calculation of cyclomatic complexity and SOLID violations prior to runtime.",
      findings: "Tree traversal accurately pinpointed deeply nested branching (CC > 15) and generated automated AST refactor candidates without executing untrusted code.",
      codeSnippet: `// Babel AST Traversal Node
traverse(ast, {
  IfStatement(path) { complexityScore += 1; },
  LogicalExpression(path) { complexityScore += 0.5; },
  SwitchCase(path) { if (path.node.test) complexityScore += 1; }
});`,
      tech: ["Babel Parser", "AST Explorer", "Static Analysis", "JavaScript"]
    },
    {
      id: "EXP_003",
      title: "PROCEDURAL WEB AUDIO SYNTHESIS ENGINE",
      date: "NOV 2025",
      classification: "DSP & SOUND",
      status: "PROTOTYPED",
      hypothesis: "Procedural sound generation via Web Audio API oscillators eliminates external MP3 network requests and reduces portfolio bundle overhead to zero.",
      findings: "Custom envelope shaping (ADSR) with Sine/Sawtooth oscillators synthesized crisp terminal blips, boot sweeps, and radio static with 0ms network latency.",
      codeSnippet: `// Web Audio ADSR Oscillator
const osc = audioCtx.createOscillator();
const gain = audioCtx.createGain();
osc.frequency.exponentialRampToValueAtTime(880, now + 0.04);
gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);`,
      tech: ["Web Audio API", "DSP", "Harmonic Oscillation", "Sound Synthesis"]
    },
    {
      id: "EXP_004",
      title: "OFFLINE-FIRST PWA QUEUE WITH FHIR CONSENT",
      date: "JULY 2025",
      classification: "HEALTHTECH & PWA",
      status: "NATIONAL_QUALIFIER",
      hypothesis: "A Progressive Web App utilizing IndexedDB and OTP consent can securely manage medical histories for migrant workers with zero active connectivity.",
      findings: "Built for SIH 2025, the system synced background batch queues seamlessly once network connection was restored, adhering to strict FHIR data formats.",
      codeSnippet: `// IndexedDB Offline Queue Sync
const syncOfflineRecords = async () => {
  const pending = await db.queue.getAll();
  if (navigator.onLine && pending.length) {
    await api.batchUpload(pending);
  }
};`,
      tech: ["PWA", "IndexedDB", "PostgreSQL", "FHIR Standards"]
    },
    {
      id: "EXP_005",
      title: "DISTRIBUTED WEBSOCKET STATE RECONCILIATION",
      date: "DEC 2025",
      classification: "DISTRIBUTED REALTIME",
      status: "OPERATIONAL",
      hypothesis: "Socket.io room broadcasting with optimistic UI updates provides transparent hospital queue status under high concurrency.",
      findings: "Optimistic local state reconciliation reduced perceived UI delay to 0ms while preventing race conditions through server-side sequence numbering.",
      codeSnippet: `// Real-Time Queue State Broadcast
io.to(deptRoom).emit("QUEUE_UPDATE", {
  currentTicket: nextTicket.id,
  status: "IN_PROGRESS",
  timestamp: Date.now()
});`,
      tech: ["Socket.io", "Node.js", "State Machines", "Concurrency"]
    }
  ];

  const current = experiments[activeExp];

  const handleSelectExp = (idx) => {
    labAudio.playSwitchToggle();
    setActiveExp(idx);
  };

  return (
    <section id="experiments" className="relative min-h-screen py-24 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Room Badge Header */}
      <div className="flex items-center gap-3 mb-8">
        <span className="text-xs font-mono px-2.5 py-1 bg-[#161614] border border-[#2e2e2a] text-[#B7FF4A] rounded">
          ROOM 05 // EXPERIMENTS ARCHIVE
        </span>
        <div className="h-[1px] flex-1 bg-[#222220]" />
        <span className="text-xs font-mono text-[#6E6E68] hidden sm:inline">
          LABORATORY LOGBOOK // 05 ENTRIES RECORDED
        </span>
      </div>

      {/* Section Title */}
      <div className="mb-12">
        <h2 className="editorial-hero-title text-4xl sm:text-5xl md:text-6xl text-[#E8E2D3]">
          RESEARCH <span className="text-[#B7FF4A] glow-green">EXPERIMENTS</span>
        </h2>
        <p className="mt-3 text-sm md:text-base text-[#A09E96] font-mono max-w-2xl">
          Classified research documents and micro-experiments probing GLSL shaders, compiler ASTs, procedural audio synthesis, and distributed protocols.
        </p>
      </div>

      {/* Logbook Layout: Left Index List, Right Active Research Document */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left: Experiment Dossier Index */}
        <div className="lg:col-span-4 space-y-2.5">
          {experiments.map((exp, idx) => {
            const isSelected = activeExp === idx;
            return (
              <motion.button
                key={exp.id}
                onClick={() => handleSelectExp(idx)}
                onMouseEnter={() => labAudio.playUiHover()}
                data-cursor={`OPEN ${exp.id}`}
                whileHover={{ x: 4 }}
                className={`w-full text-left p-4 rounded-lg border text-xs font-mono transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#181816] border-[#B7FF4A] text-[#E8E2D3] shadow-acid-glow-sm'
                    : 'bg-[#121212] border-[#242422] text-[#A09E96] hover:border-[#383834] hover:text-[#E8E2D3]'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`font-bold ${isSelected ? 'text-[#B7FF4A]' : 'text-[#6E6E68]'}`}>
                    {exp.id}
                  </span>
                  <span className="text-[10px] text-[#D98B3A] border border-[#333330] px-1.5 py-0.5 rounded">
                    {exp.status}
                  </span>
                </div>
                <div className="font-bold text-xs line-clamp-1 text-[#E8E2D3] mb-1">
                  {exp.title}
                </div>
                <div className="text-[10px] text-[#6E6E68]">
                  {exp.classification} // {exp.date}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Right: Active Research Document View */}
        <div className="lg:col-span-8">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-[#121212] border border-[#282826] p-6 md:p-8 rounded-xl shadow-panel-depth tech-bracket relative"
          >
            {/* Document Header */}
            <div className="border-b border-[#242422] pb-4 mb-6">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono mb-2">
                <span className="text-[#B7FF4A] font-bold">LABORATORY DOSSIER // {current.id}</span>
                <span className="text-[#D98B3A]">{current.classification}</span>
              </div>
              <h3 className="font-mono text-xl sm:text-2xl font-bold text-[#E8E2D3] leading-snug">
                {current.title}
              </h3>
            </div>

            {/* Hypothesis & Findings */}
            <div className="space-y-4 mb-6">
              <div className="bg-[#181816] p-4 rounded border border-[#242422]">
                <div className="text-xs font-mono text-[#D98B3A] font-bold mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#D98B3A] rounded-full" />
                  <span>HYPOTHESIS & OBJECTIVE:</span>
                </div>
                <p className="text-xs sm:text-sm text-[#E8E2D3] leading-relaxed">
                  {current.hypothesis}
                </p>
              </div>

              <div className="bg-[#181816] p-4 rounded border border-[#242422]">
                <div className="text-xs font-mono text-[#B7FF4A] font-bold mb-1 flex items-center gap-1.5">
                  <HiOutlineCheckCircle className="text-sm text-[#B7FF4A]" />
                  <span>EMPIRICAL FINDINGS:</span>
                </div>
                <p className="text-xs sm:text-sm text-[#A09E96] leading-relaxed">
                  {current.findings}
                </p>
              </div>
            </div>

            {/* Code Snippet Box */}
            <div className="mb-6">
              <div className="text-xs font-mono text-[#6E6E68] font-bold mb-2 flex items-center justify-between">
                <span>LABORATORY PROTOTYPE IMPLEMENTATION</span>
                <span className="text-[#B7FF4A]">SOURCE_EXTRACT</span>
              </div>
              <pre className="bg-[#0a0a0a] border border-[#222220] p-4 rounded text-xs font-mono text-[#B7FF4A] overflow-x-auto leading-relaxed selection:bg-[#E8E2D3] selection:text-[#090909]">
                <code>{current.codeSnippet}</code>
              </pre>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-[#222220]">
              {current.tech.map((t, idx) => (
                <span key={idx} className="text-[11px] font-mono px-2.5 py-1 bg-[#181816] border border-[#2c2c28] text-[#E8E2D3] rounded">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
