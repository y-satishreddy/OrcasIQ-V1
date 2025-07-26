import React from 'react'
import { bannerData,courseBenefitsData  } from "./DataAnalyticsData.js"// correct casing + name
 // Adjust the path as necessary
 import "./DataAnalytics.css"; // Assuming you have a CSS file for styling
import Banner from "../../../components/Course/Banner/Banner.jsx";
import CourseBenefits from "../../../components/Course/Benefits/Benefits.jsx"

const DataAnalytics = () => {
  return (
    <>
    <Banner data={bannerData}/>
     <CourseBenefits data={courseBenefitsData}/>
    </>
  )
}

export default DataAnalytics
