import React from 'react';
import { motion } from 'motion/react';

const designWorks = [
  {
    title: "OddStrike Interface",
    category: "Game UI/UX Design",
    image: "https://picsum.photos/seed/oddstrike-game-ui/1200/1200",
    description: "Designing a high-stakes multiplayer interface with real-time feedback loops and animated game states."
  },
  {
    title: "BCG Strategic Design",
    category: "Experience Design Simulation",
    image: "https://picsum.photos/seed/bcg/1200/1200",
    description: "Strategic and experience design job simulation focusing on user-centric business solutions."
  },
  {
    title: "The UX Process",
    category: "User Research & Ideation",
    image: "https://picsum.photos/seed/uxprocess/1200/1200",
    description: "A deep dive into the Empathize, Define, and Ideate phases of the design process."
  },
  {
    title: "Responsive E-LMS",
    category: "Interface Design",
    image: "https://picsum.photos/seed/elmsdesign/1200/1200",
    description: "Crafting user-friendly and responsive interface screens for an academic portal."
  }
];

export default function DesignPortfolio() {
  return (
    <main className="min-h-screen pt-40 pb-20 px-6 max-w-7xl mx-auto bg-ink text-paper design-focused">
      <div className="mb-32">
        <h1 className="text-7xl md:text-9xl tracking-tighter mb-8 text-white">
          VISUAL <br />
          <span className="italic font-light text-white/60">Narratives</span>
        </h1>
        <p className="text-xl text-white/40 max-w-2xl leading-relaxed">
          Dedicated UI/UX and visual design portfolio. Exploring the intersection of human behavior and digital interfaces.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {designWorks.map((work, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            className="group relative"
          >
            <div className="aspect-square overflow-hidden rounded-sm bg-white/5 mb-6">
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-ink/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-12 text-center">
                <p className="text-lg leading-relaxed">{work.description}</p>
              </div>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <h3 className="text-2xl text-white mb-1">{work.title}</h3>
                <p className="text-[10px] uppercase tracking-widest text-white/40">{work.category}</p>
              </div>
              <div className="w-10 h-[1px] bg-white/20 group-hover:w-20 transition-all duration-500" />
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
