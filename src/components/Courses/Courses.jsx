import React from "react";
import CoursesIntro from "./CourseContent";
import CoursesCarousel from "./CourseCarousel";

const FeaturedCourses = () => {
  return (
    <section className="px-[5%] py-[2%] flex flex-col gap-2">
      <CoursesIntro />
      <br />
      <CoursesCarousel />
    </section>
  );
};

export default FeaturedCourses;
