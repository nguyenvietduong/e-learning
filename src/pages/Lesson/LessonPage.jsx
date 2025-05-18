// src/pages/lessons/LessonPage.jsx
import { useTranslation } from "react-i18next";

import { lessons } from '../../data/lessons';
import Breadcrumb from '../../components/Breadcrumb';
import LessonList from '../../components/Lesson/LessonList';

export default function LessonPage() {
    const { t } = useTranslation();

    const breadcrumbItems = [
        { label: "Trang chủ", to: '/' },
        { label: "Bài học", to: '/lessons' },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <Breadcrumb items={breadcrumbItems} />
            <LessonList lessons={lessons} />
        </div>
    );
}