import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/web-dev' },
  { name: 'Design', path: '/design' },
  { name: 'Certificates', path: '/certificates' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const location = useLocation();
  const isDesignPage = location.pathname === '/design';

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b",
      isDesignPage 
        ? "bg-ink border-white/10 text-white" 
        : "bg-paper/80 backdrop-blur-md border-ink/5 text-ink"
    )}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <Link to="/" className="group flex items-center gap-2">
          <div className={cn(
            "w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm transition-colors",
            isDesignPage ? "bg-white text-ink" : "bg-ink text-white"
          )}>
            SK
          </div>
          <span className="font-semibold tracking-tight hidden sm:block">Sumanth Kuna</span>
        </Link>

        <div className="flex gap-1 sm:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-[13px] font-medium px-3 py-2 rounded-md transition-all",
                location.pathname === link.path 
                  ? (isDesignPage ? "bg-white/10 text-white" : "bg-ink/5 text-ink")
                  : (isDesignPage ? "text-white/60 hover:text-white hover:bg-white/5" : "text-ink/60 hover:text-ink hover:bg-ink/5")
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
