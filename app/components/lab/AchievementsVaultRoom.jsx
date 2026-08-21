'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { labAudio } from './LabSoundSystem';
import { 
  Trophy, 
  GraduationCap, 
  Sparkles, 
  ExternalLink,
  Award,
  ShieldCheck
} from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';

function TiltCard({ item, index }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateX(((y - centerY) / centerY) * -10);
    setRotateY(((x - centerX) / centerX) * 10);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => labAudio.playUiHover()}
      data-cursor="INSPECT CARD"
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      className="bg-[#131313] border border-[#282826] hover:border-[#B7FF4A]/70 rounded-xl p-6 flex flex-col justify-between shadow-panel-depth hover:shadow-acid-glow transition-all duration-300 relative tech-bracket"
    >
      {/* Top Card Badge Header */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="p-3 bg-[#181816] border border-[#2c2c28] rounded-lg text-2xl text-[#B7FF4A]">
            {item.icon}
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 bg-[#181816] border border-[#333330] text-[#D98B3A] rounded uppercase">
            {item.badge}
          </span>
        </div>

        <h3 className="font-mono font-bold text-base sm:text-lg text-[#E8E2D3] leading-snug mb-1">
          {item.title}
        </h3>
        <p className="text-xs font-mono text-[#B7FF4A] mb-3">
          {item.org} // <span className="text-[#6E6E68]">{item.date}</span>
        </p>

        <ul className="space-y-1.5 mb-4 text-xs text-[#A09E96] leading-relaxed">
          {item.bullets.map((b, bIdx) => (
            <li key={bIdx} className="flex items-start gap-2">
              <span className="text-[#B7FF4A] mt-0.5">❯</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Link (if any) */}
      {item.link && (
        <div className="border-t border-[#222220] pt-3 mt-auto">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => labAudio.playSwitchToggle()}
            data-cursor="LEETCODE PROFILE"
            className="text-xs font-mono text-[#B7FF4A] hover:text-[#d4ff80] flex items-center gap-1 transition-colors"
          >
            <span>VERIFIED COMPETITIVE PROFILE</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </motion.div>
  );
}

export default function AchievementsVaultRoom() {
  const cards = [
    {
      icon: <Trophy className="w-6 h-6" />,
      badge: "NATIONAL QUALIFIER",
      title: "SMART INDIA HACKATHON 2025",
      org: "GOVERNMENT OF INDIA",
      date: "OCT 2025",
      bullets: [
        "Built portable digital health record platform for migrant workers with QR-based ID.",
        "Engineered offline-first PWA architecture with PostgreSQL and React.",
        "Implemented secure FHIR-compliant patient-controlled OTP consent model."
      ]
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      badge: "NATIONAL FINALIST",
      title: "INNOHACK 2.0 NATIONAL HACKATHON",
      org: "INNOHACK",
      date: "JULY 2025",
      bullets: [
        "Built multi-modal AI debugging engine with Gemini API and Web Speech API.",
        "Developed predictive logic analyzer identifying bottlenecks before runtime.",
        "Integrated Socket.io real-time challenge engine with live XP leaderboards."
      ]
    },
    {
      icon: <SiLeetcode className="w-6 h-6" />,
      badge: "340+ PROBLEMS SOLVED",
      title: "LEETCODE COMPETITIVE MATRIX",
      org: "COMPETITIVE PROGRAMMING",
      date: "ACTIVE 2025-2026",
      link: "https://leetcode.com/u/atharvamandave1/",
      bullets: [
        "340+ Algorithmic Problems Solved (180 Easy, 150+ Medium).",
        "200+ Active Days in 2025 with 62-Day Max Consistency Streak.",
        "Focus on optimizing space and time asymptotic complexity."
      ]
    },
    {
      icon: <Award className="w-6 h-6" />,
      badge: "CISCO CERTIFIED",
      title: "CCNA: INTRODUCTION TO NETWORKS",
      org: "CISCO NETWORKING ACADEMY",
      date: "NOV 2025",
      bullets: [
        "Mastered IPv4/IPv6 addressing, subnetting, and switching topologies.",
        "Configured secure router interfaces and network segmentation.",
        "Simulated and troubleshot enterprise LAN environments in Packet Tracer."
      ]
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      badge: "INFOSYS VERIFIED",
      title: "DATA STRUCTURES & ALGORITHMS IN JAVA",
      org: "INFOSYS SPRINGBOARD",
      date: "DEC 2024",
      bullets: [
        "Comprehensive mastery of OOP, Linked Lists, Trees, Graphs, and Heaps.",
        "Implemented advanced Dynamic Programming, Recursion, and Sorting.",
        "Built optimized algorithmic solutions adhering to industry standards."
      ]
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      badge: "SPECIALIZATION",
      title: "AI, MACHINE LEARNING & DATA SCIENCE",
      org: "UDEMY CERTIFICATION",
      date: "JUNE 2025",
      bullets: [
        "End-to-end ML specialization covering Supervised, Unsupervised & Deep Learning.",
        "Built 5+ real-world production projects with TensorFlow and NumPy.",
        "Earned professional credential with distinction."
      ]
    }
  ];

  return (
    <section id="achievements" className="relative min-h-screen py-24 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Room Badge Header */}
      <div className="flex items-center gap-3 mb-8">
        <span className="text-xs font-mono px-2.5 py-1 bg-[#161614] border border-[#2e2e2a] text-[#B7FF4A] rounded">
          ROOM 06 // ACHIEVEMENT VAULT
        </span>
        <div className="h-[1px] flex-1 bg-[#222220]" />
        <span className="text-xs font-mono text-[#6E6E68] hidden sm:inline">
          TACTILE MILESTONE CARDS // 3D GYROSCOPIC TILT
        </span>
      </div>

      {/* Title */}
      <div className="mb-12">
        <h2 className="editorial-hero-title text-4xl sm:text-5xl md:text-6xl text-[#E8E2D3]">
          ACHIEVEMENTS <span className="text-[#B7FF4A] glow-green">& MILESTONES</span>
        </h2>
        <p className="mt-3 text-sm md:text-base text-[#A09E96] font-mono max-w-2xl">
          National hackathon honors, verified credentials, and competitive programming consistency. Move your cursor to tilt physical cards.
        </p>
      </div>

      {/* 3D Tactile Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <TiltCard key={idx} item={card} index={idx} />
        ))}
      </div>
    </section>
  );
}
