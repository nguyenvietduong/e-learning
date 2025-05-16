import { Routes, Route } from "react-router-dom";

import "./App.css";
import "./TailwindCss.css";
import LoadingScreen from "./components/LoadingScreen";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LessonPage from "./pages/LessonPage";

function App() {
  return (
    <>
      <LoadingScreen />
      <Header />
      <Routes>
        <Route path="" element={<LessonPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
