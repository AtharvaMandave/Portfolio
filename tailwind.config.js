/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                lab: {
                    black: '#090909',
                    charcoal: '#151515',
                    panel: '#1C1C1C',
                    border: '#2A2A2A',
                    warm: '#E8E2D3',
                    green: '#B7FF4A',
                    'green-dim': 'rgba(183, 255, 74, 0.15)',
                    amber: '#D98B3A',
                    gray: '#6E6E68',
                    dim: '#A09E96',
                },
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
                syne: ['var(--font-syne)', 'Syne', 'sans-serif'],
                mono: ['var(--font-mono)', 'IBM Plex Mono', 'monospace'],
            },
            boxShadow: {
                'acid-glow': '0 0 25px rgba(183, 255, 74, 0.25)',
                'acid-glow-sm': '0 0 12px rgba(183, 255, 74, 0.2)',
                'amber-glow': '0 0 20px rgba(217, 139, 58, 0.25)',
                'panel-depth': '0 20px 50px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.05)',
            },
            animation: {
                'scanline': 'scanline 8s linear infinite',
                'flicker': 'flicker 0.15s ease-in-out infinite alternate',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'radar-sweep': 'radar 4s linear infinite',
            },
            keyframes: {
                scanline: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(1000%)' },
                },
                radar: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
            },
        },
    },
    plugins: [],
}
