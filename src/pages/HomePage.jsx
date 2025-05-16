import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Breadcrumb from "../components/Breadcrumb";
import Slider from "../components/Slider";

export default function HomePage() {
    const { t } = useTranslation();

    const breadcrumbItems = [
        { label: t("nav.home"), path: "/" }
    ];

    return (
        <>
            <Slider />

            <div className="container mx-auto px-4 py-10 space-y-16">
                <Breadcrumb items={breadcrumbItems} />

                {/* Tiêu đề chính */}
                <h2 className="text-4xl font-extrabold text-blue-700 mb-8 text-center">
                    {t("pages.home.title")}
                </h2>

                {/* Giới thiệu về Hàn Quốc */}
                <section className="grid md:grid-cols-2 gap-10 items-center bg-white rounded-xl shadow p-6">
                    <img
                        src="https://vnpay.vn/s1/statics.vnpay.vn/2024/4/0nr0uq8jszpo1712916357891.jpg"
                        alt="Korea Landscape"
                        className="w-full rounded-lg object-cover h-64 md:h-80"
                    />
                    <div>
                        <h3 className="text-3xl font-semibold text-blue-600 mb-4">{t("pages.home.koreaIntro.title")}</h3>
                        <p className="text-gray-700 text-lg leading-relaxed">{t("pages.home.koreaIntro.desc")}</p>
                    </div>
                </section>

                {/* Các tính năng học tập */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)] transition">
                        <h3 className="text-xl font-semibold text-blue-500 mb-2">{t("pages.home.features.alphabet.title")}</h3>
                        <p className="text-gray-600 text-sm">{t("pages.home.features.alphabet.desc")}</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)] transition">
                        <h3 className="text-xl font-semibold text-blue-500 mb-2">{t("pages.home.features.vocab.title")}</h3>
                        <p className="text-gray-600 text-sm">{t("pages.home.features.vocab.desc")}</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)] transition">
                        <h3 className="text-xl font-semibold text-blue-500 mb-2">{t("pages.home.features.grammar.title")}</h3>
                        <p className="text-gray-600 text-sm">{t("pages.home.features.grammar.desc")}</p>
                    </div>
                </section>

                {/* Văn hóa & Du lịch */}
                <section className="bg-white rounded-xl shadow p-6">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-8 text-center">{t("pages.home.culture.title")}</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center text-center">
                            <img
                                src="https://media.vietravel.com/images/Content/du-lich-han-quoc-trai-nghiem-mac-hanbok-1.jpg"
                                alt="Hanbok"
                                className="rounded-lg mb-4 h-48 w-full object-cover"
                            />
                            <h4 className="font-semibold mb-2">{t("pages.home.culture.hanbok.title")}</h4>
                            <p className="text-gray-600 text-sm">{t("pages.home.culture.hanbok.desc")}</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <img
                                src="https://transviet.com.vn/images/CNDL2019/Han%20Quoc/Am%20thuc%20Han%20Quoc/am-thuc-han-quoc-bia.jpg"
                                alt="Korean Food"
                                className="rounded-lg mb-4 h-48 w-full object-cover"
                            />
                            <h4 className="font-semibold mb-2">{t("pages.home.culture.food.title")}</h4>
                            <p className="text-gray-600 text-sm">{t("pages.home.culture.food.desc")}</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <img
                                src="https://duhoc.thanhgiang.com.vn/sites/default/files/seoul_0.jpg"
                                alt="Seoul City"
                                className="rounded-lg mb-4 h-48 w-full object-cover"
                            />
                            <h4 className="font-semibold mb-2">{t("pages.home.culture.city.title")}</h4>
                            <p className="text-gray-600 text-sm">{t("pages.home.culture.city.desc")}</p>
                        </div>
                    </div>
                </section>

                {/* Học tiếng Hàn */}
                <section className="bg-white rounded-xl shadow p-6">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-6 text-center">{t("pages.home.learnKorean.title")}</h3>
                    <p className="text-gray-700 text-center max-w-3xl mx-auto mb-6">{t("pages.home.learnKorean.desc")}</p>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-blue-50 rounded-lg p-4 text-center">
                            <h4 className="text-xl font-semibold mb-2">{t("pages.home.learnKorean.list.0.title")}</h4>
                            <p className="text-gray-700 text-sm">{t("pages.home.learnKorean.list.0.desc")}</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4 text-center">
                            <h4 className="text-xl font-semibold mb-2">{t("pages.home.learnKorean.list.1.title")}</h4>
                            <p className="text-gray-700 text-sm">{t("pages.home.learnKorean.list.1.desc")}</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4 text-center">
                            <h4 className="text-xl font-semibold mb-2">{t("pages.home.learnKorean.list.2.title")}</h4>
                            <p className="text-gray-700 text-sm">{t("pages.home.learnKorean.list.2.desc")}</p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        to="/lessons"
                        className="inline-block bg-blue-600 text-white font-medium text-lg px-8 py-3 rounded-full hover:bg-blue-700 transition"
                    >
                        {t("pages.home.cta")}
                    </Link>
                </div>
            </div>
        </>
    );
}