import React from 'react';
import { motion } from 'motion/react';
import { Award, ExternalLink } from 'lucide-react';

const certificates = [
  {
    title: "Oracle Data Platform 2025 Certified Foundations Associate",
    issuer: "Oracle",
    date: "Jan 2026",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=2088C0A4A763680CBF0F8B0637EF5769A504AB43F6E369868120C9852191FA02"
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    date: "Jan 2026",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=01CD8D3C8BB0ACC9CEFB5816ADC02776D37AF36E7F84A452BD8768B798E60A09"
  },
  {
    title: "BCG Strategic & Experience Design Job Simulation",
    issuer: "Forage",
    date: "Aug 2025",
    link: "#"
  },
  {
    title: "The UX Process: Empathize, Define and Ideate",
    issuer: "Coursera",
    date: "May 2025",
    link: "#"
  },
  {
    title: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
    issuer: "Oracle",
    date: "Jul 2024",
    link: "#"
  },
  {
    title: "AWS Solutions Architect Micro degree",
    issuer: "EdYoda",
    date: "Mar 2024",
    link: "#"
  }
];

export default function Certificates() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl mb-4">Certifications</h1>
        <p className="text-muted text-lg">A collection of my professional certifications and achievements.</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {certificates.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="group bg-surface border border-ink/5 p-6 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-accent/20 hover:shadow-sm transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/5 flex items-center justify-center text-accent shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold leading-tight group-hover:text-accent transition-colors">{cert.title}</h3>
                <p className="text-muted text-sm mt-1">{cert.issuer} • {cert.date}</p>
              </div>
            </div>
            <a 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-accent transition-colors sm:px-4 sm:py-2 sm:bg-white sm:rounded-lg sm:border sm:border-ink/5"
            >
              Verify <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 p-8 bg-accent/5 rounded-2xl border border-accent/10">
        <h2 className="text-2xl mb-4">Achievements</h2>
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Binary Blitz Hackathon Finalist</h3>
            <p className="text-muted">Qualified for the final round of the Binary Blitz Hackathon, organized by Coding Ninjas (LPU), selected among 200+ participating teams. (Oct 2024)</p>
          </div>
        </div>
      </div>
    </main>
  );
}
