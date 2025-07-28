import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import BannerContent from "./components/Banner/BannerContent/BannerContent";
import BannerCarousel from "./components/Banner/BannerCarousel/BannerCarousel";
import Services from "./components/Services/Services";
import Trainer from "./components/Trainer/Trainer";
import Courses from "./components/Courses/Courses";
import Events from "./components/Events/Events";
import Why from "./components/Why/Why";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <BannerContent />
      <BannerCarousel />
      <Trainer />
      <Services />
      <Courses></Courses>
      <Events />
      <Why />
    </>
  );
}
export default App;
