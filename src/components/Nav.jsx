import { Link, useLocation } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import SearchBar from "./SearchBar";
import { useTranslation } from 'react-i18next';

export default function Nav() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    const { t, i18n } = useTranslation();

    return (
        <nav className="p-4">
            <div className="container mx-auto flex items-center justify-between gap-6">
                {/* Link navigation */}
                <div className="flex space-x-6 text-lg font-medium">
                    <Link
                        to="/"
                        className={isActive("/") ? "underline font-bold text-blue-600" : "hover:underline hover:text-blue-500"}
                    >
                        {t('nav.home')}
                    </Link>
                    <Link
                        to="/chuong-trinh"
                        className={isActive("/chuong-trinh") ? "underline font-bold text-blue-600" : "hover:underline hover:text-blue-500"}
                    >
                        Chương trình học
                    </Link>
                    <Link
                        to="/lien-he"
                        className={isActive("/lien-he") ? "underline font-bold text-blue-600" : "hover:underline hover:text-blue-500"}
                    >
                        Liên hệ
                    </Link>
                </div>

                {/* Search bar */}
                <SearchBar />

                {/* Language switcher */}
                <LanguageSwitcher />
            </div>
        </nav>
    );
}
