import { useTranslation } from "react-i18next";
import { useParams, Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';

import HangulChart from "./HangulChart";
import KoreanHistory from "./KoreanHistory";

export default function LessonDetail() {
    const { lessonSlug } = useParams();
    const { t } = useTranslation(['translation', 'lessons']);

    const lessonTitle = t(`lesson.${lessonSlug}.title`, { ns: 'lessons' });
    const lessonContent = t(`lesson.${lessonSlug}.content`, { ns: 'lessons' });

    const isLessonFound = lessonTitle !== `${lessonSlug}.title`;

    const breadcrumbItems = [
        { label: t("nav.home"), to: '/' },
        { label: t("nav.lesson"), to: '/lessons' },
        { label: isLessonFound ? lessonTitle : t("notFound"), to: '#' },
    ];

    const lessonComponents = {
        koreanHistory: KoreanHistory,
        hangul: HangulChart
    };

    const SpecificLessonComponent = lessonComponents[lessonSlug];

    return (
        <div className="container mx-auto px-4 py-8">
            <Breadcrumb items={breadcrumbItems} />

            {!isLessonFound ? (
                <p className="text-red-500 mt-4">
                    {t("notFoundLesson", "Không tìm thấy bài học.")}
                </p>
            ) : (
                <>
                    <h1 className="text-2xl font-bold mb-4">{lessonTitle}</h1>

                    {SpecificLessonComponent ? (
                        <SpecificLessonComponent />
                    ) : (
                        <p>{lessonContent}</p>
                    )}

                    <Link to="/lessons" className="mt-6 inline-block text-blue-600 underline">
                        ← {t("backToList", "Quay lại danh sách bài học")}
                    </Link>
                </>
            )}
        </div>
    );
}