import { useState, useEffect } from "react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return true; // Default to dark mode
  });

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center glass border-b border-gray-200/50 dark:border-white/10 transition-colors duration-300">
      <div className="text-2xl font-display font-bold tracking-tighter text-slate-900 dark:text-white">
        NZIVUMUENI<span className="text-primary">.</span>
      </div>

      <div className="hidden md:flex gap-8 items-center font-medium text-slate-700 dark:text-white">
        <a href="#about" className="hover:text-primary transition-colors">
          About
        </a>
        <a href="#skills" className="hover:text-primary transition-colors">
          Skills
        </a>
        <a href="#projects" className="hover:text-primary transition-colors">
          Projects
        </a>
        <a href="#journey" className="hover:text-primary transition-colors">
          Journey
        </a>

        <button
          onClick={toggleTheme}
          aria-label="Toggle Dark Mode"
          className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors focus:outline-none"
        >
          {isDark ? (
            <span className="material-icons-round text-xl block">light_mode</span>
          ) : (
            <span className="material-icons-round text-xl block">dark_mode</span>
          )}
        </button>

        <a
          href="#contact"
          className="px-5 py-2 bg-primary text-black font-bold rounded-full hover:shadow-[0_0_15px_rgba(57,255,20,0.5)] transition-all"
        >
          Hire Me
        </a>
      </div>

      <button
        onClick={toggleTheme}
        aria-label="Toggle Dark Mode"
        className="md:hidden p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors ml-auto mr-4"
      >
        {isDark ? (
          <span className="material-icons-round text-xl block">light_mode</span>
        ) : (
          <span className="material-icons-round text-xl block">dark_mode</span>
        )}
      </button>
    </nav>
  );
}
