import { useEffect, useState } from "react";
import { LessonService } from "../services/LessonService.js";
import LessonList from "../components/LessonList";
import Breadcrumb from "../components/Breadcrumb";

const lessonService = new LessonService();

export default function LessonPage() {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    lessonService.getLessons().then(setLessons);
  }, []);

  const breadcrumbItems = [
    { label: "Trang chủ", path: "/" },
    { label: "Danh sách bài học" },
  ];

  return (
    <div className="container mx-auto">
      <Breadcrumb items={breadcrumbItems} />
      <h2 className="text-2xl font-bold mb-4">Danh sách bài học</h2>
      <LessonList lessons={lessons} />
    </div>
  );
}
