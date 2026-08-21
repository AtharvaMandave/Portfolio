'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { labAudio } from './LabSoundSystem';

export default function LabBootTerminal({ onEnterLab }) {
  const [bootStep, setBootStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isBooted, setIsBooted] = useState(false);
  const [isEntering, setIsEntering] = useState(false);

  useEffect(() => {
    // Stage 1: Progressively load diagnostics
    const step1 = setTimeout(() => {
      setBootStep(1);
    }, 400);

    const step2 = setTimeout(() => {
      setBootStep(2);
    }, 900);

    // Progress bar simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setBootStep(3);
          setIsBooted(true);
          return 100;
        }
        return prev + Math.floor(Math.random() * 18 + 8);
      });
    }, 120);

    return () => {
      clearTimeout(step1);
      clearTimeout(step2);
      clearInterval(interval);
    };
  }, []);

  const handleEnterClick = () => {
    labAudio.playBootHum();
    setIsEntering(true);
    setTimeout(() => {
      onEnterLab();
    }, 850);
  };

  const getProgressBar = (val) => {
    const totalBlocks = 20;
    const filled = Math.min(20, Math.floor((val / 100) * totalBlocks));
    const empty = totalBlocks - filled;
    return '█'.repeat(filled) + '░'.repeat(empty);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-[#090909] text-[#E8E2D3] flex flex-col items-center justify-center p-6 select-none font-mono overflow-hidden"
        initial={{ opacity: 1 }}
        animate={{ opacity: isEntering ? 0 : 1, scale: isEntering ? 1.08 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Subtle Scanline Overlay */}
        <div className="absolute inset-0 crt-overlay opacity-40 pointer-events-none" />
        <div className="absolute inset-0 lab-grid-fine opacity-20 pointer-events-none" />

        {/* Central Terminal Console Box */}
        <div className="w-full max-w-xl bg-[#121212] border border-[#262624] p-6 md:p-8 rounded relative shadow-2xl tech-bracket">
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-[#222220] pb-3 mb-5 text-xs text-[#6E6E68]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B7FF4A] animate-pulse" />
              <span className="text-[#E8E2D3] font-bold">ATHARVA // LAB TERMINAL</span>
            </div>
            <span className="text-[10px] bg-[#1a1a18] px-2 py-0.5 border border-[#333330] text-[#D98B3A]">
              REV 2026.08
            </span>
          </div>

          {/* Monospace Boot Logs */}
          <div className="space-y-3 text-xs md:text-sm">
            <div className="text-[#A09E96] flex items-center gap-2">
              <span className="text-[#B7FF4A]">❯</span>
              <span>INITIALIZING SYSTEM SUBSYSTEMS...</span>
            </div>

            {bootStep >= 1 && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[#6E6E68] text-xs pl-4 space-y-1"
              >
                <div>[OK] CORE MEMORY ALLOCATED : 64.0 MB</div>
                <div>[OK] 3D SPATIAL ENGINE       : INITIALIZED</div>
                <div>[OK] NEURAL AGENT MATRIX    : ACTIVE</div>
              </motion.div>
            )}

            {bootStep >= 2 && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-2"
              >
                <div className="flex justify-between text-xs text-[#A09E96] mb-1">
                  <span>LOADING ENVIRONMENT</span>
                  <span className="text-[#B7FF4A] font-bold">{Math.min(100, progress)}%</span>
                </div>
                <div className="text-[#B7FF4A] tracking-wider text-xs break-all">
                  [{getProgressBar(progress)}]
                </div>
              </motion.div>
            )}

            {bootStep >= 3 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="border-t border-[#222220] pt-4 mt-4 space-y-2"
              >
                <div className="flex justify-between text-xs">
                  <span className="text-[#6E6E68]">USER_IDENTITY:</span>
                  <span className="text-[#E8E2D3] font-bold">ATHARVA MANDAVE</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-[#6E6E68]">ROLE_SPECS:</span>
                  <span className="text-[#B7FF4A]">AI ENGINEER // FULL-STACK SYSTEMS</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-[#6E6E68]">ENVIRONMENT:</span>
                  <span className="text-[#D98B3A]">INTERACTIVE DIGITAL LABORATORY</span>
                </div>
                <div className="text-xs text-[#B7FF4A] pt-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#B7FF4A] rounded-full animate-ping" />
                  <span>SYSTEM READY FOR ENTRY.</span>
                </div>
              </motion.div>
            )}
          </div>

          {/* Action Button */}
          <div className="mt-8 pt-4 border-t border-[#222220] flex items-center justify-between">
            <span className="text-[10px] text-[#6E6E68] hidden sm:inline">
              PRESS ENTER OR CLICK TO COMMENCE
            </span>

            {isBooted ? (
              <motion.button
                onClick={handleEnterClick}
                onMouseEnter={() => labAudio.playUiHover()}
                disabled={isEntering}
                data-cursor="ENTER LAB"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#B7FF4A] text-[#090909] font-bold text-xs tracking-wider rounded uppercase flex items-center justify-center gap-2 shadow-acid-glow hover:bg-[#d4ff80] transition-colors cursor-pointer"
              >
                <span>[ ENTER LAB ]</span>
                <span className="text-sm font-bold">→</span>
              </motion.button>
            ) : (
              <div className="text-xs text-[#6E6E68] flex items-center gap-2">
                <span className="animate-spin text-[#B7FF4A]">◐</span>
                <span>CALIBRATING SENSORS...</span>
              </div>
            )}
          </div>
        </div>

        {/* Ambient Footer Footnote */}
        <div className="absolute bottom-6 text-center text-[10px] text-[#444440] font-mono">
          ATHARVA MANDAVE &copy; 2026 // DIGITAL LABORATORY ENVIRONMENT
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
