import frontend from '../assets/image/frontend.png';
import backend from '../assets/image/backend.png';
import tools from '../assets/image/tools.png';
import softskill from '../assets/image/softskill.png'
export const SKILLS = [
    {
        title: "Frontend",
        icon: frontend,
        skills: [
        { skill: "HTML5", percentage: "90%" },
        { skill: "CSS3 (Sass/SCSS)", percentage: "90%" },
        {skill: "JavaScript", percentage: "75%" },
        { skill: "React.js", percentage: "75%" },
        ],
        classname:'Frontend'
    },
    {
        title: "Backend",
        icon: backend,
        skills: [
        { skill: "Python", percentage: "70%" },
        { skill: "MySQL", percentage: "80%" },
        { skill: "TKinter", percentage: "60%" },
        { skill: "Django", percentage: "50%" },
        ],
        classname:'Backend'
    },
    {
        title: "Tools",
        icon: tools,
        skills: [
        { skill: "Git & GitHub", percentage: "75%" },
        { skill: "Visual Studio Code", percentage: "75%" },
        { skill: "PyCharm", percentage: "60%" },
        { skill: "Canvas", percentage: "70%" },
        { skill: "Power Point", percentage: "72%"}
        ],
        classname:'Tool'
    },
    {
        title: "Soft Skills",
        icon: softskill,
        skills: [
        { skill: "Problem-solving", percentage: "80%" },
        { skill: "Collaboration", percentage: "85%" },
        { skill: "Attention to Detail", percentage: "75%" },
        ],
        classname:'SoftSkill'
    }
];

export const industrial_EXPERIENCE = [
    {
    title: "Full Stack Developer Intern at Shiash Info Solutions Private Limited",
    date: "May 2024 - Present",
    responsibilities: [
        "Gain hands-on experience with Tkinter for creating graphical user interfaces and understand the principles of object-oriented programming in Python.",
        "Work closely with other developers, designers, and project managers to understand project requirements and deliver effective solutions.",
        "Learn database management with MySQL and gain familiarity with development on the Windows operating system.",
        "Understand and implement the connection between frontend and backend components to build cohesive and functional web applications."    
    ],
    },
    {
    title: "Frontend Certification at Frenzo Academy",
    date: "February 2024 - April 2024",
    responsibilities: [
        "Used for structuring web content, HTML5 introduces semantic elements that improve accessibility and SEO. Developers use it to define the structure of web pages.",
        "Responsible for styling and layout, CSS3 enables developers to customize the appearance of HTML elements.",
        "As a dynamic programming language, JavaScript adds interactivity to web pages. It's used for tasks ranging from form validation to creating complex animations and handling user interactions.",
        "A popular JavaScript library for building user interfaces, React.js facilitates the creation of reusable UI components. It promotes a declarative style of programming and efficiently manages component state through its virtual DOM",
    ],
    },
    {
    title: "Full Stack Intern at Gateway Software Solution",
    date: "May 2022 - June 2022",
    responsibilities: [
    "Assisted in the development of a new e-commerce platform, contributing to the implementation of frontend",
    "Gained hands-on experience with version control systems, specifically Git, in a collaborative development",
    ],
    },
];

export const Activitie = [
    {
        title: "Certification",
        skills: [
        { skill: 'FRONTEND DEVELOPMENT' },
        ],
        classname:'Frontend'
    },
    {
        title: "Area of Interest",
        skills: [
        { skill: "Full Stack Development" },
        { skill: "Wireless Communication" },
        ],
        classname:'Backend'
    },
    {
        title: "Coding",
        skills: [
        { skill: "I have solved 350+ problems in Python and SQL on HackerRank."}
        ],
        classname:'Tool'
    },
    {
        title: "Minor Projects",
        skills: [
        { skill: "Gemini Clone" },
        { skill: "Personal Portfolio" },
        { skill: "Food Cart" },
        ],
        classname:'SoftSkill'
    }
];

export const Project = [
    {
    title: "Battery Monitoring System",
    date: "May 2024 - April 2024",
    responsibilities: [
        "An AI-powered Battery Monitoring System in electric vehicles triggers voice alerts when the battery drops below 20%, ensuring timely recharges and enhancing safety.",
        "By continuously monitoring battery health, it prevents unexpected shutdowns and ensures efficient operation."   
    ],
    },
    {
    title: "Netflix Clone",
    date: "March 2024 - April 2024",
    responsibilities: [
        "A Netflix clone using React.js and the TMDB API fetches and displays movie data, providing an interactive, 70% user-friendly interface.",
        "This setup enhances user experience with dynamic content and intuitive navigation."
    ],
    },
    {
    title: "IoT Based Toxic Gas Detector",
    date: "Jan 2022 - March 2022",
    responsibilities: [
    "Transforming a fixed-range methane gas sensor into a portable device allows for 70% user-friendly detection of methane levels, triggering an alarm when thresholds are surpassed",
    "This adaptation broadens its application, facilitating monitoring in diverse environments.",
    ],
    },
];