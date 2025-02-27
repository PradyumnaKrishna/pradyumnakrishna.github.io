'use client';

import { useEffect, useState } from 'react';

export function SyntaxHighlighter() {
  const [mode, setMode] = useState<string>('system');

  useEffect(() => {
    // Initial load
    const storedTheme = localStorage.getItem('theme') || 'system';
    setMode(storedTheme);

    // Listen for theme changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'theme') {
        setMode(e.newValue || 'system');
      }
    };

    window.addEventListener('storage', handleStorageChange);

    // Custom event listener for local theme changes
    const handleThemeChange = () => {
      setMode(localStorage.getItem('theme') || 'system');
    };

    window.addEventListener('themeChange', handleThemeChange);

    // Setup a mutation observer to detect theme changes via class changes
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains('dark');
      updateHighlightTheme(isDark ? 'dark' : 'light');
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'data-mode'],
    });

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('themeChange', handleThemeChange);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    // Determine if dark mode is active
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    let isDark = false;

    if (mode === 'system') {
      isDark = prefersDark.matches;
    } else {
      isDark = mode === 'dark';
    }

    updateHighlightTheme(isDark ? 'dark' : 'light');
  }, [mode]);

  const updateHighlightTheme = (theme: 'dark' | 'light') => {
    // Remove any previously loaded syntax highlighting styles
    const prevStyle = document.getElementById('syntax-highlighting');
    if (prevStyle) prevStyle.remove();

    // Create a new style element with lazy loading
    const style = document.createElement('link');
    style.id = 'syntax-highlighting';
    style.rel = 'stylesheet';
    style.href = theme === 'dark' ? '/css/syntax-dark.min.css' : '/css/syntax-light.min.css';
    style.setAttribute('loading', 'lazy');

    // Add the style to the head
    document.head.appendChild(style);
  };

  return null;
}
