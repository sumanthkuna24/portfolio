import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "OddStrike",
    description: "Roll. Upgrade. Get a bullet. Take the shot. A real-time multiplayer web game with dynamic room creation and turn-based gameplay using Socket.IO.",
    tags: ["React.js", "Socket.IO", "MongoDB"],
    image: "https://picsum.photos/seed/oddstrike-game-ui/1200/800",
    year: "2026",
    github: "https://github.com/sumanthkuna24/Odd-Strike"
  },
  {
    title: "Smart Study Planner",
    description: "A full-stack collaboration platform enabling students to manage tasks and generate automated timetables.",
    tags: ["Node.js", "React.js", "REST APIs"],
    image: "https://picsum.photos/seed/study/1200/800",
    year: "2025",
    github: "https://github.com/sumanthkuna24/Smart-Study-Planner"
  },
  {
    title: "E-LMS",
    description: "A comprehensive E-Learning Management System for centralized course access and progress tracking.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "https://picsum.photos/seed/elms/1200/800",
    year: "2024",
    github: "https://github.com/sumanthkuna24/E-LMS"
  },
  {
    title: "Legal Doc Summarizer",
    description: "An AI-powered tool for automatically generating summaries and detecting risk clauses in legal documents.",
    tags: ["Python", "NLP", "Streamlit"],
    image: "https://picsum.photos/seed/legal/1200/800",
    year: "2025",
    github: "https://github.com/sumanthkuna24/Legal-Document-Summarizer"
  }
];

export default function WebProjects() {
  return (
    <main className="min-h-screen pt-40 pb-20 px-6 max-w-7xl mx-auto">
      <div className="mb-24">
        <h1 className="text-4xl md:text-6xl mb-6">Engineering Projects</h1>
        <p className="text-xl text-muted max-w-2xl leading-relaxed">
          A collection of web applications and technical experiments focused on performance, scalability, and clean code.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-24">
        {projects.map((project, i) => (
          <motion.section
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className={cn("rounded-2xl overflow-hidden bg-surface border border-ink/5 shadow-lg", i % 2 !== 0 ? 'lg:order-2' : '')}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className={i % 2 !== 0 ? 'lg:order-1' : ''}>
              <div className="max-w-md">
                <span className="text-accent font-bold text-sm mb-4 block">{project.year}</span>
                <h2 className="text-3xl mb-4">{project.title}</h2>
                <p className="text-lg text-muted mb-8 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[11px] font-bold uppercase tracking-wider bg-accent/5 text-accent px-3 py-1 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-ink text-white rounded-lg text-sm font-semibold hover:bg-ink/90 transition-all"
                  >
                    <Github className="w-4 h-4" /> Code
                  </a>
                </div>
              </div>
            </div>
          </motion.section>
        ))}
      </div>
    </main>
  );
}
