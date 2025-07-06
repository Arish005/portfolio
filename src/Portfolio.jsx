import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <canvas id="particles" className="w-full h-full" />
      </div>

      <main className="relative z-10 px-6 md:px-20 pt-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <img
            src="/arish.jpg"
            alt="Arish K S"
            className="mx-auto rounded-full w-40 h-40 object-cover border-4 border-white shadow-xl"
          />
          <h1 className="text-5xl font-extrabold mt-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
            Arish K S
          </h1>
          <p className="text-xl text-gray-400 mt-2 animate-pulse">
            AI & Data Science Enthusiast 🚀
          </p>
          <div className="mt-4 flex justify-center gap-6">
            <a href="mailto:arishsmart2005@gmail.com"><Mail className="w-6 h-6 hover:text-blue-500" /></a>
            <a href="https://github.com/Arish005" target="_blank"><Github className="w-6 h-6 hover:text-gray-300" /></a>
            <a href="https://linkedin.com/in/arish-k-s-b1217a26a" target="_blank"><Linkedin className="w-6 h-6 hover:text-blue-400" /></a>
          </div>
        </motion.div>

        <section className="mt-16">
          <motion.h2
            className="text-4xl font-bold border-b border-gray-700 pb-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {["Women Safety Analytics App", "Restaurant Recommendation Engine", "Medico Plus NFC Platform", "Demand-Supply Forecasting System"].map((title, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-5 p-6 rounded-2xl backdrop-blur-sm hover:scale-105 transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold text-pink-400 mb-2">{title}</h3>
                <p className="text-gray-300 text-sm">
                  {title === "Women Safety Analytics App" && "AI-powered mobile app with gesture recognition and GPS for emergency alerts."}
                  {title === "Restaurant Recommendation Engine" && "ML-based system to suggest restaurants based on user preferences and rating predictions."}
                  {title === "Medico Plus NFC Platform" && "Healthcare system for secure record access using NFC technology."}
                  {title === "Demand-Supply Forecasting System" && "Time-series prediction and Tableau dashboard for optimizing stock allocation."}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.section
          className="mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              <strong>Cognifyz Technologies (ML Intern):</strong> Optimized ML models and pipelines for faster, more accurate predictions.
            </li>
            <li>
              <strong>Code Clause (ML Intern):</strong> Created real-time mask detection and spam filtering systems.
            </li>
          </ul>
        </motion.section>

        <motion.section
          className="mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-4">Certifications & Achievements</h2>
          <ul className="space-y-2 text-gray-300">
            <li>✅ Python for Data Science – NPTEL</li>
            <li>✅ Qlik Sense Business Analyst</li>
            <li>🏆 3rd – Eureka! Pitching Competition (IIT Bombay)</li>
            <li>🏆 Finalist – Hack Summit 5.0 (SRM IST)</li>
            <li>🏁 Finalist – eYantra ROS2 Navigation Challenge</li>
          </ul>
        </motion.section>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <a href="/Arish_K_S_Resume.pdf" download className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition">
            Download Resume
          </a>
        </motion.div>

        <footer className="mt-20 text-center text-gray-500 text-sm py-6">
          © 2025 Arish K S. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
