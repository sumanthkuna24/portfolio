import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const cvFilePath = '/Sumanth_cv_26.pdf';

  return (
    <footer className="bg-ink text-paper py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-6">
            <h2 className="text-5xl md:text-7xl tracking-tighter mb-8">
              Let's build <br />
              <span className="italic font-light text-paper/60">something great.</span>
            </h2>
          </div>
          <div className="md:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.3em] text-paper/40 mb-6">Navigation</p>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-paper/60 transition-colors">Index</Link></li>
              <li><Link to="/about" className="hover:text-paper/60 transition-colors">About</Link></li>
              <li><Link to="/web-dev" className="hover:text-paper/60 transition-colors">Web Development</Link></li>
              <li><Link to="/design" className="hover:text-paper/60 transition-colors">UI/UX Portfolio</Link></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.3em] text-paper/40 mb-6">Contact</p>
            <ul className="space-y-4">
              <li><a href="mailto:sumanthkuna508@gmail.com" className="hover:text-paper/60 transition-colors">Email</a></li>
              <li><a href="https://www.linkedin.com/in/sumanthkuna/" target="_blank" rel="noopener noreferrer" className="hover:text-paper/60 transition-colors">LinkedIn</a></li>
              <li><a href="https://github.com/sumanthkuna24" target="_blank" rel="noopener noreferrer" className="hover:text-paper/60 transition-colors">GitHub</a></li>
              <li><a href={cvFilePath} target="_blank" rel="noopener noreferrer" className="hover:text-paper/60 transition-colors">View CV</a></li>
              <li><a href={cvFilePath} download="Sumanth_cv_26.pdf" className="hover:text-paper/60 transition-colors">Download CV</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-paper/10">
          <span className="text-[10px] uppercase tracking-widest text-paper/30 mb-4 md:mb-0">
            © 2026 Sumanth Kuna. All rights reserved.
          </span>
          <div className="flex gap-8">
            <span className="text-[10px] uppercase tracking-widest text-paper/30">Privacy Policy</span>
            <span className="text-[10px] uppercase tracking-widest text-paper/30">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}