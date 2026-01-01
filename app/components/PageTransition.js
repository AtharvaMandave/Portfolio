'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function PageTransition({ children }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading - in real app, this would wait for data
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {/* Loading Overlay */}
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    onAnimationComplete={() => setIsLoading(false)}
                    className="fixed inset-0 z-50 bg-[#0A0B14] flex items-center justify-center"
                >
                    <div className="text-center">
                        {/* Animated Logo */}
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 15
                            }}
                            className="text-6xl font-bold font-['Space_Grotesk'] mb-4"
                        >
                            <span className="text-white">A</span>
                            <span className="text-indigo-500">M</span>
                        </motion.div>

                        {/* Loading dots */}
                        <div className="flex justify-center gap-2">
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.3, 1, 0.3],
                                    }}
                                    transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        delay: i * 0.2,
                                    }}
                                    className="w-3 h-3 bg-indigo-500 rounded-full"
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Page Content */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoading ? 0 : 1 }}
                transition={{ duration: 0.5 }}
            >
                {children}
            </motion.div>
        </>
    );
}
