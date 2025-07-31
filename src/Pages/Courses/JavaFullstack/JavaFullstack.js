import analyticsGirlImage from "../../../assets/JavaFullstack/Banner.png";
import CapstoneProject from "../../../assets/JavaFullstack/Benefits/CapstoneProject.png";
import CourseCompletionCertificate from "../../../assets/JavaFullstack/Benefits/CourseCompletionCertificate.png";
import DoubtClearingSessions from "../../../assets/JavaFullstack/Benefits/DoubtClearingSessions.png";
import IndustryOrientedCurriculum from "../../../assets/JavaFullstack/Benefits/IndustryOrientedCurriculum.png";
import JobTraining from "../../../assets/JavaFullstack/Benefits/JobTraining.png";
import portfolio from "../../../assets/JavaFullstack/Benefits/portfolio.png";
import programming from "../../../assets/JavaFullstack/Benefits/programming.png";
import RealWorldTraining from "../../../assets/JavaFullstack/Benefits/RealWorldTraining.png";
import PythonIcon from "../../../assets/JavaFullstack/Tools/Python.png";
import SQLIcon from "../../../assets/JavaFullstack/Tools/SQL.png";
import ExcelIcon from "../../../assets/JavaFullstack/Tools/Excel.png";
import PowerBIIcon from "../../../assets/JavaFullstack/Tools/PowerBi.png";
import LinkedInProfileBuilding from "../../../assets/JavaFullstack/Activities/LinkedInProfileBuilding.png";
import MockInterviews from "../../../assets/JavaFullstack/Activities/MockInterviews.png";
import SoftSkills from "../../../assets/JavaFullstack/Activities/SoftSkills.png";
import ResumeBuilding from "../../../assets/JavaFullstack/Activities/ResumeBuilding.png";
import ActivitiesImage from "../../../assets/JavaFullstack/Activities/Activties.png";
import DataAnalyticsCertificate from "../../../assets/JavaFullstack/DataAnalyticsCertificate.jpg";
import HiringCompanies from "../../../assets/JavaFullstack/SalaryAndCompanies/HiringCompanies.png";
import DAGraph from "../../../assets/JavaFullstack/SalaryAndCompanies/DAGraph.png";

export const bannerData = {
  linkText: "Home",
  breadcrumbText: "Courses",
  heading:
    "Become a Java Full Stack Developer with Real Projects and Job Training.",
  description1:
    "Learn HTML, CSS, JavaScript, Java, Spring Boot, MySQL, and more in our hands-on 6-month training.",
  description2:
    "Includes Capstone Projects, Internships, and Full Placement Assistance.",
  buttonText: "Enroll Now",
  calendarInfo: "Next batch starts on 15th September 2025",
  globeInfo: "Available in Online & Offline Modes",
  imageUrl: analyticsGirlImage,
};

export const courseBenefitsData = {
  sectionTitle: "What You’ll Gain",
  sectionDescription:
    "Master frontend and backend Java development with real projects, mentor guidance, and career-building support.",
  benefits: [
    {
      icon: portfolio,
      title: "Enterprise-Level Projects",
      description:
        "Build scalable web applications using Java and Spring Boot architecture.",
    },
    {
      icon: DoubtClearingSessions,
      title: "Live Doubt Clearing Sessions",
      description:
        "Get technical help instantly from industry mentors and experts.",
    },
    {
      icon: programming,
      title: "Daily Hands-On Coding",
      description:
        "Work through backend logics and frontend UI challenges with practical code-alongs.",
    },
    {
      icon: IndustryOrientedCurriculum,
      title: "In-Demand Java Stack Curriculum",
      description:
        "Cover core Java, JDBC, Spring Boot, REST APIs, and more to match today’s job roles.",
    },
    {
      icon: CourseCompletionCertificate,
      title: "Completion Certificate",
      description:
        "Showcase your achievement with a certificate from Orcas IQ recognized by hiring partners.",
    },
    {
      icon: CapstoneProject,
      title: "Capstone Projects",
      description:
        "Deliver end-to-end applications with frontend, backend, database, and RESTful APIs.",
    },
    {
      icon: JobTraining,
      title: "Placement Prep & Guidance",
      description:
        "Master Java interview rounds, system design, DSA, and HR preparation.",
    },
    {
      icon: RealWorldTraining,
      title: "Developer Networking & Community",
      description:
        "Get connected with working professionals, alumni, and companies for career growth.",
    },
  ],
};

export const toolsData = {
  sectionTitle: "Technologies You’ll Master",
  sectionDescription:
    "Gain complete expertise in Java-based full stack tools and frameworks used across enterprise-grade software applications.",
  leftCards: [
    {
      icon: ExcelIcon,
      title: "HTML, CSS, JS",
      description: "Build responsive interfaces and interactive web layouts.",
    },
    {
      icon: SQLIcon,
      title: "Java & JDBC",
      description:
        "Write clean object-oriented code and connect applications with databases using JDBC.",
    },
    {
      icon: PowerBIIcon,
      title: "Spring Boot",
      description:
        "Create scalable REST APIs and web services using Spring Boot and its ecosystem.",
    },
    {
      icon: PythonIcon,
      title: "MySQL & Hibernate",
      description:
        "Work with relational databases and ORM tools to persist backend data efficiently.",
    },
  ],
  rightInfo: {
    title: "Developer Tools & Workflows",
    description:
      "Get practical experience with Git, GitHub, IntelliJ IDEA, Maven, and deployment practices for Java projects.",
    points: [
      "Use Git and GitHub for version control and teamwork.",
      "Manage backend builds with Maven and project dependencies.",
      "Deploy Java apps to cloud platforms like Render or Railway.",
      "Learn Java design patterns, MVC, and secure authentication.",
    ],
  },
};

export const actvitiesData = {
  title: "Career Readiness & Placement Training",
  items: [
    {
      icon: SoftSkills,
      title: "Soft Skills & Communication",
      description:
        "Develop professional behavior, team communication, and problem-solving approaches.",
    },
    {
      icon: ResumeBuilding,
      title: "Java Resume & Portfolio Building",
      description:
        "Showcase real Java projects and backend logic in a compelling resume and GitHub repo.",
    },
    {
      icon: LinkedInProfileBuilding,
      title: "LinkedIn Branding",
      description:
        "Optimize your LinkedIn profile to target backend and full stack Java roles.",
    },
    {
      icon: MockInterviews,
      title: "Mock Interviews & Feedback",
      description:
        "Crack interviews with multiple practice sessions including backend problem solving.",
    },
  ],
  image: ActivitiesImage,
  stats: [
    {
      number: "18,000+",
      label: "Java Developers Trained",
    },
    {
      number: "8,000+",
      label: "Placed in MNCs & Startups",
    },
  ],
};

export const certificateData = {
  image: DataAnalyticsCertificate,
  heading: "Why Choose Orcas IQ's Java Full Stack Certification?",
  description:
    "Gain real-world Java skills, mentorship, and career support that prepares you for enterprise-grade web development roles.",
  bulletPoints: [
    "Core Java to Spring Boot expertise",
    "REST APIs, Hibernate, MySQL skills",
    "Live coding projects & cloud deployment",
    "1-on-1 mentor and project review",
    "Mock interviews + HR preparation",
    "Live classes & resource access",
    "Career-ready certificate & placement support",
  ],
};

export const priceData = {
  title: "Flexible Learning Options",
  subtitle:
    "Learn Java your way — pick from recorded sessions, live batches, or hybrid formats with EMI support.",
  plans: [
    {
      title: "Self-Paced",
      description: "Ideal for independent learners who want flexibility.",
      price: "14,999",
      buttonText: "Enroll Now",
      bgColor: "bg-blue-100",
      features: [
        "Java backend recorded content",
        "Code reviews & doubt forum access",
        "Project-based evaluation",
        "Certificate upon completion",
        "EMI available",
      ],
    },
    {
      title: "Live Sessions",
      description: "Live instructor sessions with real-time interaction.",
      price: "54,999 / 30,999",
      buttonText: "Enroll Now",
      bgColor: "bg-green-100",
      features: [
        "Live teaching sessions",
        "Daily backend coding tasks",
        "Placement help & mock interviews",
        "Doubt clearing + mentor hours",
        "EMI available",
      ],
    },
    {
      title: "Hybrid Plus",
      description: "Recorded + Live combo with complete career coaching.",
      price: "64,999 / 39,999",
      buttonText: "Enroll Now",
      bgColor: "bg-yellow-100",
      features: [
        "Access to full recorded + live content",
        "Capstone project on Spring Boot + MySQL",
        "Resume + GitHub + LinkedIn polishing",
        "1-on-1 job mentoring & HR training",
        "EMI available",
      ],
    },
  ],
};

export const faqData = [
  {
    question: "What is Java Full Stack Development?",
    answer:
      "It involves building complete applications using Java for the backend (Spring Boot, MySQL) and HTML/CSS/JS for the frontend.",
  },
  {
    question: "Do I need to know Java before joining?",
    answer:
      "No, we start from the basics of Java and gradually take you to advanced full stack development.",
  },
  {
    question: "Will I learn Spring Boot and REST APIs?",
    answer:
      "Yes, you’ll learn to build full APIs, controllers, and services using Spring Boot and REST principles.",
  },
  {
    question: "Can I get a job after this course?",
    answer:
      "Yes. If you complete the course and projects, we support you with placement assistance and mock interviews.",
  },
  {
    question: "Will I get a certificate?",
    answer:
      "Yes. After completing all course requirements, you’ll receive a certification from Orcas IQ.",
  },
  {
    question: "How can I enroll?",
    answer:
      "Click the enroll button on our website or contact us at orcasiq@gmail.com or +91-6305829214.",
  },
];

export const salaryAnalysisData = {
  heading: "Java Full Stack Developer Career Scope",
  description:
    "Java remains one of the most in-demand technologies. Skilled full stack Java developers are valued for their ability to build scalable enterprise-grade applications.",
  items: [
    {
      title: "Salary Trends",
      image: DAGraph,
    },
    {
      title: "Hiring Companies",
      image: HiringCompanies,
    },
  ],
};
