import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="grid grid-cols-1 gap-16 items-center mb-32">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Available for Internships
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Full-Stack Developer & <br />
            <span className="text-accent">UI/UX Designer</span>
          </h1>
          <p className="text-xl text-muted leading-relaxed mb-10 max-w-xl">
            Hi, I'm Sumanth Kuna. I build high-performance web applications and design intuitive user experiences that solve real-world problems.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/web-dev"
              className="px-8 py-4 bg-ink text-white rounded-xl font-semibold hover:bg-ink/90 transition-all flex items-center gap-2"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/design"
              className="px-8 py-4 border border-ink/10 rounded-xl font-semibold hover:bg-ink/5 transition-all"
            >
              Design Portfolio
            </Link>
          </div>
        </motion.div>

      </section>

      {/* Featured Section */}
      <section className="pt-20 border-t border-ink/5">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl mb-4">Selected Work</h2>
            <p className="text-muted max-w-md">A glimpse into some of my favorite engineering and design projects.</p>
          </div>
          <Link to="/web-dev" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-accent">
            Explore All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "OddStrike",
              category: "Real-Time Multiplayer Game",
              image: "/oddstrike-home.png",
              tags: ["Socket.IO", "React", "Node.js"],
              github: "https://github.com/sumanthkuna24/Odd-Strike"
            },
            {
              title: "Smart Study Planner",
              category: "Productivity Platform",
              image: "https://picsum.photos/seed/planner/1200/800",
              tags: ["Full-Stack", "REST API", "Auth"],
              github: "https://github.com/sumanthkuna24/Smart-Study-Planner"
            }
          ].map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="group bg-surface border border-ink/5 rounded-2xl overflow-hidden transition-all"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full text-ink hover:scale-110 transition-transform"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1 group-hover:text-accent transition-colors">{project.title}</h3>
                    <p className="text-muted text-sm">{project.category}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-ink/5 rounded-md text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
