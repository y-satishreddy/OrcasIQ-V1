<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DataScience from "./Pages/Courses/DataScience/DataScience";
=======
import DataScience from "./Pages/Courses/DataScience/DataScience";
import "./App.css";
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
import Home from "./Pages/Home/Home";
import JavaFullstack from "./Pages/Courses/JavaFullstack/JavaFullstack.jsx";
import Devops from "./Pages/Courses/Devops/Devops.jsx";
import DigitalMarketing from "./Pages/Courses/DigitalMarketing/DigitalMarketing.jsx";
<<<<<<< HEAD
import DataAnalytics from "./Pages/Courses/DataAnalytics/DataAnalytics.jsx";
import CourseForm from "./Pages/CourseForm/CourseForm.jsx";
import ModuleForm from "./Pages/CourseForm/CourseForm.jsx";
import "./App.css";

// Scroll to top on route change
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth" // or "auto" for instant scroll
    });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <>
      <ScrollToTop />
=======
import { Routes, Route } from "react-router-dom";
import DataAnalytics from "./Pages/Courses/DataScience/DataScience";
import MainForm from "./Pages/MainForm/ManiForm.jsx";
function App() {
  return (
    <>
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/data-science" element={<DataScience />} />
        <Route path="/data-analytics" element={<DataAnalytics />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/devops" element={<Devops />} />
<<<<<<< HEAD
        <Route path="/full-stack-java" element={<JavaFullstack />} />
        <Route path="/contact-course-form" element={<CourseForm />} />
        <Route path="/module-contact-form" element={<ModuleForm />} />
=======
        <Route path="/javafullstack" element={<JavaFullstack />} />
        <Route path="/contact-form" element={<MainForm />} />
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
      </Routes>
    </>
  );
}
<<<<<<< HEAD

=======
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
export default App;
