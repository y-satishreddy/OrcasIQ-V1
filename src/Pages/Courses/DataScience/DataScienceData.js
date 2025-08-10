import analyticsGirlImage from "../../../assets/Data-Science/Banner.png";
import CapstoneProject from "../../../assets/Data-Science/Benefits/CapstoneProject.png";
import CourseCompletionCertificate from "../../../assets/Data-Science/Benefits/CourseCompletionCertificate.png";
import DoubtClearingSessions from "../../../assets/Data-Science/Benefits/DoubtClearingSessions.png";
import IndustryOrientedCurriculum from "../../../assets/Data-Science/Benefits/IndustryOrientedCurriculum.png";
import JobTraining from "../../../assets/Data-Science/Benefits/JobTraining.png";
import portfolio from "../../../assets/Data-Science/Benefits/portfolio.png";
import programming from "../../../assets/Data-Science/Benefits/programming.png";
import RealWorldTraining from "../../../assets/Data-Science/Benefits/RealWorldTraining.png";
import PythonIcon from "../../../assets/Data-Science/Tools/Python.png";
import SQLIcon from "../../../assets/Data-Science/Tools/SQL.png";
import ExcelIcon from "../../../assets/Data-Science/Tools/Excel.png";
import PowerBIIcon from "../../../assets/Data-Science/Tools/PowerBi.png";
import LinkedInProfileBuilding from "../../../assets/Data-Science/Activities/LinkedInProfileBuilding.png";
import MockInterviews from "../../../assets/Data-Science/Activities/MockInterviews.png";
import SoftSkills from "../../../assets/Data-Science/Activities/SoftSkills.png";
import ResumeBuilding from "../../../assets/Data-Science/Activities/ResumeBuilding.png";
import ActivitiesImage from "../../../assets/Data-Science/Activities/Activties.png";
import DataAnalyticsCertificate from "../../../assets/Data-Science/DataAnalyticsCertificate.jpg";
import HiringCompanies from "../../../assets/Data-Science/SalaryAndCompanies/HiringCompanies.png";
import DAGraph from "../../../assets/Data-Science/SalaryAndCompanies/DAGraph.png";

export const bannerData = {
  linkText: "Home",
  breadcrumbText: "Courses",
  heading: "Become a Data Science Expert with Practical AI and ML Projects.",
  description1:
    "Master Python, SQL, Machine Learning, Deep Learning, and Statistics in our 6-month hands-on training program.",
  description2:
    "Includes Capstone Projects, Research Applications, and Career Support.",
  buttonText: "Enroll Now",
  calendarInfo: "Next batch starts on 10th September 2025",
  globeInfo: "Available in Online & Offline Modes",
  imageUrl: analyticsGirlImage,
};

export const courseBenefitsData = {
  sectionTitle: "What You’ll Gain",
  sectionDescription:
    "Advance your career with expert guidance, cutting-edge tools, and real-world project experience in data science and AI. Gain confidence to lead data-driven solutions in any industry.",
  benefits: [
    {
      icon: portfolio,
      title: "Project-Based Learning",
      description:
        "Work on machine learning and AI-based projects to build a solid portfolio.",
    },
    {
      icon: DoubtClearingSessions,
      title: "Live Mentorship Sessions",
      description:
        "Get your queries answered in real-time with mentor-led doubt-clearing sessions.",
    },
    {
      icon: programming,
      title: "Applied Programming Practice",
      description:
        "Reinforce concepts with daily practice and hands-on coding tasks.",
    },
    {
      icon: IndustryOrientedCurriculum,
      title: "Industry-Aligned Syllabus",
      description:
        "Stay ahead with a curriculum designed in collaboration with industry experts.",
    },
    {
      icon: CourseCompletionCertificate,
      title: "Certification on Completion",
      description:
        "Receive a globally accepted certificate to validate your skills.",
    },
    {
      icon: CapstoneProject,
      title: "Guided Capstone Projects",
      description:
        "Solve real-world problems with end-to-end machine learning pipelines.",
    },
    {
      icon: JobTraining,
      title: "Career Preparation Modules",
      description:
        "Simulate real interview and job environments to prepare confidently.",
    },
    {
      icon: RealWorldTraining,
      title: "Professional Networking",
      description:
        "Connect with peers, mentors, and professionals for long-term career growth.",
    },
  ],
};

export const toolsData = {
  sectionTitle: "Master In-Demand Data Science Tools",
  sectionDescription:
    "This Data Science program equips you with the top tools and frameworks used by professionals, from Python and SQL to advanced ML libraries. Prepare to work on complex data challenges across industries.",
  leftCards: [
    {
      icon: ExcelIcon,
      title: "Excel",
      description:
        "Use Excel for data cleaning, exploratory analysis, and preprocessing.",
    },
    {
      icon: SQLIcon,
      title: "SQL",
      description:
        "Extract and manipulate structured data using powerful SQL queries.",
    },
    {
      icon: PowerBIIcon,
      title: "Power BI",
      description:
        "Create impactful dashboards to visualize and report complex datasets.",
    },
    {
      icon: PythonIcon,
      title: "Python",
      description:
        "Leverage Python for machine learning, deep learning, and data science automation.",
    },
  ],
  rightInfo: {
    title: "Core Libraries and ML Tools You’ll Use",
    description:
      "Gain practical experience using Scikit-learn, Pandas, NumPy, TensorFlow, and Seaborn. These tools help you analyze, model, and visualize data effectively.",
    points: [
      "Build predictive models using Scikit-learn and TensorFlow.",
      "Use Pandas and NumPy to process and transform large datasets efficiently.",
      "Visualize patterns with Seaborn and Matplotlib.",
      "Apply data storytelling techniques through dashboards and reports.",
    ],
  },
};

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

export const certificateData = {
  image: DataAnalyticsCertificate,
  heading: "Why Choose Orcas IQ’s Data Science Certification?",
  description:
    "Get trained by experts, work on AI/ML projects, and gain confidence to succeed in data roles across industries.",
  bulletPoints: [
    "ML & Deep Learning projects with real datasets",
    "End-to-end data pipeline building",
    "Live support from data scientists",
    "Industry-expert mentors & feedback",
    "Mock interviews & resume reviews",
    "Access to community & job board",
    "Certification upon successful completion",
  ],
};

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
    },
  ],
};

export const faqData = [
  {
    question: "What is Data Science and why should I learn it?",
    answer:
      "Data Science is the study of data using modern tools and techniques to find patterns, build models, and make data-driven decisions. It’s in high demand across industries.",
  },
  {
    question: "Do I need a coding background for this course?",
    answer:
      "No. We start from the basics of Python and guide you step-by-step to more advanced data science concepts.",
  },
  {
    question: "Is the course beginner-friendly?",
    answer:
      "Yes! The course is designed for freshers, working professionals, and anyone new to data science.",
  },
  {
    question: "Are there live or recorded classes?",
    answer:
      "You can choose from self-paced, live, or hybrid formats based on your preference.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes. Upon completing all assessments and projects, you’ll receive a certificate that enhances your resume.",
  },
  {
    question: "How can I enroll?",
    answer:
      "Click the Enroll button on the course page or contact us at orcasiq@gmail.com or +91-6305829214.",
  },
  {
    question: "What career paths can I pursue after this?",
    answer:
      "You can become a Data Scientist, Machine Learning Engineer, AI Specialist, Business Analyst, or Data Engineer.",
  },
];

export const salaryAnalysisData = {
  heading: "Data Science Career Scope",
  description:
    "The Data Science market is projected to reach over $250 billion by 2030. With rising demand for AI and automation, certified professionals can unlock top-tier roles and competitive salaries.",
  items: [
    {
      title: "Annual Salary Trends",
      image: DAGraph,
    },
    {
      title: "Top Hiring Companies",
      image: HiringCompanies,
    },
  ],
};
