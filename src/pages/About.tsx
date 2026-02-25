import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <main className="min-h-screen pt-40 pb-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl mb-8">About Me</h1>
          <div className="space-y-6 text-lg text-muted leading-relaxed">
            <p>
              I am a Computer Science student at Lovely Professional University with a deep passion for full-stack development and real-time systems.
            </p>
            <p>
              My expertise lies in building robust web applications using the MERN stack, complemented by real-time communication tools like Socket.IO. I enjoy the challenge of creating seamless, interactive experiences that bridge the gap between complex backend logic and intuitive frontend design.
            </p>
            <p>
              With a strong foundation in C++ and Python, I also explore the realms of AI and Machine Learning, specifically focusing on Natural Language Processing to solve practical problems.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-accent mb-6">Technical Stack</h3>
              <ul className="space-y-3 font-medium">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> React.js & Node.js</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> C++ & Python</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> Socket.IO & MongoDB</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-accent mb-6">Education</h3>
              <div className="space-y-6">
                <div>
                  <p className="font-bold">Lovely Professional University</p>
                  <p className="text-muted text-sm">B.Tech in CSE (2023-Present)</p>
                  <p className="text-accent text-xs font-bold mt-1">CGPA: 7.15</p>
                </div>
                <div>
                  <p className="font-bold">Jawahar Navodaya Vidyalaya</p>
                  <p className="text-muted text-sm">Intermediate (2021-2023)</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:sticky lg:top-40"
        >
          <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-surface border border-ink/5 shadow-xl">
            <img
              src="https://picsum.photos/seed/sumanth/800/1000"
              alt="Sumanth Kuna"
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="mt-8 flex justify-center gap-6">
            <a href="https://github.com/sumanthkuna24" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors font-semibold">GitHub</a>
            <a href="https://www.linkedin.com/in/sumanthkuna/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors font-semibold">LinkedIn</a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
