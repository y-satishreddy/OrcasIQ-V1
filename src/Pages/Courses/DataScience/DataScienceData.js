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
import ActivitiesImage from "../../../assets/Data-Analytics/Activities/Activities.jpg";
import DataAnalyticsCertificate from "../../../assets/Data-Science/Certificate/DataScience.png";
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
  calendarInfo: "Coming Soon",
  globeInfo: "Available in Online Mode",
  imageUrl: analyticsGirlImage,
};

export const courseBenefitsData = {
  sectionTitle: "What You’ll Gain",
  sectionDescription:
    "Master data science with practical skills, expert mentorship, and career-focused training. Build confidence to analyze data, create AI solutions, and step into industry roles with impact.",
  benefits: [
    {
      icon: portfolio,
      title: "Hands-On Data Projects",
      description:
        "Work on real-world datasets and case studies to build a strong, job-ready portfolio.",
    },
    {
      icon: DoubtClearingSessions,
      title: "Expert Mentorship Sessions",
      description:
        "Interact directly with mentors in live classes and get your doubts cleared instantly.",
    },
    {
      icon: programming,
      title: "Applied Python & SQL Practice",
      description:
        "Strengthen coding skills with structured exercises and daily problem-solving tasks.",
    },
    {
      icon: IndustryOrientedCurriculum,
      title: "Industry-Focused Curriculum",
      description:
        "Learn topics curated with input from data scientists and leading tech companies.",
    },
    {
      icon: CourseCompletionCertificate,
      title: "Recognized Certification",
      description:
        "Earn a completion certificate that validates your data science expertise globally.",
    },
    {
      icon: CapstoneProject,
      title: "End-to-End Capstone Project",
      description:
        "Design complete ML pipelines, from data cleaning to model deployment, step by step.",
    },
    {
      icon: JobTraining,
      title: "Career Readiness Training",
      description:
        "Prepare with resume workshops, mock interviews, and real hiring simulations.",
    },
    {
      icon: RealWorldTraining,
      title: "Professional Data Community",
      description:
        "Network with peers, mentors, and industry experts to unlock growth opportunities.",
    },
  ],
};
export const toolsData = {
  sectionTitle: "Master In-Demand Data Science Tools",
  sectionDescription:
    "This Data Science program trains you on the essential tools and frameworks used by professionals. From Excel and SQL to Python, Power BI, and advanced ML libraries, you will gain practical expertise to solve real-world data challenges across industries.",
  leftCards: [
    {
      icon: ExcelIcon,
      title: "Excel",
      description:
        "Use Excel to clean, transform, and analyze datasets while creating quick summaries and reports.",
    },
    {
      icon: SQLIcon,
      title: "SQL",
      description:
        "Query and manipulate structured data using SQL to extract insights and support business decisions.",
    },
    {
      icon: PowerBIIcon,
      title: "Power BI",
      description:
        "Design interactive dashboards and visual reports to communicate patterns and key performance metrics.",
    },
    {
      icon: PythonIcon,
      title: "Python",
      description:
        "Apply Python for analysis, visualization, and building machine learning and AI-driven applications.",
    },
  ],
  rightInfo: {
    title: "Core Frameworks Covered",
    description:
      "Along with core tools, you will gain hands-on experience with specialized libraries and frameworks. These resources help you explore data, build predictive models, and create professional data solutions.",
    points: [
      "Manipulate and process datasets with Pandas and NumPy, then validate results using core Statistics concepts.",
      "Visualize complex patterns through Matplotlib, Seaborn, and Plotly to create professional-grade visual stories.",
      "Develop machine learning workflows with Scikit-learn, applying both classical and advanced ML techniques.",
      "Train deep learning networks using TensorFlow and Keras for scalable AI-driven applications.",
      "Work interactively in Jupyter Notebook, applying Calculus and ML principles to optimize real-world solutions.",
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
