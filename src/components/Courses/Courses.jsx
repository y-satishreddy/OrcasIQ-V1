import React from "react";
import CoursesIntro from "./CourseContent";
import CoursesCarousel from "./CourseCarousel";

const FeaturedCourses = () => {
  return (
    <section className=" flex flex-col gap-2">
      <CoursesIntro />
      
      <div className="px-[5%] pb-[2%]"><CoursesCarousel /></div>
    </section>
  );
};

export default FeaturedCourses;
