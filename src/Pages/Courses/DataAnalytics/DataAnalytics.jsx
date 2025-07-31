import {
  actvitiesData,
  bannerData,
  certificateData,
  courseBenefitsData,
  faqData,
  priceData,
  salaryAnalysisData,
  toolsData,
} from "./DataAnalyticsData.js"; // correct casing + name
// Adjust the path as necessary
import Activities from "../../../components/Course/Activities/Activities.jsx"; // Adjust the path as necessary
import Banner from "../../../components/Course/Banner/Banner.jsx";
import CourseBenefits from "../../../components/Course/Benefits/Benefits.jsx";
import Certificate from "../../../components/Course/Certificate/Certificate.jsx";
import Faq from "../../../components/Course/FAQ/Faq.jsx";
import PriceSection from "../../../components/Course/Price/Price.jsx";
import SalaryAnalysis from "../../../components/Course/SalaryAnalysis/SalaryAnalysis.jsx"; // Adjust the path as necessary
import Tools from "../../../components/Course/Tools/Tools.jsx";
import "./DataAnalytics.css"; // Assuming you have a CSS file for styling
import Layout from "../../../components/Layouts/Layout.jsx";
const DataAnalytics = () => {
  return (
    <>
      <Layout>
        <Banner data={bannerData} />
        <CourseBenefits data={courseBenefitsData} />
        <Tools data={toolsData} />
        <Activities data={actvitiesData} />
        <PriceSection data={priceData} />
        <Certificate data={certificateData} />
        <SalaryAnalysis data={salaryAnalysisData} />
        <Faq data={faqData} />
      </Layout>
    </>
  );
};

export default DataAnalytics;
