import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, FileText, Download } from 'lucide-react';

export default function Contact() {
  const cvFilePath = '/Sumanth_cv_26.pdf';

  return (
    <main className="min-h-screen pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-9xl tracking-tighter mb-16"
          >
            LET'S <span className="italic font-light">Connect</span>
          </motion.h1>

          <div className="space-y-12">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-ink/40 mb-4">Email</p>
              <a
                href="mailto:sumanthkuna508@gmail.com"
                className="text-3xl md:text-5xl hover:italic transition-all duration-300 flex items-center gap-4 group"
              >
                sumanthkuna508@gmail.com
                <ArrowUpRight className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-all" />
              </a>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-ink/40 mb-4">Curriculum Vitae</p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={cvFilePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-lg hover:text-accent transition-colors"
                >
                  <FileText className="w-5 h-5" />
                  View CV
                </a>
                <a
                  href={cvFilePath}
                  download="Sumanth_cv_26.pdf"
                  className="inline-flex items-center gap-2 text-lg hover:text-accent transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-12 border-t border-ink/10">
              {[
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sumanthkuna/' },
                { name: 'GitHub', url: 'https://github.com/sumanthkuna24' },
                { name: 'Mobile', url: 'tel:+919398506696' }
              ].map((social) => (
                <div key={social.name}>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-ink/40 mb-2">{social.name}</p>
                  <a href={social.url} target="_blank" rel="noopener noreferrer" className="text-lg hover:text-accent transition-colors">
                    {social.name === 'Mobile' ? '+91 9398506696' : '@sumanthkuna'}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col justify-end">
          <div className="bg-ink text-paper p-12 rounded-sm">
            <h2 className="text-3xl mb-6">Current Status</h2>
            <p className="text-paper/60 leading-relaxed mb-8">
              I am currently a student at LPU, actively seeking opportunities to apply my full-stack and real-time development skills.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-semibold">Open for Internships</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}