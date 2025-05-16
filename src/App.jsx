import { Routes, Route } from "react-router-dom";

import "./App.css";
import "./TailwindCss.css";

import LoadingScreen from "./components/Loading/LoadingScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LessonPage from "./pages/Lesson/LessonPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/Auth/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import FallingEffect from "./components/FallingEffect";
import LessonDetail from "./pages/Lesson/LessonDetail";

export default function App() {
    return (
        <>
            <FallingEffect effect="cherryBlossoms" />
            <LoadingScreen />
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/lessons" element={<LessonPage />} />
                <Route path="/lessons/:lessonSlug" element={<LessonDetail />} />
                {/* <Route path="/lessons/:lessonSlug/:subLessonSlug" element={<SubLessonDetail />} /> */}

                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<NotFoundPage />} /> {/* ✅ route 404 */}
            </Routes>
            <Footer />
        </>
    );
};