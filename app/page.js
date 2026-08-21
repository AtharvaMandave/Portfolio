'use client';

import { useState, useEffect } from 'react';
import LabBootTerminal from './components/lab/LabBootTerminal';
import LabCanvas3D from './components/lab/LabCanvas3D';
import LabHUD from './components/lab/LabHUD';
import CustomLabCursor from './components/lab/CustomLabCursor';
import WorkspaceRoom from './components/lab/WorkspaceRoom';
import ProjectLabRoom from './components/lab/ProjectLabRoom';
import AICoreRoom from './components/lab/AICoreRoom';
import TechMatrixRoom from './components/lab/TechMatrixRoom';
import ExperimentsArchiveRoom from './components/lab/ExperimentsArchiveRoom';
import AchievementsVaultRoom from './components/lab/AchievementsVaultRoom';
import TransmissionStationRoom from './components/lab/TransmissionStationRoom';
import { labAudio } from './components/lab/LabSoundSystem';

export default function Home() {
  const [hasBooted, setHasBooted] = useState(false);
  const [activeRoom, setActiveRoom] = useState('01_WORKSPACE');
  const [isAudioOn, setIsAudioOn] = useState(false);
  const [is3D, setIs3D] = useState(true);

  // Toggle Audio Engine
  const handleToggleAudio = () => {
    const newState = labAudio.toggleMute();
    setIsAudioOn(newState);
  };

  // Toggle 3D WebGL vs 2D Mode
  const handleToggle3D = () => {
    labAudio.playSwitchToggle();
    setIs3D(prev => !prev);
  };

  // Scroll spy to update active room dynamically as user traverses the lab
  useEffect(() => {
    if (!hasBooted) return;

    const sections = [
      { id: 'workspace', room: '01_WORKSPACE' },
      { id: 'projects', room: '02_PROJECT_LAB' },
      { id: 'ai-core', room: '03_AI_CORE' },
      { id: 'tech-wall', room: '04_TECH_WALL' },
      // { id: 'experiments', room: '05_EXPERIMENTS' },
      { id: 'achievements', room: '05_ACHIEVEMENTS' },
      { id: 'transmission', room: '06_TRANSMISSION' },
    ];

    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveRoom(sections[i].room);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasBooted]);

  return (
    <>
      {/* 1. Initial Monospace Boot Screen */}
      {!hasBooted && (
        <LabBootTerminal onEnterLab={() => setHasBooted(true)} />
      )}

      {/* 2. Custom Magnetic Precision Cursor */}
      <CustomLabCursor />

      {/* 3. 3D WebGL Spatial Laboratory Engine */}
      <LabCanvas3D activeRoom={activeRoom} is3DEnabled={is3D} />

      {/* 4. Laboratory Telemetry HUD (Fixed Header & Room Dock) */}
      {hasBooted && (
        <LabHUD
          activeRoom={activeRoom}
          onSelectRoom={setActiveRoom}
          isAudioOn={isAudioOn}
          onToggleAudio={handleToggleAudio}
          is3D={is3D}
          onToggle3D={handleToggle3D}
        />
      )}

      {/* 5. Main Laboratory Chamber Journey */}
      <main className="relative z-10 min-h-screen">
        {/* Room 01: The Developer's Workspace & Kinetic Typography */}
        <WorkspaceRoom />

        {/* Room 02: The Project Lab & CRT Monitors Wall */}
        <ProjectLabRoom />

        {/* Room 03: The AI Core Nucleus & Multi-Agent Simulator */}
        <AICoreRoom />

        {/* Room 04: The Technology Wall Blueprint Schematic */}
        <TechMatrixRoom />

        {/* Room 05: The Experiment Archive & Research Dossiers */}
        {/* <ExperimentsArchiveRoom /> */}

        {/* Room 06: The Achievement Vault & 3D Tilt Cards */}
        <AchievementsVaultRoom />

        {/* Room 07: The Transmission Station & Dispatch Terminal */}
        <TransmissionStationRoom />
      </main>
    </>
  );
}
