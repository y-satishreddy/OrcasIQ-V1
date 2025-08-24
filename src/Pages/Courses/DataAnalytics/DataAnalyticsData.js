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
<<<<<<< HEAD
import ActivitiesImage from "../../../assets/Data-Analytics/Activities/Activities.jpg";
import DataAnalyticsCertificate from "../../../assets/Data-Analytics/DataAnalyticsCertificate.jpg";
import HiringCompanies from "../../../assets/Data-Analytics/SalaryAndCompanies/HiringCompanies.png";
import DAGraph from "../../../assets/Data-Analytics/SalaryAndCompanies/DAGraph.png";
// ======================= Banner =======================
=======
import ActivitiesImage from "../../../assets/Data-Analytics/Activities/Activties.png";
import DataAnalyticsCertificate from "../../../assets/Data-Analytics/DataAnalyticsCertificate.jpg";
import HiringCompanies from "../../../assets/Data-Analytics/SalaryAndCompanies/HiringCompanies.png";
import DAGraph from "../../../assets/Data-Analytics/SalaryAndCompanies/DAGraph.png";
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
export const bannerData = {
  linkText: "Home",
  breadcrumbText: "Courses",
  heading:
<<<<<<< HEAD
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
=======
    "Become a Data Analytics Pro with Hands-On Projects and Real Business Insights.",
  description1:
    "Master Excel, SQL, Power BI, Python, and Data Visualization in our 5-month intensive training.",
  description2: "Includes Capstone Projects, Internship, and Placement Support",
  buttonText: "Enroll Now",
  calendarInfo: "Next batch starts on 5th September 2025",
  globeInfo: "Available in Online & Offline Modes",
  imageUrl: analyticsGirlImage, // Replace with actual image import
};
export const courseBenefitsData = {
  sectionTitle: "What You’ll Gain",
  sectionDescription:
    "Gain real-world skills and personalized support designed to boost your tech career. From hands-on projects and expert mentorship to job readiness training, this course equips you with everything you need to succeed in today’s competitive tech landscape.",
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f

  benefits: [
    {
      icon: portfolio,
      title: "Diverse Project Portfolio",
      description:
<<<<<<< HEAD
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
=======
        "Work on multiple industry projects to strengthen your practical coding skills.",
    },
    {
      icon: DoubtClearingSessions,
      title: "Live Doubt Clearing Sessions",
      description:
        "Get real-time support from mentors to resolve doubts and stay on track.",
    },
    {
      icon: programming,
      title: "Hands-on Coding Lab Experience",
      description:
        "Practice daily in live coding labs and reinforce concepts with guidance.",
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
    },
    {
      icon: IndustryOrientedCurriculum,
      title: "Industry-Oriented Curriculum",
      description:
<<<<<<< HEAD
        "Learn with a curriculum designed to match industry demands and future career needs.",
=======
        "Learn tools and skills aligned with current tech industry demands and roles.",
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
    },
    {
      icon: CourseCompletionCertificate,
      title: "Course Completion Certificate",
      description:
<<<<<<< HEAD
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
=======
        "Receive a verified certificate to showcase your achievement and learning.",
    },
    {
      icon: CapstoneProject,
      title: "Capstone Projects with Mentors",
      description:
        "Build guided final projects that simulate real business and tech challenges.",
    },
    {
      icon: JobTraining,
      title: "Real-World Job Training",
      description:
        "Simulate job environments with mock interviews, tasks, and career prep.",
    },
    {
      icon: RealWorldTraining,
      title: "Professional Networking Building",
      description:
        "Connect with peers, mentors, and industry experts for long-term growth.",
    },
  ],
};
export const toolsData = {
  sectionTitle: "Master Industry-Leading Data Tools",

  sectionDescription:
    "This Data Analytics program empowers you with hands-on experience in the most powerful tools used by data professionals today. From Excel and SQL to Python, Tableau, and Power BI, you’ll learn how to clean, analyze, visualize, and present data effectively. Our curriculum is built to mirror real-world analytics workflows, preparing you for data-driven roles across industries with confidence.",

  leftCards: [
    {
      icon: ExcelIcon, // Replace with actual import
      title: "Excel",
      description:
        "Master advanced Excel functions, pivot tables, dashboards, and business modeling.",
    },
    {
      icon: SQLIcon, // Replace with actual import
      title: "SQL",
      description:
        "Write optimized queries to extract, manipulate, and analyze data from databases.",
    },
    {
      icon: PowerBIIcon, // Replace with actual import
      title: "Power BI",
      description:
        "Create interactive dashboards and data visualizations for business insights.",
    },
    {
      icon: PythonIcon, // Replace with actual import
      title: "Python",
      description:
        "Use Python for data analysis, automation, visualization, and working with large datasets.",
    },
  ],

  rightInfo: {
    title: "Expand Your Toolkit with Advanced Libraries",

    description:
      "Gain hands-on experience with tools like Pandas, NumPy, Matplotlib, and Seaborn. These libraries are essential for data cleaning, analysis, and visualization.",
    points: [
      "Master Microsoft Excel and SQL to organize, filter, and extract meaningful insights from structured datasets with precision and speed.",

      "Use Power BI and Tableau to build dynamic dashboards, create compelling data stories, and communicate findings visually and effectively.",

      "Leverage Python with Pandas and NumPy to clean, analyze, and manipulate large datasets while automating repetitive data tasks.",

      "Apply core statistical techniques and build insightful visualizations using Matplotlib and Seaborn to uncover patterns and trends in data.",
    ],
  },
};

export const actvitiesData = {
  title: "Career-Oriented Training & Placement Support",
  items: [
    {
      icon: SoftSkills,
      title: "Soft Skills Sessions",
      description:
        "Enhance communication, teamwork, and leadership skills with our expert-led soft skills training sessions.",
    },

    {
      icon: ResumeBuilding,
      title: "Resume Building",
      description:
        "Craft a professional, job-winning resume that highlights your strengths and attracts top employers.",
    },
    {
      icon: LinkedInProfileBuilding,
      title: "LinkedIn Profile Building",
      description:
        "Learn how to build a standout LinkedIn profile that boosts your online presence and connects you with recruiters.",
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
    },
    {
      icon: MockInterviews,
      title: "Mock Interviews",
      description:
<<<<<<< HEAD
        "Attend mock interviews with data science professionals and get feedback.",
=======
        "Get real-time experience with mock interviews conducted by industry professionals to boost your confidence.",
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
    },
  ],
  image: ActivitiesImage,
  stats: [
    {
<<<<<<< HEAD
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
=======
      number: "10,000+",
      label: "Students Trained",
    },
    {
      number: "5,000+",
      label: "Successful Placements",
    },
  ],
};

export const certificateData = {
  image: DataAnalyticsCertificate,
  heading: "Why Choose Orcas IQ's Data Analytics Certification?",
  description:
    "Gain real-world skills, expert guidance, and career support to become a job-ready Data Analyst.",
  bulletPoints: [
    "Hands-on projects with real data",
    "Master ML, predictive modeling & analytics",
    "Skills applicable across industries",
    "Expert mentorship throughout the program",
    "Job prep: mock interviews & resume reviews",
    "Live sessions + lifetime access to resources",
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
    "Certification & placement support included",
  ],
};

<<<<<<< HEAD
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
=======
export const priceData = {
  title: "Learn Your Way",
  subtitle:
    "Choose between self-paced, live, or hybrid learning. Enjoy full access and flexibility with EMI options on every plan.",

  plans: [
    {
      title: "Self-Paced",
      description: "Watch at your own convenience, ideal for self-learners.",
      price: "12,999",
      buttonText: "Enroll Now",
      bgColor: "bg-blue-100",
      features: [
        "Lifetime content access",
        "Doubt clearing via chat",
        "Flexible learning schedule",
        "Certificate on completion",
        "EMI available",
      ],
    },
    {
      title: "Live Sessions",
      description: "Live online classes with experts, including recordings.",
      price: "49,999 / 27,999",
      buttonText: "Enroll Now",
      bgColor: "bg-green-100",
      features: [
        "Interactive live sessions",
        "Real-time project tasks",
        "Placement assistance",
        "Recordings + mentor support",
        "EMI available",
      ],
    },
    {
      title: "Hybrid Plus",
      description: "Get the best of both — live sessions & self-paced content.",
      price: "59,999 / 34,999",
      buttonText: "Enroll Now",
      bgColor: "bg-yellow-100",
      features: [
        "All Self-paced + Live benefits",
        "1-on-1 mentorship",
        "Personalized feedback",
        "Advanced career guidance",
        "EMI available",
      ],
    },
  ],
};
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
export const faqData = [
  {
    question: "What is the difference between Data Analytics and Data Science?",
    answer:
      "Data Analytics focuses on analyzing current and historical data to identify patterns and trends.\n\nData Science involves predictive modeling, machine learning, and artificial intelligence to make future predictions.",
  },
  {
<<<<<<< HEAD
    question: "What are the prerequisites for learning Data Analytics?",
    answer:
      "No technical background required — bring curiosity and commitment, and we’ll ensure you become career-ready.",
=======
    question:
      "What are the prerequisites for learning Data Analytics and Data Science?",
    answer:
      "Your passion for learning is all we need — bring your curiosity, and we’ll transform it into expertise, ensuring you emerge as a skilled and confident professional!",
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
  },
  {
    question: "Are your courses beginner-friendly?",
    answer:
<<<<<<< HEAD
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
=======
      "Yes, our courses are designed for all skill levels, from beginners with no prior experience to advanced learners looking to deepen their expertise.",
  },

  {
    question: "Are the courses self-paced or instructor-led?",
    answer:
      "We offer both options. You can choose self-paced courses for flexibility or instructor-led sessions for personalized guidance.",
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
  },
  {
    question: "Will I receive a certification upon completion?",
    answer:
<<<<<<< HEAD
      "Yes, after completing assignments and assessments, you’ll receive a recognized certification.",
=======
      "Yes, upon successfully completing an exam and all the assignments of the course, you will receive a certification that can boost your resume.",
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
  },
  {
    question: "How can I enroll in your courses?",
    answer:
<<<<<<< HEAD
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
=======
      "Simply visit our website, choose a course and click on enroll button. We will contact you. Or contact us at orcasiq@gmail.com or +91-6305829214.",
  },
  {
    question:
      "What careers can I pursue after learning Data Analytics or Data Science?",
    answer:
      "You can explore roles like Data Analyst, Data Scientist, Business Analyst, Machine Learning Engineer, Data Engineer, and more.",
  },
];

export const salaryAnalysisData = {
  heading: "Data Analytics Certification Benefits",
  description: `The global data analytics market is projected to grow from USD 30.74 billion in 2023 to USD 68.09 billion by 2032. Data analytics certifications equip professionals with critical skills, unlocking career opportunities in this fast-growing and high-demand field.`,
  items: [
    {
      title: "Annual Salary",
      image: DAGraph,
    },
    {
      title: "Hiring Companies",
      image: HiringCompanies,
    },
>>>>>>> 55415b2c875d1e4de78bde9d61b9f00fc8255c9f
  ],
};
