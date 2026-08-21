'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { labAudio } from './LabSoundSystem';
import confetti from 'canvas-confetti';
import { 
  HiOutlineMail, 
  HiOutlinePhone, 
  HiOutlineLocationMarker,
  HiOutlineRadio,
  HiOutlinePaperAirplane,
  HiOutlineCheckCircle
} from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function TransmissionStationRoom() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [transmissionSent, setTransmissionSent] = useState(false);

  const contactChannels = [
    {
      icon: <HiOutlineMail className="text-xl text-[#B7FF4A]" />,
      label: "DIRECT FREQUENCY (EMAIL)",
      value: "atharvamandave1@gmail.com",
      link: "mailto:atharvamandave1@gmail.com"
    },
    {
      icon: <HiOutlinePhone className="text-xl text-[#D98B3A]" />,
      label: "TELEPHONE DISPATCH",
      value: "+91 940357120",
      link: "tel:+91940357120"
    },
    {
      icon: <HiOutlineLocationMarker className="text-xl text-[#E8E2D3]" />,
      label: "BASE COORDINATES",
      value: "Pune, Maharashtra, India",
      link: null
    }
  ];

  const socialLinks = [
    {
      name: "GITHUB",
      icon: <FaGithub />,
      url: "https://github.com/AtharvaMandave"
    },
    {
      name: "LINKEDIN",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/atharva-mandave-159093282/"
    }
  ];

  const handleChange = (e) => {
    labAudio.playKeyClick();
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'CALLSIGN / NAME REQUIRED';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'VALID EMAIL FREQUENCY REQUIRED';
    }
    if (!formData.subject.trim()) errs.subject = 'COMMUNICATION SUBJECT REQUIRED';
    if (!formData.message.trim() || formData.message.trim().length < 6) {
      errs.message = 'TRANSMISSION PAYLOAD TOO SHORT (>5 CHARS)';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      labAudio.playSwitchToggle();
      return;
    }

    setIsSending(true);
    labAudio.playCrtHum();

    setTimeout(() => {
      setIsSending(false);
      setTransmissionSent(true);
      labAudio.playTransmissionSent();
      
      // Celebrate with subtle acid green confetti
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#B7FF4A', '#E8E2D3', '#D98B3A']
      });
    }, 1000);
  };

  const handleResetForm = () => {
    labAudio.playSwitchToggle();
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTransmissionSent(false);
  };

  return (
    <section id="transmission" className="relative min-h-screen py-24 px-4 md:px-8 max-w-7xl mx-auto flex flex-col justify-center">
      {/* Room Badge Header */}
      <div className="flex items-center gap-3 mb-8">
        <span className="text-xs font-mono px-2.5 py-1 bg-[#161614] border border-[#2e2e2a] text-[#B7FF4A] rounded">
          ROOM 07 // TRANSMISSION STATION
        </span>
        <div className="h-[1px] flex-1 bg-[#222220]" />
        <span className="text-xs font-mono text-[#6E6E68] hidden sm:inline">
          FREQUENCY: 1420.405 MHz // STATUS: ONLINE
        </span>
      </div>

      {/* Section Title */}
      <div className="mb-12">
        <h2 className="editorial-hero-title text-4xl sm:text-5xl md:text-6xl text-[#E8E2D3]">
          COMMUNICATION <span className="text-[#B7FF4A] glow-green">STATION</span>
        </h2>
        <p className="mt-3 text-sm md:text-base text-[#A09E96] font-mono max-w-2xl">
          Open telemetry link for internships, software engineering roles, autonomous AI initiatives, and research collaboration.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left: Radio Station Status & Direct Channels */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#121212] border border-[#262624] p-6 rounded-xl shadow-panel-depth tech-bracket">
            {/* Status Beacon */}
            <div className="flex items-center justify-between border-b border-[#222220] pb-3 mb-5 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B7FF4A] animate-ping" />
                <span className="text-[#E8E2D3] font-bold">DISPATCH CONSOLE</span>
              </div>
              <span className="text-[#B7FF4A] bg-[#181816] px-2 py-0.5 border border-[#2e2e2a] rounded">
                STATUS: ONLINE
              </span>
            </div>

            {/* Available For Telemetry */}
            <div className="mb-6 space-y-2">
              <div className="text-xs font-mono text-[#6E6E68]">CURRENTLY OPEN FOR:</div>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                {['INTERNSHIPS 2026', 'FULL-TIME ROLES', 'AI COLLABORATION', 'SYSTEMS DEV'].map((item, idx) => (
                  <div key={idx} className="bg-[#181816] p-2 rounded border border-[#242422] text-[#E8E2D3] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-[#B7FF4A] rounded-full" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Communication Channels */}
            <div className="space-y-3 pt-2">
              {contactChannels.map((c, idx) => (
                <div key={idx} className="bg-[#181816] p-3.5 rounded border border-[#242422] flex items-start gap-3">
                  <div className="mt-0.5">{c.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-mono text-[#6E6E68]">{c.label}</div>
                    {c.link ? (
                      <a
                        href={c.link}
                        onClick={() => labAudio.playSwitchToggle()}
                        data-cursor="DIRECT LINK"
                        className="text-xs font-mono text-[#E8E2D3] hover:text-[#B7FF4A] transition-colors truncate block"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <div className="text-xs font-mono text-[#E8E2D3]">{c.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Channels */}
            <div className="flex gap-2 pt-4 mt-4 border-t border-[#222220]">
              {socialLinks.map((s, idx) => (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => labAudio.playSwitchToggle()}
                  data-cursor={s.name}
                  className="flex-1 py-2 bg-[#181816] hover:bg-[#222220] border border-[#2c2c28] hover:border-[#B7FF4A] text-xs font-mono text-[#E8E2D3] hover:text-[#B7FF4A] rounded flex items-center justify-center gap-2 transition-colors"
                >
                  <span>{s.icon}</span>
                  <span>{s.name}</span>
                  <span>↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Vintage Dispatch Terminal Form */}
        <div className="lg:col-span-7">
          <div className="bg-[#121212] border border-[#282826] p-6 md:p-8 rounded-xl shadow-panel-depth tech-bracket relative">
            <AnimatePresence mode="wait">
              {!transmissionSent ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4 text-xs font-mono"
                >
                  <div className="flex items-center justify-between border-b border-[#222220] pb-3 mb-4 text-[#6E6E68]">
                    <span>TRANSMISSION_PAYLOAD_FORM</span>
                    <span className="text-[#D98B3A]">ENCRYPTION: 256-BIT</span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-[#A09E96] mb-1.5 uppercase font-bold">
                        IDENTIFIER / CALLSIGN *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Dr. Alex Vance"
                        className="w-full bg-[#0e0e0e] border border-[#282826] focus:border-[#B7FF4A] focus:outline-none p-3 rounded text-[#E8E2D3] transition-colors"
                      />
                      {errors.name && (
                        <span className="text-[10px] text-[#ff5a5a] mt-1 block">{errors.name}</span>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[#A09E96] mb-1.5 uppercase font-bold">
                        FREQUENCY / RETURN EMAIL *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. alex@research.org"
                        className="w-full bg-[#0e0e0e] border border-[#282826] focus:border-[#B7FF4A] focus:outline-none p-3 rounded text-[#E8E2D3] transition-colors"
                      />
                      {errors.email && (
                        <span className="text-[10px] text-[#ff5a5a] mt-1 block">{errors.email}</span>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-[#A09E96] mb-1.5 uppercase font-bold">
                      TRANSMISSION SUBJECT *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Internship Opportunity / Research Collaboration"
                      className="w-full bg-[#0e0e0e] border border-[#282826] focus:border-[#B7FF4A] focus:outline-none p-3 rounded text-[#E8E2D3] transition-colors"
                    />
                    {errors.subject && (
                      <span className="text-[10px] text-[#ff5a5a] mt-1 block">{errors.subject}</span>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[#A09E96] mb-1.5 uppercase font-bold">
                      TRANSMISSION MESSAGE PAYLOAD *
                    </label>
                    <textarea
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter project specifications, engineering inquiry, or role details..."
                      className="w-full bg-[#0e0e0e] border border-[#282826] focus:border-[#B7FF4A] focus:outline-none p-3 rounded text-[#E8E2D3] transition-colors resize-none"
                    />
                    {errors.message && (
                      <span className="text-[10px] text-[#ff5a5a] mt-1 block">{errors.message}</span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <motion.button
                      type="submit"
                      disabled={isSending}
                      onMouseEnter={() => labAudio.playUiHover()}
                      data-cursor="DISPATCH"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3.5 bg-[#B7FF4A] text-[#090909] font-bold text-xs font-mono uppercase tracking-wider rounded flex items-center justify-center gap-2 shadow-acid-glow hover:bg-[#d4ff80] transition-colors cursor-pointer"
                    >
                      {isSending ? (
                        <>
                          <span className="animate-spin text-sm">◐</span>
                          <span>ENCRYPTING & DISPATCHING TRANSMISSION...</span>
                        </>
                      ) : (
                        <>
                          <span>[ SEND TRANSMISSION ]</span>
                          <HiOutlinePaperAirplane className="rotate-90 text-sm" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10 space-y-4 font-mono"
                >
                  <div className="w-16 h-16 bg-[#B7FF4A]/10 border-2 border-[#B7FF4A] text-[#B7FF4A] rounded-full flex items-center justify-center mx-auto text-3xl shadow-acid-glow">
                    <HiOutlineCheckCircle />
                  </div>
                  <h3 className="text-xl font-bold text-[#E8E2D3]">
                    TRANSMISSION SENT // STATUS: SUCCESS
                  </h3>
                  <p className="text-xs text-[#A09E96] max-w-md mx-auto leading-relaxed">
                    Your transmission payload has been dispatched to Atharva Mandave&apos;s personal station. Expect an acknowledgment shortly.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={handleResetForm}
                      onMouseEnter={() => labAudio.playUiHover()}
                      data-cursor="NEW TRANSMISSION"
                      className="px-5 py-2 bg-[#181816] hover:bg-[#222220] border border-[#333330] hover:border-[#B7FF4A] text-xs font-mono text-[#E8E2D3] rounded transition-colors"
                    >
                      [ COMPOSE ANOTHER TRANSMISSION ]
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Lab Exit & Atmospheric Terminal Footnote */}
      <div className="mt-20 pt-8 border-t border-[#222220] flex flex-wrap items-center justify-between text-xs font-mono text-[#6E6E68] gap-4">
        <div>
          ATHARVA MANDAVE // COMPUTER ENGINEERING & AI SYSTEMS
        </div>
        <div className="flex items-center gap-4">
          <a 
            href="#workspace" 
            onClick={() => labAudio.playSwitchToggle()}
            className="hover:text-[#B7FF4A] transition-colors"
          >
            [ RE-ENTER WORKSPACE ↑ ]
          </a>
          <span>//</span>
          <span>SYSTEM_VERSION 2026.08</span>
        </div>
      </div>
    </section>
  );
}
