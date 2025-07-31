import analyticsGirlImage from "../../../assets/Devops/Banner.png";
import CapstoneProject from "../../../assets/Devops/Benefits/CapstoneProject.png";
import CourseCompletionCertificate from "../../../assets/Devops/Benefits/CourseCompletionCertificate.png";
import DoubtClearingSessions from "../../../assets/Devops/Benefits/DoubtClearingSessions.png";
import IndustryOrientedCurriculum from "../../../assets/Devops/Benefits/IndustryOrientedCurriculum.png";
import JobTraining from "../../../assets/Devops/Benefits/JobTraining.png";
import portfolio from "../../../assets/Devops/Benefits/portfolio.png";
import programming from "../../../assets/Devops/Benefits/programming.png";
import RealWorldTraining from "../../../assets/Devops/Benefits/RealWorldTraining.png";
import PythonIcon from "../../../assets/Devops/Tools/Python.png";
import SQLIcon from "../../../assets/Devops/Tools/SQL.png";
import ExcelIcon from "../../../assets/Devops/Tools/Excel.png";
import PowerBIIcon from "../../../assets/Devops/Tools/PowerBi.png";
import LinkedInProfileBuilding from "../../../assets/Devops/Activities/LinkedInProfileBuilding.png";
import MockInterviews from "../../../assets/Devops/Activities/MockInterviews.png";
import SoftSkills from "../../../assets/Devops/Activities/SoftSkills.png";
import ResumeBuilding from "../../../assets/Devops/Activities/ResumeBuilding.png";
import ActivitiesImage from "../../../assets/Devops/Activities/Activties.png";
import DataAnalyticsCertificate from "../../../assets/Devops/DataAnalyticsCertificate.jpg";
import HiringCompanies from "../../../assets/Devops/SalaryAndCompanies/HiringCompanies.png";
import DAGraph from "../../../assets/Devops/SalaryAndCompanies/DAGraph.png";
export const bannerData = {
  linkText: "Home",
  breadcrumbText: "Courses",
  heading: "Become a Certified DevOps Engineer with Real Tools & Deployments.",
  description1:
    "Master Linux, Git, Docker, Jenkins, Kubernetes, AWS, and CI/CD in our industry-focused training.",
  description2:
    "Includes Capstone Projects, Internship Support, and Full Placement Assistance.",
  buttonText: "Enroll Now",
  calendarInfo: "Next batch starts on 15th September 2025",
  globeInfo: "Available in Online & Offline Modes",
  imageUrl: analyticsGirlImage,
};

export const courseBenefitsData = {
  sectionTitle: "What You’ll Gain",
  sectionDescription:
    "Hands-on experience with popular DevOps tools, industry workflows, and deployment strategies in real-world projects.",
  benefits: [
    {
      icon: portfolio,
      title: "End-to-End DevOps Projects",
      description:
        "Implement CI/CD pipelines, container orchestration, and cloud deployment in live projects.",
    },
    {
      icon: DoubtClearingSessions,
      title: "Live Doubt Clearing Sessions",
      description:
        "Get expert help with debugging, tool configurations, and deployment issues.",
    },
    {
      icon: programming,
      title: "Daily Tool-Based Practice",
      description:
        "Work with Jenkins, Docker, GitHub Actions, and more to simulate real DevOps environments.",
    },
    {
      icon: IndustryOrientedCurriculum,
      title: "Job-Focused DevOps Curriculum",
      description:
        "Master tools like Git, Docker, Kubernetes, Terraform, Jenkins, and AWS used in modern DevOps teams.",
    },
    {
      icon: CourseCompletionCertificate,
      title: "Completion Certificate",
      description:
        "Earn a certificate from Orcas IQ validating your expertise with modern DevOps tools and workflows.",
    },
    {
      icon: CapstoneProject,
      title: "Capstone Projects",
      description:
        "Automate full deployment cycles and manage infrastructure with IaC using tools like Terraform.",
    },
    {
      icon: JobTraining,
      title: "Placement Support & Training",
      description:
        "Prepare for DevOps interviews, system design, Linux commands, and shell scripting questions.",
    },
    {
      icon: RealWorldTraining,
      title: "Peer & Industry Networking",
      description:
        "Engage with DevOps professionals, alumni, and recruiters to accelerate your career path.",
    },
  ],
};
export const toolsData = {
  sectionTitle: "Technologies You’ll Master",
  sectionDescription:
    "Develop deep expertise in essential DevOps tools and practices adopted by leading IT organizations.",
  leftCards: [
    {
      icon: ExcelIcon,
      title: "Linux & Shell Scripting",
      description:
        "Manage server configurations and automate tasks efficiently.",
    },
    {
      icon: SQLIcon,
      title: "Docker & Kubernetes",
      description:
        "Containerize applications and orchestrate multi-container deployments with K8s.",
    },
    {
      icon: PowerBIIcon,
      title: "CI/CD with Jenkins",
      description:
        "Automate build, test, and deployment pipelines using Jenkins and GitHub Actions.",
    },
    {
      icon: PythonIcon,
      title: "AWS & Terraform",
      description:
        "Deploy and manage cloud infrastructure with Terraform scripts and AWS services.",
    },
  ],
  rightInfo: {
    title: "DevOps Workflow & Deployment",
    description:
      "Simulate enterprise DevOps cycles using Git, GitHub, Maven, Jenkins, Docker, and cloud platforms.",
    points: [
      "Version control with Git and GitHub.",
      "CI/CD automation using Jenkins and GitHub Actions.",
      "Infrastructure as Code using Terraform.",
      "Cloud deployment to AWS, Azure, and GCP.",
    ],
  },
};
export const actvitiesData = {
  title: "Career Readiness & Placement Training",
  items: [
    {
      icon: SoftSkills,
      title: "Soft Skills & Collaboration",
      description:
        "Communicate effectively with teams, manage incidents, and lead agile deployments.",
    },
    {
      icon: ResumeBuilding,
      title: "DevOps Resume & Portfolio Building",
      description:
        "Highlight cloud deployments, CI/CD pipelines, and infrastructure scripts in your resume and GitHub.",
    },
    {
      icon: LinkedInProfileBuilding,
      title: "LinkedIn Branding",
      description:
        "Build a DevOps-focused LinkedIn profile that attracts recruiters and hiring managers.",
    },
    {
      icon: MockInterviews,
      title: "Mock Interviews & Feedback",
      description:
        "Practice DevOps-specific scenarios like deployment issues, monitoring setup, and pipeline failures.",
    },
  ],
  image: ActivitiesImage,
  stats: [
    {
      number: "15,000+",
      label: "DevOps Engineers Trained",
    },
    {
      number: "6,000+",
      label: "Placed in Top Companies",
    },
  ],
};
export const certificateData = {
  image: DataAnalyticsCertificate,
  heading: "Why Choose Orcas IQ’s DevOps Certification?",
  description:
    "Get trained in DevOps tools and practices that companies demand. From automation to monitoring, be job-ready from day one.",
  bulletPoints: [
    "Linux, Docker, Kubernetes & AWS expertise",
    "Build & release automation using Jenkins",
    "IaC with Terraform & configuration management",
    "1-on-1 project reviews with DevOps engineers",
    "Mock interviews and resume building",
    "Hands-on deployment scenarios",
    "Industry-recognized certification & placement support",
  ],
};
export const priceData = {
  title: "Flexible Learning Options",
  subtitle:
    "Master DevOps your way — with live mentorship, recorded content, or a mix of both. EMI options available.",
  plans: [
    {
      title: "Self-Paced",
      description:
        "Learn at your own pace with full access to recorded content.",
      price: "14,999",
      buttonText: "Enroll Now",
      bgColor: "bg-blue-100",
      features: [
        "Recorded DevOps content & practice labs",
        "Doubt forum access & project feedback",
        "Certificate upon completion",
        "EMI available",
      ],
    },
    {
      title: "Live Sessions",
      description:
        "Interactive live classes with real-time tool setup and deployment practice.",
      price: "54,999 / 30,999",
      buttonText: "Enroll Now",
      bgColor: "bg-green-100",
      features: [
        "Live tool walkthroughs & project demos",
        "Daily DevOps exercises",
        "Placement support & mock interviews",
        "1-on-1 mentor interaction",
        "EMI available",
      ],
    },
    {
      title: "Hybrid Plus",
      description:
        "Access both recorded and live content with career assistance and certifications.",
      price: "64,999 / 39,999",
      buttonText: "Enroll Now",
      bgColor: "bg-yellow-100",
      features: [
        "All recorded + live access",
        "Capstone deployment project",
        "LinkedIn + Resume + GitHub support",
        "1-on-1 job mentoring & HR training",
        "EMI available",
      ],
    },
  ],
};
export const faqData = [
  {
    question: "What is DevOps and why is it important?",
    answer:
      "DevOps is the practice of combining software development and IT operations to deliver applications faster with better quality.",
  },
  {
    question: "Do I need coding experience for DevOps?",
    answer:
      "Basic scripting is helpful, but we teach you everything from shell scripting to pipeline automation step-by-step.",
  },
  {
    question: "Will I learn tools like Docker and Kubernetes?",
    answer:
      "Yes, our curriculum includes containerization, orchestration, CI/CD automation, and cloud deployments.",
  },
  {
    question: "Is placement assistance available?",
    answer:
      "Yes. We support with resume creation, mock interviews, and real job referrals.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes. You will receive an industry-recognized certificate after completing all projects and assessments.",
  },
  {
    question: "How do I enroll?",
    answer:
      "Click on the enroll button or contact us at orcasiq@gmail.com or +91-6305829214.",
  },
];
export const salaryAnalysisData = {
  heading: "DevOps Career Growth & Demand",
  description:
    "Companies are shifting to DevOps practices to speed up delivery. DevOps engineers are in high demand across industries.",
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
