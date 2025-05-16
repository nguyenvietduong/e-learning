import React, { useState, useRef, useEffect } from "react";
import i18n from "../config/i18n";

const languages = [
    { code: "en", flagClass: "fi-us" },
    { code: "vi", flagClass: "fi-vn" },
];

export default function LanguageSwitcher() {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const changeLanguage = (code) => {
        i18n.changeLanguage(code);
        setOpen(false);
    };

    return (
        <div className="relative inline-block" ref={dropdownRef}>
            <button
                onClick={() => setOpen(!open)}
                className="focus:outline-none text-2xl"
                aria-label="Change language"
            >
                <span className={`fi ${currentLang.flagClass}`}></span>
            </button>

            {open && (
                <div className="absolute right-0 mt-2 w-28 bg-white border rounded shadow-lg z-50">
                    {languages.map(({ code, flagClass }) => (
                        <button
                            key={code}
                            onClick={() => changeLanguage(code)}
                            className={`flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-blue-100 ${code === currentLang.code ? "font-bold bg-blue-50" : ""
                                }`}
                        >
                            <span className={`fi ${flagClass} text-xl`}></span>
                            <span>{code.toUpperCase()}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
