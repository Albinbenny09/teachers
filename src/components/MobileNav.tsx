"use client";

import { useState } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden ml-auto">
      <button
        aria-label="Open menu"
        onClick={() => setOpen((v) => !v)}
        className="relative inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <svg className="relative h-6 w-6 text-slate-700 group-hover:text-blue-600 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {open ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <path d="M3 6h18M3 12h18M3 18h18" />
          )}
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-28 z-50 bg-white/95 backdrop-blur-2xl border-t border-white/20 shadow-2xl animate-slide-up">
          <nav className="px-6 py-6 space-y-4">
            <a 
              href="#about" 
              onClick={() => setOpen(false)} 
              className="block text-lg font-semibold text-slate-700 hover:text-blue-600 transition-all duration-300 hover:translate-x-2 group"
            >
              <span className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <span>About</span>
              </span>
            </a>
            <a 
              href="#services" 
              onClick={() => setOpen(false)} 
              className="block text-lg font-semibold text-slate-700 hover:text-blue-600 transition-all duration-300 hover:translate-x-2 group"
            >
              <span className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <span>Services</span>
              </span>
            </a>
            <a 
              href="#staff" 
              onClick={() => setOpen(false)} 
              className="block text-lg font-semibold text-slate-700 hover:text-blue-600 transition-all duration-300 hover:translate-x-2 group"
            >
              <span className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <span>Our Staff</span>
              </span>
            </a>
            <a 
              href="#mission" 
              onClick={() => setOpen(false)} 
              className="block text-lg font-semibold text-slate-700 hover:text-blue-600 transition-all duration-300 hover:translate-x-2 group"
            >
              <span className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <span>Mission & Vision</span>
              </span>
            </a>
            <a 
              href="#contact" 
              onClick={() => setOpen(false)} 
              className="block text-lg font-semibold text-slate-700 hover:text-blue-600 transition-all duration-300 hover:translate-x-2 group"
            >
              <span className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <span>Contact</span>
              </span>
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}




