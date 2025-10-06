'use client';

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaMedium, FaTwitter } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Portfolio() {
  const [lastDeployed, setLastDeployed] = useState("2025-10-04 15:45 IST");
  const [darkMode, setDarkMode] = useState(true);
  const [showProjects, setShowProjects] = useState(true);

  useEffect(() => {
    // Placeholder: could fetch from GitHub Actions API or deployment metadata
    setLastDeployed("2025-10-04 15:45 IST");
  }, []);

  return (
    <div className={`${darkMode ? "bg-slate-900 text-gray-200" : "bg-gray-100 text-gray-900"} min-h-screen font-sans transition-colors duration-500`}>
      {/* Navbar */}
      <nav className="flex flex-wrap justify-between items-center px-4 py-3 border-b border-slate-700">
        <h1 className="text-lg sm:text-xl font-bold text-cyan-400">Joel Dsouza</h1>
        <ul className="flex flex-wrap gap-4 text-gray-300 text-sm sm:text-base mt-2 sm:mt-0">
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>


      {/* Hero Section */}
      <section className="px-4 sm:px-4 sm:px-8 py-12 sm:py-16 sm:py-20 text-center">
        <p className="text-cyan-400 text-base sm:text-lg">&gt; whoami</p>
        <h2 className="text-2xl sm:text-4xl font-bold mt-2">Joel Dsouza — Software & DevOps Engineer ☁️</h2>
        <p className="mt-3 text-sm sm:text-lg text-gray-400">Automating Infrastructure | Scaling Kubernetes | Observing Systems</p>

        <div className="flex justify-center gap-4 sm:gap-6 mt-6 text-xl sm:text-2xl flex-wrap">
          {/* icons */}
        </div>

      </section>


      {/* Skills Section */}
      <section id="skills" className="px-4 sm:px-8 py-12 sm:py-16">
        <h3 className="text-2xl font-semibold mb-6">Core Skillset</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-slate-800 p-6 rounded-xl">
            <h4 className="font-bold mb-3">🚀 Cloud & Infra</h4>
            <div className="flex flex-wrap gap-2">
              {["Kubernetes", "Terraform", "AWS", "GCP"].map(skill => (
                <span key={skill} className="bg-slate-700 px-3 py-1 rounded-md text-sm">{skill}</span>
              ))}
            </div>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h4 className="font-bold mb-3">🔄 CI/CD & Monitoring</h4>
            <div className="flex flex-wrap gap-2">
              {["Jenkins", "GitHub Actions", "ELK Stack", "CloudWatch", "Signoz"].map(skill => (
                <span key={skill} className="bg-slate-700 px-3 py-1 rounded-md text-sm">{skill}</span>
              ))}
            </div>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h4 className="font-bold mb-3">💻 Backend Dev</h4>
            <div className="flex flex-wrap gap-2">
              {["Python", "FastAPI", "Django", "Node.js", "Express.js", "Celery"].map(skill => (
                <span key={skill} className="bg-slate-700 px-3 py-1 rounded-md text-sm">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section with Animation Toggle */}
      <section id="projects" className="px-4 sm:px-8 py-12 sm:py-16">
        <h3 className="text-2xl font-semibold mb-6 flex justify-between items-center">
          Projects

        </h3>
        <AnimatePresence>
          {showProjects && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >

              <div className="bg-slate-800 p-6 rounded-xl">
                <h4 className="font-bold text-lg">Deploying FastAPI with GitHub Actions and Cloud Run</h4>
                <p className="mt-2 text-gray-400">Simple CI/CD Setup with Github Actions + Infra Provision with Terraform</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {["FastAPI", "Terraform", "GCP Cloud Run", "Github Actions"].map(tag => (
                    <span key={tag} className="bg-slate-700 px-3 py-1 rounded-md text-sm">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-4 mt-4">
                  <a href="https://github.com/joeldsouza28/gcp-fastapi-cicd-pipeline" target="_blank" className="text-cyan-400">View Repo</a>
                </div>
              </div>
              <div className="bg-slate-800 p-6 rounded-xl">
                <h4 className="font-bold text-lg">One Minute ELK</h4>
                <p className="mt-2 text-gray-400">One-command ELK + Filebeat setup in Kubernetes</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {["Bash", "Helm", "K8s"].map(tag => (
                    <span key={tag} className="bg-slate-700 px-3 py-1 rounded-md text-sm">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-4 mt-4">
                  <a href="https://github.com/joeldsouza28/one-minute-elk" target="_blank" className="text-cyan-400">View Repo</a>
                  <a href="https://medium.com/aws-in-plain-english/one-minute-elk-stack-on-kubernetes-full-logging-setup-with-a-single-script-ba92aecb4379" target="_blank" className="text-cyan-400">Read on Medium</a>
                </div>
              </div>
              <div className="bg-slate-800 p-6 rounded-xl">
                <h4 className="font-bold text-lg">QubeMech</h4>
                <p className="mt-2 text-gray-400">Multi-cloud Kubernetes cluster orchestrator</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {["Python", "Terraform", "Azure", "GCP"].map(tag => (
                    <span key={tag} className="bg-slate-700 px-3 py-1 rounded-md text-sm">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-4 mt-4">
                  <a href="https://github.com/joeldsouza28/qubemech" target="_blank" className="text-cyan-400">View Repo</a>
                  <a href="https://medium.com/@joeldsouza28/how-i-attempted-to-build-a-multi-cloud-management-system-using-terraform-and-fastapi-8b737d4c8424" target="_blank" className="text-cyan-400">Read on Medium</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="px-4 sm:px-8 py-12 sm:py-16">
        <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-800 p-6 rounded-xl">
            <h4 className="font-bold">
              <a href="https://www.credly.com/badges/6785000d-6562-458d-89a4-98239b5558ab/public_url" target="_blank" className="text-cyan-400">Certified Kubernetes Administrator (CKA)</a>

            </h4>
            <p className="text-gray-400">CNCF | 2024</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-xl">
            <h4 className="font-bold"><a href="https://www.credly.com/badges/9386558a-4779-4ab8-bdf5-9374414f31cf/email" target="_blank" className="text-cyan-400">☁️ GCP Associate Cloud Engineer</a></h4>
            <p className="text-gray-400">Google Cloud | 2024</p>
          </div>
        </div>
      </section>

      {/* Blog Section with Animation */}
      <section id="blog" className="px-4 sm:px-8 py-12 sm:py-16">
        <h3 className="text-2xl font-semibold mb-6">Latest Articles</h3>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="bg-slate-800 p-6 rounded-xl">
              <h4 className="font-bold">Deploying FastAPI with GitHub Actions and Cloud Run</h4>
              <p className="text-gray-400">Oct 2025 | DevOps, GCP, FastAPI</p>
              <a href="http://medium.com/@joeldsouza28" target="_blank" className="text-cyan-400">Read on Medium</a>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 sm:px-8 py-12 sm:py-16">
        <h3 className="text-2xl font-semibold mb-6">Contact</h3>
        <ul className="space-y-2">
          <li>🐙 GitHub: <a href="https://github.com/joeldsouza28" className="text-cyan-400">joeldsouza28</a></li>
          <li>💼 LinkedIn: <a href="https://www.linkedin.com/in/joeldsouza28/" className="text-cyan-400">linkedin.com/in/joeldsouza28</a></li>
          <li>✍️ Medium: <a href="http://medium.com/@joeldsouza28" className="text-cyan-400">medium.com/@joeldsouza28</a></li>
          <li>✉️ Email: <span className="text-gray-400">joel.rdsouza@yahoo.in</span></li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-slate-700 text-gray-500 text-xs sm:text-sm px-2">
        © 2025 Joel Dsouza
      </footer>

    </div>
  );
}