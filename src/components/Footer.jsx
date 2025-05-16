import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="bg-gray-100 text-gray-700 py-6 border-t">
            <div className="container mx-auto px-4 text-center">
                <p className="font-semibold mb-2" id="chuong-trinh">📚 {t("footer.title")}</p>
                <p>{t("footer.description")}</p>
                <p className="mt-4 text-sm text-gray-500" id="lien-he">
                    © 2025 {t("footer.copyright")}
                </p>
            </div>
        </footer>
    );
};