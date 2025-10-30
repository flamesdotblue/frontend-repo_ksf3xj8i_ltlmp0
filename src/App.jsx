import React from 'react';
import HeroCover from './components/HeroCover';
import ModeShowcase from './components/ModeShowcase';
import ContrastDemo from './components/ContrastDemo';
import FooterCTA from './components/FooterCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <HeroCover />
      <ModeShowcase />
      <ContrastDemo />
      <FooterCTA />
    </div>
  );
}
