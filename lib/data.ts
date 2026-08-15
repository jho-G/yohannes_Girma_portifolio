import { Code2, Database, LayoutTemplate, Server, Wrench } from "lucide-react";

import {
  Css3Icon,
  DockerIcon,
  GitIcon,
  GithubIcon,
  Html5Icon,
  JavaIcon,
  JsIcon,
  LinkedinIcon,
  NextjsIcon,
  PostmanIcon,
  PythonIcon,
  ReactIcon,
  TailwindIcon,
  TelegramIcon,
} from "@/components/icons/brand-icons";
import type { NavLink, Project, SkillCategory, SocialLink } from "@/types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/jho-G", icon: GithubIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yohannes-girma-dev/",
    icon: LinkedinIcon,
  },
  { label: "Telegram", href: "https://t.me/jho_g", icon: TelegramIcon },
];

export const typingRoles = [
  "Django Developer",
  "Backend Developer",
  "API Builder",
];

export const skillCategories: SkillCategory[] = [
  {
    label: "Frontend",
    icon: LayoutTemplate,
    skills: [
      { name: "HTML", icon: Html5Icon },
      { name: "CSS", icon: Css3Icon },
      { name: "JavaScript", icon: JsIcon },
      { name: "React", icon: ReactIcon },
      { name: "Next.js", icon: NextjsIcon },
      { name: "Tailwind CSS", icon: TailwindIcon },
    ],
  },
  {
    label: "Backend",
    icon: Server,
    skills: [
      { name: "Python", icon: PythonIcon },
      { name: "Django", icon: Server },
      { name: "REST API", icon: Code2 },
      { name: "Java", icon: JavaIcon },
    ],
  },
  {
    label: "Database",
    icon: Database,
    skills: [
      { name: "PostgreSQL", icon: Database },
      { name: "MySQL", icon: Database },
    ],
  },
  {
    label: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git", icon: GitIcon },
      { name: "Docker", icon: DockerIcon },
      { name: "Postman", icon: PostmanIcon },
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Kuriftu Hospitality",
    description: "Hospitality management platform built using Django.",
    image: "/images/project1.png",
    githubUrl: "https://github.com/jho-G/Kuriftu-Hospitality",
    liveUrl: "https://kuriftu-hospitality-1.onrender.com",
    liveLabel: "Live Demo",
  },
  {
    title: "School Management System",
    description:
      "Django-based system for managing students, courses, and attendance.",
    image: "/images/project2.jpg",
    githubUrl: "https://github.com/jho-G/django_student_management_system",
    liveLabel: "Still Building",
  },
  {
    title: "Matcha Espresso",
    description:
      "Landing page for a specialty Japanese-Italian matcha-espresso beverage brand.",
    video: "/images/matcha-espresso.mp4",
    liveUrl: "https://melodious-zuccutto-05b208.netlify.app/",
    liveLabel: "Live Demo",
  },
  {
    title: "Thakur Perfume",
    description:
      "Landing page for a Jaipur-based luxury attar and eau de parfum brand.",
    video: "/images/thakur-perfume.mp4",
    liveUrl: "https://thakur-perfume.netlify.app/",
    liveLabel: "Live Demo",
  },
];
