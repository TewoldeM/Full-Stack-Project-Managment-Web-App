"use client";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import Head from "next/head";
import { Code2, Instagram, LinkedinIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaTelegram } from "react-icons/fa";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Head>
        <title>Tewolde Marie | Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Tewolde Marie, a skilled developer."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </Head>

      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full bg-gray-800/80 backdrop-blur-md z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-400"><Code2/></h1>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <a
                href="#home"
                className="text-blue-300 hover:text-blue-400 transition"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-blue-300 hover:text-blue-400 transition"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-blue-300 hover:text-blue-400 transition"
              >
                Projects
              </a>
              <a
                href="#social"
                className="text-blue-300 hover:text-blue-400 transition"
              >
                Contact
              </a>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-blue-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden bg-gray-800"
          >
            <div className="flex flex-col space-y-4 p-4">
              <a
                href="#home"
                className="text-blue-300 hover:text-blue-400 transition"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-blue-300 hover:text-blue-400 transition"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-blue-300 hover:text-blue-400 transition"
              >
                Projects
              </a>
              <a
                href="#social"
                className="text-blue-300 hover:text-blue-400 transition"
              >
                Social
              </a>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-blue-900"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-blue-400 mb-4">
            Tewolde Marie
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-6">
            Full Stack Next.js Developer | AI Enthusiast
          </p>

          <motion.a
            href="#social"
            whileHover={{ scale: 1.1 }}
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition"
          >
            Connect with Me
          </motion.a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-bold text-blue-400 text-center mb-12"
          >
            About Me
          </motion.h2>
          <motion.p
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg text-blue-100 max-w-3xl mx-auto text-center"
          >
            I&apos;m a passionate full-stack developer with over 3 years of
            experience building dynamic and scalable web applications. I use{" "}
            <strong>Next.js</strong> both on the frontend and backend to deliver
            high-performance, full-stack solutions. My frontend development is
            powered by <strong>React</strong> and <strong>Tailwind CSS</strong>,
            while on the server side, I leverage{" "}
            <strong>Next.js API routes</strong>, <strong>Prisma ORM</strong>,
            and <strong>PostgreSQL</strong> to create robust and efficient
            data-driven systems. I&apos;m also expanding my skills in{" "}
            <strong>Python</strong>, especially for AI and backend automation.
            My goal is to craft seamless, responsive, and intuitive digital
            experiences with clean architecture and thoughtful design.
          </motion.p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-bold text-blue-400 text-center mb-12"
          >
            Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Hospital Appointment Fullstack Web App",
                desc: "A complete healthcare appointment system built with Next.js, Prisma, and PostgreSQL, allowing users to book, manage, and track appointments efficiently.",
                github:
                  "https://github.com/yourusername/hospital-appointment-app",
              },
              {
                title: "Learning managnment Fullstack Web App",
                desc: "A full-featured Learning Management System developed using Next.js, Tailwind CSS, and PostgreSQL. It supports user roles, course management, and interactive learning.",
                github:
                  "https://github.com/TewoldeM/LMS-full-stack-app-/security",
              },
              {
                title: "Expense-Income Tracker Fullstack Web App",
                desc: "A simple and elegant web app to track income and expenses in real-time and have dashboard with smooth UI, built with Next.js, React, and Tailwind CSS.",
                github: "https://github.com/TewoldeM/Expense-income-Tracker",
              },
              {
                title: "JJU ID & Mail Card Replacement Fullstack Web App",
                desc: "A custom-built solution for Jimma University to manage ID mail card replacements, built using a fullstack Next.js architecture.",
                github:
                  "https://github.com/TewoldeM/JJU-ID-Mail-Card-Replacement-Web-App",
              },
              {
                title: "VolunteerHub Fullstack Web App",
                desc: "A platform that connects volunteers(govermenttal and NGO) with organizations. Built with Next.js, Prisma, PostgreSQL, and custom authentication.",
                github: "https://github.com/TewoldeM/VolunteerHub",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/50 transition"
              >
                <h3 className="text-2xl font-semibold text-blue-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-blue-100">{project.desc}</p>
                <div className="mt-6">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Button
                      variant="outline"
                      className="text-blue-400 border-blue-400 hover:text-white hover:bg-blue-600"
                    >
                      View on GitHub
                    </Button>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section id="social" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-bold text-blue-400 text-center mb-12"
          >
            Connect with Me
          </motion.h2>
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center space-x-8"
          >
            <motion.a
              href="https://www.linkedin.com/in/tewolde-marie-2879b230b/"
              whileHover={{ scale: 1.2 }}
              className="text-blue-300 hover:text-blue-400 transition"
            >
              <LinkedinIcon className="w-10 h-10" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/theo12212025"
              whileHover={{ scale: 1.2 }}
              className="text-blue-300 hover:text-blue-400 transition"
            >
              <Instagram className="w-10 h-10" />
            </motion.a>
            <motion.a
              href="https://t.me/M_W_M_T_Y_A_L_S"
              whileHover={{ scale: 1.2 }}
              className="text-blue-300 hover:text-blue-400 transition"
            >
              {/* <Image
                src="/OIP (2).webp"
                width={30}
                height={30}
                alt="Telegram icon"
              /> */}
              <FaTelegram className="w-10 h-10"/>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-center">
        <p className="text-blue-300">
          © 2025 Tewolde Marie. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
