import React, { useMemo, useState } from 'react';

// Simple contrast calculator using relative luminance (rough approximation)
function hexToRgb(hex) {
  const res = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return res ? {
    r: parseInt(res[1], 16),
    g: parseInt(res[2], 16),
    b: parseInt(res[3], 16)
  } : { r: 0, g: 0, b: 0 };
}

function luminance({ r, g, b }) {
  const [R, G, B] = [r, g, b].map(v => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}

function contrastRatio(hex1, hex2) {
  const L1 = luminance(hexToRgb(hex1));
  const L2 = luminance(hexToRgb(hex2));
  const lighter = Math.max(L1, L2);
  const darker = Math.min(L1, L2);
  return (lighter + 0.05) / (darker + 0.05);
}

export default function ContrastDemo() {
  const [bg, setBg] = useState('#6EE7B7'); // emerald-300
  const [fg, setFg] = useState('#22D3EE'); // cyan-400

  const ratio = useMemo(() => {
    try { return contrastRatio(bg, fg); } catch { return 1; }
  }, [bg, fg]);

  const level = useMemo(() => {
    if (ratio >= 7) return 'AAA';
    if (ratio >= 4.5) return 'AA';
    if (ratio >= 3) return 'AA Large';
    return 'Fail';
  }, [ratio]);

  const suggestion = useMemo(() => {
    if (level !== 'Fail') return 'Looks good — passes WCAG.';
    // Suggest darkening text if background is light
    return 'Increase contrast by darkening the text color, lightening the background, or add patterns/labels in addition to color.';
  }, [level]);

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
            <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
              <h3 className="font-semibold">Contrast Playground</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Try colors that often conflict for colorblind users.</p>
            </div>
            <div className="p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <label className="flex-1">
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">Background</span>
                  <input type="color" value={bg} onChange={(e) => setBg(e.target.value)} className="w-full h-10 rounded-md border border-zinc-200 dark:border-zinc-700 bg-transparent" />
                </label>
                <label className="flex-1">
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">Text</span>
                  <input type="color" value={fg} onChange={(e) => setFg(e.target.value)} className="w-full h-10 rounded-md border border-zinc-200 dark:border-zinc-700 bg-transparent" />
                </label>
              </div>

              <div className="mt-6 rounded-xl p-6" style={{ backgroundColor: bg }}>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-zinc-800/80">Sample button</span>
                  <span className="text-sm text-zinc-700/80">State: Success</span>
                </div>
                <button
                  className="mt-4 px-4 py-2 rounded-lg font-semibold ring-1 ring-black/10"
                  style={{ backgroundColor: bg, color: fg, borderColor: 'rgba(0,0,0,0.08)' }}
                >
                  Continue
                </button>
                <p className="mt-4 text-sm" style={{ color: fg }}>
                  Heads up: cyan on green is hard for many users with Deuteranopia.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800">
            <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
              <h3 className="font-semibold">Analysis</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Contrast ratio</p>
                  <p className="text-3xl font-extrabold">{ratio.toFixed(2)}:1</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${level.includes('A') ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300' : 'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300'}`}>
                  {level}
                </span>
              </div>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">{suggestion}</p>

              <ul className="text-sm list-disc pl-5 space-y-1 text-zinc-600 dark:text-zinc-400">
                <li>Add pattern fills or icons to differentiate states (not color alone).</li>
                <li>Provide text labels on chips, tags, and status indicators.</li>
                <li>Ensure focus rings and hover states rely on more than hue shifts.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
