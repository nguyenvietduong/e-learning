import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
    const location = useLocation();
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        setIsVisible(true);
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2000); // 2s mỗi lần chuyển trang

        return () => clearTimeout(timer);
    }, [location.pathname]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50 overflow-hidden"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-4xl font-bold text-pink-600 mb-4"
                    >
                        KoLearn
                    </motion.div>

                    {/* Hoa anh đào rơi */}
                    <div className="relative w-full h-40 pointer-events-none">
                        {Array.from({ length: 10 }).map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute text-2xl"
                                style={{ left: `${Math.random() * 100}%` }}
                                initial={{ y: -40, opacity: 0 }}
                                animate={{ y: 200, opacity: 1 }}
                                transition={{
                                    delay: i * 0.2,
                                    duration: 2.5,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                }}
                            >
                                🌸
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};