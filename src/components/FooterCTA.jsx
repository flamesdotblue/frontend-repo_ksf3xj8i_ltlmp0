import React from 'react';
import { Rocket } from 'lucide-react';

export default function FooterCTA() {
  return (
    <footer className="relative py-16 md:py-20 bg-zinc-950 text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.12),transparent_50%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <h3 className="text-3xl md:text-4xl font-extrabold">Design for everyone, by default.</h3>
          <p className="mt-3 text-white/80">
            Start auditing your interface in minutes. Switch modes anytime and export recommendations for your team.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#developer-mode"
              className="inline-flex items-center gap-2 rounded-lg bg-white text-black px-4 py-2 font-semibold shadow/50 shadow-black/30 hover:shadow-black/50 transition-shadow"
            >
              <Rocket size={18} />
              Get Started
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 text-white px-4 py-2 font-semibold ring-1 ring-white/20 hover:bg-white/15 backdrop-blur"
            >
              View Docs
            </a>
          </div>
        </div>
        <div className="mt-12 text-sm text-white/60">© {new Date().getFullYear()} AI For All. Built with love for inclusive design.</div>
      </div>
    </footer>
  );
}
