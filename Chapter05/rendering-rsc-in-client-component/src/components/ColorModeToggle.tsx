'use client';
import { useState, useEffect, type ReactNode } from 'react';

export function ColorModeToggle({ icon }: { icon: ReactNode }) {
  console.log('Does ColorModeToggle run on the Server and Client?');
  const [colorMode, setColorMode] = useState<'dark' | 'light'>('light');

  useEffect(() => {
    if (colorMode === 'dark') {
      document.body.classList.add('dark');
      document.documentElement.style.setProperty('--background', '#0a0a0a');
      document.documentElement.style.setProperty('--foreground', '#ededed');
    } else {
      document.body.classList.remove('dark');
      document.documentElement.style.setProperty('--background', '#ffffff');
      document.documentElement.style.setProperty('--foreground', '#171717');
    }
  }, [colorMode]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setColorMode(mediaQuery.matches ? 'dark' : 'light');
  }, []);

  function handleClick() {
    const newColorMode = colorMode === 'dark' ? 'light' : 'dark';
    setColorMode(newColorMode);
  }

  return (
    <button onClick={handleClick} className="flex rounded bg-blue-500 px-4 py-2 text-white">
      {icon}
      {colorMode === 'dark' ? 'Light' : 'Dark'}
    </button>
  );
}
