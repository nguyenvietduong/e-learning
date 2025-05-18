import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import CourseRepository from "../../repositories/CourseRepository";
import CourseService from "../../services/CourseService";

const courseService = new CourseService(new CourseRepository(axios));

export default function CourseList() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        courseService.listCourses().then(setCourses);
    }, []);

    return (
        <div>
            <h2 className="text-3xl sm:text-3xl font-extrabold text-blue-700 mb-10 text-center">
                Danh sách bài học
            </h2>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-fr">
                {courses.map(course => (
                    <Link
                        key={course.id}
                        to={`/courses/${course.slug}`}
                        className="group flex flex-col bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)] transition h-full"
                    >
                        <h3 className="text-lg font-semibold text-blue-500 mb-2">
                            📘 {course.title}
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base flex-grow">
                            {course.language?.name}
                        </p>
                        {/* Nếu muốn nút hoặc icon dưới cùng, có thể thêm ở đây */}
                    </Link>
                ))}
            </section>
        </div>
    );
}
