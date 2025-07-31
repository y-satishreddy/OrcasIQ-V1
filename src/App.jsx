import DataScience from "./Pages/Courses/DataScience/DataScience";
import "./App.css";
import Home from "./Pages/Home/Home";
import JavaFullstack from "./Pages/Courses/JavaFullstack/JavaFullstack.jsx";
import Devops from "./Pages/Courses/Devops/Devops.jsx";
import DigitalMarketing from "./Pages/Courses/DigitalMarketing/DigitalMarketing.jsx";
import { Routes, Route } from "react-router-dom";
import DataAnalytics from "./Pages/Courses/DataScience/DataScience";
import MainForm from "./Pages/MainForm/ManiForm.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/data-science" element={<DataScience />} />
        <Route path="/data-analytics" element={<DataAnalytics />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/devops" element={<Devops />} />
        <Route path="/javafullstack" element={<JavaFullstack />} />
        <Route path="/contact-form" element={<MainForm />} />
      </Routes>
    </>
  );
}
export default App;
