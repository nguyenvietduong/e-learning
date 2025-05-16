import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { useTranslation } from "react-i18next";

export default function Header() {
    const { t } = useTranslation();
    const [flowerIndex, setFlowerIndex] = useState(0);
    const text = t("welcome");
    const letters = text.split("");

    useEffect(() => {
        const interval = setInterval(() => {
            setFlowerIndex(prev => (prev + 1) % letters.length);
        }, 300);

        return () => clearInterval(interval);
    }, [letters.length]);

    return (
        <header className="bg-sky-200 text-gray-800 shadow">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold flex items-center gap-2 relative">
                    <div className="absolute -left-8 top-1 animate-bounce text-2xl" style={{ transform: `translateX(${flowerIndex * 24}px)` }}>
                        <span className="animate-spin-slow inline-block">🌸</span>
                    </div>
                    <div className="flex">
                        {letters.map((letter, index) => (
                            <span
                                key={index}
                                className={`inline-block transition-transform duration-300 ${index === flowerIndex ? "transform -translate-y-2 scale-110" : ""
                                    }`}
                            >
                                {letter}
                            </span>
                        ))}
                    </div>
                </h1>
                <Nav />
            </div>
        </header>
    );
}
