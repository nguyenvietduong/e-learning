export default function LessonList({ lessons }) {
  return (
    <ul className="space-y-2">
      {lessons.map((lesson) => (
        <li key={lesson.id} className="border p-3 rounded shadow">
          <h3 className="text-lg font-semibold">{lesson.title}</h3>
        </li>
      ))}
    </ul>
  );
}
