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
      <nav className="flex justify-between items-center px-6 py-4 border-b border-slate-700">
        <h1 className="text-xl font-bold text-cyan-400">Joel Dsouza</h1>
        <ul className="flex gap-6">
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-6 px-3 py-1 rounded-md border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition"
        >
          {darkMode ? "Light" : "Dark"} Mode
        </button>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-20 text-center">
        <p className="text-cyan-400 text-lg">&gt; whoami</p>
        <h2 className="text-4xl font-bold mt-2">Joel Dsouza — DevOps & Cloud Engineer ☁️</h2>
        <p className="mt-3 text-lg text-gray-400">Automating Infrastructure | Scaling Kubernetes | Observing Systems</p>

        <div className="flex justify-center gap-6 mt-6 text-2xl">
          <a href="https://github.com/joeldsouza28" target="_blank"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/joeldsouza28/" target="_blank"><FaLinkedin /></a>
          <a href="http://medium.com/joeldsouza28" target="_blank"><FaMedium /></a>
          <a href="https://twitter.com/" target="_blank"><FaTwitter /></a>
        </div>

        <p className="mt-4 text-sm text-green-400">Last deployed: {lastDeployed} ✅ via GitHub Actions</p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-8 py-16">
        <h3 className="text-2xl font-semibold mb-6">Core Skillset</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-800 p-6 rounded-xl">
            <h4 className="font-bold mb-3">🚀 Cloud & Infra</h4>
            <div className="flex flex-wrap gap-2">
              {["Kubernetes (GKE, EKS)", "Terraform", "AWS Lambda", "GCP Cloud Function"].map(skill => (
                <span key={skill} className="bg-slate-700 px-3 py-1 rounded-md text-sm">{skill}</span>
              ))}
            </div>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h4 className="font-bold mb-3">🔄 CI/CD & Monitoring</h4>
            <div className="flex flex-wrap gap-2">
              {["Jenkins", "GitHub Actions", "SigNoz"].map(skill => (
                <span key={skill} className="bg-slate-700 px-3 py-1 rounded-md text-sm">{skill}</span>
              ))}
            </div>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h4 className="font-bold mb-3">💻 Backend Dev</h4>
            <div className="flex flex-wrap gap-2">
              {["Python", "FastAPI", "Django", "Node.js"].map(skill => (
                <span key={skill} className="bg-slate-700 px-3 py-1 rounded-md text-sm">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section with Animation Toggle */}
      <section id="projects" className="px-8 py-16">
        <h3 className="text-2xl font-semibold mb-6 flex justify-between items-center">
          Projects
          <button
            onClick={() => setShowProjects(!showProjects)}
            className="px-3 py-1 border border-cyan-400 text-cyan-400 rounded-md hover:bg-cyan-400 hover:text-slate-900 transition"
          >
            {showProjects ? "Hide" : "Show"}
          </button>
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
                <h4 className="font-bold text-lg">QubeMech</h4>
                <p className="mt-2 text-gray-400">Multi-cloud Kubernetes cluster orchestrator</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {["Python", "Terraform", "Azure", "GCP"].map(tag => (
                    <span key={tag} className="bg-slate-700 px-3 py-1 rounded-md text-sm">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-4 mt-4">
                  <a href="https://github.com/joeldsouza28/qubemech" target="_blank" className="text-cyan-400">View Repo</a>
                  <a href="http://medium.com/joeldsouza28" target="_blank" className="text-cyan-400">Read on Medium</a>
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
                  <a href="http://medium.com/joeldsouza28" target="_blank" className="text-cyan-400">Read on Medium</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="px-8 py-16">
        <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-800 p-6 rounded-xl">
            <h4 className="font-bold">🧠 Certified Kubernetes Administrator (CKA)</h4>
            <p className="text-gray-400">CNCF | 2024</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-xl">
            <h4 className="font-bold">☁️ GCP Associate Cloud Engineer</h4>
            <p className="text-gray-400">Google Cloud | 2024</p>
          </div>
        </div>
      </section>

      {/* Blog Section with Animation */}
      <section id="blog" className="px-8 py-16">
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
              <a href="http://medium.com/joeldsouza28" target="_blank" className="text-cyan-400">Read on Medium</a>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-8 py-16">
        <h3 className="text-2xl font-semibold mb-6">Contact</h3>
        <ul className="space-y-2">
          <li>🐙 GitHub: <a href="https://github.com/joeldsouza28" className="text-cyan-400">joeldsouza28</a></li>
          <li>💼 LinkedIn: <a href="https://www.linkedin.com/in/joeldsouza28/" className="text-cyan-400">linkedin.com/in/joeldsouza28</a></li>
          <li>✍️ Medium: <a href="http://medium.com/joeldsouza28" className="text-cyan-400">medium.com/joeldsouza28</a></li>
          <li>✉️ Email: <span className="text-gray-400">(your email here)</span></li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-slate-700 text-gray-500 text-sm">
        © 2025 Joel Dsouza | Built with ❤️ using Next.js + Tailwind | Deployed on Cloudflare
      </footer>
    </div>
  );
}