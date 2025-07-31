import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import BannerContent from "../../components/Banner/BannerContent/BannerContent";
import BannerCarousel from "../../components/Banner/BannerCarousel/BannerCarousel";
import Services from "../../components/Services/Services";
import Trainer from "../../components/Trainer/Trainer";
import Courses from "../../components/Courses/Courses";
import Events from "../../components/Events/Events";
import Why from "../../components/Why/Why";
import WebForm from "../../components/WebForm/WebForm";
import Modules from "../../components/Modules/Modules";
import Footer from "../../components/Footer/Footer";
import Layout from "../../components/Layouts/Layout";
const Home = () => {
  return (
    <>
      <Layout>
        <BannerContent />
        <BannerCarousel />
        <Trainer />
        <Why />
        <Services />
        <Courses></Courses>
        <Events />
        <Modules />
        <WebForm />
      </Layout>
    </>
  );
};

export default Home;
