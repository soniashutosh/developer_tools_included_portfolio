export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export type navLinkItemProps = {
  id: string;
  title: string;
};

export const educations = [
  {
    id: "college",
    degree: "B.Tech (Computer Science)",
    institution: "Pune Institute of Technology",
    cgpa: "8.74",
    startTime: "2018 Aug",
    endTime: "2022 June",
  },
  {
    id: "school",
    degree: "Higher Secondary",
    institution: "Kendriya Vidyalaya Bantalab",
    percentage: "75.80",
    startTime: "2017 April",
    endTime: "2018 June",
  },
];

export type educationProps = {
  id: string;
  degree: string;
  institution: string;
  cgpa?: string;
  percentage?: string;
  startTime: string;
  endTime: string;
};

export const skills = [
  {
    id: "cpp",
    name: "C++",
  },
  {
    id: "java",
    name: "Java",
  },
  {
    id: "springBoot",
    name: "Spring Boot",
  },
  {
    id: "hibernate",
    name: "Hibernate",
  },
  {
    id: "mySql",
    name: "My SQL",
  },
  {
    id: "mongoDb",
    name: "Mongo DB",
  },
  {
    id: "dbms",
    name: "DBMS",
  },
  {
    id: "oops",
    name: "oops",
  },
  {
    id: "dsa",
    name: "DSA",
  },
  {
    id: "systemDesign",
    name: "System Design",
  },
  {
    id: "problemSolving",
    name: "Problem Solving",
  },
];

export type skillProps = {
  id: string;
  name: string;
};
