import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";

import CourseRepository from "../../repositories/CourseRepository";
import CourseService from "../../services/CourseService";

const courseService = new CourseService(new CourseRepository());

export default function CourseDetail() {
    const { lessonSlug } = useParams();
    const { t } = useTranslation(["translation", "courses"]);

    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        courseService
            .getCourseDetail(lessonSlug)
            .then((data) => {
                setCourse(data);
                setError(null);
            })
            .catch(() => {
                setCourse(null);
                setError("notFoundCourse");
            })
            .finally(() => setLoading(false));
    }, [lessonSlug]);

    const breadcrumbItems = [
        { label: "Trang chủ", to: "/" },
        { label: "Khóa học", to: "/courses" },
        { label: course ? course.title : t("notFound", "Không tìm thấy"), to: "#" },
    ];

    if (loading) return <p>Loading...</p>;

    return (
        <div className="container mx-auto px-4 py-8">
            <Breadcrumb items={breadcrumbItems} />

            {error ? (
                <p className="text-red-500 mt-4">{t("notFoundCourse", "Không tìm thấy khóa học.")}</p>
            ) : (
                <>
                    <h2 className="text-3xl sm:text-3xl font-extrabold text-blue-700 mb-5 text-center">
                        Danh sách bài học {course.title}
                    </h2>
                    <p className="mb-4 text-gray-700 text-center">{course.description}</p>

                    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-fr">
                        {course.lessons && course.lessons.length > 0 && (
                            course.lessons.map(lesson => (
                                <Link
                                    key={lesson.id}
                                    to={`/courses/${lesson.slug}`}
                                    className="group flex flex-col bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)] transition h-full"
                                >
                                    <h3 className="text-lg font-semibold text-blue-500 mb-2">
                                        📘 {lesson.title}
                                    </h3>
                                    {/* Nếu muốn nút hoặc icon dưới cùng, có thể thêm ở đây */}
                                </Link>
                            ))
                        )}
                    </section>
                    
                    <Link to="/courses" className="mt-6 inline-block text-blue-600 underline">
                        ← {t("backToList", "Quay lại danh sách khóa học")}
                    </Link>
                </>
            )}
        </div>
    );
}
