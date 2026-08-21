'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { labAudio } from './LabSoundSystem';

export default function LabHUD({ activeRoom, onSelectRoom, isAudioOn, onToggleAudio, is3D, onToggle3D }) {
  const [fps, setFps] = useState(60);
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const d = new Date();
      setTimeStr(
        `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}:${String(d.getSeconds()).padStart(2, '0')} IST`
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const rooms = [
    { id: '01_WORKSPACE', label: '01_WORKSPACE', anchor: 'workspace' },
    { id: '02_PROJECT_LAB', label: '02_PROJECTS', anchor: 'projects' },
    { id: '03_AI_CORE', label: '03_AI_CORE', anchor: 'ai-core' },
    { id: '04_TECH_WALL', label: '04_TECH_WALL', anchor: 'tech-wall' },
    // { id: '05_EXPERIMENTS', label: '05_EXPERIMENTS', anchor: 'experiments' },
    { id: '05_ACHIEVEMENTS', label: '05_AWARDS', anchor: 'achievements' },
    { id: '06_TRANSMISSION', label: '06_TRANSMIT', anchor: 'transmission' },
  ];

  const handleRoomClick = (room) => {
    labAudio.playSwitchToggle();
    onSelectRoom(room.id);
    const el = document.getElementById(room.anchor);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Laboratory Telemetry Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#090909]/90 backdrop-blur-md border-b border-[#222220] px-4 md:px-8 py-3 select-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* System Identity */}
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#B7FF4A] animate-pulse glow-green" />
            <a 
              href="#workspace" 
              onClick={() => labAudio.playSwitchToggle()}
              className="flex items-baseline gap-2 font-mono text-xs tracking-widest uppercase group"
            >
              <span className="font-bold text-[#E8E2D3] group-hover:text-[#B7FF4A] transition-colors">ATHARVA</span>
              <span className="text-[#6E6E68]">//</span>
              <span className="text-[#B7FF4A] font-semibold hidden sm:inline">DIGITAL_LAB</span>
            </a>
            <span className="hidden lg:inline text-[10px] font-mono px-2 py-0.5 bg-[#151515] border border-[#2a2a26] text-[#A09E96]">
              STATUS: <span className="text-[#B7FF4A]">SYS_ONLINE</span>
            </span>
          </div>

          {/* Center Coordinates & Room ID */}
          <div className="hidden md:flex items-center gap-4 text-xs font-mono text-[#6E6E68]">
            <span className="text-[#D98B3A]">LOC: PUNE_IN [18.52°N, 73.85°E]</span>
            <span className="text-[#333330]">|</span>
            <span className="text-[#E8E2D3]">TIME: {timeStr || '18:00:00 IST'}</span>
          </div>

          {/* Right Controls (Audio, 3D Mode, Resume) */}
          <div className="flex items-center gap-3">
            {/* Audio Toggle */}
            <button
              onClick={onToggleAudio}
              onMouseEnter={() => labAudio.playUiHover()}
              data-cursor="AUDIO TOGGLE"
              className={`flex items-center gap-2 px-2.5 py-1 text-xs font-mono border rounded transition-all ${
                isAudioOn
                  ? 'border-[#B7FF4A] text-[#B7FF4A] bg-[#B7FF4A]/10 glow-green'
                  : 'border-[#333330] text-[#6E6E68] hover:border-[#6E6E68]'
              }`}
              title="Toggle Audio Feedback"
            >
              <span className="relative flex h-2 w-2">
                {isAudioOn && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B7FF4A] opacity-75" />
                )}
                <span className={`relative inline-flex rounded-full h-2 w-2 ${isAudioOn ? 'bg-[#B7FF4A]' : 'bg-[#6E6E68]'}`} />
              </span>
              <span className="hidden sm:inline">AUDIO:</span>
              <span>{isAudioOn ? 'ON' : 'MUTED'}</span>
            </button>

            {/* 3D / 2D Switch */}
            <button
              onClick={onToggle3D}
              onMouseEnter={() => labAudio.playUiHover()}
              data-cursor="MODE TOGGLE"
              className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono border rounded transition-all ${
                is3D
                  ? 'border-[#D98B3A]/80 text-[#D98B3A] bg-[#D98B3A]/10'
                  : 'border-[#333330] text-[#6E6E68]'
              }`}
              title="Toggle 3D WebGL / Lightweight 2D Mode"
            >
              <span>{is3D ? '3D_ENV' : '2D_MODE'}</span>
            </button>

            {/* Resume Transmission Link */}
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => labAudio.playUiHover()}
              onClick={() => labAudio.playSwitchToggle()}
              data-cursor="DOSSIER PDF"
              className="px-3 py-1 text-xs font-mono font-bold bg-[#B7FF4A] text-[#090909] hover:bg-[#d4ff80] transition-colors rounded shadow-acid-glow-sm flex items-center gap-1"
            >
              <span>DOSSIER</span>
              <span className="text-[10px]">↓</span>
            </a>
          </div>
        </div>
      </header>

      {/* Bottom Environmental Room Navigator */}
      <nav className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 max-w-[95vw] overflow-x-auto no-scrollbar py-1 px-2 bg-[#121212]/90 backdrop-blur-lg border border-[#262624] rounded-full shadow-2xl">
        <div className="flex items-center gap-1 md:gap-2 px-1">
          {rooms.map((room) => {
            const isActive = activeRoom === room.id;
            return (
              <button
                key={room.id}
                onClick={() => handleRoomClick(room)}
                onMouseEnter={() => labAudio.playUiHover()}
                data-cursor={`ENTER ${room.label}`}
                className={`px-3 py-1.5 rounded-full text-[11px] font-mono whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#B7FF4A] text-[#090909] font-bold shadow-acid-glow-sm'
                    : 'text-[#A09E96] hover:text-[#E8E2D3] hover:bg-[#1f1f1d]'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-[#090909]' : 'bg-[#444440]'}`} />
                <span>{room.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
