import React, { useState } from 'react';
import { Palette, Eye, Wand2, Accessibility, Mic, Navigation, Settings, Sparkles } from 'lucide-react';

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 bg-white dark:bg-zinc-900/60 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <div className="rounded-md p-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300">
          <Icon size={18} />
        </div>
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function ModeShowcase() {
  const [mode, setMode] = useState('developer');

  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900" id="developer-mode">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-4xl font-extrabold">Two modes. One goal: accessibility.</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400 max-w-2xl">
              Switch between Developer Mode for simulation and guidance, and User Mode for overlays and voice assistance.
            </p>
          </div>
          <div className="inline-flex rounded-lg p-1 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
            <button
              onClick={() => setMode('developer')}
              className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${mode==='developer' ? 'bg-white dark:bg-zinc-900 shadow border border-zinc-200 dark:border-zinc-700' : 'text-zinc-600 dark:text-zinc-300'}`}
            >
              Developer Mode
            </button>
            <button
              id="user-mode"
              onClick={() => setMode('user')}
              className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${mode==='user' ? 'bg-white dark:bg-zinc-900 shadow border border-zinc-200 dark:border-zinc-700' : 'text-zinc-600 dark:text-zinc-300'}`}
            >
              User Mode
            </button>
          </div>
        </div>

        {mode === 'developer' ? (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Feature icon={Eye} title="Normal vision simulation" desc="Preview your UI as non-colorblind users see it to spot hidden contrast issues." />
            <Feature icon={Palette} title="Palette guidance" desc="Automatic suggestions for color-safe palettes and pattern fallbacks." />
            <Feature icon={Wand2} title="Contrast inspector" desc="Highlights low-contrast areas and maps them to WCAG levels." />
            <Feature icon={Settings} title="Design tips" desc="Inline UX guidance for iconography, labels, and state indicators." />
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Feature icon={Accessibility} title="Adaptive overlays" desc="Clarify status, errors, and actions with pattern and label overlays." />
            <Feature icon={Mic} title="Contextual voice" desc="Hear what matters on screen with simple, focus-based narration." />
            <Feature icon={Navigation} title="Simplified navigation" desc="Reduce color reliance with guided steps and clear affordances." />
            <Feature icon={Sparkles} title="Personal preferences" desc="Persist overlays, font sizes, and contrasts across apps." />
          </div>
        )}
      </div>
    </section>
  );
}
