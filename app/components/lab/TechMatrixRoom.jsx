'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { labAudio } from './LabSoundSystem';
import { 
  SiJavascript, SiPython, SiReact, SiNextdotjs,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiGit,
  SiGithub, SiPostman, SiTensorflow, SiFastapi,
  SiTailwindcss, SiThreedotjs, SiPostgresql
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

export default function TechMatrixRoom() {
  const [hoveredTech, setHoveredTech] = useState(null);
  const [activeDomain, setActiveDomain] = useState('ALL');

  const domains = [
    {
      name: "AI & INTELLIGENCE",
      color: "text-[#B7FF4A]",
      nodes: [
        { name: "Python", icon: <SiPython />, tag: "CORE", connections: ["TensorFlow", "FastAPI", "OpenCV", "Gemini"] },
        { name: "TensorFlow / Keras", icon: <SiTensorflow />, tag: "DL", connections: ["Python", "MobileNetV2"] },
        { name: "Google Gemini 2.0", icon: null, tag: "LLM", connections: ["Python", "Next.js", "AST Parser"] },
        { name: "FastAPI", icon: <SiFastapi />, tag: "BACKEND", connections: ["Python", "GROQ API", "MongoDB"] },
        { name: "Babel AST Parser", icon: null, tag: "STATIC", connections: ["Gemini", "Node.js", "Next.js"] },
      ]
    },
    {
      name: "FRONTEND ARCHITECTURE",
      color: "text-[#E8E2D3]",
      nodes: [
        { name: "Next.js 16", icon: <SiNextdotjs />, tag: "SSR", connections: ["React.js", "TypeScript", "Tailwind CSS"] },
        { name: "React.js 19", icon: <SiReact />, tag: "UI", connections: ["Next.js 16", "Three.js", "Socket.io"] },
        { name: "Three.js / WebGL", icon: <SiThreedotjs />, tag: "3D", connections: ["React.js 19"] },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, tag: "STYLING", connections: ["Next.js 16", "React.js 19"] },
        { name: "JavaScript / TS", icon: <SiJavascript />, tag: "LANGUAGE", connections: ["React.js 19", "Node.js"] },
      ]
    },
    {
      name: "BACKEND & DISTRIBUTED",
      color: "text-[#D98B3A]",
      nodes: [
        { name: "Node.js", icon: <SiNodedotjs />, tag: "RUNTIME", connections: ["Express.js", "Socket.io", "MongoDB"] },
        { name: "Express.js", icon: <SiExpress />, tag: "SERVER", connections: ["Node.js", "IBM DB2", "PostgreSQL"] },
        { name: "Socket.io", icon: null, tag: "REALTIME", connections: ["Node.js", "React.js 19"] },
        { name: "Java", icon: <FaJava />, tag: "DSA", connections: ["DSA Core", "OOP"] },
      ]
    },
    {
      name: "DATABASES & STORAGE",
      color: "text-[#B7FF4A]",
      nodes: [
        { name: "MongoDB", icon: <SiMongodb />, tag: "NOSQL", connections: ["Node.js", "FastAPI"] },
        { name: "PostgreSQL", icon: <SiPostgresql />, tag: "SQL", connections: ["Node.js", "Express.js"] },
        { name: "MySQL", icon: <SiMysql />, tag: "RDBMS", connections: ["Java", "Node.js"] },
        { name: "IBM DB2", icon: null, tag: "ENTERPRISE", connections: ["Express.js", "Node.js"] },
      ]
    },
    {
      name: "CS FOUNDATIONS & TOOLS",
      color: "text-[#6E6E68]",
      nodes: [
        { name: "DSA (340+ Solved)", icon: null, tag: "LEETCODE", connections: ["Java", "Python"] },
        { name: "Git / GitHub", icon: <SiGit />, tag: "VCS", connections: ["Next.js 16", "Python"] },
        { name: "Postman", icon: <SiPostman />, tag: "TESTING", connections: ["FastAPI", "Express.js"] },
        { name: "Computer Networks", icon: null, tag: "CCNA", connections: ["Socket.io", "Node.js"] },
      ]
    }
  ];

  const handleMouseEnter = (node) => {
    labAudio.playUiHover();
    setHoveredTech(node);
  };

  const handleMouseLeave = () => {
    setHoveredTech(null);
  };

  const isConnectedToHovered = (techName) => {
    if (!hoveredTech) return false;
    if (hoveredTech.name === techName) return true;
    if (hoveredTech.connections && hoveredTech.connections.includes(techName)) return true;
    return false;
  };

  return (
    <section id="tech-wall" className="relative min-h-screen py-24 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Room Badge Header */}
      <div className="flex items-center gap-3 mb-8">
        <span className="text-xs font-mono px-2.5 py-1 bg-[#161614] border border-[#2e2e2a] text-[#B7FF4A] rounded">
          ROOM 04 // TECHNOLOGY WALL
        </span>
        <div className="h-[1px] flex-1 bg-[#222220]" />
        <span className="text-xs font-mono text-[#6E6E68] hidden sm:inline">
          INTERCONNECTED SCHEMATIC NETWORK
        </span>
      </div>

      {/* Section Title */}
      <div className="mb-12">
        <h2 className="editorial-hero-title text-4xl sm:text-5xl md:text-6xl text-[#E8E2D3]">
          TECHNOLOGY <span className="text-[#B7FF4A] glow-green">SCHEMATIC</span>
        </h2>
        <p className="mt-3 text-sm md:text-base text-[#A09E96] font-mono max-w-2xl">
          An interconnected laboratory blueprint. Hover any technology node to illuminate its architectural relationships and dependency pathways.
        </p>
      </div>

      {/* Central Interactive Technology Grid */}
      <div className="space-y-8">
        {domains.map((domain, dIdx) => (
          <div key={dIdx} className="bg-[#121212] border border-[#262624] p-5 md:p-6 rounded-xl tech-bracket shadow-panel-depth">
            {/* Domain Header */}
            <div className="flex items-center justify-between border-b border-[#222220] pb-3 mb-4">
              <span className={`text-xs font-mono font-bold tracking-wider ${domain.color}`}>
                // {domain.name}
              </span>
              <span className="text-[10px] font-mono text-[#6E6E68]">
                {domain.nodes.length} ACTIVE NODES
              </span>
            </div>

            {/* Nodes Row */}
            <div className="flex flex-wrap gap-3">
              {domain.nodes.map((node, nIdx) => {
                const isHovered = hoveredTech?.name === node.name;
                const isLinked = isConnectedToHovered(node.name);

                return (
                  <motion.div
                    key={nIdx}
                    onMouseEnter={() => handleMouseEnter(node)}
                    onMouseLeave={handleMouseLeave}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    data-cursor={`TECH ${node.name}`}
                    className={`px-4 py-2.5 rounded-lg border text-xs font-mono flex items-center gap-2.5 transition-all duration-300 cursor-pointer ${
                      isHovered
                        ? 'bg-[#B7FF4A] text-[#090909] font-bold border-[#B7FF4A] shadow-acid-glow scale-105'
                        : isLinked
                        ? 'bg-[#1e2417] text-[#B7FF4A] border-[#B7FF4A]/70 shadow-acid-glow-sm'
                        : hoveredTech
                        ? 'bg-[#141414] text-[#555550] border-[#222220] opacity-50'
                        : 'bg-[#181816] text-[#E8E2D3] border-[#2c2c28] hover:border-[#B7FF4A]/50'
                    }`}
                  >
                    {node.icon && <span className="text-base">{node.icon}</span>}
                    <span>{node.name}</span>
                    <span className={`text-[9px] px-1.5 py-0.5 rounded ${
                      isHovered ? 'bg-[#090909] text-[#B7FF4A]' : 'bg-[#121212] text-[#6E6E68]'
                    }`}>
                      {node.tag}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Dynamic Telemetry Status Box */}
      <div className="mt-8 bg-[#141414] border border-[#242422] p-4 rounded-lg flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#B7FF4A] animate-ping" />
          <span className="text-[#6E6E68]">ACTIVE INSPECTION:</span>
          <span className="text-[#B7FF4A] font-bold">
            {hoveredTech ? hoveredTech.name : 'HOVER ANY NODE TO TRACE CONNECTIONS'}
          </span>
        </div>
        {hoveredTech && hoveredTech.connections && (
          <div className="flex items-center gap-2 text-[#A09E96]">
            <span>CONNECTED TO:</span>
            <span className="text-[#E8E2D3]">{hoveredTech.connections.join(' • ')}</span>
          </div>
        )}
      </div>
    </section>
  );
}
