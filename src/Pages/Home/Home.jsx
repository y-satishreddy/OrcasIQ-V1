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
<<<<<<< HEAD

const Home = () => {
  return (
    <>
      <Navbar />

=======
const Home = () => {
  return (
    <>
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
      <Layout>
        <BannerContent />
        <BannerCarousel />
        <Trainer />
<<<<<<< HEAD
          
        <Why />
                
<section id="courses" className="scroll-offset">
          <Courses />
        </section>

       <section id="events" className="scroll-offset">
          <Events />
        </section>
      
<section id="services" className="scroll-offset">
          <Services />
        </section>
 

        <section id="modules" className="scroll-offset">
          <Modules />
        </section>

        <section id="contact" className="scroll-offset">
          <WebForm />
        </section>
=======
        <Why />
        <Services />
        <Courses></Courses>
        <Events />
        <Modules />
        <WebForm />
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
      </Layout>
    </>
  );
};

export default Home;
