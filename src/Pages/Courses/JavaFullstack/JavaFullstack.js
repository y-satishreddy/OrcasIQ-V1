import analyticsGirlImage from "../../../assets/JavaFullstack/BannerFinal.png";
import CapstoneProject from "../../../assets/JavaFullstack/Benefits/CapstoneProject.png";
import CourseCompletionCertificate from "../../../assets/JavaFullstack/Benefits/CourseCompletionCertificate.png";
import DoubtClearingSessions from "../../../assets/JavaFullstack/Benefits/DoubtClearingSessions.png";
import IndustryOrientedCurriculum from "../../../assets/JavaFullstack/Benefits/IndustryOrientedCurriculum.png";
import JobTraining from "../../../assets/JavaFullstack/Benefits/JobTraining.png";
import portfolio from "../../../assets/JavaFullstack/Benefits/portfolio.png";
import programming from "../../../assets/JavaFullstack/Benefits/programming.png";
import RealWorldTraining from "../../../assets/JavaFullstack/Benefits/RealWorldTraining.png";
import Java from "../../../assets/JavaFullstack/Tools/Java.png";
import SQLIcon from "../../../assets/JavaFullstack/Tools/SQL.png";
import HTMLCSSJS from "../../../assets/JavaFullstack/Tools/HtmlCSSJS.png";
import Springboot from "../../../assets/JavaFullstack/Tools/Springboot.png";
import LinkedInProfileBuilding from "../../../assets/JavaFullstack/Activities/LinkedInProfileBuilding.png";
import MockInterviews from "../../../assets/JavaFullstack/Activities/MockInterviews.png";
import SoftSkills from "../../../assets/JavaFullstack/Activities/SoftSkills.png";
import ResumeBuilding from "../../../assets/JavaFullstack/Activities/ResumeBuilding.png";
import ActivitiesImage from "../../../assets/JavaFullstack/Activities/Activities.jpg";
import DataAnalyticsCertificate from "../../../assets/JavaFullstack/DataAnalyticsCertificate.jpg";
import HiringCompanies from "../../../assets/JavaFullstack/SalaryAndCompanies/HiringCompanies.png";
import DAGraph from "../../../assets/JavaFullstack/SalaryAndCompanies/DAGraph.png";
// ======================= Banner =======================
export const bannerData = {
  linkText: "Home",
  breadcrumbText: "Courses",
  heading:
    "Become a Full Stack Java Developer with Industry-Relevant Training and Real Projects.",
  description1:
    "Master Java, Spring Boot, MySQL, HTML, CSS, and JavaScript in a job-focused program designed to make you career-ready.",
  description2: "Includes Capstone Projects, Practice Tasks, and Placement Support.",
  buttonText: "Enroll Now",
  calendarInfo: "Coming Soon",
  globeInfo: "Available in Online Mode",
  imageUrl: analyticsGirlImage, // Replace with actual image import
};

// ======================= Benefits =======================
export const courseBenefitsData = {
  sectionTitle: "What You’ll Gain",
  sectionDescription:
    "Build in-demand full stack skills through real-world projects, expert mentorship, and career readiness training. From frontend to backend, this program ensures you graduate with confidence.",

  benefits: [
    {
      icon: portfolio,
      title: "Diverse Project Portfolio",
      description:
        "Work on end-to-end web applications to sharpen your coding and problem-solving expertise.",
    },
    {
      icon: DoubtClearingSessions,
      title: "Daily Coding Practice",
      description:
        "Reinforce concepts with structured coding exercises and mentor-led problem solving.",
    },
    {
      icon: programming,
      title: "Live Doubt Clearing",
      description:
        "Get real-time help from industry mentors through live doubt clearing sessions.",
    },
    {
      icon: JobTraining,
      title: "Job Readiness Training",
      description:
        "Prepare with resume building, interview prep, and career-focused assignments.",
    },
    {
      icon: IndustryOrientedCurriculum,
      title: "Industry-Oriented Curriculum",
      description:
        "Learn Java, JDBC, Spring Boot, REST APIs, MySQL, and more aligned with industry needs.",
    },
    {
      icon: CourseCompletionCertificate,
      title: "Completion Certificate",
      description:
        "Receive a verified certificate to showcase your expertise to employers.",
    },
    {
      icon: CapstoneProject,
      title: "Capstone Projects",
      description:
        "Apply your learning in mentor-guided projects that simulate workplace challenges.",
    },
    {
      icon: RealWorldTraining,
      title: "Professional Networking",
      description:
        "Connect with peers, alumni, and working professionals to grow your career opportunities.",
    },
  ],
};

// ======================= Tools =======================
export const toolsData = {
  sectionTitle: "End-to-End Training with Java Full Stack Tools",
  sectionDescription:
    "Gain mastery over the complete Java Full Stack workflow. Learn React.js for modern UIs and build powerful backend services using Java, Spring Boot, Hibernate, and MySQL. Get hands-on with tools that make you industry-ready.",

  leftCards: [
    {
      icon: HTMLCSSJS,
      title: "HTML, CSS & JS",
      description:
        "Learn the foundation of web development by building responsive layouts, styling them with CSS, and adding interactivity using JavaScript.",
    },
    {
      icon: Java,
      title: "Java & JDBC",
      description:
        "Master object-oriented programming in Java and use JDBC to integrate applications with relational databases for seamless data handling.",
    },
    {
      icon: Springboot,
      title: "Spring Boot",
      description:
        "Develop scalable and production-ready backend applications. Build REST APIs, manage security, and deliver enterprise-grade solutions.",
    },
    {
      icon: SQLIcon,
      title: "MySQL & Hibernate",
      description:
        "Work with relational databases using MySQL and apply Hibernate ORM for efficient data persistence between Java objects and tables.",
    },
  ],

  rightInfo: {
    title: "Developer Tools & Workflows",
    description:
      "A Java Full Stack Developer works with both frontend and backend tools. Gain practical exposure to workflows that ensure collaboration, testing, and deployment.",

    points: [
      "React.js for modern frontend development.",
      "NPM for managing frontend dependencies.",
      "Git & GitHub for version control and teamwork.",
      "Maven for builds and dependency management.",
      "JUnit & Postman for testing and debugging.",
      "Docker for containerization and deployment.",
      "Cloud platforms like AWS/Azure for hosting apps.",
      "Agile workflows with Jira/Trello & CI/CD pipelines.",
    ],
  },
};

// ======================= Activities =======================
export const actvitiesData = {
  title: "Career Readiness & Placement Training",
  items: [
    {
      icon: SoftSkills,
      title: "Soft Skills & Communication",
      description:
        "Improve teamwork, communication, and problem-solving skills for job success.",
    },
    {
      icon: ResumeBuilding,
      title: "Resume & Portfolio Building",
      description:
        "Highlight your Java projects and full stack expertise in a polished resume.",
    },
    {
      icon: LinkedInProfileBuilding,
      title: "LinkedIn Profile Optimization",
      description:
        "Create a strong LinkedIn presence that attracts recruiters.",
    },
    {
      icon: MockInterviews,
      title: "Mock Interviews",
      description:
        "Practice interviews with technical and HR rounds to boost confidence.",
    },
  ],
  image: ActivitiesImage,
  stats: [
    { number: "15,000+", label: "Java Developers Trained" },
    { number: "7,000+", label: "Successful Placements" },
  ],
};

// ======================= Certificate =======================
export const certificateData = {
  image: DataAnalyticsCertificate,
  heading: "Why Choose Orcas IQ’s Full Stack Java Certification?",
  description:
    "Gain practical experience, mentor guidance, and career-focused support to become a skilled full stack Java developer.",
  bulletPoints: [
    "Master Java, Spring Boot, MySQL & REST APIs",
    "Hands-on coding & capstone projects",
    "Real-world deployment & version control",
    "1-on-1 mentorship and guidance",
    "Mock interviews and placement prep",
    "Live + recorded learning options",
    "Certification with placement support",
  ],
};

// ======================= Pricing =======================
export const priceData = {
  title: "Choose Your Learning Format",
  subtitle:
    "Flexible options to match your learning style, with full access, mentorship, and EMI support.",
  plans: [
    {
      title: "Self-Paced",
      description: "Learn independently with recorded lessons and exercises.",
      price: "14,999",
      buttonText: "Enroll Now",
      bgColor: "bg-blue-100",
      features: [
        "Complete recorded content",
        "Doubt forum access",
        "Capstone evaluation",
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
      description: "Live mentor-led training with structured coding practice.",
      price: "54,999 / 29,999",
      buttonText: "Enroll Now",
      bgColor: "bg-green-100",
      features: [
        "Daily live coding sessions",
        "Projects & assignments",
        "Placement guidance",
        "Doubt clearing with mentors",
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
      description: "Blend of live mentorship and flexible self-paced content.",
      price: "64,999 / 39,999",
      buttonText: "Enroll Now",
      bgColor: "bg-yellow-100",
      features: [
        "Access to both recorded + live",
        "Capstone reviews & feedback",
        "Resume & LinkedIn support",
        "1-on-1 career mentoring",
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
    question: "What is Java Full Stack Development?",
    answer:
      "It involves building complete applications using Java for backend (Spring Boot, MySQL) and HTML, CSS, JavaScript for frontend.",
  },
  {
    question: "Do I need prior coding knowledge?",
    answer:
      "No, we start with the basics of Java and gradually move to advanced full stack concepts.",
  },
  {
    question: "Are the courses beginner-friendly?",
    answer:
      "Yes, the program is designed for all levels, from absolute beginners to upskilling developers.",
  },
  {
    question: "What careers can I pursue after this course?",
    answer:
      "You can apply for roles like Java Developer, Backend Engineer, and Full Stack Developer.",
  },
  {
    question: "Are sessions live or recorded?",
    answer:
      "We offer self-paced, live instructor-led, and hybrid options to fit your style.",
  },
  {
    question: "Will I get a certificate?",
    answer:
      "Yes. On completing projects and assessments, you’ll receive a recognized certification.",
  },
  {
    question: "How can I enroll?",
    answer:
      "Click the enroll button on our website or contact us at orcasiq@gmail.com / +91-6305829214.",
  },
];

// ======================= Salary Analysis =======================
export const salaryAnalysisData = {
  heading: "Full Stack Java Developer Career Scope",
  description:
    "Full Stack Java Developers are in high demand for their ability to handle both frontend and backend development. This certification helps you unlock top opportunities in the software industry.",
  items: [
    { title: "Annual Salary", image: DAGraph },
    { title: "Hiring Companies", image: HiringCompanies },
  ],
};
