import Breadcrumb from "../components/Breadcrumb";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import contactConfig from "../config/contactConfig";

export default function ContactPage() {
    const { t } = useTranslation(['translation', 'contact']);
    const { email, phone, address, hours, social } = contactConfig;

    const breadcrumbItems = [
        { label: t("nav.home"), path: "/" },
        { label: t("nav.contact"), path: "/contact" }
    ];

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitStatus, setSubmitStatus] = useState('');

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        // Logic gửi form ở đây
        setSubmitStatus(t('form.thankYou'));
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="container mx-auto px-4 py-10">
            <Breadcrumb items={breadcrumbItems} />

            <h2 className="text-4xl font-extrabold text-blue-700 mb-6 text-center">
                {t("title", { ns: "contact" })}
            </h2>

            <p className="text-gray-700 text-lg mb-12 text-center max-w-2xl mx-auto">
                {t("intro", { ns: "contact" })}
            </p>

            {/* Form + Image ngang hàng */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Image */}
                <div className="rounded-xl overflow-hidden shadow-lg">
                    <img
                        src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2023/3/28/1172585/Wpc_Busantourism_Get.jpg"
                        alt="Contact us"
                        className="w-full h-full object-cover"
                    />
                </div>
                
                {/* Form */}
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <h3 className="text-2xl font-semibold text-blue-600 mb-6">{t('form.title', { ns: "contact" })}</h3>

                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">{t('form.name', { ns: "contact" })}</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">{t('form.email', { ns: "contact" })}</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-gray-700 font-medium mb-1">{t('form.message', { ns: "contact" })}</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white font-semibold px-4 py-3 rounded-md hover:bg-blue-700 transition duration-300"
                        >
                            {t('form.submit', { ns: "contact" })}
                        </button>

                        {submitStatus && (
                            <p className="text-green-600 mt-4 font-medium text-center">{submitStatus}</p>
                        )}
                    </form>
                </div>
            </div>

            {/* Thông tin liên hệ và mạng xã hội */}
            <div className="bg-white p-8 rounded-xl shadow-md mt-14">
                <h3 className="text-3xl font-semibold text-blue-600 mb-8 text-center">{t("info.title", { ns: "contact" })}</h3>
                <div className="grid md:grid-cols-2 gap-10 text-gray-700 text-lg">
                    {/* Contact Info */}
                    <ul className="space-y-6">
                        <li>
                            <span className="font-semibold">📧 {t("info.email", { ns: "contact" })}:</span>{" "}
                            <a href={`mailto:${email}`} className="text-blue-600 hover:underline">{email}</a>
                        </li>
                        <li>
                            <span className="font-semibold">📞 {t("info.phone", { ns: "contact" })}:</span> {phone}
                        </li>
                        <li>
                            <span className="font-semibold">📍 {t("info.address", { ns: "contact" })}:</span> {address}
                        </li>
                        <li>
                            <span className="font-semibold">⏰ {t("info.hours", { ns: "contact" })}:</span> {hours}
                        </li>
                    </ul>

                    {/* Social */}
                    <div>
                        <h4 className="text-2xl font-semibold text-blue-600 mb-4">{t("social.title", { ns: "contact" })}</h4>
                        <p className="mb-6">{t("social.desc", { ns: "contact" })}</p>
                        <ul className="space-y-4 text-lg">
                            <li>
                                <a href={social.facebook} target="_blank" rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline flex items-center gap-3">
                                    <span className="text-2xl">📘</span> Facebook
                                </a>
                            </li>
                            <li>
                                <a href={social.instagram} target="_blank" rel="noopener noreferrer"
                                    className="text-pink-500 hover:underline flex items-center gap-3">
                                    <span className="text-2xl">📸</span> Instagram
                                </a>
                            </li>
                            <li>
                                <a href={social.twitter} target="_blank" rel="noopener noreferrer"
                                    className="text-sky-500 hover:underline flex items-center gap-3">
                                    <span className="text-2xl">🐦</span> Twitter
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}