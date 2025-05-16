import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function LessonList({ lessons }) {
  const { t } = useTranslation('lessons');

  return (
    <div className="mt-4 h-[630px]">
      <h2 className="text-4xl font-extrabold text-blue-700 mb-10 text-center">{t("title")}</h2>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {lessons.map((lesson) => (
          <Link
            key={lesson.slug}
            to={`/lessons/${lesson.slug}`}
            className="block bg-white p-6 rounded-xl shadow-md hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)] transition"
          >
            <h3 className="text-xl font-semibold text-blue-500 mb-2">
              📘 {t(`${lesson.key}.title`)}
            </h3>
            <p className="text-gray-600 text-sm">
              {t(`${lesson.key}.content`)}
            </p>
          </Link>
        ))}
      </section>
    </div>
  );
}