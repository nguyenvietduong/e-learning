import { Link, useLocation } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import SearchBar from "./SearchBar";
import { useTranslation } from 'react-i18next';

export default function Nav() {
    const location = useLocation();
    const isActive = (path) => {
        return location.pathname === path || location.pathname.startsWith(path + "/");
    };

    const { t } = useTranslation();

    return (
        <nav className="p-4">
            <div className="container mx-auto flex items-center justify-between gap-6">
                {/* Link navigation */}
                <div className="flex space-x-6 text-lg font-medium">
                    {[
                        { to: "/", label: t("nav.home") },
                        { to: "/lessons", label: t("nav.lesson") },
                        { to: "/about", label: t("nav.about") },
                        { to: "/contact", label: t("nav.contact") },
                    ].map(({ to, label }) => (
                        <Link
                            key={to}
                            to={to}
                            className={`transition-transform duration-300 ${isActive(to)
                                ? "underline font-bold text-blue-600 animate-bounce-slow"
                                : "hover:underline hover:text-blue-500"
                                }`}
                        >
                            {label}
                        </Link>
                    ))}
                </div>

                {/* Search bar */}
                <SearchBar />

                {/* Language switcher */}
                <LanguageSwitcher />

                {/* Auththencation */}
                <div className="flex space-x-4">
                    <Link
                        to="/login"
                        className={isActive("/login") ? "underline font-bold text-blue-600" : "hover:underline hover:text-blue-500"}
                    >
                        {t('nav.login')}
                    </Link>
                </div>
            </div>
        </nav>
    );
}
