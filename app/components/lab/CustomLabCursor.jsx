'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomLabCursor() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState({
    active: false,
    text: '',
    type: 'default', // 'default', 'explore', 'view', 'link'
  });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      // Check if hovering over element with custom cursor data
      const target = e.target.closest('[data-cursor], button, a, input, textarea, .interactive-lab');
      if (target) {
        const customText = target.getAttribute('data-cursor');
        const isLink = target.tagName === 'A' || target.getAttribute('href');
        
        if (customText) {
          setCursorState({
            active: true,
            text: customText,
            type: 'custom',
          });
        } else if (isLink) {
          setCursorState({
            active: true,
            text: 'LINK ↗',
            type: 'link',
          });
        } else if (target.tagName === 'BUTTON' || target.classList.contains('interactive-lab')) {
          setCursorState({
            active: true,
            text: 'EXPLORE',
            type: 'explore',
          });
        } else {
          setCursorState({
            active: true,
            text: '',
            type: 'hover',
          });
        }
      } else {
        setCursorState({
          active: false,
          text: '',
          type: 'default',
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (isTouchDevice) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Precision Center Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#B7FF4A] mix-blend-difference pointer-events-none"
        animate={{
          x: mousePos.x - 4,
          y: mousePos.y - 4,
          scale: cursorState.active ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.1 }}
      />

      {/* Target Reticle / Text Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-[#B7FF4A]/70 flex items-center justify-center pointer-events-none backdrop-blur-[1px]"
        animate={{
          x: mousePos.x - (cursorState.text ? 42 : 16),
          y: mousePos.y - (cursorState.text ? 42 : 16),
          width: cursorState.text ? 84 : 32,
          height: cursorState.text ? 84 : 32,
          backgroundColor: cursorState.text ? 'rgba(183, 255, 74, 0.12)' : 'rgba(183, 255, 74, 0.02)',
          borderColor: cursorState.active ? '#B7FF4A' : 'rgba(183, 255, 74, 0.4)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.2 }}
      >
        {cursorState.text && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-[9px] font-mono font-bold text-[#B7FF4A] tracking-wider uppercase text-center px-1 leading-tight select-none"
          >
            {cursorState.text}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
