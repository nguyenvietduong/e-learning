import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import AuthService from "../../services/AuthService"; 

export default function LoginPage() {
    const { t } = useTranslation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const authService = new AuthService();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMsg("");

        try {
            const data = await authService.login(email, password);
            console.log("Đăng nhập thành công:", data);
            // TODO: xử lý lưu token, chuyển trang, ...
            alert(`Đăng nhập thành công! Xin chào ${data.user.name || email}`);
        } catch (error) {
            console.error("Lỗi đăng nhập:", error);
            setErrorMsg(error.message || "Đăng nhập thất bại, vui lòng thử lại.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-white flex items-center justify-center px-4 pt-32 pb-32">
            <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-10 space-y-8">
                {/* Logo / Title */}
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-blue-800 mb-2">{t("pages.login.title")}</h1>
                    <p className="text-blue-600 font-semibold tracking-wide">{t("pages.login.subtitle")}</p>
                </div>

                {/* Form Login */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-blue-700">
                            {t("pages.login.form.emailLabel")}
                        </label>
                        <input
                            type="email"
                            id="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full rounded-md border border-blue-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder={t("pages.login.form.emailPlaceholder")}
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-blue-700">
                            {t("pages.login.form.passwordLabel")}
                        </label>
                        <input
                            type="password"
                            id="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full rounded-md border border-blue-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder={t("pages.login.form.passwordPlaceholder")}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-700 text-white rounded-md font-semibold hover:bg-blue-800 transition"
                    >
                        {t("pages.login.form.submitButton")}
                    </button>
                </form>

                {/* Footer */}
                <div className="text-center text-sm text-blue-600">
                    {t("pages.login.footer.noAccount")}{" "}
                    <a href="/register" className="font-semibold underline hover:text-blue-800">
                        {t("pages.login.footer.registerLink")}
                    </a>
                </div>
            </div>
        </div>
    );
}
