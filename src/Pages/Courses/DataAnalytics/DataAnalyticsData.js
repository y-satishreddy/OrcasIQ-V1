import girl from "../../../assets/girl.png";
import Google from "../../../assets/google.png";
import FormImage from "../../../assets/FormImage.jpg";
import analyticsGirlImage from "../../../assets/Data-Analytics/Banner.png";
import CapstoneProject from "../../../assets/Data-Analytics/Benefits/CapstoneProject.png";
import CourseCompletionCertificate from "../../../assets/Data-Analytics/Benefits/CourseCompletionCertificate.png";
import DoubtClearingSessions from "../../../assets/Data-Analytics/Benefits/DoubtClearingSessions.png";
import IndustryOrientedCurriculum from "../../../assets/Data-Analytics/Benefits/IndustryOrientedCurriculum.png";
import JobTraining from "../../../assets/Data-Analytics/Benefits/JobTraining.png";
import portfolio from "../../../assets/Data-Analytics/Benefits/portfolio.png";
import programming from "../../../assets/Data-Analytics/Benefits/programming.png";
import RealWorldTraining from "../../../assets/Data-Analytics/Benefits/RealWorldTraining.png";
import PythonIcon from "../../../assets/Data-Analytics/Tools/Python.png";
import SQLIcon from "../../../assets/Data-Analytics/Tools/SQL.png";
import ExcelIcon from "../../../assets/Data-Analytics/Tools/Excel.png";
import PowerBIIcon from "../../../assets/Data-Analytics/Tools/PowerBi.png";
import LinkedInProfileBuilding from "../../../assets/Data-Analytics/Activities/LinkedInProfileBuilding.png";
import MockInterviews from "../../../assets/Data-Analytics/Activities/MockInterviews.png";
import SoftSkills from "../../../assets/Data-Analytics/Activities/SoftSkills.png";
import ResumeBuilding from "../../../assets/Data-Analytics/Activities/ResumeBuilding.png";
import ActivitiesImage from "../../../assets/Data-Analytics/Activities/Activities.jpg";
import DataAnalyticsCertificate from "../../../assets/Data-Analytics/DataAnalyticsCertificate.jpg";
import HiringCompanies from "../../../assets/Data-Analytics/SalaryAndCompanies/HiringCompanies.png";
import DAGraph from "../../../assets/Data-Analytics/SalaryAndCompanies/DAGraph.png";
// ======================= Banner =======================
export const bannerData = {
  linkText: "Home",
  breadcrumbText: "Courses",
  heading:
    "Become a Data Analytics Professional with Hands-On Projects and Industry-Relevant Training.",
  description1:
    "Master Excel, SQL, Power BI, Python, and Data Visualization in our intensive program designed to prepare you for real-world roles.",
  description2: "Includes Practice Exercises, Capstone Projects, and Placement Support",
  buttonText: "Enroll Now",
  calendarInfo: "Coming Soon",
  globeInfo: "Available in Online Mode",
  imageUrl: analyticsGirlImage, // Replace with actual image import
};

// ======================= Benefits =======================
export const courseBenefitsData = {
  sectionTitle: "What You’ll Gain",
  sectionDescription:
    "Build practical skills with hands-on projects and tailored mentorship. From mastering analytics tools to gaining career-ready training, this course ensures you graduate job-ready with confidence.",

  benefits: [
    {
      icon: portfolio,
      title: "Diverse Project Portfolio",
      description:
        "Work on multiple projects across industries to strengthen your problem-solving and technical expertise.",
    },
    {
      icon: DoubtClearingSessions,
      title: "Practice Exercises",
      description:
        "Daily practice tasks to reinforce your concepts and boost your problem-solving speed.",
    },
    {
      icon: programming,
      title: "Doubt Clearing Sessions",
      description:
        "Get instant support from mentors in live doubt clearing sessions and stay on track.",
    },
    {
      icon: JobTraining,
      title: "Job Training",
      description:
        "Get job-readiness training including interview preparation, assignments, and tasks.",
    },
    {
      icon: IndustryOrientedCurriculum,
      title: "Industry-Oriented Curriculum",
      description:
        "Learn with a curriculum designed to match industry demands and future career needs.",
    },
    {
      icon: CourseCompletionCertificate,
      title: "Course Completion Certificate",
      description:
        "Earn a verified certificate upon completion to showcase your expertise and credibility.",
    },
    {
      icon: CapstoneProject,
      title: "Capstone Projects",
      description:
        "Work on mentor-guided final projects that simulate real business use cases.",
    },
    {
      icon: RealWorldTraining,
      title: "Networking Building",
      description:
        "Build a strong professional network with peers, mentors, and industry professionals.",
    },
  ],
};

// ======================= Tools =======================
export const toolsData = {
  sectionTitle: "End-to-End Training with Data Analytics Tools",
  sectionDescription:
    "Gain expertise in tools and frameworks that data analysts use daily. From core analytics platforms to advanced libraries, we ensure you are industry-ready.",

  // ✅ 4 Core Tools (Medium Detail)
  leftCards: [
    {
      icon: ExcelIcon,
      title: "Excel",
      description:
        "Learn advanced formulas, pivot tables, and dashboards to analyze and present data effectively.",
    },
    {
      icon: SQLIcon,
      title: "SQL",
      description:
        "Write efficient queries, join tables, and extract insights from structured databases.",
    },
    {
      icon: PowerBIIcon,
      title: "Power BI",
      description:
        "Create interactive dashboards and reports using DAX, Power Query, and data modeling.",
    },
    {
      icon: PythonIcon,
      title: "Python",
      description:
        "Use Python for automation, data cleaning, and visualization with essential libraries.",
    },
  ],

  // ✅ Right Side (Medium Detail, Text Only)
  rightInfo: {
    title: "Expand Your Toolkit with Advanced Libraries",
    description:
      "Work with modern tools and libraries to handle real-world business and data science challenges.",
    points: [
      "Design rich dashboards and data stories with Tableau.",
      "Apply statistical methods for analysis, forecasting, and hypothesis testing.",
      "Use NumPy for numerical computing and Pandas for dataset management.",
      "Visualize data clearly with Matplotlib and Seaborn.",
      "Build strong foundations in applied mathematics and statistics.",
      "Integrate multiple tools to deliver end-to-end analytics projects.",
    ],
  },
};
// ======================= Activities =======================

export const actvitiesData = {
  title: "Job Readiness Training & Placement Help",
  items: [
    {
      icon: SoftSkills,
      title: "Soft Skills for Data Roles",
      description:
        "Improve your communication, presentation, and teamwork skills to ace interviews.",
    },
    {
      icon: ResumeBuilding,
      title: "Resume & Portfolio Building",
      description:
        "Highlight your data science skills and projects with an expert-reviewed resume.",
    },
    {
      icon: LinkedInProfileBuilding,
      title: "LinkedIn Profile Optimization",
      description:
        "Craft a compelling LinkedIn presence that attracts hiring managers.",
    },
    {
      icon: MockInterviews,
      title: "Mock Interviews",
      description:
        "Attend mock interviews with data science professionals and get feedback.",
    },
  ],
  image: ActivitiesImage,
  stats: [
    {
      number: "12,000+",
      label: "Learners Trained",
    },
    {
      number: "6,000+",
      label: "Successful Career Transitions",
    },
  ],
};
// ======================= Certificate =======================
export const certificateData = {
  image: DataAnalyticsCertificate,
  heading: "Why Get Data Analytics Certification From Orcas IQ?",
  description:
    "Get practical experience, expert guidance, and career-focused training that prepares you for the most in-demand analytics roles.",
  bulletPoints: [
    "Hands-On Learning with real projects",
    "Master advanced analytics techniques",
    "Customizable skills across industries",
    "Boost efficiency with data-driven decisions",
    "Expert mentorship throughout the program",
    "Career growth with job-oriented training",
    "Certification & placement support included",
  ],
};

// ======================= Pricing =======================
export const priceData = {
  title: "Choose Your Learning Format",
  subtitle:
    "Pick the path that fits your style. Flexible plans with full access and EMI options.",
  plans: [
    {
      title: "Self-Paced",
      description: "Learn at your own speed with video modules and exercises.",
      price: "14,999",
      buttonText: "Enroll Now",
      bgColor: "bg-blue-100",
      features: [
        "Full course access",
        "Doubt clearing via chat",
        "Flexible learning hours",
        "Certificate on completion",
        "EMI available",
      ],
      emi: {
        available: true,
        options: [
          { duration: "3 months", amount: "₹5,000/month" },
          { duration: "6 months", amount: "₹2,500/month" },
        ],
      },
    },
    {
      title: "Live Sessions",
      description: "Instructor-led live training with project-based learning.",
      price: "54,999 / 29,999",
      buttonText: "Enroll Now",
      bgColor: "bg-green-100",
      features: [
        "Live classes with mentors",
        "Projects & assignments",
        "Placement support",
        "Recordings + chat support",
        "EMI available",
      ],
      emi: {
        available: true,
        options: [
          { duration: "3 months", amount: "₹10,000/month" },
          { duration: "6 months", amount: "₹5,000/month" },
        ],
      },
    },
    {
      title: "Hybrid Plus",
      description:
        "A blend of live mentorship and flexible self-paced learning.",
      price: "64,999 / 39,999",
      buttonText: "Enroll Now",
      bgColor: "bg-yellow-100",
      features: [
        "Self-paced + live access",
        "1-on-1 mentor calls",
        "Capstone reviews & feedback",
        "Interview prep sessions",
        "EMI available",
      ],
      emi: {
        available: true,
        options: [
          { duration: "3 months", amount: "₹13,333/month" },
          { duration: "6 months", amount: "₹6,666/month" },
        ],
      },
    },
  ],
};

// ======================= FAQs =======================
export const faqData = [
  {
    question: "What is the difference between Data Analytics and Data Science?",
    answer:
      "Data Analytics focuses on analyzing current and historical data to identify patterns and trends.\n\nData Science involves predictive modeling, machine learning, and artificial intelligence to make future predictions.",
  },
  {
    question: "What are the prerequisites for learning Data Analytics?",
    answer:
      "No technical background required — bring curiosity and commitment, and we’ll ensure you become career-ready.",
  },
  {
    question: "Are your courses beginner-friendly?",
    answer:
      "Yes, our courses are designed for all skill levels, from beginners with no prior experience to advanced learners.",
  },
  {
    question: "What careers can I pursue after learning Data Analytics?",
    answer:
      "You can explore roles like Data Analyst, Business Analyst, Machine Learning Engineer, and Data Engineer.",
  },
  {
    question: "Are the courses self-paced or instructor-led?",
    answer:
      "We offer both options. Choose self-paced for flexibility or live sessions for structured mentorship.",
  },
  {
    question: "Will I receive a certification upon completion?",
    answer:
      "Yes, after completing assignments and assessments, you’ll receive a recognized certification.",
  },
  {
    question: "How can I enroll in your courses?",
    answer:
      "Simply visit our website and click enroll, or contact us at orcasiq@gmail.com / +91-6305829214.",
  },
];

// ======================= Salary Analysis =======================
export const salaryAnalysisData = {
  heading: "Data Analytics Certification Benefits",
  description:
    "The global data analytics market is projected to grow from USD 30.74 billion in 2023 to USD 68.09 billion by 2032. Earning a Data Analytics certification equips professionals with essential skills and unlocks opportunities in this high-demand field.",
  items: [
    { title: "Annual Salary", image: DAGraph },
    { title: "Hiring Companies", image: HiringCompanies },
  ],
};
