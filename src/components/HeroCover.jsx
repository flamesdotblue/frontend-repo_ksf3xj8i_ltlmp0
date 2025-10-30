import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Palette, Accessibility } from 'lucide-react';

export default function HeroCover() {
  return (
    <section className="relative w-full h-[80vh] md:h-[88vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* subtle gradient to improve text readability without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex items-center">
        <div className="text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur">
            <span className="text-xs font-medium tracking-wide uppercase">AI For All</span>
          </div>

          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
            Building color-inclusive apps for everyone
          </h1>
          <p className="mt-4 max-w-2xl text-white/85 text-lg">
            A dual-mode platform that empowers colorblind designers and users. Simulate normal color perception, fix contrast issues, and guide interactions with adaptive overlays.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#developer-mode"
              className="inline-flex items-center gap-2 rounded-lg bg-white text-black px-4 py-2 font-semibold shadow/50 shadow-black/30 hover:shadow-black/50 transition-shadow"
            >
              <Rocket size={18} />
              Try Developer Mode
            </a>
            <a
              href="#user-mode"
              className="inline-flex items-center gap-2 rounded-lg bg-black/60 text-white px-4 py-2 font-semibold ring-1 ring-white/20 hover:bg-black/70 backdrop-blur"
            >
              <Accessibility size={18} />
              Try User Mode
            </a>
            <span className="inline-flex items-center gap-2 text-white/80 ml-2">
              <Palette size={18} />
              WCAG-aware suggestions
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
