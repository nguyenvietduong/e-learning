import Nav from "./Nav";
import { useTranslation } from 'react-i18next';

export default function Header() {
    const { t, i18n } = useTranslation();

    return (
        <header className="bg-sky-200 text-gray-800 mb-10 shadow">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold flex items-center gap-2">
                    <span className="animate-spin-slow inline-block">🌸</span>
                    {t('welcome')}
                </h1>
                <Nav />
            </div>
        </header>
    );
}
