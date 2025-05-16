import { useTranslation, Trans } from "react-i18next";
import Breadcrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";

export default function AboutPage() {
    const { t } = useTranslation(['translation', 'about']);
    const methodList = t("sections.methodList", { ns: 'about', returnObjects: true });

    const breadcrumbItems = [
        { label: t("nav.home"), path: "/" },
        { label: t("nav.about"), path: "/about" },
    ];

    return (
        <div className="container mx-auto px-4 py-10">
            <Breadcrumb items={breadcrumbItems} />

            <h1 className="text-4xl font-extrabold text-blue-700 mb-10 text-center">
                {t("title", { ns: 'about' })}
            </h1>

            {/* Intro */}
            <section className="bg-white shadow rounded-xl p-6 mb-8">
                <p className="text-lg text-gray-800 leading-relaxed">
                    {t("sections.intro", { ns: 'about' })}
                </p>
            </section>

            {/* Vision */}
            <SectionWithImage img={"https://kjvc.com.vn/uploads/plugin/news/2018/07/1611805120-8126.jpg"} title={t("sections.visionTitle", { ns: 'about' })} content={t("sections.visionDesc", { ns: 'about' })} />

            {/* Method */}
            <SectionWithImage img={"https://media.istockphoto.com/id/1137568153/vi/anh/hoa-anh-%C4%91%C3%A0o-v%C3%A0o-m%C3%B9a-xu%C3%A2n-seoul-%E1%BB%9F-h%C3%A0n-qu%E1%BB%91c.jpg?s=612x612&w=0&k=20&c=kLNxKZOjO56UO1XII7kMfMo_St9wAEq88bOv_UwEfWs="} title={t("sections.methodTitle", { ns: 'about' })}>
                <ul className="space-y-2">
                    {Array.isArray(methodList) && methodList.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                            <span className="text-blue-500 mt-1">✔️</span>
                            <span className="text-gray-700">{item}</span>
                        </li>
                    ))}
                </ul>
            </SectionWithImage>

            {/* Team */}
            <SectionWithImage img={"https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/shutterstock1020921643huge-1661704936584.jpg"} title={t("sections.teamTitle", { ns: 'about' })} content={t("sections.teamDesc", { ns: 'about' })} />

            {/* Contact */}
            <SectionWithImage img={"https://blog.masterkorean.vn/storage/photos/blog/images/thanh-pho-seoul-han-quoc-1_1721187618.jpg"} title={t("sections.contactTitle", { ns: 'about' })}>
                <p className="text-gray-700 leading-relaxed">
                    <Trans
                        i18nKey="sections.contactDesc"
                        ns="about"
                        components={{
                            contactLink: <Link to="/contact" className="text-blue-600 underline hover:text-blue-800 font-medium" />,
                        }}
                    />
                </p>
            </SectionWithImage>
        </div>
    );
}

function SectionWithImage({ img, title, content, children }) {
    return (
        <section className="bg-white shadow rounded-xl p-6 mb-8 grid md:grid-cols-2 gap-6 items-center">
            <img
                src={img}
                alt={title}
                className="rounded-xl shadow-md w-full h-auto max-h-64 object-cover"
            />
            <div>
                <h2 className="text-2xl font-semibold text-blue-600 mb-3">{title}</h2>
                {content && <p className="text-gray-700 leading-relaxed">{content}</p>}
                {children}
            </div>
        </section>
    );
}